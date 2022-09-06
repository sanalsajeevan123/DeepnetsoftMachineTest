import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import CategoryListing from '../components/categoryListing'
import ProductListing from '../components/productListing'

const Home: NextPage = () => {

  const [allDetails,setAllDetails] = useState([])
  const [categories,setCategories] = useState([])
  const [productList,setProductList] = useState([])
  const [selectedCategory,setSelectedCategory] = useState("")
  const [totalProducts,setTotalProducts] = useState(0)

  let tempPrdtList:any = productList

  useEffect(()=>{
    let addProducts:any = []
    fetch(`https://my-json-server.typicode.com/sanalsajeevan123/DeepnetsoftMachineTest/categories`)
    .then(res => res.json())
    .then(result =>{
      // console.log(result)
      setAllDetails(result)
      let productCount:number = 0
      result.map((category:any)=>{
        productCount+=category.totalProducts
        if(category.categories){
          let prdts = handleProductList(category.categories)
          addProducts = [...addProducts,...prdts]
        }
      })
      setProductList(addProducts)
      setTotalProducts(productCount)
      setCategories(result)
    })
    .catch((err:any)=>{
      console.log(err)
    })
  },[])

  const handleProductList=(category:any)=>{
    category.map((category:any)=>{
      if(category.categories){
        handleProductList(category.categories)
      }else if(category.products){
        tempPrdtList = [...tempPrdtList,...category.products]
      }
    })
    return tempPrdtList
  }

  const handleCategorySelect=(category:any)=>{
    setCategories(category.categories ?? [])
    setSelectedCategory(category.name)
  }

  return (
    <div className='w-full flex flex-col justify-center py-5 space-y-5'>
      <div className='space-y-2'>
        <h1 className='font-bold text-lg'>{}</h1>
        <CategoryListing
          selectedCategory={selectedCategory}
          categories={categories}
          totalProducts={totalProducts}
          handleCategorySelect={handleCategorySelect}
        />
      </div>
      <ProductListing
        categories={categories}
        productList={productList}
      />
    </div>
  )
}

export default Home
