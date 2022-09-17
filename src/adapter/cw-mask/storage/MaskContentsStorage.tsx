import iconPath from '../../../images/test.png'
export const maskContentsStorage: MaskContents[] = [
    { name: 'きりん', icon: iconPath },
    { name: 'らいおん', icon: iconPath },
    { name: 'いぬ', icon: iconPath },
]
export type MaskContents = {
    name: string
    icon: string
}
