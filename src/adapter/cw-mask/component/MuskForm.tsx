import * as React from 'react'
import { DOMUtil } from '../../../util/dom/DOMUtil'
import { MessageReader } from '../../original-chatwork/reader/MessageReader'
import MuskButton from './MuskButton'

const MuskForm = () => {
    const musk = () => {
        console.log('test')
        const messageList: HTMLCollectionOf<Element> = MessageReader.getMessageList()
        const speakerName: HTMLCollectionOf<Element> =
        DOMUtil.checkNull(messageList.item(1)).getElementsByClassName('_speakerName')
        const hoge = DOMUtil.checkNull(speakerName.item(0)) as HTMLElement
        hoge.innerText = 'aiueo'
    }
    return (
        <div>
            <MuskButton onClick={musk} />
        </div>
    )
}

export default MuskForm
