import React from 'react'

let indexQuote = 1;

const MainQuote = ({quote,author,img,setAuthor,setQuote}) => {

    

    const handleNext = ()=>{

        if(indexQuote===0){
            setQuote('“One good thing about music, when it hits you, you feel no pain”')
            setAuthor('-Bob Marley')
        }if(indexQuote===1){
            setQuote('“Music gives a soul to the universe, wings to the mind, flight to the imagination and life to everything”')
            setAuthor('-Plato')
        }if(indexQuote===2){
            setQuote('“One of my biggest emotions is sitting with a guitar or piano and trying to make a song sound out of nowhere”')
            setAuthor('-Paul McCartney')  
        }if(indexQuote===3){
            setQuote('“Life is like a piano. What you get out of it depends on how you play it”')
            setAuthor('-Tom Lehrer')  
        }if(indexQuote===4){
            setQuote('“Without music, life would be a mistake”')
            setAuthor('-Friedrich Nietzsche')  
        }if(indexQuote===5){
            setQuote('“To play a wrong note is insignificant; to play without passion is inexcusable”')
            setAuthor('-Ludwing van Beethoven')
            indexQuote=0;
            return
        }

        indexQuote++;
        
    }

    

    return (
        <div className='cardQuote'>
            <p className='textInfo'>{quote}</p>
            <div className='infoQuote'>
                <h4 className='author'>{author}</h4>
                <img onClick={handleNext} className='btnMain' alt='btn' src={img}/>
            </div>
            
        </div>
    )
}

export default MainQuote
