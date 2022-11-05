import * as React from 'react'
import { useState } from 'react'
import { MessageElement, MessageReader } from '../../original-chatwork/reader/MessageReader'
import { MaskContentsPair } from '../domain/MaskContentsPair'
import { MaskContents } from '../domain/MaskContents'
import { popMaskContentsStorage } from '../storage/MaskContentsStorage'

const MaskContainer = () => {
    const [isMask, setIsMask] = useState(false)
    const [messageList, setMessageList] = useState<MessageElement[]>([])
    const [contentsPairList, setContentsPairList] = useState<MaskContentsPair[]>([])

    const mask = () => {
        const messageList = MessageReader.getMessageList()
        const contentsPairList: MaskContentsPair[] = []

        messageList.forEach((message) => {
            const originalName = MessageReader.getSpeakerName(message)
            const originalIcon = MessageReader.getSpeakerIcon(message)
            const originalContents: MaskContents = {
                name: originalName.innerText,
                iconPath: originalIcon.src,
            }

            let contentsPair = contentsPairList.find(
                (cp) => cp.originalContents.name === originalName.innerText
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

        setIsMask(true)
        setMessageList(MessageReader.getMessageList())
        setContentsPairList(contentsPairList)
    }

    const unMask = () => {
        messageList.forEach((maskedMessage) => {
            const maskedName = MessageReader.getSpeakerName(maskedMessage)
            const maskedIcon = MessageReader.getSpeakerIcon(maskedMessage)

            const contentsPair = contentsPairList.find((cp) => {
                return cp.maskContents.name === maskedName.innerText
            })

            if (contentsPair === undefined) {
                return
            } else {
                maskedName.innerText = contentsPair.originalContents.name
                maskedIcon.src = contentsPair.originalContents.iconPath
            }
        })

        setIsMask(false)
        setMessageList([])
        setContentsPairList([])
    }

    return (
        <div>
            {isMask ? (
                <button onClick={unMask}>マスク解除</button>
            ) : (
                <button onClick={mask}>マスク</button>
            )}
        </div>
    )
}

export default MaskContainer
