import React from 'react'
import menuitems from '../../fooditemsdata'
import Items from '../Pizza'
export default function itemsscreen() {
  return (
    <div>
      <div className="row">
        {menuitems.map((menuitem, index) => {
          return <div className='col-md-4' key={index}>
            <div>
              <Items menuitem={menuitem}/>
            </div>
          </div>
        })}
      </div>
    </div>
  )
}