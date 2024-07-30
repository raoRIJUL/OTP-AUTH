// import { useEffect, useState } from "react"
// import Newsitem from "./Newsitem";

// const Newsboard=({category})=>{
    
//     const [articles,setArticles]=useState([]);
//     useEffect(()=>{
//         // console.log('fdg')
//         let url=`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`
//         fetch(url).then(response => response.json()).then(data=>setArticles(data.articles)).catch(error => console.error('Error fetching articles:', error));
//     },[category])
//     console.log(articles)
//     return (
//       <>
//         <h2 className="text-center">Latest <span className="badge bg-danger">News</span></h2>
//         {articles.map((news,index)=>{
//             return news.urlToImage? <Newsitem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>:""
//         })}
        
//       </>
//     )
//   }
  
//   export default Newsboard

import { useEffect, useState } from "react"
import Newsitem from "./Newsitem";

const Newsboard=({category})=>{
    const api_key="aea3580d01bb4c18a35efdf923a6f1a3";
    const Url="https://newsapi.org/v2/everything?q=";
    const [articles,setArticles]=useState([]);
    useEffect(()=>{
        // console.log('fdg')
        let url=`${Url}${category}&apiKey=${api_key}`
        fetch(url).then(response => response.json()).then(data=>setArticles(data.articles)).catch(error => console.error('Error fetching articles:', error));
    },[category])
    console.log(articles)
    return (
      <>
        <h2 className="text-center my-3">Latest <span className="badge bg-danger">News</span></h2>
        {articles.map((news,index)=>{
            return news.urlToImage? <Newsitem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>:""
        })}
        
      </>
    )
  }
  
  export default Newsboard