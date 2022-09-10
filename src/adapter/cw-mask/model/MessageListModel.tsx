import { DOMUtil } from '../../../util/dom/DOMUtil'
import { MaskContentsManager } from '../domain/MaskContentsManager'

export class MessageListModel {
    private messageList: HTMLCollectionOf<Element>
    private maskContentsManager = new MaskContentsManager()

    constructor(messageList: HTMLCollectionOf<Element>) {
        this.messageList = messageList
    }

    setSpeakerName = () => {
        Array.prototype.forEach.call(this.messageList, (message) => {
            const speakerName = this.getSpeakerName(message)
            speakerName.innerText = this.getMaskName(speakerName)
        })
    }

    private getSpeakerName = (message: HTMLElement): HTMLElement => {
        return DOMUtil.checkNull(
            message.getElementsByClassName('_speakerName').item(0)
        ) as HTMLElement
    }

    private getMaskName = (speakerName: HTMLElement): string => {
        const namePair = this.maskContentsManager.findNamePair(speakerName.innerText)
        if (namePair === undefined) {
            return this.maskContentsManager.popMaskContents(speakerName.innerText)
        } else {
            return namePair.maskedName
        }
    }
}
