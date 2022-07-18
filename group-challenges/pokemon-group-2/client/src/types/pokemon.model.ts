export interface IPokemon {
  name: string,
    id: string,
    stat: number,
    images: {
      front: string,
      back: string
    },
    moves: string[]
}