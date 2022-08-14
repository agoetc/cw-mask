import { DOMUtil } from '../../../util/dom/DOMUtil'

const MESSAGE_UTIL_AREA_CLASS_NAME = 'sc-ikZpkk gXkDBz'

export const MessageUtilAreaReader = {
    /**
     * @see https://www.notion.so/a672b2292c5e4db5811e05bae1e38fe1
     */
    read(): Element {
        const messageUtilArea = DOMUtil.checkNull(
            document.getElementsByClassName(MESSAGE_UTIL_AREA_CLASS_NAME).item(0)
        )

        return messageUtilArea
    },
}