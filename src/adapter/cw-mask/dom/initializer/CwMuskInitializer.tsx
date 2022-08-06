import * as React from 'react'
import { createRoot, Root } from 'react-dom/client'
import { MessageUtilArea } from '../../../original-chatwork/dom/component/MessageUtilArea'
import { MessageUtilAreaReader } from '../../../original-chatwork/dom/reader/MessageUtilAreaReader'
import MuskForm from '../component/MuskForm'

const ROOT_ID = 'musk-button-root'

const buildRootElement = () => {
    const rootElement = document.createElement('div')
    rootElement.setAttribute('id', ROOT_ID)

    return rootElement
}

export const CwMuskInitializer = () => {
    const messageUtilArea: MessageUtilArea = MessageUtilAreaReader.read()

    const rootElement:HTMLDivElement = buildRootElement()
    const messageUtilAreaRoot: Root = createRoot(rootElement)

    // original-chatworkにRootElementを追加
    messageUtilArea.prepend(rootElement)

    // RootElementをcw-muskで置き換え
    messageUtilAreaRoot.render(<MuskForm />)
}
