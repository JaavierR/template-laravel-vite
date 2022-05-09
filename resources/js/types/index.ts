type LinkLabel = string

export interface Props {
    columns: Record<string, string>
    rows: Record<string, string>[]
    checkIdx?: string
}

export interface Meta {
    current_page: number
    from: number
    last_page: number
    links: MetaLink[]
    path: string
    per_page: number
    to: number
    total: number
}

export interface MetaLink {
    active: boolean
    label: LinkLabel
    url: string | null
}

interface Links {
    first: string
    last: string
    next: string | null
    prev: string | null
}

export interface ApiResourceCollection {
    links: Links
    meta: Meta
}
