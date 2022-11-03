const maskContentsStorage: MaskContents[] = [
    {
        name: 'きりん',
        iconPath: 'https://lh3.google.com/u/0/d/1ojuxchgILSgv86JMtc3qBGqSIXxNLahh=w1578-h1848-iv2',
    },
    {
        name: 'らいおん',
        iconPath: 'https://lh3.google.com/u/0/d/1KV0jgBkE6649yV-ykBoDLvNQXAHUVEUJ=w1578-h1848-iv2',
    },
    {
        name: 'いぬ',
        iconPath: 'https://lh3.google.com/u/0/d/1EmJ2TlgezQE6TSP0S8WdDsK99PMBqHBK=w3840-h1848-iv2',
    },
]

export const popMaskContentsStorage = (): MaskContents => {
    const contents = maskContentsStorage.pop()
    if (contents === undefined) {
        throw new Error('empty storage')
    }
    return contents
}

export type MaskContents = {
    name: string
    iconPath: string
}
