import React from 'react'

const CardSong = ({song,author,img,link}) => {
    return (
        <div className='song'>
            <a href={link}>
                <img alt='' src={img}/>
            </a>
            <h3>{song}</h3>
            <p>{author}</p>
        </div>
    )
}

export default CardSong
