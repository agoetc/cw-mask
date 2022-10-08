export const MessageReader = {
    // TODO: ユビキタス言語を選定する
    getMessageList(): Array<Element> {
        const messageList = document.getElementsByClassName('_message')
        return Array.prototype.slice.call(messageList).filter((message: Element) => {
            return message.getElementsByClassName('_speaker').length != 0
        })
    },
}
