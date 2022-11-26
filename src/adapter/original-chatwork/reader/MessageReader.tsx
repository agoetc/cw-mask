import { DOMUtil } from '../../../util/dom/DOMUtil'

export type MessageElement = HTMLElement
export type MessageSpeakerNameElement = HTMLAnchorElement
export type MessageSpeakerIconElement = HTMLImageElement
export type MessageSpeakerCompanyNameElement = HTMLParagraphElement

export const MessageReader = {
    getMessageList(): MessageElement[] {
        const messageList = document.getElementsByClassName('_message')
        return Array.prototype.slice.call(messageList).filter((message: MessageElement) => {
            return message.getElementsByClassName('_speaker').length != 0
        })
    },
    getSpeakerName(message: MessageElement): MessageSpeakerNameElement {
        return DOMUtil.checkNull(
            message.querySelector('[data-testid=timeline_user-name]')
        ) as HTMLAnchorElement
    },
    getSpeakerIcon(message: MessageElement): MessageSpeakerIconElement {
        return DOMUtil.checkNull(message.getElementsByTagName('img').item(0))
    },
    getSpeakerCompanyName(message: MessageElement): MessageSpeakerCompanyNameElement {
        return DOMUtil.checkNull(
            message?.children.item(0)?.children.item(1)?.children.item(0)?.children.item(1)
        ) as HTMLParagraphElement
    },
}
