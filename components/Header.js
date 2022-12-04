import Image from "next/image"
import { useContext } from "react"
import { ItForumContext } from "../context/ItForumContext"
import Logo from "../static/logoW.png"
import Modal from 'react-modal'
import PostModal from "./PostModal"
import { Router, useRouter } from "next/router"
import Link from 'next/link'

Modal.setAppElement('#__next')

const customStyles = {
    content: {
        top: '12%',
        left: '25%',
        right: 'auto',
        bottom: 'auto',
        tranform: 'translate(-50%, -50%)',
        backgroundColor: '#fff',
        padding: 0,
        border: 'none',
    },
    overlay: {
        backgroundColor: 'rgba(10, 11, 13, 0.75',
    }
}

const styles = {
    wrapper: 'flex justify-center gap-10 p-5 bg-[#262626]',
    content: `max-w-7xl flex-1 flex justify-between gap-10`,
    logoContainer: 'flex items-center flex-start',
    logo: 'cursor-pointer object-contain',
    bannerNav: 'flex cursor-pointer item-center space-x-4 text-white',
    navButton: 'py-2 px-4',
    accentedButton: 'bg-black py-2 px-4 rounded-full',
}

const Header = () => {
    const router = useRouter()
    const { currentUser, handleUserAuth } = useContext(ItForumContext)
    return(
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <div className={styles.logoContainer}>
                    <Image
                        className={styles.logo}
                        src={Logo}
                        height={40}
                        width={100}
                    />
                </div>
                {currentUser ?
                (<div className={styles.bannerNav}>
                    <div className={styles.navButton}>Our Story</div>
                    <Link href={'/?addNew=1'}>
                        <div className={styles.accentedButton}>Write</div>
                    </Link>
                    <div className={styles.accentedButton}>Get Unlimited Access</div>
                </div>)
                    : (
                    <div className={styles.bannerNav}>
                        <div className={styles.navButton}>Our Story</div>
                        <div className={styles.navButton} onClick={handleUserAuth}>Sign In</div>
                        <div className={styles.accentedButton}>Get Started</div>
                    </div>)
                }
            </div>
            <Modal
                isOpen={Boolean(router.query.addNew)}
                onRequestClose={() => console.log('CLOSE')}
                style={customStyles}
            >
                <PostModal/>
            </Modal>
        </div>
    )
}
export default Header