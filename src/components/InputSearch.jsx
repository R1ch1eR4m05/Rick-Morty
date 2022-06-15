import React, { useState } from 'react'

const InputSearch = ({setSearchLocation}) => {



    const searchLocation = e => {
        e.preventDefault()
        setSearchLocation(e.target.children[0].value)
    }

  return (
    <form onSubmit={searchLocation}>
        <input type="text" placeholder='Enter a number (1-126)'/>
        <button className='btn-search'>Search by location</button>
    </form>
  )
}

export default InputSearch