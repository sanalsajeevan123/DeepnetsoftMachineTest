import { useState } from 'react'

type MyProps = {
  categories:{[x:string]:any}[]
  productList:{[x:string]:any}[]
}

const ProductListing = (props:MyProps) => {
console.log(props.productList)
  return (
    <div className='w-full flex justify-center py-5 space-y-5'>
      <table className='min-w-max border border-gray-400 w-60'>
        <thead className='border-b border-gray-400 bg-gray-300'>
          <tr>
            <th className='border-r border-gray-400 text-center'><input type="checkbox" name="prdtCheckboxHead" id="prdtCheckboxHead" /></th>
            <th className='border-r border-gray-400 text-left px-1'><h1 className='text-sm'>Product Name</h1></th>
            <th className='text-left px-1'><h1 className='text-sm'>Price</h1></th>
          </tr>
        </thead>
        <tbody>
          {props.categories && props.categories.map((category:any,key:any)=>{
            if(category.products){
              return(
                category.products.map((product:any,prdtKey:any)=>{
                  return(
                    <tr key={prdtKey}>
                      <td className='border-r border-gray-400 text-center'><input type="checkbox" name="prdtCheckboxHead" id="prdtCheckboxHead" /></td>
                      <td className='border-r border-gray-400 text-left px-1'><h1></h1></td>
                      <td className='text-left px-1'><h1></h1></td>
                  </tr>
                  )
                })
              )
            }
            // else if(){

            // }
          })}
          <tr>
            <td className='border-r border-gray-400 text-center'><input type="checkbox" name="prdtCheckboxHead" id="prdtCheckboxHead" /></td>
            <td className='border-r border-gray-400 text-left px-1'><h1></h1></td>
            <td className='text-left px-1'><h1></h1></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ProductListing
