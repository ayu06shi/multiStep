import React from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Sort = () => {

    // sorting function
const sorting=()=>{

};

  return (
    <div className='flex mt-[5rem] sort-section'>
        <div className='flex flex-row w-full justify-between'>
            {/* < className='flex flex-row justify-between'>
                <p>Sort</p>
                {/* <KeyboardArrowDownIcon/>s */}
             
        <div className=''>
            <form action="#">
                <label htmlFor="sort"></label>
                <select className='p-2 m-5 rounded-md' name="sort" id="sort"
                onClick={sorting}>
                    <option value="lowest">Price (lowest)</option>
        
                    <option value="highest">Price (highest)</option>

                    <option value="lowest">Price (lowest)</option>

                    <option value="lowest">Price (lowest)</option>
                </select>
            </form>

        </div>
        
        </div>
        
    </div>
  )
}

export default Sort