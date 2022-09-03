import { DOMUtil } from '../../../util/dom/DOMUtil'

export class MessageListModel {
    private messageList: HTMLCollectionOf<Element>
    private namePairList: NamePair[] = []
    private num = 1

    constructor(messageList: HTMLCollectionOf<Element>) {
        this.messageList = messageList
    }

    setSpeakerName = () => {
        Array.prototype.forEach.call(this.messageList, (message) => {
            const speakerName = this.getSpeakerName(message)
            speakerName.innerText = this.buildMaskName(speakerName)
            
        })
    }

    private getSpeakerName = (message: HTMLElement): HTMLElement => {
        return DOMUtil.checkNull(
            message.getElementsByClassName('_speakerName').item(0)
        ) as HTMLElement
    }

    private buildMaskName = (speakerName : HTMLElement): string => {
        const namePair = this.namePairList.find((namePair) => {
            return namePair.originalName == speakerName.innerText
        })
        let maskName: string 
        if (namePair === undefined) {
            this.namePairList.push({
                originalName: speakerName.innerText,
                maskedName: this.num.toString(),
            })
            maskName = this.num.toString()
            this.num++
            
        } else {
            maskName = namePair.maskedName
        }
        return maskName
    }
}

type NamePair = {
    originalName: string
    maskedName: string
}
