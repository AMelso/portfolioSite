import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';

// path to root of project + posts folder
const postsDirectory = path.join(process.cwd(), 'posts')

function getPostData(fileName) {
    // read single file
    const filePath = path.join(postsDirectory, fileName)
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    // returns data and content property
    const { data, content } = matter(fileContent)

    const postSlug = fileName.replace(/\.md$/, ''); // removes the file extension

    const postData = {
        slug: postSlug,
        ...data,
        content,
    };

    return postData
}

export function getAllPosts() {
    // read entire directory
    const postFiles = fs.readdirSync(postsDirectory);

    const allPosts = postFiles.map(postFile => {
        return getPostData(postFile);
    })

    const sortedPosts = allPosts.sort((postA, postB) => postA.date > postB.date ? -1 : 1) // default javascript sort

    return sortedPosts;
}

// larger blog would store featured post slugs in a seperate json file.
export function getFeaturedPosts() {
    const allPosts = getAllPosts();

    const featuredPosts = allPosts.filter(post => post.isFeatured);

    return featuredPosts;
}