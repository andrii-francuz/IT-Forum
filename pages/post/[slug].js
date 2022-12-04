import ReadersNav from '../../components/ReadersNav'
import Recommendations from '../../components/Recommendations'
import ArticleMain from '../../components/ArticleMain'
import { useContext, useEffect, useState } from 'react'
import { ItForumContext } from '../../context/ItForumContext'
import { Router, useRouter } from 'next/router'

const styles = {
    content:`flex`,
}

const Post = () => {
    const {posts, users} = useContext(ItForumContext)
    const router = useRouter()
    const [post, setPost] = useState([])
    const [author, setAuthor] = useState([])

    useEffect(() => {
        if (posts.length ===0) {
            return
        }

        setPost(posts.find(post => post.id === router.query.slug))

        setAuthor(users.find(user => user.id === post.data?.author))
    }, [post])

    return(
        <div className={styles.content}>
            <ReadersNav/>
            <ArticleMain post={post} author={author}/>
            <Recommendations/>
        </div>
    )
}

export default Post