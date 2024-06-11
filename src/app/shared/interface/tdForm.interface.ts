

export interface ImodeOfContact {
    moc: string,
    id: number
}



export interface IuserInfo {
    credentials: {
        username: string,
        email: string,
    },
    securityQuestion: string,
    ans: string,
    contact:number,
    isSubscribed: boolean,
    modeOfContact: string
}

