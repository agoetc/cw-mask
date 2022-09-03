import { DOMUtil } from '../../../util/dom/DOMUtil'

export class MessageListModel {
    private messageList: HTMLCollectionOf<Element>

    constructor(messageList: HTMLCollectionOf<Element>) {
        this.messageList = messageList
    }

    setSpeakerName = () => {
        const namePairList: NamePair[] = []
        let num = 1
        Array.prototype.forEach.call(this.messageList, (message) => {
            const speakerName = this.getSpeakerName(message)
            const namePair = namePairList.find((namePair) => {
                return namePair.originalName == speakerName.innerText
            })
            if (namePair === undefined) {
                namePairList.push({
                    originalName: speakerName.innerText,
                    maskedName: num.toString(),
                })
                speakerName.innerText = num.toString()
                num++
            } else {
                speakerName.innerText = namePair.maskedName
            }
        })
    }
    private getSpeakerName = (message: HTMLElement): HTMLElement => {
        return DOMUtil.checkNull(
            message.getElementsByClassName('_speakerName').item(0)
        ) as HTMLElement
    }
}
type NamePair = {
    originalName: string
    maskedName: string
}
