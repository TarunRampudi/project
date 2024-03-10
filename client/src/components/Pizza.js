import React ,{useState} from 'react'
import { useParams } from 'react-router-dom'
import fooditemsdata from '../fooditemsdata'

const MenuItem = () => {
  const { id } = useParams()
  const MenuItem = fooditemsdata[id]

  if (!MenuItem) {
    return <div>Menu item not found</div>
  }

  const [quantity, setQuantity] = React.useState(1)
  const [varient, setVarient] = React.useState(MenuItem.varients[0])

  return (
    <div>
      <h1>{MenuItem.name}</h1>
      <img src={MenuItem.image} className="img-fluid" style={{ height: "200px", width: "300px" }} />
      <div className="flex-container">
        <div className="w-100">
          <p>Varients</p>
          <select value={varient} onChange={(e) => setVarient(e.target.value)}>
            {MenuItem.varients.map((varient) => {
              return <option value={varient}>{varient}</option>
            })}
          </select>
        </div>
        <div className="w-100">
          <p>Quantity</p>
          <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
            {[...Array(10).keys()].map((i) => {
              return <option value={i + 1}>{i + 1}</option>
            })}
          </select>
        </div>
      </div>
      <div className="flex-containe">
        <div>
          <h1>Price : {MenuItem.prices[0][varient] * quantity}</h1>
        </div>
        <div>
          <button className="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default MenuItem