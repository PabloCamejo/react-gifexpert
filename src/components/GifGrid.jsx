import React from 'react'
import PropTypes from 'prop-types'
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

export default function GifGrid({category}) {
  const { images, isLoading  } = useFetchGifs(category)


    
  return (
    <>
        <h3>{category}</h3>
        <div className='card-grid'>
          {
              isLoading ? <h2>Cargando...</h2> : images.map(gif => <GifGridItem key={gif.id} {...gif} />)
          }
        </div>
    </>
  )
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
}