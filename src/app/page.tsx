'use client';
import fetchNews from '../../lib/fetchNews';
import { categories } from '../../constants';
import NewList from './NewsList';
import response from '../../response.json'
import dynamic from 'next/dynamic';
const NewsList = dynamic(() => import('./NewsList'));
 export default async function Home() {
  try {
    const news=await fetchNews(categories.join(','));
    if (news) {
      // const { pagination, data }: { pagination: Pagination; data: Article[] } = news;
      // console.log(news);
      return(
        <div>
          <NewsList news={news}/>
        </div>
      )
    } else {
      console.error('News is undefined');
      return <div>Error fetching news</div>;
    }
  } catch (error) {
    console.error('Error fetching news:', error);
    return <div>Error fetching news</div>;
  }
}

Home.requireAuth = true