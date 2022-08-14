import * as React from 'react'
import { DOMUtil } from '../../../util/dom/DOMUtil'
import { MessageReader } from '../../original-chatwork/reader/MessageReader'
import { MessageListModel } from '../model/MessageListModel'
import MuskButton from './MuskButton'

const MuskForm = () => {
    const musk = () => {
        console.log('test')
        const messageList: HTMLCollectionOf<Element> = MessageReader.getMessageList()
        const messageListModel = MessageListModel(messageList)
    }
    return (
        <div>
            <MuskButton onClick={musk} />
        </div>
    )
}

export default MuskForm
