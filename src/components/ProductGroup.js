import Product from "./Product"

import { productData } from "../data/productData"

export default function ProductGroup(){
  const productList = productData
  return(
      <div className="container mt-4 p-3" style={{backgroundColor:'rgba(0, 0, 0, 0.4)'}}>
      <div className="text-center text-white" style={{backgroundColor:"rgba(0, 0, 0, 0.4)"}}><h1>Nos produits</h1></div>
      <div className="row">
        {productList.map(p => (
          <div className="col-lg d-flex justify-content-center py-4" key={p.id}><Product productName={p.productName} productDesc={p.productDesc} productImg={'images/'+p.productImg}/></div>
          )
          )
        }
      </div>
    </div>
  )
}