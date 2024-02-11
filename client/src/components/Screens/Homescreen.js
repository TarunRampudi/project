import React from 'react'
<<<<<<< HEAD:client/src/components/Screens/Homescreen.js
import menuitems from '../../fooditemsdata'
import Items from '../Pizza'
=======
import pizzas from '../../fooditemsdata'
import Pizza from '../Items'
>>>>>>> 3ec255c6fcc69f24b0c21a5bd6ac0190a4a8af43:client/src/components/Screens/Menu.js
export default function itemsscreen() {
  return (
    <div>
      <div className="row">
<<<<<<< HEAD:client/src/components/Screens/Homescreen.js
        {menuitems.map((menuitem, index) => {
          return <div className='col-md-4' key={index}>
            <div>
              <Items menuitem={menuitem}/>
            </div>
          </div>
        })}
=======
        {pizzas.map(pizza=>{
          return (<div className='col-md-4'>
            <div>
              <Pizza pizza={pizza}/>
              </div>
            </div>
        )})}
>>>>>>> 3ec255c6fcc69f24b0c21a5bd6ac0190a4a8af43:client/src/components/Screens/Menu.js
      </div>
    </div>
  )
}