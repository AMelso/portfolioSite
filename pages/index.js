import { Fragment } from "react";
import FeaturedPosts from "../components/home-page/featured-post";

import Hero from "../components/home-page/hero";

const DUMMY_POSTS = [
    {
        slug: "1st-App",
        title: "1st App",
        image: 'getting-started-nextjs.png',
        date: '2023-02-02',
        excerpt: 'Dummy Post',
    },
    {
        slug: "2nd-App",
        title: "2nd App",
        image: 'getting-started-nextjs.png',
        date: '2023-02-02',
        excerpt: 'Dummy Post',
    },
    {
        slug: "3rd-App",
        title: "3rd App",
        image: 'getting-started-nextjs.png',
        date: '2023-02-02',
        excerpt: 'Dummy Post',
    },
    {
        slug: "4th-App",
        title: "4th App",
        image: 'getting-started-nextjs.png',
        date: '2023-02-02',
        excerpt: 'Dummy Post',
    },
]

function HomePage() {
    return (
        <Fragment>
            <Hero />
            <FeaturedPosts posts={DUMMY_POSTS} />
        </Fragment>
    )
}

export default HomePage;

// 1) Hero => Present Self
// 2 Featured Post(projects)