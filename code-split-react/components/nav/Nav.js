import style from './nav.module.css'
import Link from 'next/link'


export default function Nav() {
    return (
        <div className={style.nav}>
            <Link href={"/"}><span>Home</span></Link>
            <Link href={"/about"}><span>About</span></Link>
            <Link href={"/contact"}><span>Contact</span></Link>
        </div>
    )
}