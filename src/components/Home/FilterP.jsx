import React, { useState } from 'react'

const FilterP = (products = []) => {
    const [filter, setFilter] = useState("");
  return (
    <div className='bg-white rounded-md p-2 m-4'>
        Filter by Price
        <div className=''></div>
        
    </div>
  )
}

export default FilterP