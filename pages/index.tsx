import type { NextPage } from 'next'
import { useState } from 'react'

const Home: NextPage = () => {
  
  const [totalProducts,setTotalProducts] = useState(0)
  const [categories,setCategories] = useState([])
  const [subCategories,setSubCategories] = useState([])

  return (
    <div className='w-full flex justify-center py-5 space-y-5'>
      <div className='space-y-2'>
        <h1 className='font-bold text-lg'>Categories {totalProducts}</h1>
        <div className='min-w-max spacey'>

        </div>
      </div>
    </div>
  )
}

export default Home
