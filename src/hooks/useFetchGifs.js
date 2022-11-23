import React, { useEffect, useState } from 'react'
import { getGifts } from '../helpers/getGifts'

export function useFetchGifs(category) {
    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        (async() =>{
        const gifs = await getGifts(category)
        setImages(gifs)
        setIsLoading(false)
    })()

    }, [])
    return {
        images,
        isLoading,
    }
}
