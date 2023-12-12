export interface BlogData {
    store: string;
    title: string;
    body: string;
    category: string;
    rating: string;
    url: string;
    image: string;
    date: Date;
    sku: string;
    starttime: string,
    endtime: string,
    selltype: string;
    price:string;
}


export interface Store {
    label: string,
    value: string
}


export interface MonitorLog {
    store: string,
    url: string,
    name: string,
    date: string,
    stock: number
}

export interface IMonitorLog {
    filteredlogs: MonitorLog[]
}


export type LogAction = {
    type: string
    filteredlogs: IMonitorLog
}

export type DispatchType = (args: LogAction) => LogAction