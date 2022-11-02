import { DOMUtil } from '../../../util/dom/DOMUtil'
import { MaskContentsManager } from '../domain/MaskContentsManager'
import { MaskContents } from '../storage/MaskContentsStorage'

export class MessageListModel {
    private messageList: Array<HTMLElement>
    private maskContentsManager = new MaskContentsManager()

    constructor(messageList: Array<HTMLElement>) {
        this.messageList = messageList
        console.log('messageListModelのコンストラクタ')
    }

    setContents = () => {
        this.messageList.forEach((message) => {
            const speakerName = this.getSpeakerName(message)
            const speakerIcon = this.getSpeakerIcon(message)
            const originalContents: MaskContents = {
                name: speakerName.innerText,
                iconPath: speakerIcon.src,
            }
            const maskContents: MaskContents = this.getMaskContents(originalContents)

            speakerName.innerText = maskContents.name
            speakerIcon.src = maskContents.iconPath
        })
    }

    unSetContents = () => {
        this.messageList.forEach((message) => {
            const maskedSpeakerName = this.getSpeakerName(message)
            const speakerIcon = this.getSpeakerIcon(message)
            const contentsPair = this.maskContentsManager.findByMaskedSpeakerName(
                maskedSpeakerName.innerText
            )
            if (contentsPair === undefined) {
                throw new Error('maskされたcontentsが見つかりませんでした。')
            }
            maskedSpeakerName.innerText = contentsPair.originalContents.name
            speakerIcon.src = contentsPair.originalContents.iconPath
        })
    }

    private getSpeakerName = (message: HTMLElement): HTMLAnchorElement => {
        return DOMUtil.checkNull(message.querySelector('[data-testid=timeline_user-name]'))
    }

    private getSpeakerIcon = (message: HTMLElement): HTMLImageElement => {
        return DOMUtil.checkNull(message.getElementsByTagName('img').item(0))
    }

    private getMaskContents = (originalContents: MaskContents): MaskContents => {
        const ContentsPair = this.maskContentsManager.findBySpeakerName(originalContents.name)
        if (ContentsPair === undefined) {
            return this.maskContentsManager.popMaskContents(originalContents)
        } else {
            return ContentsPair.maskedContents
        }
    }
}
