import * as React from 'react'
import { useState } from 'react'
import { MessageReader } from '../../original-chatwork/reader/MessageReader'
import { MessageListModel } from '../model/MessageListModel'
import MaskButton from './MaskButton'
import UnMaskButton from './UnMaskButton'

const MaskForm = () => {
    const [isMask, setIsMask] = useState(false)
    const messageListModel = new MessageListModel(MessageReader.getMessageList())
    const mask = () => {
        setIsMask(true)
        messageListModel.setContents()
    }
    const unMask = () => {
        setIsMask(false)
        //messageListModel.unSetContents()
    }
    if (isMask) {
        return (
            <div>
                <UnMaskButton onClick={unMask} />
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
