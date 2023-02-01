import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IProvider } from "../../types/IProvides"

interface IProviderState {
    all: {
        providers: {
            backblaze : IProvider;
            bunny : IProvider;
            scaleway : IProvider;
            vultr : IProvider;
        },
        allTotalPrices: {
            backblaze: number;
            bunny: number;
            scaleway: number;
            vultr: number;
        }
    }
}

const initialState : IProviderState = {
    all: {
        providers: {
            backblaze : {
                minPrice: 7,
                storagePrice: 0.005,
                transferPrice: 0.01,
                name: 'Backblaze',
                img: './imgs/BLZEpng.png',
                total: 0
            },
            bunny: {
                hddOrSsd: true,
                maxPrice: 10,
                bunnyStorage: {
                    hdd: 0.01,
                    ssd: 0.02
                },
                selectOption: 'HDD',
                option: true,
                optionName: ['HDD', 'SSD'],
                transferPrice: 0.01,
                name: 'Bunny',
                img: './imgs/bunny.png',
                total: 0
            },
            scaleway: {
                scalewayStorage: {
                    multi: 0.06,
                    single: 0.03
                },
                selectOption: 'Single',
                option: false,
                optionName: ['Multi', 'Single'],
                transferPrice: 0.02,
                freeMemory: 75,
                name: 'Scaleway',
                img: './imgs/scaleway.png',
                total: 0
            },
            vultr: {
                minPrice: 5,
                storagePrice: 0.01,
                transferPrice: 0.01,
                name: 'Vultr',
                img: './imgs/vultr2.png',
                total: 0
            },        
        },
        allTotalPrices: {
            backblaze: 0,
            bunny: 0,
            scaleway: 0,
            vultr: 0,
        }
    }
    
}

export const  providerSlice = createSlice({
    name: 'provider',
    initialState,
    reducers: {
        setTotalBackblaze(state, action : PayloadAction<number>) {
            state.all.providers.backblaze.total = action.payload
        },
        setTotalBunny(state, action : PayloadAction<number>) {
            state.all.providers.bunny.total = action.payload
        },
        setTotalScaleway(state, action : PayloadAction<number>) {
            state.all.providers.scaleway.total = action.payload
        },
        setTotalVultr(state, action : PayloadAction<number>) {
            state.all.providers.vultr.total = action.payload
        },
        setSelectOptionBunny(state, action : PayloadAction<string>) {
            state.all.providers.bunny.selectOption = action.payload
        },
        setSelectOptionScaleway(state, action : PayloadAction<string>) {
            state.all.providers.scaleway.selectOption = action.payload
        },
        setAllTotalPrices(state) {
            // state.all.allTotalPrices.backblaze += 1
            // state.all.allTotalPrices.bunny += 1
            // state.all.allTotalPrices.scaleway += 1
            // state.all.allTotalPrices.vultr += 1

            state.all.allTotalPrices.backblaze = state.all.providers.backblaze.total
            state.all.allTotalPrices.bunny = state.all.providers.bunny.total
            state.all.allTotalPrices.scaleway = state.all.providers.scaleway.total
            state.all.allTotalPrices.vultr = state.all.providers.vultr.total

            // state.all.allTotalPrices.arr.push(state.all.providers.backblaze.total, state.all.providers.bunny.total, state.all.providers.scaleway.total, state.all.providers.vultr.total)



            // state.all.allTotalPrices.push(state.all.providers.backblaze.total, state.all.providers.bunny.total, state.all.providers.scaleway.total, state.all.providers.vultr.total)
            // state.all.allTotalPrices.push(action.payload)
        }

    }
})

export default providerSlice.reducer