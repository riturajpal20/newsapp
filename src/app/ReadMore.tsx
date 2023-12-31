'use client'
import { useRouter } from "next/navigation";
import  Link  from "next/link";
type Props={
    article:Article;
}
function ReadMore({article}:Props) {
    const router=useRouter();
    const queryString=Object.entries(article).map(([key,value])=>`${key}=${value}`).join("&");
    const url=`/article?${queryString}`;
  return(
//  <button onClick={handleClick}
//  className="bg-orange-400 h-10 rounded-b-lg dark:text-gray-900 hover:bg-orange-500 w-full">
//     Read More
//  </button>
<Link href={url}>
<button
className="bg-orange-400 h-10 rounded-b-lg dark:text-gray-900 hover:bg-orange-500 w-full">
     Read More
  </button>
    </Link>
  )
}

export default ReadMore;