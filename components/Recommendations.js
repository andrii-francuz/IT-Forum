import Image from "next/image"
import { AiOutlineSearch } from 'react-icons/ai'
import { MdMarkEmailUnread } from "react-icons/md"
import Logo from '../static/smallLogo.png'
import NewLogo from '../static/newlogo.png'
import OrcLogo from '../static/orc.png'
import HandLogo from '../static/handlogo.jpg'

const styles = {
    wrapper:`h-screen min-w-[10rem] max-w-[30rem] flex-[1.2] p-[2rem]`,
    accentedButton:`flex items-center justify-center text-sm bg-black text-white my-[2rem] py-[.6rem] rounded-full`,
    searchBar:`flex items-center gap-[.6rem] h-2.6rem border px-[1rem] rounded-full`,
    searchInput:`border-none outline-none bg-none w-full`,
    authorContainer:`my-[2rem]`,
    authorProfileImageContainer:`h-[5rem] w-[5rem] rounded-full overflow-hidden`,
    authorName:`font-semibold mb-[.2rem] mt-[1rem]`,
    recommendationsAuthorPtofileImageContainer:`rounded-full overflow-hidden h-[1.4rem] w-[1.4rem]`,
    recommendationsAuthorName:`text-sm`,
    recommendationsAuthorContainer:`flex items-center gap-[.6rem]`,
    recommendationsTitle:`font-bold`,
    recommendationsThumbnailContainer:`flex flex-1 items-center justify-center h-[4rem] w-[4rem]`,
    recommendationsThumbnail:`object-cover`,
    articleContentWrapper:`flex items-center justify-center cursor-pointer my-[1rem]`,
    articleContent:`flex-[4rem]`,
}

const Recommendations = ({ author }) => {
    return(
        <div className={styles.wrapper}>
            <div className={styles.accentedButton}>Get unlimited access</div>
            <div className={styles.searchBar}>
                <AiOutlineSearch/>
                <input
                    className={styles.searchInput}
                    placeholder="Search"
                    type="text"
                />
            </div>

            <div className={styles.authorContainer}>
                <div className={styles.authorProfileImageContainer}>
                    <Image
                        src={NewLogo}
                        width={100}
                        height={100}
                    />
                </div>
                <div className={styles.authorName}>User</div>
            </div>

            <div className={styles.recommendationsContainer}>
                <div className={styles.title}>More</div>
                <div className={styles.articlesContainer}>
                    {recommendedPosts.map(post => (
                    <div className={styles.articleContentWrapper}>
                        <div className={styles.articleContent}>
                            <div className={styles.recommendationsAuthorContainer}>
                                <div className={styles.recommendationsAuthorPtofileImageContainer}>
                                    <Image
                                        src={post.author.image}
                                        width={100}
                                        height={100}
                                    />
                                </div>
                                <div className={styles.recommendationsAuthorName}>{post.author.name}</div>
                                </div>
                            <div className={styles.recommendationsTitle}>{post.title}</div>
                        </div>
                        <div className={styles.recommendationsThumbnailContainer}>
                            <Image
                                className={styles.recommendationsThumbnail}
                                src={post.image}
                                width={100}
                                height={100}
                            />
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Recommendations

const recommendedPosts = [
    {
        title: 'What can you do with This?',
        image: Logo,
        author: {
            name: 'User007',
            image: HandLogo,
        }
    },
    {
        title: 'The Ultimate User Documentation!',
        image: NewLogo,
        author: {
            name: 'User002',
            image: OrcLogo,
        }
    },
    {
        title: 'For farm and glory!!!',
        image: OrcLogo,
        author: {
            name: 'User008',
            image: Logo,
        }
    }
]