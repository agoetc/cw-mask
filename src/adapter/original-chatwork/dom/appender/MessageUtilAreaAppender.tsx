import { MessageUtilArea } from '../component/MessageUtilArea'

export const MessageUtilAreaAppender = {

    appendMuskButton(messageUtilArea: MessageUtilArea) {
        const muskButton = document.createElement('button')
        muskButton.textContent = 'マスク'
        messageUtilArea.value.appendChild(muskButton)
    }

}