import { request } from "@/lib/datocms";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

const ARTICLES_QUERY = `{
    allInsights {
        slug
    }
}`

const FILTERED_QUERY = `
    query insightBySlug($slug: String) {
        insight(filter: {slug: {eq: $slug}}) {
            title
            slug
            layoverColor {
            hex
            }
            date
            category
            content
            coverImage {
            url
            }
        }
}`

export async function getStaticPaths() {
    const articles = await request({
        query: ARTICLES_QUERY
    });

    return {
        paths: articles.allInsights.map(article => {
            return {
                params: {
                    slug: article.slug
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
            data: data.insight
        }
    };
}

export default function Project({data}) {
    return (
        <>
        <div className="absolute w-[102vw] h-[85vh] mx-[-1vw] top-0 left-0">
            <Image src={data.coverImage.url} objectFit="cover" layout="fill" className="object-bottom" />
            <div className="absolute top-[15vh] right-40 text-8.5xl w-min text-bold">{data.title}</div>
        </div>
        <div className="mt-[75vh]"></div>
            <div className="text-2xl w-1/2 float-right mr-32 mb-16"><ReactMarkdown>{data.content}</ReactMarkdown></div>
        </>
    )
}

