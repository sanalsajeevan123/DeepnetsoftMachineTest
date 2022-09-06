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

  useEffect(()=>{
    let tempPrdtList:any = []

    const handleProductList=(category:any)=>{
      category.map((category:any)=>{
        if(category.categories){
          handleProductList(category.categories)
        }else if(category.products){
          tempPrdtList = [...tempPrdtList,...category.products]
        }
      })
    }

    fetch(`https://my-json-server.typicode.com/sanalsajeevan123/DeepnetsoftMachineTest/categories`)
    .then(res => res.json())
    .then(result =>{
      // console.log(result)
      setAllDetails(result)
      let productCount:number = 0
      result.map((category:any)=>{
        // productCount+=category.totalProducts
        if(category.categories){
          handleProductList(category.categories)
        }
      })
      setProductList(tempPrdtList)
      // setTotalProducts(productCount)
      setCategories(result)
    })
    .catch((err:any)=>{
      console.log(err)
    })
  },[])

  useEffect(()=>{
    if(categories.length > 0){

      let tempPrdtList:any = []

      const handleProductList=(category:any)=>{
        category.map((category:any)=>{
          if(category.categories){
            handleProductList(category.categories)
          }else if(category.products){
            tempPrdtList = [...tempPrdtList,...category.products]
          }
        })
      }

      categories.map((category:any)=>{
        if(category.categories){
          handleProductList(category.categories)
        }else if(category.products){
          tempPrdtList = [...tempPrdtList,...category.products]
        }
      })
      setProductList(tempPrdtList)
    }
  },[selectedCategory])
  


  const handleCategorySelect=(category:any)=>{
    setCategories(category.categories ?? [])
    setProductList(category.products ?? [])
    setSelectedCategory(category.name)
  }

  return (
    <div className='w-full flex flex-col justify-center py-5'>
      <div className='space-y-2'>
        <h1 className='font-bold text-lg'>{}</h1>
        <CategoryListing
          selectedCategory={selectedCategory}
          categories={categories}
          totalProducts={productList.length}
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
