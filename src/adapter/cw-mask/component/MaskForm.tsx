import * as React from 'react'
import { MessageReader } from '../../original-chatwork/reader/MessageReader'
import { MessageListModel } from '../model/MessageListModel'
import MaskButton from './MaskButton'

const MaskForm = () => {
    const mask = () => {
        console.log('test')
        const messageList: Array<Element> = MessageReader.getMessageList()
        const messageListModel = new MessageListModel(messageList)
        messageListModel.setContents()
    }
    return (
        <div>
            <MaskButton onClick={mask} />
        </div>
    )
}

export default MaskForm
