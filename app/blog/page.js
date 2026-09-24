import Link from 'next/link'; 
import { Suspense } from 'react';
import Posts from './components/posts'; 

export default async function Blogpage() {
    
    const promise = fetch('https://jsonplaceholder.typicode.com/posts').then((res) => res.json());

    return (
        <div>
            <h1>Blog page</h1>
            <Suspense fallback={<div>Loading...</div>}>
                {/* ✅ Changed from <posts> to <Posts> */}
                <Posts promise={promise} />
            </Suspense>
        </div>
    );
}

