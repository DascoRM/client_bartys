export enum EnumColor {
    Yellow = '#F7F3A6',
    Blue = '#A6CEF7',
    Green = '#DAF7A6',
    White = '#ffff',
    Black = '#0000'
}
export interface Card {
    category: string
    title: string
    date: string
    style: {
        color: EnumColor
        color_txt?: string
        other_style?: string
    }
    img?: string

}