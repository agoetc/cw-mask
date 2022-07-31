/**
 * @see https://www.notion.so/a672b2292c5e4db5811e05bae1e38fe1
 */
export class MessageUtilArea {
    private value: Element

    constructor(messageUtilArea: Element) {
        this.value = messageUtilArea
    }

    prepend(e: Element) {
        this.value.prepend(e)
    }
}
