import * as React from 'react'
import { createRoot } from 'react-dom/client'
import { MessageUtilAreaReader } from './dom/reader/MessageUtilAreaReader'

const container: Element | null = document.querySelector('#root')
if (container === null) {
    throw new Error('container is null')
}
const root = createRoot(container)

const App = () => {
    console.log('wefa')
    return (
        <div>
            <h1>Hello React! </h1>
        </div>
    )
}
setTimeout(() => '', 5000)
//messageList[1].getElementsByClassName('_speakerName')[0].innerText = 'aiueo'
//root.render(<App/>)

const messageUtilArea = MessageUtilAreaReader.getMessageUtilArea()
messageUtilArea.appendMuskButton()
