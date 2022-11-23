import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { getGifts } from '../helpers/getGifts';
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

export default function GifGrid({category}) {
  const { images, isLoading  } = useFetchGifs(category)


    
  return (
    <>
        <h3>{category}</h3>
        <div className='card-grid'>
          {
              isLoading ? <h2>Cragando...</h2> : images.map(gif => <GifGridItem key={gif.id} {...gif} />)
          }
        </div>
    </>
  )
}
