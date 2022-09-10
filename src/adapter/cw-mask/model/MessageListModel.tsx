import { DOMUtil } from '../../../util/dom/DOMUtil'
import { AnimalContents, animalStorage } from '../storage/AnimalStorage'

export class MessageListModel {
    private messageList: HTMLCollectionOf<Element>
    private namePairList: NamePair[] = []
    private storage: AnimalContents[] = animalStorage

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

    private buildMaskName = (speakerName: HTMLElement): string => {
        const namePair = this.namePairList.find((namePair) => {
            return namePair.originalName == speakerName.innerText
        })
        let maskName: string
        if (namePair === undefined) {
            const maskedName = this.popStorage().name
            this.namePairList.push({
                originalName: speakerName.innerText,
                maskedName: maskedName,
            })
            maskName = maskedName
        } else {
            maskName = namePair.maskedName
        }
        return maskName
    }

    private popStorage = (): AnimalContents =>{
        const contents = this.storage.pop()
        if(contents === undefined){
            throw new Error("empty storage")
        }
        return contents
    }
}

type NamePair = {
    originalName: string
    maskedName: string
}
