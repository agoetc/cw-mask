export const MessageReader = {
    // TODO: ユビキタス言語を選定する
    getMessageList(): HTMLCollectionOf<Element>{
        return document.getElementsByClassName('messageHasBorder bordered')
    }
}
