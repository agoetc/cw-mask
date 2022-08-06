import * as React from 'react'
import { createRoot, Root } from 'react-dom/client'
import { MessageUtilAreaReader } from '../../original-chatwork/reader/MessageUtilAreaReader'
import MuskForm from '../component/MuskForm'

const ROOT_ID = 'musk-button-root'

const buildRootElement = () => {
    const rootElement = document.createElement('div')
    rootElement.setAttribute('id', ROOT_ID)

    return rootElement
}

export const CwMuskInitializer = () => {
    const messageUtilArea: Element = MessageUtilAreaReader.read()

    const rootElement: HTMLDivElement = buildRootElement()
    const cwMuskRoot: Root = createRoot(rootElement)

    // original-chatworkにRootElementを追加
    messageUtilArea.prepend(rootElement)

    // 追加したRootElementをcw-muskの要素に置き換え
    cwMuskRoot.render(<MuskForm />)
}
