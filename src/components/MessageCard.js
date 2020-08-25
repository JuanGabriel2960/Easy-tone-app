import React from 'react'

const MessageCard = ({title,message}) => {
    return (
        <div className='messageCard'>
            <h2>{title}</h2>
            <p>{message}</p>
        </div>
    )
}

export default MessageCard
