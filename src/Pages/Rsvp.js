import React from 'react'

const details = [
    {
        icon: 'fa fa-bell fa-2x mb-6 text-blue-500',
        name: 'The Reception',
        date: 'Saturday, 28, 2093',
        time: '02:00 pm-10:00 pm',
        place: '203 Fake St. Mountain View,',
        country: 'San Francisco, California, USA',
        phone: '+0 (123) 456 78 910'
    },
    {
        icon: 'fa fa-heart fa-2x mb-6 text-blue-500',
        name: 'The Ceremony',
        date: 'Saturday, 28, 2019',
        time: '02:00 pm-10:00 pm',
        place: '203 Fake St. Mountain View,',
        country: 'San Francisco, California, USA',
        phone: '+0 (123) 456 78 910'
    },
    {
        icon: 'fa fa-birthday-cake fa-2x mb-6 text-blue-500',
        name: 'The Party',
        date: 'Saturday, 28, 2093',
        time: '02:00 pm-10:00 pm',
        place: '203 Fake St. Mountain View,',
        country: 'San Francisco, California, USA',
        phone: '+0 (123) 456 78 910'
    }

]

const RSVP = () => {
    return(
        <div>
            <div>
            <h1 className='text-3xl text-center font-bold text-blue-500 mt-10' style={{fontFamily: 'Parisienne'}}>PLACE AND TIME</h1>
            </div>

            <div className='sm:flex-none md:flex mt-10'>
               {details.map(item => 
                 <div className='border-solid border-2 shadow-lg ml-4 mr-4 pt-8 pb-8 mt-5 mb-5 border-blue-600 sm:flex-1 md:flex-1 lg:flex-initial xl:flex-1 text-center'>
                 <i className={item.icon}></i>
                 <p className='text-2xl'>{item.name}</p>
                 <p className='text-gray-500'>{item.date}</p>
                 <p className='mb-6 text-gray-500'>{item.time}</p>
                 <p className='text-gray-500'>{item.place}</p>
                 <p className='mb-6 text-gray-500'>{item.country}</p>
                 <p className='text-blue-500'>{item.phone}</p>
             </div>  
                )}              
            </div>

            <div>
                <div>
                    <h2 className='text-blue-500 font-bold text-3xl text-center mt-10' style={{fontFamily: 'Parisienne'}}>ARE YOU ATTENDING?</h2>
                </div>
                <div className='flex justify-center shadow-lg'>
                <form>
                    <p ><input className='pt-2  mb-3 text-blue-500 pl-1 pb-2' type='text' placeholder='Name'></input></p>
                    <p><input className='pt-2 mb-3 text-blue-500 pl-1 pb-2' type='email' placeholder='Your Email'></input></p>
                    <p>
                        <select className='pt-2 mb-3 text-blue-500 pl-1 pb-2'>
                            <option>Guest</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </select>
                    </p>
                    <textarea placeholder='Message'>

                    </textarea>
                    <p className='bg-blue-500 p-3 text-center cursor-pointer rounded-full mb-4'>I am attending</p>
                </form>
                </div>
              
            </div>
        </div>
    )
}

export {RSVP}