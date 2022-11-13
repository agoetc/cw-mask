export const DOMUtil = {
    checkNull<T extends Node>(element: T | null | undefined): T {
        if (element === null || element === undefined) {
            throw Error('[error] DOMUtil: can not read element')
        } else {
            console.log('[success] DOMUtil: readed element')
            return element
        }
    },
}
