import siteMetadata from '@/data/siteMetadata'
import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import { PageSEO } from '@/components/SEO'
import { request } from "@/lib/datocms";
import Image from 'next/image';
import Link from 'next/link';

const WORK_QUERY =`{
  workPage {
    projects {
      large
      shortDescription
      pullOutQuote
      slug
      story
      testimonial
      testimonialName
      testimonialRole
      title
      vision
      category
      brief
      videoLink {
        url
      }
      thumbnail {
        url
      }
      allImages {
        url
      }
    }
    footerImage {
      url
    }
  }
}`

export async function getStaticProps() {
  const work = await request({
    query: WORK_QUERY
  });
  return {
    props: { 
      work: work.workPage
    }
  };
}

export default function Work({work}) {
  return (
    <>
      <PageSEO title={`Work`} description={siteMetadata.description} />
      <div className='md:grid grid-cols-2 gap-7 mb-10 mt-7 md:mt-0'>
      {work.projects.map((p, i) => (
        <div key={i} className={`hover-view ${p.large ? 'col-span-2' : ''}`}>
          <Link href={`/work/${p.slug}`}><a>
              <div className={`relative w-full ${p.large ? 'h-[65vh] md:h-[90vh]' : 'h-[35vh] md:h-[65vh]'}`}>
                <Image src={p.thumbnail.url} objectFit="cover" layout='fill' className={`${p.large ? 'rounded-xl md:rounded-none' : 'rounded-xl'}`}/>
              </div>
              <div className='relative view'>
                <div className={`triangle absolute right-0 bottom-0 ${p.large ? '' : 'rounded-br-xl'}`}></div>
                <div className='absolute right-2 bottom-2 text-white text-xl'>View</div>
              </div>
              <div className='mt-5 border-t border-black pt-4 md:pt-5 mb-7 md:mb-0'>
                <div className='text-xl md:text-2xl uppercase'>{p.title}</div>
                <div className='text-xl md:text-2xl font-bold uppercase'>{p.category}</div>
              </div>
          </a></Link>
        </div>
      ))}
      </div>
      <div className='relative w-full h-12 md:h-44 my-16'>
        <Image src={work.footerImage.url} objectFit="contain" layout='fill'/>
      </div>
    </>
  )
}
