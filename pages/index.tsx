import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import CategoryListing from '../components/categoryListing'
import ProductListing from '../components/productListing'

const Home: NextPage = () => {

  const [allDetails,setAllDetails] = useState([])
  const [categories,setCategories] = useState([])
  const [selectedCategoryId,setSelectedCategoryId] = useState(undefined)
  const [selectedCategory,setSelectedCategory] = useState("")

  useEffect(()=>{
    fetch(`https://my-json-server.typicode.com/sanalsajeevan123/DeepnetsoftMachineTest/categories`)
    .then(res => res.json())
    .then(result =>{
      // console.log(result)
      setAllDetails(result)
      setCategories(result)
    })
    .catch((err:any)=>{
      console.log(err)
    })
  },[])

  return (
    <div className='w-full flex flex-col justify-center py-5 space-y-5'>
      <div className='space-y-2'>
        <h1 className='font-bold text-lg'>{}</h1>
        <CategoryListing
          selectedCategory={selectedCategory}
          categories={categories}
        />
      </div>
      <ProductListing/>
    </div>
  )
}

export default Home
