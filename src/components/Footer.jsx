import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-blue-500 py-12'>
      <div className="container mx-auto flex flex-col lg:flex-row gap-y-4 lg:justify-between">
        <p className='text-center lg:text-left'>Copyright &copy; React Ecommerce 2022. All Rights Reserved.</p>
        <p className='text-center lg:text-left'>Created by <a href="/">@signorPao</a></p>
      </div>
    </footer>
  )
}

export default Footer
