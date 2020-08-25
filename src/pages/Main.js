import React, { useState } from 'react'
import MainCard from '../components/MainCard'
import MainQuote from '../components/MainQuote'
import OptionCard from '../components/OptionCard'
import btnElementary from '../images/btnElementary.png'
import btnProfessional from '../images/btnProfessional.png'
import btnHigher from '../images/btnHigher.png'
import btnNextQuote from '../images/btnNextQuote.png'
import btnSongs from '../images/btnSongs.png'
import btnFavorite from '../images/btnFavorite.png'
import btnInfo from '../images/btnInfo.png'
import btnOpen from '../images/btnOpen.png'
import btnClose from '../images/btnClose.png'
import '../styles/Main.css'

const Main = () => {

    const [quote, setQuote] = useState('“One good thing about music, when it hits you, you feel no pain”')
    const [author, setAuthor] = useState('-Bob Marley')

    return (
        <div className='cont-main center container'>
            
            <MainCard 
            title='Elementary'
            info='learn a lot of songs to impress your friends.'
            img={btnElementary}
            color='red'
             />
            <MainCard 
            title='Professional'
            info='Here you will learn new concepts and put into practice what you learned in the previous lesson.'
            img={btnProfessional}
            color='blue'
             />
            <MainCard 
            title='Higher'
            info='You will put the previously learned theory into practice and learn advanced tips.'
            img={btnHigher}
            color='purple'
             />
            <OptionCard 
            title='Songs'
            info='You will learn the basic and primordial lessons when learning to play any instrument.'
            img={btnSongs}
            color='red'
             />
            <OptionCard 
            title='Favorite'
            info='Create amazing playlists and share them with others.'
            img={btnFavorite}
            color='blue'
             />
            <OptionCard 
            title='Info'
            info='About me, support and comments.'
            img={btnInfo}
            color='purple'
             />
             <MainQuote 
            quote={quote}
            author={author}
            img={btnNextQuote}
            setQuote={setQuote}
            setAuthor={setAuthor}
             />
        </div>
    )
}

export default Main
