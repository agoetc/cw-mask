import * as React from 'react'
import { MessageReader } from '../../original-chatwork/reader/MessageReader'
import MuskButton from './MuskButton'

const MuskForm = () => {
    const musk = () => {
        console.log('test')
        const messageList: HTMLCollectionOf<Element> = MessageReader.getMessageList()
        const speakerName: HTMLCollectionOf<Element> =
            messageList[1].getElementsByClassName('_speakerName')
        const hoge = speakerName[0] as HTMLElement
        hoge.innerText = 'aiueo'
    }
    return (
        <div>
            <MuskButton onClick={musk} />
        </div>
    )
}

export default MuskForm
