import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Category from './Category'

export default function Categories() {
  const [categories, setCategories] = useState(undefined);

    useEffect(() => {
        axios.get("https://good-reads-server.herokuapp.com/user/categories")
            .then(function (response) {
                setCategories(response.data)
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])
    if (categories)
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
