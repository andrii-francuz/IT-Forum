import Image from "next/image"
import Logo from "../static/logo.png"

const styles = {
    authorContainer: `flex gap-[0.4rem]`,
    authorImageContainer: `grid place-items-center rounded-full overflow-hidden h-[1.4rem] w-[1.4rem]`,
    authorImage: `object-cover`,
    authorName: `font-semibold`,
    title: `font-bold text-2xl`,
    briefing: `text-[#787878]`,
    postDetails: ``,
}

const PostCard = () => {
    return(
        <div className={styles.postDetails}>
            <div className={styles.authorContainer}>
                <div className={styles.authorImageContainer}>
                    <Image
                        src={Logo}
                        className={styles.authorImage}
                        width={40}
                        height={40}
                    />
                </div>

                <div className={styles.authorName}>Andrii Fryntsko</div>
            </div>

            <h1 className={styles.title}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
            <div className={styles.briefing}>Lorem ipsum dolor sit amet</div>
        </div>
    )
}

export default PostCard