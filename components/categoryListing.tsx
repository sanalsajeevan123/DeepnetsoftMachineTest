import { useState } from 'react'

type MyProps = {
    selectedCategory:string
    categories:{[x:string]:any}[]
    totalProducts:number
    handleCategorySelect:Function
}

const CategoryListing = (props:MyProps) => {
  return (
    <div className='w-full flex justify-center py-5 space-y-5'>
      <div className='space-y-2'>
        <h1 className='font-bold text-lg min-w-max px-3 text-center'>{`${props.selectedCategory === "" ? `Categories ` : `${props.selectedCategory} ` } (${props.totalProducts})`}</h1>
        <div className='min-w-max border border-gray-400 max-h-96 overflow-y-auto'>
            {props.categories && props.categories.map((category:any,key:any)=>{
                return(
                    <button onClick={()=>props.handleCategorySelect && props.handleCategorySelect(category)} className='w-full flex items-center text-sm space-x-4 py-2 px-4 hover:bg-blue-500 hover:text-white' key={category.id}>
                        {`${category.name} (${category.totalProducts})`}
                    </button>
                )
            })}
        </div>
      </div>
    </div>
  )
}

export default CategoryListing
