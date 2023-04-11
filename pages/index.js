import { Fragment } from "react";

import Hero from "../components/home-page/hero";

function HomePage() {
    return (
        <Fragment>
            <Hero />
            {/* <FeaturedPosts /> */}
        </Fragment>
    )
}

export default HomePage;

// 1) Hero => Present Self
// 2 Featured Post(projects)