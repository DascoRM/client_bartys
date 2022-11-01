export enum EnumColor {
    Yellow = '#F7F3A6',
    Blue = '#A6CEF7',
    Green = '#DAF7A6',
    White = '#ffff',
    Black = '#0000'
}
export interface Card {
    id: string
    category: unknown
    nameCategory: string
    title: string
    description?: string
    link?: string
    pathImg?: string
    date: string
    style: {
        color: EnumColor
        color_txt?: string
        other_style?: string
    }
    img?: string
}