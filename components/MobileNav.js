import { useState } from 'react'
import Link from './Link'
import headerNavLinks from '@/data/headerNavLinks'
import Image from 'next/image'
import siteMetadata from '@/data/siteMetadata'

const MobileNav = () => {
  const [navShow, setNavShow] = useState(false)

  const onToggleNav = () => {
    setNavShow((status) => {
      if (status) {
        document.body.style.overflow = 'auto'
      } else {
        // Prevent scrolling
        document.body.style.overflow = 'hidden'
      }
      return !status
    })
  }

  return (
    <div className="sm:hidden">
    <button
        type="button"
        className="ml-1 mr-1 h-8 w-8 rounded py-1"
        aria-label="Toggle Menu"
        onClick={onToggleNav}
    >
        <svg width="32" height="32" viewBox="0 0 25 25" fill="currentColor" className="text-gray-900" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11 11v-11h1v11h11v1h-11v11h-1v-11h-11v-1h11z"/></svg>
    </button>
    <div
        className={`fixed top-0 left-0 z-10 h-full w-full transform bg-petrol fill-white text-white duration-300 ease-in-out ${navShow ? 'translate-x-0' : 'translate-x-full'}`}
    >
        <div className="flex justify-between mt-6">

        <Link href="/" className='relative h-10 w-1/2 ml-6'>
            <Image src={'/static/images/logo-white.svg'} layout='fill' objectFit='contain' />
        </Link>

            <button
                type="button"
                className="mr-4 h-8 w-8 rounded"
                aria-label="Toggle Menu"
                onClick={onToggleNav}
            >
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z"/></svg>
            </button>
        </div>
        <nav className="fixed flex flex-col justify-between mt-16 h-[75%]">
            <div>
                {headerNavLinks.map((link) => (
                    <div key={link.title} className="px-5 py-4">
                        <Link
                            href={link.href}
                        >
                            <a onClick={onToggleNav} className="text-7xl text-white leading-8">{link.title}</a>
                        </Link>
                    </div>
                ))}
                <div className='px-5 py-4'><a href={`mailto:${siteMetadata.email}`} className='text-7xl text-white leading-8'>Contact</a></div>
            </div>
            <div className='uppercase px-5 leading-tight font-bold'>
                <div>HELLO<br/>@VIVALAZOOM.CO.UK</div>
                <div>+44(0)161 225 1045</div>
                <br/>
                <a href='https://www.instagram.com/viva_la_zoom/' target="_blank">INSTAGRAM</a><br/>
                <a href='https://twitter.com/vivalazoomuk' target="_blank">TWITTER</a><br/>
                <a href='https://en-gb.facebook.com/vivalazoom/' target="_blank">FACEBOOK</a>
            </div>
        </nav>
    </div>
</div>
  )
}

export default MobileNav
