import * as React from 'react'
import { createRoot, Root } from 'react-dom/client'
import { MessageUtilAreaReader } from '../../original-chatwork/reader/MessageUtilAreaReader'
import MuskForm from '../component/MuskForm'

export const CwMuskInitializer = () => {
    const messageUtilArea: Element = MessageUtilAreaReader.read()

    // original-chatworkにRootElementを追加
    const rootElement: HTMLDivElement = document.createElement('div')
    messageUtilArea.prepend(rootElement)

    // 追加したRootElementをcw-muskの要素に置き換え
    const cwMuskRoot: Root = createRoot(rootElement)
    cwMuskRoot.render(<MuskForm />)
}
