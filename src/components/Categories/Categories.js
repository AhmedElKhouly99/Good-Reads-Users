import React, { useState } from 'react'
import Category from './Category'

export default function Categories() {
  const [categories, setCategories] = useState([{name :"ghfvh"},{name:"vfesd"},{name:'fgdsvgd'},{name:'gbfgfb'},{name:'gtrfvgfv'},{name:'fvdsbgtf'}]);
  return (
    <div className='row justify-content-around'>
      {
        categories.map((cat)=>{
          return <Category cat={cat} />
        })
      }
    </div>
  )
}
