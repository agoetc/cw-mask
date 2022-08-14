import { DOMUtil } from '../../../util/dom/DOMUtil'

export const MessageListModel = (messageList: HTMLCollectionOf<Element>) => ({
    getSpeakerName: (): HTMLElement => {
        const speakerName: HTMLCollectionOf<Element> = DOMUtil.checkNull(
            messageList.item(1)
        ).getElementsByClassName('_speakerName')
        return DOMUtil.checkNull(speakerName.item(0)) as HTMLElement
    },
    setSpeakerName: function () {
        const speakerName = this.getSpeakerName()
        speakerName.innerText = 'aiueo'
    },
})
