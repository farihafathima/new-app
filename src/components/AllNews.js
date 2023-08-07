import React from 'react'
import { useState } from 'react'
import { NewsCard } from './NewsCard'


export const AllNews = (props) => {
    
   
    return (
        <div>
            {
           props.news.map((item)=>{
             return(
                <NewsCard singlenews={item}/>
             )
            })
        }
        </div>
    )
}
