import Image from './Image'
import Link from './Link'

const ProjectCard = ({ thumbnail, title, description, href }) => (
<div className='hover-view'>
    <Link href={href}><a>
    <div className='relative w-full h-[70vh]'>
        <Image src={thumbnail} objectFit="cover" layout='fill'/>
    </div>
    <div className='relative view'>
        <div className='triangle absolute right-0 bottom-0'></div>
        <div className='absolute right-2 bottom-2 text-white text-xl'>View</div>
    </div>
    <div className='mt-5'>
        <div className='text-xl'>{title}</div>
        <div className='text-xl text-slate-600'>{description}</div>
    </div>
    </a></Link>
</div>
)

export default ProjectCard