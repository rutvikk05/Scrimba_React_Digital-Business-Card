import React from 'react'

export default function Header(){

    return (
        <div className="header--container">
            <div className="img--container">
<<<<<<< HEAD
                <img src= "./public/profilepic.jpg" alt='profile pic rk' /> 
=======
                <img src= "./src/assets/profilepic.JPG" alt='profile pic rk' /> 
>>>>>>> 404478f87006ebf80aa5cdd964da648eb4c9ca1e
                </div>
             <div className='sub--container'>
              <div className='profile--name'>
                <h2>Rutvik Kakde</h2>
              </div>
              <div className = 'profile--title'>
                <h5>Frontend Developer</h5>
                </div>
                <div className='profile--website'>
                    <a href = "rutvikkakde.com" target={'_blank'}>rutvikkakde.com</a>
                </div>
    
            </div>
             
               <div className = "btn--container">
                <button className='email'>
                    <a href = "mailto:rutvikk5@gmail.com>"><img src='./public/email.svg' className='e-logo'/>  Email</a>
                </button>
                <button className='linkedin'>
                    <a href='https://www.linkedin.com/in/rutvikk05/' target={'_blank'}><img src='./public/linkedin.svg' className='l-logo'/>  LinkedIn</a>
                </button>

                </div>  
            

             </div>


            
            
            
            
     
    )
}
