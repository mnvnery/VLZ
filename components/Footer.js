import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="z-[2]">
      <div className="mx-auto bg-black px-5 py-10 text-white md:pl-8 md:pr-20 xxl:py-16 xxl:pl-16">
        <div className="flex space-x-5 md:justify-between md:space-x-16">
          <div className="relative h-10 w-1/2 md:h-28 md:w-2/5 xxl:h-48 xxl:w-[35%]">
            <Image src={'/static/images/logo-white.svg'} layout="fill" objectFit="contain" />
          </div>
          <div className="font-bold leading-tight md:text-3xl xxl:text-6xl">
            <div>
              HELLO
              <br />
              @VIVALAZOOM.CO.UK
            </div>
            <div>+44(0)161 225 1045</div>
            <br />
            <div className="md:hidden">
              <a href="https://www.instagram.com/viva_la_zoom/" target="_blank" rel="noreferrer">
                INSTAGRAM
              </a>
              <br />
              <a href="https://twitter.com/vivalazoomuk" target="_blank" rel="noreferrer">
                TWITTER
              </a>
              <br />
              <a href="https://en-gb.facebook.com/vivalazoom/" target="_blank" rel="noreferrer">
                FACEBOOK
              </a>
            </div>
          </div>
          <div className="hidden font-bold leading-tight md:block md:text-3xl xxl:text-6xl">
            <a href="https://www.instagram.com/viva_la_zoom/" target="_blank" rel="noreferrer">
              INSTAGRAM
            </a>
            <br />
            <a href="https://twitter.com/vivalazoomuk" target="_blank" rel="noreferrer">
              TWITTER
            </a>
            <br />
            <a href="https://en-gb.facebook.com/vivalazoom/" target="_blank" rel="noreferrer">
              FACEBOOK
            </a>
          </div>
        </div>
        <div className="flex w-full justify-between border-b border-white pb-5 pt-7 md:justify-between md:space-x-20 md:border-0 md:pb-0 md:text-xl xxl:pt-16 xxl:text-4xl">
          <div>VivaLaZoom©2022</div>
          <div>All Rights Reserved</div>
          <div>Privacy</div>
          <div className="hidden md:block">
            Design:{' '}
            <a
              href="http://www.studiodbd.com"
              target="_blank"
              className="hover:underline"
              rel="noreferrer"
            >
              StudioDBD
            </a>
          </div>
        </div>
        <div className="mt-4 md:hidden">
          Design:{' '}
          <a
            href="http://www.studiodbd.com"
            target="_blank"
            className="hover:underline"
            rel="noreferrer"
          >
            StudioDBD
          </a>
        </div>
      </div>
    </footer>
  )
}
