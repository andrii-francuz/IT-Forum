import Image from "next/image"
import NewLogo from '../static/newlogo.png'
import Banner from '../static/banner.jpg'

const styles = {
    wrapper:`flex items-center justify-center flex-[3] border-l border-r`,
    content:`h-screen w-full overflow-scroll p-[2rem]`,
    postHeaderContainer:`flex justify-between items-center mt-[2.2rem] mb-[1.2rem]`,
    authorContainer:`flex gap-[1rem]`,
    authorProfileImageContainer:`h-[3rem] w-[3rem] grid center rounded-full overflow-hidden`,
    image:`object-cover`,
    column:`flex-1 flex flex-col justify-center`,
    postDetails:`flex gap-[0.2rem] text-[#787878]`,
    bannerContainer:`h-[18rem] w-full grid center overflow-hidden mb-[2rem]`,
    articleMainContainer:`flex flex-col gap-[1rem]`,
    title:`font-bold text-3xl`,
    subtitle:`font-mediumSerifItalic text-[1.4rem] text-[#292929]`,
    articleText:`font-mediumSerif text-[1.4rem] text-[#292929]`,
}

const ArticleMain = ({post, author}) => {
    return(
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <div className={styles.postHeaderContainer}>
                    <div className={styles.authorContainer}>
                        <div className={styles.authorProfileImageContainer}>
                            <Image
                            className={styles.image}
                            src={`https://res.cloudinary.com/demo/image/fetch/${author?.data?.image}`}
                            width={100}
                            height={100}
                            />
                        </div>
                        <div className={styles.column}>
                            <div>{author?.data?.name}</div>
                            <div className={styles.postDetails}>
                                <span>{new Date(post?.data?.postedOn).toLocaleString('en-US', {day: 'numeric', month: 'short'})}, {post.data?.postLength} min read</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.articleMainContainer}>
                    <div className={styles.bannerContainer}>
                        <Image
                            width={500}
                            height={100}
                            className={styles.image}
                            src={`https://res.cloudinary.com/demo/image/fetch/${post?.data?.bannerImage}`}
                        />
                    </div>
                    <h1 className={styles.title}>{post?.data?.title}</h1>
                    <h4 className={styles.subTitle}>
                        <div>
                            {author?.data?.name}, {''}
                            {new Date(post?.data?.postedOn).toLocaleString('en-US', {day: 'numeric', month: 'short', year: 'numeric'})}
                        </div>
                        <div>{post?.data?.brief}</div>
                    </h4>
                    <div className={styles.articleText}>{post?.data?.body}</div>
                </div>
            </div>
        </div>
    )
}

export default ArticleMain