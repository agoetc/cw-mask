import * as React from 'react'
import { useState } from 'react'
import { MessageReader } from '../../original-chatwork/reader/MessageReader'
import MaskButton from './MaskButton'
import UnMaskButton from './UnMaskButton'
import { MaskContentsPair } from '../domain/MaskContentsPair'
import { MaskContents } from '../domain/MaskContents'
import { popMaskContentsStorage } from '../storage/MaskContentsStorage'

const MaskContainer = () => {
    const [isMask, setIsMask] = useState(false)

    const messageList = MessageReader.getMessageList()
    const contentsPairList: MaskContentsPair[] = []

    const mask = () => {
        setIsMask(true)

        messageList.forEach((message) => {
            const originalName = MessageReader.getSpeakerName(message)
            const originalIcon = MessageReader.getSpeakerIcon(message)
            const originalContents: MaskContents = {
                name: originalName.innerText,
                iconPath: originalIcon.src,
            }

            let contentsPair = contentsPairList.find(
                (cp) => cp.originalContents.name == originalName.innerText
            )
            if (contentsPair === undefined) {
                const maskContents = popMaskContentsStorage()
                contentsPair = {
                    originalContents,
                    maskContents,
                }
                contentsPairList.push(contentsPair)
            }

            originalName.innerText = contentsPair.maskContents.name
            originalIcon.src = contentsPair.maskContents.iconPath
        })
    }

    const unMask = () => {
        setIsMask(false)
    }

    return <div>{isMask ? <UnMaskButton onClick={unMask} /> : <MaskButton onClick={mask} />}</div>
}

export default MaskContainer
