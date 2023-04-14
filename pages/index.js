import { Fragment } from "react";
import FeaturedPosts from "../components/home-page/featured-post";
import Hero from "../components/home-page/hero";
import { getFeaturedPosts } from "../lib/post-util";



function HomePage(props) {
    return (
        <Fragment>
            <Hero />
            <FeaturedPosts posts={props.posts} />
        </Fragment>
    )
}

export function getStaticProps() {
    const featuredPosts = getFeaturedPosts();

    return {
        props: {
            posts: featuredPosts
        }
    }
}
export default HomePage;

// 1) Hero => Present Self
// 2 Featured Post(projects)