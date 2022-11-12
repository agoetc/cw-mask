import { MaskContents } from '../domain/MaskContents'

const storage: MaskContents[] = [
    {
        name: 'きりん',
        iconPath: 'https://lh3.google.com/u/0/d/1ojuxchgILSgv86JMtc3qBGqSIXxNLahh=w1578-h1848-iv2',
        companyName: ''
    },
    {
        name: 'らいおん',
        iconPath: 'https://lh3.google.com/u/0/d/1KV0jgBkE6649yV-ykBoDLvNQXAHUVEUJ=w1578-h1848-iv2',
        companyName: ''
    },
    {
        name: 'いぬ',
        iconPath: 'https://lh3.google.com/u/0/d/1EmJ2TlgezQE6TSP0S8WdDsK99PMBqHBK=w3840-h1848-iv2',
        companyName: ''
    },
    {
        name: 'はむすたー',
        iconPath:
            'https://lh3.google.com/u/0/d/1W4Suj003H4AqO5-3miBO3vfVFO05jvhn=w300-h285-p-k-nu-iv2',
            companyName: ''
        },
    {
        name: 'ねこ',
        iconPath:
            'https://lh3.google.com/u/0/d/1FyA86EMN0agm0WabKLxeOA-9gBuaS91n=w300-h285-p-k-nu-iv2',
            companyName: ''
        },
    {
        name: 'あるぱか',
        iconPath:
            'https://lh3.google.com/u/0/d/1F_ZiyiJfrNqAuzHE-nStN_8DovBrcsZr=w300-h285-p-k-nu-iv2',
            companyName: ''
        },
]

let maskContentsStorage: MaskContents[] = [...storage]

export const initStorage = () => (maskContentsStorage = [...storage])

export const popMaskContentsStorage = (): MaskContents => {
    const contents = maskContentsStorage.pop()
    if (contents === undefined) {
        throw new Error('empty storage')
    }
    return contents
}
