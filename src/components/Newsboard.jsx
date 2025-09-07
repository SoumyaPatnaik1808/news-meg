import React from 'react'  
import { useEffect } from 'react';
import { useState } from 'react';
import Newsitem from './Newsitem';


const Newsboard = () => {
    const [articles, setArticles] = useState([]); 

useEffect(()=>
    {let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=1583f81a2f6c453eb49eec9d17336bec`;
fetch(url).then(response=>response.json()).then(data=> setArticles(data.articles))



,[]})
  return (
    <div>
      <h2 className='text-center'>Latest <span className='badge bg-danger'>News</span></h2> 
      {articles.map((news,index)=>{return <Newsitem key={index} title ={news.title} description={news.description} src={news.urlToImage} link={news.url} />})}
    </div>
  )
}

export default Newsboard
