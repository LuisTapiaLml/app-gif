import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    const [categories , setCategories ] =  useState(['apex legends']);

    return(
        <div>
            <h2>Gif Expert App</h2>
            <hr></hr>

            <AddCategory setCategories= {setCategories} />

            <ol>
                {
                    categories.map( (category) => 
                        <GifGrid key={category} category={category}/> 
                    )
                }
            </ol>
        </div>
    );
} 

export {GifExpertApp};