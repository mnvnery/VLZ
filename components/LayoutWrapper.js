import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import Image from 'next/image'
import { useRouter } from "next/router";

export default function LayoutWrapper({ children }) {
  const router = useRouter();
  return (
    <SectionContainer>
      <div className="flex h-screen flex-col justify-between">
        <header className="flex items-center justify-between mx-4 mt-8 md:mx-8 md:mt-10 z-[1]">
          <Link href='/' className='relative h-12 w-3/5 md:h-16 md:w-1/4'>
            <Image src={'/static/images/logo.svg'} layout='fill' objectFit='contain'/>
          </Link>
          <div className="flex items-center text-base leading-5">
            <div className="hidden sm:block">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className={`p-1 text-2xl text-gray-900 sm:p-4 hover:underline ${router.pathname == link.href ? "underline" : ""}`}
                >
                  {link.title}
                </Link>
              ))}
              <a href={`mailto:${siteMetadata.email}`} className='p-1 text-2xl text-gray-900 sm:p-4 hover:underline'>Contact</a>
            </div>
            <MobileNav />
          </div>
        </header>
        <main className="mx-4 md:mx-8 md:mt-10">{children}</main>
        <div className='flex justify-center'>
          <div className='mx-4 bg-pink pt-3 pb-12 mb-[-1em] px-8 md:px-10 rounded-t-xl text-[4.2vw] md:text-xl grid grid-cols-[1fr_0.06fr] gap-2 items-center hover:-translate-y-4 transition-all z-[1]'>
            <div>Have a project in mind? <a href='mailto:hello@vivalazoom.co.uk' className='underline'>Get in touch</a></div>
            <svg xmlns="http://www.w3.org/2000/svg" className='w-full' viewBox="0 0 20.4 16.17"><polygon points="12.32 .02 20.4 8.11 12.32 16.17 12.32 .02"/><polygon points="6.16 0 14.24 8.1 6.16 16.16 6.16 0"/><polygon points="0 0 8.08 8.09 0 16.15 0 0"/></svg>
          </div>
        </div>
        <Footer />
      </div>
    </SectionContainer>
  )
}