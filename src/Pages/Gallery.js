import React from 'react'

const images1 = [
    {
        source: '../imgs/oswaldo.jpg'
    },
    {
        source: '../imgs/evelina-friman.jpg'
    },
    {
        source: '../imgs/milad.jpg'
    }
]

const images2 = [
    {
        source: '../imgs/ivonne.jpg'
    },
    {
        source: '../imgs/victoria.jpg'
    },
    {
        source: '../imgs/samantha.jpg'
    }
]

const Gallery = () => {
    return(
        <div>
                 <div>
          <h2 className='text-3xl mt-5 font-bold text-blue-500 text-center' style={{fontFamily: 'Parisienne'}}>GALLERY</h2>
        </div>
        <div className='sm:flex-none md:flex '>
            {images1.map(item => 
                <div className='sm:flex-1 md:flex-1 lg:flex-initial xl:flex-1 ml-5 mr-5 mt-5 mb-5'>
                <img src={item.source} alt='wedding-1'/>
            </div>
                )}
          
        </div>
        <div className='sm:flex-none md:flex '>
           {images2.map(item => 
            <div className='sm:flex-1 md:flex-1 lg:flex-initial xl:flex-1 ml-5 mr-5 mt-5 mb-5'>
            <img src={item.source} alt='wedding-1'/>
        </div>
            )}
        </div>
        </div>
       
    )
}

export {Gallery}