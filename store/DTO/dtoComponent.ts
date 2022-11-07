export interface Sidebar {
    name: string 
    path: string
    icon?: unknown
    color?: string
  }

export interface AMarkerType {
  position: number []
  title: string
  hours_opening: string,
  id: number
}

export interface IconMarker {
  url: string
  size: number[]
}

export interface Button {
  title: string
  color?: string
}

//Organism
export interface ActivitiesOrganism {
  title: string,
  color: string
  active: boolean
}
//Response
export interface MetaResponse {
  pagination: Pagination
}

export interface Pagination {
  page: number
  pageCount: number
  pageSize: number
  total: number
}