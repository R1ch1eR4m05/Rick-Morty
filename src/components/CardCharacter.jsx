import axios from 'axios'
import React, { useEffect, useState } from 'react'
import useCharacterApi from '../hooks/useCharacterApi'

const CardCharacter = ({resident}) => {

    const character = useCharacterApi(resident)

  return (
    <article className='individual'>
        <img src={character?.image} alt="" />
        <h2>{character?.name}</h2>
        <p>Status: {character?.status}</p>
        <p>Origin: {character?.origin.name}</p>
        <p>Episodes: where appears: {character?.episode.length}</p>
    </article>
  )
}

export default CardCharacter