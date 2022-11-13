import Image from "next/image"
import Logo from "../static/logoW.png"

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
                <div className={styles.bannerNav}>
                    <div className={styles.navButton}>Our Story</div>
                    <div className={styles.navButton}>Membership</div>
                    <div className={styles.navButton}>Sign In</div>
                    <div className={styles.accentedButton}>Get Started</div>
                </div>
            </div>
        </div>
    )
}
export default Header