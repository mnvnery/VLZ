import { request } from "@/lib/datocms";
import Image from "next/image";
import { PageSEO } from "@/components/SEO";
import siteMetadata from "@/data/siteMetadata";
import ReactMarkdown from 'react-markdown';
import Button from "@/components/Button";

function colour(hex) {
  if (hex === '#FFBAC4') {
    return 'pink'
  }
  if (hex === '#FF5467') {
    return 'coral'
  }
  if (hex === '#5136B7') {
    return 'purple'
  }
  if (hex === '#F6F6F6') {
    return 'gray-100'
  }
  return 'beige'
}

const ABOUT_QUERY = `{
  about {
    whoWeAre
    whoWeAreExtra
    people {
      name
      role
      email
      portrait {
        url
      }
    }
    image1 {
      url
    }
    image2 {
      url
    }
    headerImage {
      url
      width
      height
    }
    history
    manifesto {
      backgroundColor {
        hex
      }
      textColor {
        hex
      }
      icon {
        url
      }
      number
      text
    }
  }
}`;



export async function getStaticProps() {
  const aboutPage = await request({
    query: ABOUT_QUERY
  });
  return {
    props: { 
      aboutPage
    }
  };
}

export default function About({aboutPage}) {

  return (
    <>
      <PageSEO title="About" description={siteMetadata.description} />
      <div className="absolute w-[102vw] h-[50vh] md:h-[85vh] mx-[-1vw] top-0 left-0">
        <Image src={aboutPage.about.headerImage.url} objectFit="cover" layout="fill" className="object-bottom" />
        <div className="absolute top-[15vh] right-7 md:right-40 text-5xl md:text-8.5xl w-min text-bold">FILM & MEDIA PRODUCTION COMPANY</div>
      </div>
      <div className="mt-[47vh] md:mt-[75vh]"></div>
      <div className='md:w-3/4 mb-12 md:mb-16'>
        <div className='text-xl md:text-2xl mb-5 md:mb-3'>Who we are</div>
        <div className='text-3xl md:text-5xl font-bold'>{aboutPage.about.whoWeAre}</div>
      </div>
      <div className="flex flex-col items-center md:flex-row md:space-x-10 mb-7">
        <div className="relative w-40 h-40 mb-12">
        <Image src="/static/images/star.svg" objectFit='cover' layout='fill'/>
        </div>
        <div className='text-xl md:text-2xl self-start'><ReactMarkdown>{aboutPage.about.whoWeAreExtra}</ReactMarkdown></div>
      </div>
      <div className="border border-y border-x-0 border-black py-4 mb-7">
        <div className='text-2xl md:text-5xl font-bold text-coral text-center'>WE NEVER STOP</div>
        <div className="marquee-container">
          <div className='text-2xl md:text-5xl font-bold text-center flex justify-around flex-nowrap marquee'>
            <div className="hidden md:block">MOVING</div>
            <svg xmlns="http://www.w3.org/2000/svg" className='hidden md:block w-9 md:w-12 px-2' viewBox="0 0 20.4 16.17"><polygon points="12.32 .02 20.4 8.11 12.32 16.17 12.32 .02"/><polygon points="6.16 0 14.24 8.1 6.16 16.16 6.16 0"/><polygon points="0 0 8.08 8.09 0 16.15 0 0"/></svg>
            <div>IMAGINING</div>
            <svg xmlns="http://www.w3.org/2000/svg" className='w-9 md:w-12 px-2' viewBox="0 0 20.4 16.17"><polygon points="12.32 .02 20.4 8.11 12.32 16.17 12.32 .02"/><polygon points="6.16 0 14.24 8.1 6.16 16.16 6.16 0"/><polygon points="0 0 8.08 8.09 0 16.15 0 0"/></svg>
            <div className="hidden md:block">MAKING</div> 
            <svg xmlns="http://www.w3.org/2000/svg" className='hidden md:block w-9 md:w-12 px-2' viewBox="0 0 20.4 16.17"><polygon points="12.32 .02 20.4 8.11 12.32 16.17 12.32 .02"/><polygon points="6.16 0 14.24 8.1 6.16 16.16 6.16 0"/><polygon points="0 0 8.08 8.09 0 16.15 0 0"/></svg>
            <div>INNOVATING </div>
            <svg xmlns="http://www.w3.org/2000/svg" className='w-9 md:w-12 px-2' viewBox="0 0 20.4 16.17"><polygon points="12.32 .02 20.4 8.11 12.32 16.17 12.32 .02"/><polygon points="6.16 0 14.24 8.1 6.16 16.16 6.16 0"/><polygon points="0 0 8.08 8.09 0 16.15 0 0"/></svg>
          </div>
          <div className='text-2xl md:text-5xl font-bold text-center flex justify-around flex-nowrap marquee marquee2'>
            <div>MOVING</div>
            <svg xmlns="http://www.w3.org/2000/svg" className='w-9 md:w-12 px-2' viewBox="0 0 20.4 16.17"><polygon points="12.32 .02 20.4 8.11 12.32 16.17 12.32 .02"/><polygon points="6.16 0 14.24 8.1 6.16 16.16 6.16 0"/><polygon points="0 0 8.08 8.09 0 16.15 0 0"/></svg>
            <div className="hidden md:block">IMAGINING</div>
            <svg xmlns="http://www.w3.org/2000/svg" className='hidden md:block w-9 md:w-12 px-2' viewBox="0 0 20.4 16.17"><polygon points="12.32 .02 20.4 8.11 12.32 16.17 12.32 .02"/><polygon points="6.16 0 14.24 8.1 6.16 16.16 6.16 0"/><polygon points="0 0 8.08 8.09 0 16.15 0 0"/></svg>
            <div>MAKING</div> 
            <svg xmlns="http://www.w3.org/2000/svg" className='w-9 md:w-12 px-2' viewBox="0 0 20.4 16.17"><polygon points="12.32 .02 20.4 8.11 12.32 16.17 12.32 .02"/><polygon points="6.16 0 14.24 8.1 6.16 16.16 6.16 0"/><polygon points="0 0 8.08 8.09 0 16.15 0 0"/></svg>
            <div className="hidden md:block">INNOVATING </div>
            <svg xmlns="http://www.w3.org/2000/svg" className='hidden md:block w-9 md:w-12 px-2' viewBox="0 0 20.4 16.17"><polygon points="12.32 .02 20.4 8.11 12.32 16.17 12.32 .02"/><polygon points="6.16 0 14.24 8.1 6.16 16.16 6.16 0"/><polygon points="0 0 8.08 8.09 0 16.15 0 0"/></svg>
          </div>
        </div>
      </div>
      <div className="text-center">
        <Button href="/work" text="Discover our work"></Button>
      </div>
      <div className="relative w-full h-[35vh] md:h-[80vh] mt-16 mb-12">
        <Image src={aboutPage.about.image1.url} objectFit="cover" layout="fill" className="rounded-b-xl rounded-tr-xl"/>
        <div className="w-full h-full flex items-center justify-center"><div className="absolute text-2xl leading-tight md:text-5xl text-white bg-black px-8 py-2 rounded-b-xl rounded-tr-xl">Moving Image<br/>Makers</div></div>
      </div>
      <div className='text-2xl mb-3 mt-10 md:mt-0 md:mb-10'>People</div>
      <div className="md:grid grid-cols-3 gap-8">
        {aboutPage.about.people.map((person, i) => (
          <div key={i}>
            <div className="relative h-[55vh] w-full mb-4">
              <Image src={person.portrait.url} objectFit="cover" layout="fill" />
            </div>
            <div className="flex items-start justify-between md:static border-t border-black pt-3">
              <div>
                <div>{person.role}</div>
                <div className="font-bold mb-7">{person.name}</div>
              </div>
              <a href={person.email} className="border border-black px-5 py-1 md:py-2 rounded-full hover:bg-black hover:text-white">Email</a>
            </div>
          </div>
        ))}
      </div>
      <div className='border-t border-black pt-4  md:border-0 text-2xl mb-10 mt-16'>Our Manifesto</div>
        <div className="grid grid-cols-2 md:grid-cols-4 md:mx-32">
          {aboutPage.about.manifesto.map((step, i) => (
            <div key={i} className={`bg-${colour(step.backgroundColor.hex)} text-${colour(step.textColor.hex)} p-3 flex flex-col justify-between item`}>
              <div>
              <div className="text-xl">{step.number}</div>
              <div className="font-playfair uppercase text-xl md:text-3xl">{step.text}</div>
              </div>
              <div className="relative w-12 h-12 md:w-16 md:h-16 mt-5">
                <Image src={step.icon.url} objectFit='cover' layout="fill" />
              </div>
            </div>
          ))}
        </div>
      <div className='text-2xl mb-10 mt-16'>Our History</div>
      <div className="mx-10 md:mx-32 text-xl md:text-2xl md:columns-2 mb-12 paragraphs"><ReactMarkdown>{aboutPage.about.history}</ReactMarkdown></div>
      <div className="relative w-full md:w-[60vw] md:h-[85vh] h-[35vh] mb-12">
        <Image src={aboutPage.about.image2.url} objectFit='contain' layout="fill" />
      </div>
    </>
  )
}
