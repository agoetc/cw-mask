import * as React from 'react'
import { MessageReader } from '../../original-chatwork/reader/MessageReader'
import { MessageListModel } from '../model/MessageListModel'
import MuskButton from './MuskButton'

const MuskForm = () => {
    const musk = () => {
        console.log('test')
        const messageList: HTMLCollectionOf<Element> = MessageReader.getMessageList()
        const messageListModel = MessageListModel(messageList)
        messageListModel.setSpeakerName()
    }
    return (
        <div>
            <MuskButton onClick={musk} />
        </div>
    )
}

export default MuskForm
