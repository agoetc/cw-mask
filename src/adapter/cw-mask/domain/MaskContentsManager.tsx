import { MaskContents, maskContentsStorage } from '../storage/MaskContentsStorage'

export class MaskContentsManager {
    private contentsPairList: ContentsPair[] = []
    private storage: MaskContents[] = maskContentsStorage
    constructor() {
        console.log('MaskContentsManagerのコンストラクタ')
    }
    findBySpeakerName = (speakerName: string): ContentsPair | undefined => {
        return this.contentsPairList.find((contentsPair) => {
            return contentsPair.originalContents.name == speakerName
        })
    }
    findByMaskedSpeakerName = (maskedSpeakerName: string): ContentsPair | undefined => {
        console.log(this.contentsPairList)
        return this.contentsPairList.find((contentsPair) => {
            return contentsPair.maskedContents.name == maskedSpeakerName
        })
    }
    popMaskContents = (contents: MaskContents): MaskContents => {
        const gotContents = this.popStorage()
        this.contentsPairList.push({
            originalContents: contents,
            maskedContents: gotContents,
        })
        console.log(this.contentsPairList)
        return gotContents
    }

    private popStorage = (): MaskContents => {
        const contents = this.storage.pop()
        if (contents === undefined) {
            throw new Error('empty storage')
        }
        return contents
    }
}

type ContentsPair = {
    originalContents: MaskContents
    maskedContents: MaskContents
}
