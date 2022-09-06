import { useState } from 'react'

const ProductListing = () => {
  
  const [totalProducts,setTotalProducts] = useState(0)
  const [categories,setCategories] = useState([])
  const [selectedCategoryId,setSelectedCategoryId] = useState(undefined)

  return (
    <div className='w-full flex justify-center py-5 space-y-5'>
      product list
    </div>
  )
}

export default ProductListing
