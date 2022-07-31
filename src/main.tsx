import * as React from 'react'
import { createRoot } from 'react-dom/client'
import MuskForm from './adapter/cw-mask/dom/component/MuskForm'
import { MessageUtilArea } from './adapter/original-chatwork/dom/component/MessageUtilArea'
import { MessageUtilAreaReader } from './adapter/original-chatwork/dom/reader/MessageUtilAreaReader'

window.onload = () => setTimeout(main, 2000)

const main = () => {
    const messageUtilArea: MessageUtilArea = MessageUtilAreaReader.read()
    const messageUtilAreaRoot = createRoot(messageUtilArea.value)

    messageUtilAreaRoot.render(<MuskForm />)
}
