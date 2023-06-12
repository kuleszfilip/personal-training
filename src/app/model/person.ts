export interface Person {
    [x: string]: any
    name: string
    forname: string
    id: string
    visits: Visit[]
    registrationTime: string
    city: string
    address: string
    email: string
    phone: string
    regularPatient: boolean
    key?: string
  }
  
  export interface Visit {
    id: string
    type: string
    date: string
    treatment: string
    nextVisit: string
  }
  