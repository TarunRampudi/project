import React from 'react'
import menuitems from '../../fooditemsdata'
import Items from '../Items'
export default function itemsscreen() {
  return (
    <div>
      <div className="row">
        {menuitems.map(menuitems=>{
          return <div className='col-md-4'>
            <div>
              <Items menuitems={menuitems}/>
              </div>
            </div>
        })}
      </div>
    </div>
  )
  }