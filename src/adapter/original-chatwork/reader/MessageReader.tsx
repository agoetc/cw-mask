import { DOMUtil } from '../../../util/dom/DOMUtil'

export type MessageElement = HTMLElement
export type MessageSpeakerNameElement = HTMLAnchorElement
export type MessageSpeakerIconElement = HTMLImageElement
export type MessageSpeakerCompanyNameElement = Element

export const MessageReader = {
    getMessageList(): MessageElement[] {
        const messageList = document.getElementsByClassName('_message')
        return Array.prototype.slice.call(messageList).filter((message: MessageElement) => {
            return message.getElementsByClassName('_speaker').length != 0
        })
    },
    getSpeakerName(message: MessageElement): MessageSpeakerNameElement {
        return DOMUtil.checkNull(message.querySelector('[data-testid=timeline_user-name]'))
    },
    getSpeakerIcon(message: MessageElement): MessageSpeakerIconElement {
        return DOMUtil.checkNull(message.getElementsByTagName('img').item(0))
    },
    getSpeakerCompanyName(message: MessageElement): MessageSpeakerCompanyNameElement {
        return DOMUtil.checkNull(message.getElementsByClassName('sc-hrXEzC frFtxh').item(0))
    },
}
