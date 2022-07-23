export class MessageReader{
    // TODO: ユビキタス言語を選定する
    getMessageList = () => {
        const messageList : HTMLCollectionOf <Element> = document.getElementsByClassName('messageHasBorder bordered');
    }
}