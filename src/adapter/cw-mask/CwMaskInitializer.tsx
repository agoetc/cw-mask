import * as React from 'react'
import { createRoot, Root } from 'react-dom/client'
import { MessageUtilAreaReader } from '../original-chatwork/reader/MessageUtilAreaReader'
import MaskContainer from './component/MaskContainer'

export const CwMaskInitializer = () => {
    const messageUtilArea: HTMLDivElement = MessageUtilAreaReader.read()

    // original-chatworkにRootElementを追加
    const rootElement: HTMLDivElement = document.createElement('div')
    messageUtilArea.prepend(rootElement)

    // 追加したRootElementをcw-maskの要素に置き換え
    const cwMaskRoot: Root = createRoot(rootElement)
    cwMaskRoot.render(<MaskContainer />)
}
