import { DOMUtil } from '../../../util/dom/DOMUtil'

export const MessageUtilAreaReader = {
    /**
     * @see https://www.notion.so/a672b2292c5e4db5811e05bae1e38fe1
     */
    read(): HTMLDivElement {
        const messageInputArea = document.querySelector('[data-testid="message-input-area"]')
        return DOMUtil.checkNull(
            messageInputArea?.children.item(0)?.children.item(1)
        ) as HTMLDivElement
    },
}
