import fetchNews from "../../../lib/fetchNews";
import NewsList from "../NewsList";
type Props={
    searchParams?:{term:string};
};
 async function SearchPage({searchParams}:Props) {
  const news:NewsResponse | undefined=await fetchNews(
    "general",
    searchParams?.term,
    true
  )
    return (
    <div>
        <NewsList news={news}/>
    </div>
  )
// async function SearchPage({ searchParams }: Props) {
//     try {
//       if (!searchParams || !searchParams.term) {
//         console.error('Search parameters are missing');
//         return <div>Error: Search parameters are missing</div>;
//       }
  
//       const news: NewsResponse | undefined = await fetchNews(
//         "general",
//         searchParams.term,
//         true
//       );
  
//       if (news) {
//         const { pagination, data }: { pagination: Pagination; data: Article[] } = news;
  
//         return (
//           <div>
//             <h1 className="headerTitle">Search result for {searchParams?.term}</h1>
//             <NewsList news={news} />
//           </div>
//         );
//       } else {
//         console.error('News cannot be fetched');
//         return <div>Error fetching news</div>;
//       }
//     } catch (error) {
//       console.error('An error occurred:', error);
//       return <div>An error occurred while fetching news</div>;
//     }
}
export default SearchPage;