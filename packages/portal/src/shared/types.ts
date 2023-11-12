export type AppResponse<T> = Promise<{
    data: T
}>;