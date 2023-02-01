import React, { FC, useEffect, useMemo, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { providerSlice } from '../store/reducers/ProvidesReduces'
import PriceGraph from './graph/PriceGraph'

const VisualRange : FC = () => {
    const dispatch = useAppDispatch()
    const {setSelectOptionBunny, setSelectOptionScaleway, setAllTotalPrices} = providerSlice.actions
    const {providers} = useAppSelector(state => state.providerReducer.all)
    const {backblaze, bunny, scaleway, vultr} = useAppSelector(state => state.providerReducer.all.providers)
    const keys = Object.entries(providers)
    const {smallScreen} = useAppSelector(state => state.valReducer)

    useEffect(() => {
        dispatch(setAllTotalPrices())
    }, [backblaze.total, bunny.total, scaleway.total, vultr.total])

    return (
        <div className={smallScreen ? 'range__visual_mobile' : 'range__visual'}>
            {keys.map(key => (
                <div key={key[0]} className={smallScreen ? 'visual__item_mobile' : 'visual__item'}>
                    {smallScreen
                    ?
                        <div className='item__content_mobile' >
                            <div className="item__name_mobile">
                                <span>{key[1].name}</span>
                                <div className="item__radio_mobile">
                                    {key[1].optionName?.map(option => 
                                        <div key={option} style={{display: 'flex'}} >
                                            <input type='radio' name={key[1].option ? 'diskOption' : 'option'} value={option} onChange={e => key[1].option ? dispatch(setSelectOptionBunny(e.target.value)) : dispatch(setSelectOptionScaleway(e.target.value))} /><p className='option__mobile'>{option}</p>
                                        </div>                                
                                    )}
                                </div>
                            </div>
                            <div className="item__logo_mobile">
                                <img src={key[1].img} width={'40px'} height={'40px'} alt="logo" />
                            </div>
                            <div className="item__right"><PriceGraph obj={key[1]} /></div>
                        </div>
                    :
                        <div className='item__content'>   
                            <div className="item__top"><PriceGraph obj={key[1]} /></div>
                            <div className="item__bottom"> 
                                <img src={key[1].img} width={'55px'} height={'55px'} alt="logo" />
                                <div className="item__name">
                                    <span>{key[1].name}</span>
                                </div>
                                <div className="item__radio">
                                    {key[1].optionName?.map(option => 
                                        <div key={option} style={{display: 'flex'}} >
                                            <input type='radio' name={key[1].option ? 'diskOption' : 'option'} value={option} onChange={e => key[1].option ? dispatch(setSelectOptionBunny(e.target.value)) : dispatch(setSelectOptionScaleway(e.target.value))} /><span>{option}</span>
                                        </div>                                
                                    )}
                                </div>                        
                            </div>
                        </div>
                    }
                </div>
            ))}            
        </div>
    )
}

export default VisualRange        