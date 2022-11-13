import Image from "next/image"
import Logo from "../static/logo.png"

const styles = {
    authorContainer: `flex gap-[0.4rem]`,
    authorImageContainer: `grid place-items-center rounded-full overflow-hidden h-[1.4rem] w-[1.4rem]`,
    authorImage: `object-cover`,
    authorName: `font-semibold`,
    title: `font-bold text-2xl`,
    briefing: `text-[#787878]`,
    detailsContainer: `flex items-center justify-between text-[#787878]`,
    articleDetails: `my-2 text-[0.8rem]`,
    category: `bg-[#F2F3F2] p-1 rounded-full`,
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

            <div className={styles.detailsContainer}>
                <span className={styles.articleDetails}>Nov 13, 5 min read, <span className={styles.category}>productivity</span></span>
            </div>
        </div>
    )
}

export default PostCard