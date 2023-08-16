import React from 'react';
import Article from './Article';

function ArticleList (props){
    
    let Articles = props.posts.map ((post) => (
            <Article
                key={post.id}
                title={post.title}
                date={post.date}
                preveiw={post.preveiw}
                minutes={post.minutes}
            />
            ))
    
    return (
     <main>
        {Articles}
     </main>
    );

    
}
export default ArticleList;