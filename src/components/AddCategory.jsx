import React from 'react'
import { useState } from 'react'
import PropTypes from 'prop-types'

export default function AddCategory(props) {
    const [inputValue, setInputValue] = useState('');
    const { onNewCategory} = props

    const onInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        if (inputValue.trim().length < 1) return;
        onNewCategory(inputValue.trim())
        setInputValue('')
    }
  return (
    <form onSubmit={onSubmit} aria-label='form'>
        <input 
            type="text" 
            placeholder='Buscar gifs' 
            value={inputValue}
            onChange={(e) => onInputChange(e)} 
        />
    </form>
  )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
}