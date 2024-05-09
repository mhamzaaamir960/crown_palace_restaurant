import React from 'react'
import Link from "next/link"

function HeroButton() {
  return (
    <div className='hover:scale-105 translate-all ease-in-out delay-100 duration-300 flex shrink-0'>
      <Link href={'#menu'} className='shrink-0 px-1 xs:px-2 sm:px-4 py-1 rounded-full bg-secondary text-primary text-lg sm:text-xl font-medium '>Explore Menu</Link>
    </div>
  )
}

export default HeroButton