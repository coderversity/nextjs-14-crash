import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <header>
            <div className="navbar">
                <Image
                    height={200}
                    width={200}
                    src='/pokemon-logo.png'
                    priority={true}
                    alt='logo'
                />
                <small className='text-sm'>&trade;&nbsp;</small><span className='font-bangers'>Profiler</span>
            </div>
        </header>
    )
}

export default Header