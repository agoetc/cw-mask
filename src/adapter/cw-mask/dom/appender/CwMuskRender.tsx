import * as React from 'react'
import { createRoot } from 'react-dom/client'
import { MessageUtilArea } from '../../../original-chatwork/dom/component/MessageUtilArea'
import { MessageUtilAreaReader } from '../../../original-chatwork/dom/reader/MessageUtilAreaReader'
import MuskForm from '../component/MuskForm'

const ROOT_ID = 'musk-button-root'

export const CwMuskRender = () => {
    const rootElement = document.createElement('div')
    rootElement.setAttribute('id', ROOT_ID)

    const messageUtilArea: MessageUtilArea = MessageUtilAreaReader.read()
    messageUtilArea.prepend(rootElement)
    const messageUtilAreaRoot = createRoot(rootElement)

    messageUtilAreaRoot.render(<MuskForm />)
}
