export interface IProvider {
    minPrice?: number;
    maxPrice?: number;
    storagePrice?: number;
    bunnyStorage?: {
        hdd: number;
        ssd: number;
    };
    scalewayStorage?: {
        multi: number;
        single: number;
    };
    transferPrice: number;
    freeMemory?: number;
    hddOrSsd?: boolean;
    optionName?: string[];
    selectOption?: string;
    option?: boolean;
    name: string;
    img: string;
    total: number;
}