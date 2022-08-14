import { DOMUtil } from "../../../util/dom/DOMUtil"

export const MessageListModel = (messageList: HTMLCollectionOf<Element>) =>{
    const getSpeakerName = () :HTMLElement =>{
        const speakerName: HTMLCollectionOf<Element> =
        DOMUtil.checkNull(messageList.item(1)).getElementsByClassName('_speakerName')
        return DOMUtil.checkNull(speakerName.item(0)) as HTMLElement
    }
    const applySpeakerName = () =>{
        const speakerName = getSpeakerName()
        speakerName.innerText = 'aiueo'
    }
}