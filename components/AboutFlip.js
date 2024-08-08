import Image from 'next/image'
import React, { useState } from 'react'
import ReactCardFlip from 'react-card-flip'


const AboutFlip = ({ owner }) => {
    const [flipped, setFlipped] = useState(false)
    return (
        <div className='w-[300px] h-[300px] m-2' onMouseEnter={() => { setFlipped(!flipped) }} onMouseLeave={() => { setFlipped(!flipped) }}>
            <ReactCardFlip isFlipped={flipped}>
                <div className='bg-white border-black border-2 rounded-full h-[300px] w-[300px] flex flex-col items-center justify-center p-5'>
                    {/* <div className="mb-4 overflow-hidden"> */}
                    <Image src={owner.image} className='w-[100px] h-[100px] rounded-full' alt={owner.name} />
                    {/* </div> */}
                    <h3 className="text-xl font-bold mb-2">{owner.name}</h3>
                    <p className="mb-4 text-lg">{owner.role}</p>
                </div>
                <div className='bg-white border-black border-2 rounded-full h-[300px] w-[300px] flex flex-col items-center justify-center p-5'>
                    <p className="text-sm">{owner.bio}</p>
                </div>
            </ReactCardFlip>
        </div>
    )
}

export default AboutFlip