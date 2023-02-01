import React, { FC } from 'react'
import { useAppSelector } from '../../hooks/redux'
import {IProvider} from '../../types/IProvides'

interface PriceGraphProps {
  obj : IProvider
}

const PriceGraph : FC<PriceGraphProps> = ({obj}) => {
  const {allTotalPrices,} = useAppSelector(state => state.providerReducer.all)
  const arr = Object.values(allTotalPrices).sort((a, b) => b-a)

   if (obj.total === 0) {
      return (
        <div className="price__container"
        >
          <div className="box__price">{obj.total}$</div>
          <div
          // style={{ width: `${width}px`, height: `${height}px` }}
            style={{height: '0.2%',background: '#6255ba'}}
            className='box'
          ></div>
        </div>
      )
    }

  return (
    <div className="price__container"
      style={{height: `${obj.total === arr[0] ? '100' : (obj.total*100)/arr[0]}%`, minHeight: `${obj.total < 0.4 ? '5%' : ''}`}}
    >
      <div className="box__price">{obj.total}$</div>
      <div
      // style={{ width: `${width}px`, height: `${height}px` }}
        style={{background: `${obj.total === arr[3] ? '#6255ba' : '#878b94'}` }}
        className='box'
      ></div>
      
    </div>
    
  )
}

export default PriceGraph

{/* <div className="price__container">

<div
// style={{ width: `${width}px`, height: `${height}px` }}
  style={{height: `${obj.total === arr[0] ? '100' : (obj.total*100)/arr[0]}%` , background: `${obj.total === arr[3] ? '#6255ba' : '#878b94'}` }}
  className='box'
></div>
<div className="box__price">3</div>
</div> */}