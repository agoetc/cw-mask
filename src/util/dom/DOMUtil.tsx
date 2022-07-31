export const DOMUtil = {
    checkNull<T extends Element>(element: T | null): T {
        if (element === null) {
            throw Error('[error] DOMUtil: can not read element')
        } else {
            console.log('[success] DOMUtil: readed element')
            return element
        }
    },
}
