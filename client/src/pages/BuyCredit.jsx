import React from 'react'

const BuyCredit = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-blue-500'>
      <form action="submit" className='flex flex-col gap-4 w-[700px] p-6 border border-gray-300 rounded-lg shadow-lg absolute background-blur bg-white'>
        <label htmlFor="">Enter the number of you want to buy</label>
        <input type="text" placeholder='credits' className='border border-gray-400 p-4' />
        <label htmlFor="">Select the mode of payment</label>
        <select name="" id="" className='border border-gray-300 p-4 rounded-lg'>
          <option value="">Gpay</option>
          <option value="">Phonepay</option>
          <option value="">Paytm</option>
        </select>

      </form>
    </div>
  )
}

export default BuyCredit