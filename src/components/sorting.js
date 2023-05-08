import React from 'react'

const sorting = ({setSort}) => {
  return (
    <div className='w-full bg-gray-200 h-10 flex items-center justify-end px-5 outline-none'>
        <select onChange={e => setSort(e.target.value)} className='bg-white  text-black  outline-none'>
            <option value="inc">Artan</option>
            <option value="dec">Azalan</option>
        </select>
    </div>
  )
}

export default sorting