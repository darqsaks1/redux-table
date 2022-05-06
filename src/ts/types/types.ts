export interface IPhotosServer {
    albumId: number,
    id: number,
    thumbnailUrl: string,
    title: string,
    url: string
    index: number
}

export interface IPhotosReduxState {
    data: IPhotosServer[],
    initialData: IPhotosServer[],
}

