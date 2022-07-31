import { MessageUtilArea } from '../component/MessageUtilArea'

export const MessageUtilAreaReader = {
    /**
     * @see https://www.notion.so/a672b2292c5e4db5811e05bae1e38fe1
     */
    read(): MessageUtilArea {
        const messageInputArea: HTMLCollectionOf<Element> =
            document.getElementsByClassName('sc-ikZpkk gXkDBz')

        const messageUtilArea = messageInputArea.item(0)
        if (messageUtilArea === null) {
            console.log(messageUtilArea)
            throw Error('ReaderError: can not read message-input-area')
        } else {
            return new MessageUtilArea(messageUtilArea)
        }
    },
}
