import Image from 'next/image';

import classes from './hero.module.css';

function Hero() {
    return( 
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image 
                src="/images/site/Anthony.jpeg"
                alt="An image showing Anthony."
                width={300}
                height={300}
                />
            </div>
            <h1>
                Hello, I'm Anthony
            </h1>
            <p>
                Welcome to my portfolio blog.
            </p>

        </section>
    )
}

export default Hero;