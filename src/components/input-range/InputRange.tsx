import React, { FC, useEffect, useMemo } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { providerSlice } from '../../store/reducers/ProvidesReduces'
import { valSlice } from '../../store/reducers/ValReducer'

export enum RangeVariant {
    transfer = 'transfer',
    storage = 'storage'
}

interface InputRangeProps {
    variant: RangeVariant
}

const InputRange : FC<InputRangeProps> = ({variant}) => {

    const dispatch = useAppDispatch()
    const {transferVal, storageVal} = useAppSelector(state => state.valReducer)
    const {setTotalBackblaze, setTotalVultr, setTotalBunny, setTotalScaleway} = providerSlice.actions
    const {setStorageVal, setTransferVal} = valSlice.actions
    const {backblaze, bunny, scaleway, vultr} = useAppSelector(state => state.providerReducer.all.providers)

    const priceForBackblaze = () => {
        let sum = transferVal*backblaze.transferPrice + storageVal*backblaze.storagePrice!
        sum < backblaze.minPrice! ?  dispatch(setTotalBackblaze(backblaze.minPrice!)) : dispatch(setTotalBackblaze(Number(sum.toFixed(2))))
    }

    const priceForVultr = () => {
        let sum = transferVal*vultr.transferPrice + storageVal*vultr.storagePrice!
        sum < vultr.minPrice! ?  dispatch(setTotalVultr(vultr.minPrice!)) : dispatch(setTotalVultr(Number(sum.toFixed(2))))
    }

    const priceForBunny = () => {
        let sum = transferVal*bunny.transferPrice
        if (bunny.selectOption === 'HDD') {
            sum += storageVal*bunny.bunnyStorage!.hdd!
        } else {
            sum += storageVal*bunny.bunnyStorage!.ssd!
        }
        sum < bunny.maxPrice! ?  dispatch(setTotalBunny(Number(sum.toFixed(2)))) : dispatch(setTotalBunny(bunny.maxPrice!))
    }

    const priceForScaleway = () => {
        let sum = 0
        if (transferVal > scaleway.freeMemory!) {
            sum += transferVal*scaleway.transferPrice - scaleway.freeMemory!*scaleway.transferPrice
        }
        if (storageVal > scaleway.freeMemory!) {
            if (scaleway.selectOption === 'Single') {
                sum += storageVal*scaleway.scalewayStorage!.single - scaleway.freeMemory!*scaleway.scalewayStorage!.single
            } else {
                sum += storageVal*scaleway.scalewayStorage!.multi - scaleway.freeMemory!*scaleway.scalewayStorage!.multi
            }
        }
        dispatch(setTotalScaleway(Number(sum.toFixed(2))))
    }

    useEffect(() => {
        if (transferVal!==0 || storageVal!==0){
            priceForBackblaze()
            priceForVultr()
            priceForBunny()
            priceForScaleway()
        }
        
    }, [transferVal, storageVal, bunny.selectOption, scaleway.selectOption])

    const changeTransfer = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setTransferVal(parseInt(event.target.value)))
    };
    
    const changeStorage = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setStorageVal(parseInt(event.target.value)))
    };

    return (
        <form className='containeer__item'>
            {variant === RangeVariant.transfer
                ?
                <div>
                    <h4>Transfer: {transferVal} GB</h4>
                    <input
                        type='range'
                        onChange={changeTransfer}
                        min={1}
                        max={1000}
                        step={1}
                        value={transferVal}
                    ></input>
                </div>
                :
                <div>
                    <h4>Storage: {storageVal} GB</h4>
                    <input
                        type='range'
                        onChange={changeStorage}
                        min={1}
                        max={1000}
                        step={1}
                        value={storageVal}
                    ></input>
                </div>
            }
            <div className='input__text'>
                <span>0</span>
                <span>1000</span>
            </div>
        </form>
    )
}

export default InputRange