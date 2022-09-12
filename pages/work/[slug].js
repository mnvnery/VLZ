import ProjectCard from "@/components/ProjectCard"
import { request } from "@/lib/datocms"
import Image from "next/image"
import Button from "@/components/Button"
import ReactPlayer from "react-player"
import { EmblaCarousel } from "@/components/EmblaCarousel"
import Link from "next/link"

const PROJECTS_QUERY = `{
allProjects {
    slug
}
}`


const FILTERED_QUERY = `
    query projectBySlug($slug: String) {
        project(filter: {slug: {eq: $slug}}) {
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
            suggestedProjects {
                slug
                title 
                shortDescription
                thumbnail {
                    url
                }
            }
        }
    }`

export default function Project({data}) {
    return (
    <>
        <div className="text-2xl md:text-6xl font-bold uppercase mt-5 mb-12 hidden md:block">{data.title}</div>
        <div className="relative pt-[56.25%] mt-8 md:mt-0">
        <ReactPlayer url={data.videoLink.url} playing controls muted loop width='100%' height='100%' className="absolute top-0 left-0 h-full md:h-[90%]" />
        </div>
        <div className="text-2xl md:text-6xl font-bold uppercase mt-5 mb-12 md:hidden border-t border-black pt-4">{data.title}</div>
        <div className="font-playfair text-xl md:text-5xl md:w-3/5 ml-20 md:ml-0 float-right mb-12">{data.pullOutQuote}</div>
        <div className="md:grid grid-cols-2 gap-5 md:mx-32 mb-12">
            <div></div>
            <div className="text-xl md:text-2xl">
                <span className="font-bold md:font-normal">The Brief</span> <br/><br/>
                <span className="paragraphs">{data.brief}</span>
            </div>
        </div>
        <div className="grid grid-cols-2 md:mx-32 gap-5 mb-8 md:mb-12">
            <div className="relative w-full h-[20vh] md:h-[40vh]">
                <Image src={data.allImages[0].url} objectFit="cover" layout="fill"/>
            </div>
            <div className="relative w-full h-[20vh] md:h-[40vh]">
                <Image src={data.allImages[1].url} objectFit="cover" layout="fill"/>
            </div>
        </div>
        <div className="md:grid grid-cols-2 gap-5 mb-8 md:mb-12">
            <div className="text-xl md:text-2xl md:mr-32">
                <span className="font-bold md:font-normal">The Story</span><br/><br/>
                <span className="paragraphs">{data.story}</span>
            </div>
            <div></div>
        </div>
        <div className="md:mx-32 mb-12">
            <div className="relative w-full h-[40vh] md:h-[90vh]">
                    <Image src={data.allImages[2].url} objectFit="cover" layout="fill"/>
            </div>
        </div>
        <div className="md:grid grid-cols-2 gap-5 md:mx-32 mb-12">
            <div></div>
            <div className="text-xl md:text-2xl">
                <span className="font-bold md:font-normal">The Vision</span> <br/><br/>
                <span className="paragraphs">{data.vision}</span>
            </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mb-12">
        {data.allImages.slice(3).map((image, i) => (
                <div key={i} className="relative w-full h-[20vh] md:h-[40vh]">
                    <Image src={image.url} objectFit="cover" layout="fill"/>
                </div>
        ))}
        </div>
        {data.testimonial == '' ?  '' 
        : <div className="md:grid grid-cols-[0.3fr_1fr] gap-5 mb-16">
            <div className="text-lg md:text-2xl">
                <div>{data.testimonialName}</div>
                <div className="text-slate-400 md:text-slate-600">{data.testimonialRole}</div>
            </div>
            <div className="text-xl md:text-4xl font-playfair ml-16 md:mr-24 mt-8 md:mt-0">{data.testimonial}</div>
        </div> 
        }
        <div className="bg-slate-100 rounded-t-xl mx-[-2em] px-8 pb-20 pt-8 mb-[-4em]">
            <div className="hidden md:block">
                <div className='text-2xl mb-5'>Other Work</div>
                <div className='grid grid-cols-3 gap-5'>
                        <ProjectCard 
                        thumbnail={data.suggestedProjects[0].thumbnail.url} 
                        title={data.suggestedProjects[0].title} 
                        description={data.suggestedProjects[0].shortDescription}
                        href={`/work/${data.suggestedProjects[0].slug}`}
                        />
                        <ProjectCard 
                        thumbnail={data.suggestedProjects[1].thumbnail.url} 
                        title={data.suggestedProjects[1].title} 
                        description={data.suggestedProjects[1].shortDescription}
                        href={`/work/${data.suggestedProjects[1].slug}`}
                        />
                        <ProjectCard 
                        thumbnail={data.suggestedProjects[2].thumbnail.url} 
                        title={data.suggestedProjects[2].title} 
                        description={data.suggestedProjects[2].shortDescription}
                        href={`/work/${data.suggestedProjects[2].slug}`}
                        />
                </div>
            </div>
            <div className='md:hidden'>
                <EmblaCarousel title='Latest Work'>
                    {data.suggestedProjects.map((w, i) => ( 
                        <div className='embla__slide' key={i}>
                            <Link href={w.slug}><div className="relative">
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
            <div className='text-center pb-10 mt-6 md:mt-14'>
                <Button href="/work" text="Discover all work"></Button>
            </div>
        </div>
    </>
    )
}




export async function getStaticPaths() {
    const projects = await request({
        query: PROJECTS_QUERY
    });

    return {
        paths: projects.allProjects.map(project => {
            return {
                params: {
                    slug: project.slug
                }
            }
        }), 
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const data = await request({
        query: FILTERED_QUERY, 
        variables: {slug: params.slug}
    });

    return {
        props: {
            data: data.project
        }
    };
}

