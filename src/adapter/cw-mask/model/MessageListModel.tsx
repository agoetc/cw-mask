import { DOMUtil } from '../../../util/dom/DOMUtil'

export const MessageListModel = (messageList: HTMLCollectionOf<Element>) => ({
    getSpeakerName: () => {
        Array.prototype.forEach.call( messageList , message  => {
            const speakerName = DOMUtil.checkNull(message.getElementsByClassName('_speakerName').item(0)) as HTMLElement
            speakerName.innerText = 'aiueo'
        });
    },
})
