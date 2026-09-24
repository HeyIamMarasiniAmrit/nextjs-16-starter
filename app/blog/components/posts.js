'use client'; 
import React, { use } from 'react'; 
import Link from 'next/link';  



const Posts = ({ promise }) => {
  
  const postsList = use(promise); 

  return (
    <div>
      {/* 5. Fixed: Loop over postsList instead of the component itself */}
      {postsList.map((post) => {
        return (
          <div key={post.id}>
            <Link href={`/blog/${post.id}`}>
              <h2 className="text-indigo-600">{post.title}</h2>
            </Link>
            <p>{post.body}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;

