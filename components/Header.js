import Image from "next/image"
import Logo from "../static/logo.png"

const styles = {}

const Header = () => {
    return(
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <div className={styles.logoContainer}>
                    <Image
                        className={styles.logo}
                        src={Logo}
                        height={40}
                        width={200}
                    />
                </div>
            </div>
        </div>
    )
}
export default Header