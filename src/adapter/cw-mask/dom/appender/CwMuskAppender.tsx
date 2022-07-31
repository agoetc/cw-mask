import * as React from 'react'
import { createRoot } from 'react-dom/client'
import { MessageUtilArea } from '../../../original-chatwork/dom/component/MessageUtilArea'
import { MessageUtilAreaReader } from '../../../original-chatwork/dom/reader/MessageUtilAreaReader'
import MuskForm from '../component/MuskForm'

const ROOT_ID = 'musk-button-root'

export const CwMuskAppender = {
    append() {
        // const div = document.createElement('div')
        // div.setAttribute('id', ROOT_ID)
        // messageUtilArea.value.appendChild(div)

        const messageUtilArea: MessageUtilArea = MessageUtilAreaReader.read()
        const messageUtilAreaRoot = createRoot(messageUtilArea.value)

        messageUtilAreaRoot.render(<MuskForm />)
    },
}
