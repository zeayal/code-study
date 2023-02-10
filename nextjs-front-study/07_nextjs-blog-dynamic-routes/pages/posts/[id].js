import Layout from '../../components/layout';
import { getAllPostIds } from '../../lib/posts';

export default function Post() {
    return (
        <Layout>
            ...
        </Layout>
    )
}

export async function getStaticPaths() {
    // return a list of prossible value for id 
    const postIds = getAllPostIds();
    console.log('postIds', postIds)
    return {
        paths: [],
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    // fetch  necessary data for the blog post using params.id
}