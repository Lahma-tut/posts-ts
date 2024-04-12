export interface IPost {
    userId: number,
    id: number,
    title: string,
    body: string,
}

export interface ItemProps {
  data: IPost[]
}