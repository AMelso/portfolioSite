import PostsGrid from '../posts/posts-grid.js'

import classes from './featured-post.module.css'

function FeaturedPosts(props) {
    console.log(props)
    return <section className={classes.latest}>
        <h2>Featured Posts</h2>
        <PostsGrid posts={props.posts} />
    </section>
}

export default FeaturedPosts