import { DOMUtil } from '../../../util/dom/DOMUtil'
import { MaskContentsManager } from '../domain/MaskContentsManager'
import { MaskContents } from '../storage/MaskContentsStorage'

export class MessageListModel {
    private messageList: HTMLCollectionOf<Element>
    private maskContentsManager = new MaskContentsManager()

    constructor(messageList: HTMLCollectionOf<Element>) {
        this.messageList = messageList
    }

    setContents = () => {
        Array.prototype.forEach.call(this.messageList, (message) => {
            const speakerName = this.getSpeakerName(message)
            const speakerIcon = this.getSpeakerIcon(message)
            const originalContents: MaskContents = {
                name: speakerName.innerText,
                icon: speakerIcon.src,
            }
            const maskContents: MaskContents = this.getMaskContents(originalContents)

            speakerName.innerText = maskContents.name
            speakerIcon.src = maskContents.icon
        })
    }

    private getSpeakerName = (message: HTMLElement): HTMLElement => {
        return DOMUtil.checkNull(
            message.getElementsByClassName('_speakerName').item(0)
        ) as HTMLElement
    }

    private getSpeakerIcon = (message: HTMLElement): HTMLImageElement => {
        return DOMUtil.checkNull(message.getElementsByTagName('img').item(0))
    }

    private getMaskContents = (contents: MaskContents): MaskContents => {
        const ContentsPair = this.maskContentsManager.findBySpeakerName(contents.name)
        if (ContentsPair === undefined) {
            return this.maskContentsManager.popMaskContents(contents)
        } else {
            return ContentsPair.maskedContents
        }
    }
}
