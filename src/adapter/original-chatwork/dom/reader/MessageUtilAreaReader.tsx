import { MessageUtilArea } from '../component/MessageUtilArea'

export class MessageUtilAreaReader {
    /**
     * @see https://www.notion.so/a672b2292c5e4db5811e05bae1e38fe1
     */
    static readMessageUtilArea = (): MessageUtilArea => {
        const messageInputArea: Element = document.getElementsByClassName('sc-ikZpkk gXkDBz')[0]

        return new MessageUtilArea(messageInputArea)
    }
}
