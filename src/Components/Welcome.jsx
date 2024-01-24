import React from 'react'
import { RiHotelLine } from "react-icons/ri";
function Welcome() {
    return (
        <>
            <div className='container mt-4  '>
                <div className='cozystay'>
                    <span className='icon'><RiHotelLine /></span>
                    <p className='pera'>WELCOME TO COZYSTAY RESORT</p>
                </div>
                <div className='cozystay-heading'>
                    <h1 className='pt-serif text-center text-dark'>In the Heart of the South Pacific, Outstanding Views</h1>
                    <p className='text-center'>Nestled in the heart of the Pacific Islands resort, on the edge of a tranquil and beautiful Garden Island, CozyStay is a haven of warmth, tranquility and rejuvenation. Bathed in brilliant sunshine and clear skies, it offers stunning views of palm-lined beaches and gorgeous coral reefs.</p>
                </div>
            </div>
        </>
    )
}

export default Welcome