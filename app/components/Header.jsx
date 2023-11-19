import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <header>
            <div className="navbar">
                <Image height={200} width={200} src='/pokemon-logo.png' alt='logo' /><span>&trade; Profiler</span>
            </div>
        </header>
    )
}

export default Header