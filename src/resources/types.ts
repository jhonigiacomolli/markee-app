export type Status = 'editing' | 'saving' | 'saved'

export type TypeUpdate = 'active' | 'status' | 'title' | 'content'

export type UpdateFunctionType = (
    id: string,
    type: TypeUpdate,
    status?: Status,
    title?: string,
    content?: string,
) => void

export type File ={
    id: string
    name: string
    content: string
    active: boolean
    status: Status
}
