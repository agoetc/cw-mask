import * as React from 'react'
import { useState } from 'react'
import { MessageReader } from '../../original-chatwork/reader/MessageReader'
import { MessageListModel } from '../model/MessageListModel'
import MaskButton from './MaskButton'
import UnMaskButton from './UnMaskButton'

const MaskContainer = () => {
    const [isMask, setIsMask] = useState(false)
    const messageListModel = new MessageListModel(MessageReader.getMessageList())

    const mask = () => {
        setIsMask(true)
        messageListModel.setContents()
    }
    const unMask = () => {
        setIsMask(false)
        messageListModel.unSetContents()
    }

    return <div>{isMask ? <UnMaskButton onClick={unMask} /> : <MaskButton onClick={mask} />}</div>
}

export default MaskContainer
