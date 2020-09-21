import React from 'react'

export const GifGridItem = ({title,id,url}) => {
    return (
        <div className="card animate__animated animate__fadeIn" >
            <img src={url}  alt={title} />
            {/* <span>{title}</span> */}
        </div>
    )
}
