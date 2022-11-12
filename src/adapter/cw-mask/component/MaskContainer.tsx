import * as React from 'react'
import { useState } from 'react'
import { MessageElement, MessageReader } from '../../original-chatwork/reader/MessageReader'
import { MaskContentsPair } from '../domain/MaskContentsPair'
import { MaskContents } from '../domain/MaskContents'
import { initStorage, popMaskContentsStorage } from '../storage/MaskContentsStorage'

const MaskContainer = () => {
    const [isMask, setIsMask] = useState(false)
    const [messageList, setMessageList] = useState<MessageElement[]>([])
    const [contentsPairList, setContentsPairList] = useState<MaskContentsPair[]>([])

    const mask = () => {
        const messageList: MessageElement[] = MessageReader.getMessageList()
        const contentsPairList: MaskContentsPair[] = []

        messageList.forEach((message) => {
            const originalName = MessageReader.getSpeakerName(message)
            const originalIcon = MessageReader.getSpeakerIcon(message)
            const originalCompanyName = MessageReader.getSpeakerCompanyName(message)
            
            const originalContents: MaskContents = {
                name: originalName.innerText,
                iconPath: originalIcon.src,
                companyName: originalCompanyName.innerHTML
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
            originalCompanyName.innerHTML = contentsPair.maskContents.companyName
        })

        setIsMask(true)
        setMessageList(messageList)
        setContentsPairList(contentsPairList)
    }

    const unMask = () => {
        messageList.forEach((maskedMessage) => {
            const maskedName = MessageReader.getSpeakerName(maskedMessage)
            const maskedIcon = MessageReader.getSpeakerIcon(maskedMessage)
            const maskedCompanyName = MessageReader.getSpeakerCompanyName(maskedMessage)

            const contentsPair = contentsPairList.find((cp) => {
                return cp.maskContents.name === maskedName.innerText
            })

            if (contentsPair === undefined) {
                return
            } else {
                maskedName.innerText = contentsPair.originalContents.name
                maskedIcon.src = contentsPair.originalContents.iconPath
                maskedCompanyName.innerHTML = contentsPair.originalContents.companyName
            }
        })

        setIsMask(false)
        setMessageList([])
        setContentsPairList([])
        initStorage()
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
