import { DOMUtil } from '../../../util/dom/DOMUtil'

export class MessageListModel {
    private messageList: HTMLCollectionOf<Element>

    constructor(messageList: HTMLCollectionOf<Element>) {
        this.messageList = messageList
    }

    setSpeakerName = () => {
        Array.prototype.forEach.call(this.messageList, (message) => {
            const speakerName = this.getSpeakerName(message)
            speakerName.innerText = 'aiueo'
        })
    }
    private getSpeakerName = (message: HTMLElement): HTMLElement => {
        return DOMUtil.checkNull(
            message.getElementsByClassName('_speakerName').item(0)
        ) as HTMLElement
    }
}
