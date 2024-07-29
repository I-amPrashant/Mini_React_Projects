import React, {useEffect, useState} from 'react'
import ImageItems from './ImageItems';
import Pagination from './Pagination';

export default function App() {
  const [data, setData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(2);
  const [apiPage, setApiPage] = useState(1);
  const [loading, setLoading]=useState(false);
  const [perPageData, setPerPageData]=useState([]);
  const pageSize=9;

  useEffect(() => {
    async function getImages(){
      setLoading(true);
      const url=`https://picsum.photos/v2/list?page=${apiPage}&limit=100`
      const result=await fetch(url);
      const data=await result.json();
      setData(data);
      setLoading(false);
    }
    getImages();
  }, [apiPage]);

  console.log(' i ran first')
  useEffect(() => {
    if(data){
       setPerPageData(data?.slice((currentIndex-1)*pageSize, currentIndex*pageSize))
    }
  }, [data, currentIndex])
  console.log('i ran second')
  return (
    <div className='main-container'>
      {/* pagination and images wrapper   */}
            <div className='pagination-container'>
                  <ImageItems perPageData={perPageData} loading={loading}/>
                  <Pagination />
            </div>
            
      {/* pagination and images wrapper   */}
       </div>
  )
}
