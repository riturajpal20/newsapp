// import fetchNews from "../../../../lib/fetchNews";
// import NewsList from "@/app/NewsList";
// import { categories } from "../../../../constants";
// type Props={
//     params:{category:Category};
// };
// async function NewsCategory({params:{category}}:Props) {
//     try {
//         const news: NewsResponse | undefined = await fetchNews(category);
//         if (news) {
//           return(
//             <div>
//               <h1 className="headerTitle">{category}</h1>
//               <NewsList news={news}/>
//             </div>
//           )
//         } else {
//           console.error('News is undefined');
//           return <div>Error fetching news</div>;
//         }
//       } catch (error) {
//         console.error('Error fetching news:', error);
//         return <div>Error fetching news</div>;
//       }
// }

// export default NewsCategory;
// export async function generalStaticParams(){
//     return categories.map(category=>({
//         category:category
//     }));
// }
import fetchNews from "../../../../lib/fetchNews";
import NewsList from "@/app/NewsList";
import { categories } from "../../../../constants";

type Props = {
  params: { category: Category };
};

async function NewsCategory({ params }: Props) {
  try {
    const news: NewsResponse | undefined = await fetchNews(params.category);

    if (news) {
      return (
        <div>
          <h1 className="headerTitle">{params.category}</h1>
          <NewsList news={news} />
        </div>
      );
    } else {
      console.error('News is undefined');
      return <div>Error fetching news</div>;
    }
  } catch (error) {
    console.error('Error fetching news:', error);
    return <div>Error fetching news</div>;
  }
}

export default NewsCategory;

export async function getStaticPaths() {
  // Generate paths based on categories
  const paths = categories.map((category) => ({
    params: { category },
  }));

  // Return paths and fallback behavior
  return {
    paths,
    fallback: false, // or true if you want to enable incremental static regeneration
  };
}

export async function getStaticProps({ params }: { params: { category: string } }) {
  // Fetch data for the specific category
  const news = await fetchNews(params.category);

  // Pass data to the page component
  return {
    props: {
      params,
      news,
    },
  };
}
