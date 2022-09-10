import { MaskContents, maskContentsStorage } from '../storage/MaskContentsStorage'

export class MaskContentsManager {
    private namePairList: NamePair[] = []
    private storage: MaskContents[] = maskContentsStorage

    findNamePair = (speakerName: string): NamePair | undefined => {
        return this.namePairList.find((namePair) => {
            return namePair.originalName == speakerName
        })
    }

    popMaskContents = (speakerName: string): string => {
        const maskedName = this.popStorage().name
        this.namePairList.push({
            originalName: speakerName,
            maskedName: maskedName,
        })
        return maskedName
    }

    private popStorage = (): MaskContents => {
        const contents = this.storage.pop()
        if (contents === undefined) {
            throw new Error('empty storage')
        }
        return contents
    }
}

type NamePair = {
    originalName: string
    maskedName: string
}
