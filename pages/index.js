import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { request } from "@/lib/datocms";
import Button from '@/components/Button';
import Image from 'next/image';
import ReactPlayer from 'react-player';
import { EmblaCarousel } from '@/components/EmblaCarousel';


const HOMEPAGE_QUERY = `{
  homePage {
    clientsText
    clientLogos {
      url
      width
      height
    }
    whoWeAre
    showreel {
      url
    }
  }
}`;

const INSIGHTS_QUERY = `{
  allInsights(first:3) {
    title
    category
    coverImage {
      url
    }
  }
}`

const WORK_QUERY = `
  {
    allProjects(first:3) {
      thumbnail {
        url
      }
      title
      shortDescription
    }
  }  
`

export async function getStaticProps() {
  const home = await request({
    query: HOMEPAGE_QUERY
  });
  const insights = await request({
    query: INSIGHTS_QUERY
  });

  const work = await request({
    query: WORK_QUERY
  });
  return {
    props: { 
      home, 
      insights, 
      work
    }
  };
}

export default function Home({ home, insights, work }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
        <div className="mt-10 md:mt-0 relative pt-[56.25%] mb-8 rounded-xl">
          <ReactPlayer url={home.homePage.showreel.url} playing muted loop width='100%' height='100%' className="absolute top-0 left-0 rounded-xl overflow-hidden" />
        </div>
      {/* Who we are section */}
      <div className='bg-pink mx-[-2em] px-8 pt-8 mb-6'>
        <div className='md:w-3/4'>
          <div className='text-xl md:text-2xl mb-5 md:mb-3'>Who we are</div>
          <div className='text-3xl md:text-5xl font-bold'>{home.homePage.whoWeAre}</div>
        </div>
        <div className='text-center py-10'>
        <Button href="/about" text="Find out more"></Button>
        </div>
      </div>
      <div className='hidden md:block'>
      <div className='text-2xl mb-3'>Latest Work</div>
        <div className='grid grid-cols-3 gap-5'>
        {work.allProjects.map((w, i) => (
            <div key={i} className="hover-view">
                <div className='relative w-full h-[70vh]'>
                  <Image src={w.thumbnail.url} objectFit="cover" layout='fill'/>
                </div>
                <div className='relative view'>
                  <div className='triangle absolute right-0 bottom-0'></div>
                  <div className='absolute right-2 bottom-2 text-white text-xl'>View</div>
                </div>
                <div className='mt-5'>
                  <div className='text-xl'>{w.title}</div>
                  <div className='text-xl text-slate-600'>{w.shortDescription}</div>
                </div>
            </div>
        ))}</div>
      </div>
      <div className='md:hidden'>
        <EmblaCarousel title='Latest Work'>
          {work.allProjects.map((w, i) => ( 
            <div className='embla__slide relative' key={i}><Link href={w.slug}><div className='relative'>
              <div className='relative w-full h-[70vh]'>
                  <Image src={w.thumbnail.url} objectFit="cover" layout='fill'/>
              </div>
              <div className='mt-5'>
                  <div className='text-xl'>{w.title}</div>
                  <div className='text-xl text-slate-600'>{w.shortDescription}</div>
              </div>
              </div></Link>
            </div>
          ))}
        </EmblaCarousel>
      </div>
      <div className='text-center py-10'>
        <Button href="/work" text="Discover all work"></Button>
      </div>
      <div className='bg-gray-100 mx-[-2em] px-8 pt-6 rounded-xl'>
        <div className='hidden md:block'>
        <div className='text-2xl mb-3'>Insights</div>
        <div className='grid grid-cols-3 gap-5'>
        {insights.allInsights.map((insight, i) => (
            <div key={i} className='hover-view'>
              <div className='relative'>
                <div className='relative w-full h-[40vh]'>
                  <Image src={insight.coverImage.url} objectFit="cover" layout='fill' className='rounded-xl'/>
                </div>
              
                <div className='absolute top-5 left-5'>
                  <div className='text-xl'>{insight.category}</div>
                  <div className='text-2xl font-bold uppercase w-2/3'>{insight.title}</div>
                </div>
                <div className='relative view'>
                  <div className='triangle-black absolute right-0 bottom-0 rounded-br-xl'></div>
                  <div className='absolute right-2 bottom-2 text-white text-xl'>View</div>
                </div>
              </div>

            </div>
        ))}</div>
        </div>
        <div className='md:hidden'>
        <EmblaCarousel title='Insights'>
          {insights.allInsights.map((insight, i) => (
            <div className='embla__slide relative' key={i}><Link href='#'><div className='relative'>
              <div className='relative w-full h-[40vh]'>
                <Image src={insight.coverImage.url} objectFit="cover" layout='fill' className='rounded-xl'/>
              </div>
              <div className='absolute top-5 left-5'>
                  <div className='text-xl'>{insight.category}</div>
                  <div className='text-2xl font-bold uppercase w-2/3'>{insight.title}</div>
                </div>
              </div></Link>
            </div>
          ))}
        </EmblaCarousel></div>
        <div className='text-center py-10'>
          <Button href="/work" text="Discover all insights"></Button>
        </div>
      </div>
      <div className='md:flex my-10 md:space-x-20'>
        <div className='md:w-1/2'>
          <div className='text-2xl mb-5'>Clients</div>
          <div className='text-xl w-4/5'>{home.homePage.clientsText}</div>
        </div>
        <div className='w-[90%] pt-10 md:pt-0 flex md:w-1/2 items-center justify-center flex-wrap'>{home.homePage.clientLogos.map((logo, i) => (
          <div key={i} className='relative w-1/3 px-2'><Image src={logo.url} width={logo.width} height={logo.height}/></div>
        ))}</div>
      </div>
    </>
  )
}
