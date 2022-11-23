import React from 'react'
import { useState } from 'react'
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

export default function GifExpertApp() {
    const [categories, setCategories] = useState(new Set(['One punch', 'alfredo']));

    const onAddCategory = (onCategory) => {
        setCategories(new Set([onCategory, ...categories]))

    }

    return (
    <>
        {/* titulo */}
        <h1>GifExpertApp</h1>
        {/* Input */}
        <AddCategory 
            onNewCategory={onAddCategory}
        />
        {Array.from(categories).map(category => 
            <GifGrid 
                key={category} 
                category={category} 
            />
            )
        }
    </>
    )
}
