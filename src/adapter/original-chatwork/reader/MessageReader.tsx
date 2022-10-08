export const MessageReader = {
    // TODO: ユビキタス言語を選定する
    getMessageList(): Array<HTMLElement> {
        const messageList = document.getElementsByClassName('_message')
        return Array.prototype.slice.call(messageList).filter((message: HTMLElement) => {
            return message.getElementsByClassName('_speaker').length != 0
        })
    },
}
