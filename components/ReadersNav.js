import Image from 'next/image'
import Link from 'next/link'
import smallLogo from '../static/smallLogo.png'
import { HiOutlineHome } from 'react-icons/hi'
import { FiBell } from 'react-icons/fi'
import { BiBookmarks } from 'react-icons/bi'
import { RiArticleLine } from 'react-icons/ri'
import { BsPencilSquare } from 'react-icons/bs'

const styles = {
    wrapper: `w-[5rem] h-screen flex flex-col justify-between items-center p-[1rem]`,
    logoContainer: `cursor-pointer`,
}

const ReadersNav = () =>{
    return(
        <div className={styles.wrapper}>
            <Link href={'/'}>
                <div className={styles.logoContainer}>
                    <Image src={smallLogo}/>
                </div>
            </Link>
            <div className={styles.iconContainer}>
                <HiOutlineHome/>
                <FiBell/>
                <BiBookmarks/>
                <RiArticleLine/>
                <div className={styles.divider}></div>
                <BsPencilSquare/>
            </div>
        </div>
    )
}

export default ReadersNav