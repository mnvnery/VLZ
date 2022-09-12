import Link from "next/link"

const Button = ({ href, text }) => (
<Link href={href}>
    <a className="border border-black px-5 py-2 rounded-full text-2xl hover:bg-black hover:text-white">{ text }</a>
</Link>
)

export default Button