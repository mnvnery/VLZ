import siteMetadata from '@/data/siteMetadata'
import InsightsLayout from '@/layouts/InsightsLayout'
import { PageSEO } from '@/components/SEO'
import { request } from '@/lib/datocms'
import Image from 'next/image'
import Link from 'next/link'


const INSIGHTS_QUERY = `{
  insightsPage {
    headerImage {
      url
    }
    footerImage {
      url
    }
    intro
    inbetween
    articles {
      title
      slug
      category
      content
      date
      size
      coverImage {
        url
      }
      layoverColor {
        hex
      }
      textWhite
    }
  }
}`

function postSize(size) {
  if (size === 'small') {
    return 'col-span-12 md:col-span-4'
  }
  if (size === 'medium') {
    return 'col-span-12 md:col-span-6'
  }
  if (size === 'large') {
    return 'col-span-12'
  }
}

function imageHeight(size) {
  if (size === 'small') {
    return 'h-[30vh] md:h-[40vh]'
  }
  if (size === 'medium') {
    return 'h-[30vh] md:h-[55vh]'
  }
  if (size === 'large') {
    return 'h-[60vh] md:h-[70vh]'
  }
}

function colour(hex) {
  if (hex === '#FFBAC4') {
    return 'bg-pink'
  }
  if (hex === '#FF5467') {
    return 'bg-coral'
  }
  if (hex === '#5136B7') {
    return 'bg-purple'
  }
  if (hex === '#F6F6F6') {
    return 'bg-gray-100'
  }
  if (hex === null) {
    return ''
  }
}

export async function getStaticProps() {
  const page = await request({
    query: INSIGHTS_QUERY
  });
  return { props: { page: page.insightsPage } }
}

export default function Insights({ page }) {
  return (
    <>
      <PageSEO title={`Insights`} description={siteMetadata.description} />
      <div className="absolute w-[102vw] h-[20vh] md:h-[40vh] mx-[-1vw] top-0 left-0">
        <Image src={page.headerImage.url} objectFit="cover" layout="fill" className="object-left-bottom" />
      </div>
      <div className="mt-[16vh] md:mt-[35vh]"></div>
      <div className='md:w-3/4 mb-12 md:mb-16'>
        <div className='text-xl md:text-2xl mb-5 md:mb-3'>Insights</div>
        <div className='text-3xl md:text-5xl font-bold'>{page.intro}</div>
      </div>
      <div className='md:grid grid-cols-3 gap-7 mb-16 space-y-5 md:space-y-0'>
      {page.articles.slice(0, 3).map((insight, i) => (
            <div key={i} className='hover-view'>
              <Link href={`#`}><div>
              <div className='relative'>
                <div className='relative w-full h-[40vh]'>
                  <Image src={insight.coverImage.url} objectFit="cover" layout='fill' className='rounded-xl'/>
                </div>
              
                <div className='absolute top-5 left-5'>
                  <div className='text-2xl mb-5'>{insight.category}</div>
                  <div className='text-3xl font-bold w-2/3 uppercase leading-extra-tight'>{insight.title}</div>
                </div>
                <div className='relative view'>
                  <div className='triangle-black absolute right-0 bottom-0 rounded-br-xl'></div>
                  <div className='absolute right-2 bottom-2 text-white text-xl'>View</div>
                </div>
              </div>
              </div></Link>
            </div>
        ))}
      </div>
      <div className='text-5xl md:text-8xl md:w-2/3 leading-extra-tight mb-16'>
          {page.inbetween}
      </div>
      <div className='grid grid-cols-12 gap-5 md:gap-7 grid-flow-dense mb-16'>
      {page.articles.slice(3).map((insight, i) => (
        <div key={i} className={`hover-view ${postSize(insight.size)}`}><Link href={`#`}><div className={insight.size === 'large' ? 'flex w-full space-x-7' : ''}>
          <div className={`relative ${insight.size === 'large' ? 'w-full md:w-2/3' : ''}`}>
            <div className={`relative w-full ${imageHeight(insight.size)}`}>
              <Image src={insight.coverImage.url} objectFit="cover" layout='fill' className={`${insight.size === 'small' ? 'rounded-xl' : 'rounded-xl rounded-tl-none'}`}/>
            </div>
            <div className={`absolute top-0 left-0 w-full h-full mix-blend-multiply ${insight.size === 'small' ? 'rounded-xl' : 'rounded-xl rounded-tl-none'} ${insight.layoverColor  ? colour(insight.layoverColor.hex) : ''}`}></div>
            <div className={`absolute top-5 left-5 ${insight.textWhite ? 'text-white' : 'text-black'}`}>
              <div className='text-2xl mb-5'>{insight.category}</div>
              <div className={`${insight.size === 'small' ? 'text-3xl w-2/3' : 'text-4xl w-2/5'} font-bold uppercase leading-extra-tight`}>{insight.title}</div>
            </div>
            <div className='relative view'>
              <div className='triangle-black absolute right-0 bottom-0 rounded-br-xl'></div>
              <div className='absolute right-2 bottom-2 text-white text-xl'>View</div>
            </div>
          </div>
          <div className={`${insight.size === 'large' ? 'hidden md:block md:w-1/3 relative h-[auto]' : 'hidden'}`}><Image src={'/static/images/asterisk.svg'} objectFit="contain" layout='fill'></Image></div>
          </div></Link></div>
      ))}
      </div>
    </>
  )
}
