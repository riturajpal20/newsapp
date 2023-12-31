import { access } from "fs";
import { gql } from "graphql-request";
import sortNewsByImage from "./sortNewsbyImage";
const fetchNews=async(
    categories?:Category|string,
    keywords?:string,
    isDynamic?:boolean
    )=>{
      console.log("hello from here");
      console.log(categories);
 let headers = {
     "Content-Type": "application/json",
     "Authorization": "apikey asturias::stepzen.io+1000::17b0e403080d89035929d3bb56407b621ec6ecb8ffc3f598239148377d5027fb"
   };

  let graphql = JSON.stringify({
    query: gql`
      query MyQuery($accessKey:String!,$categories:String,$keywords:String)
      {
        myQuery(
            access_key: $accessKey,
            categories: $categories,
            sort:"published_desc",
            countries:"in, us, nz,ch",
            keywords:$keywords,
            
            )
             {
          data {
                author 
                category 
                country 
                description 
                image 
                language 
                published_at
                source 
                title 
                url 
          }
          pagination{
                count
                limit
                offset
                total
            } 
        }
      }`,
    variables: {
      accessKey: process.env.MEDIASTACK_API_KEY,
      categories: categories,
      keywords:keywords,
}
  });

  let requestOptions = {
    method: 'POST',
    headers:{
        ...headers,
        // 'Cache-Control': isDynamic ? 'no-cache' : 'default',
      },
    body: graphql,
  };
  try {
    console.log("before");
    const response = await fetch("https://asturias.stepzen.net/api/ornery-giraffe/__graphql", requestOptions);
    console.log('after');
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

   
    const newsResponse = await response.json();
            const news = sortNewsByImage(newsResponse?.data?.myQuery);
            console.log(news);
            return news;
  } catch (error) {
    console.error('Error:', "no");
    throw error;
  }
console.log("end of fetch")
};

export default fetchNews;
//stepzen import curl "http://api.mediastack.com/v1/news?access_key=c0171039f607c44828f2c4b48183b4e2"