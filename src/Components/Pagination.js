import React, {useState} from 'react'

function Pagination() {
  let [page, setPage] = useState(1);
  const increment = () => {
    setPage(page+1);
  }
  const decrement = () => {
    if(page>1)
    setPage(page-1);
  }
  return (
    <div className='w-full flex justify-center mt-8 mb-8'>
        <button className='p-2 border-2 border-indigo-500 text-indigo-500 border-r-0'
         onClick={decrement}>Prev</button>
        <button className='p-2 border-2 border-indigo-500 text-slate-50 border-r-0 bg-slate-600'>{page}</button>
        <button className='p-2 border-2 border-indigo-500 text-indigo-500'
        onClick={increment}>Next</button>
    </div>
  )
}

export default Pagination