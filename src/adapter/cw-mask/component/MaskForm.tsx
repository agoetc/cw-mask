import * as React from 'react'
import { useState } from 'react'
import { MessageReader } from '../../original-chatwork/reader/MessageReader'
import { MessageListModel } from '../model/MessageListModel'
import MaskButton from './MaskButton'
import UnMaskButton from './UnMaskButton'

const MaskForm = () => {
    const [isMask, setIsMask] = useState(false)
    const mask = () => {
        setIsMask(!isMask)
        const messageList = MessageReader.getMessageList()
        const messageListModel = new MessageListModel(messageList)
        messageListModel.setContents()
    }
    if (isMask) {
        return (
            <div>
                <UnMaskButton onClick={mask} />
            </div>
        )
    } else {
        return (
            <div>
                <MaskButton onClick={mask} />
            </div>
        )
    }
}

export default MaskForm
