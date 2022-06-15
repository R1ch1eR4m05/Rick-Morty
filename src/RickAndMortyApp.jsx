import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CardCharacter from './components/CardCharacter'
import InputSearch from './components/InputSearch'
import LocationInfo from './components/LocationInfo'
import useLocationApi from './hooks/useLocationApi'

const RickAndMortyApp = () => {

const [searchLocation, setSearchLocation] = useState()

const location = useLocationApi(searchLocation)

  return (
    <div className='container'>
        <div className='background'>
          <div>
            <InputSearch setSearchLocation={setSearchLocation}/>
          </div>
        </div>
          <div className='flex-center'>
            <LocationInfo location={location}/>
          </div>
        <div className='card'>
            {location?.residents.map(resident => (
                <CardCharacter 
                resident={resident}
                key={resident}
                />
            ))}
        </div>
    </div>
  )
}

export default RickAndMortyApp