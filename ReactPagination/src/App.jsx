import React, {useEffect, useState} from 'react'
import ImageItems from './ImageItems';
import Pagination from './Pagination';

export default function App() {
  const [data, setData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(1);
  const [loading, setLoading]=useState(false);
  const [perPageData, setPerPageData]=useState([]);
  const [startIndex, setStartIndex]=useState(false);
  const [endIndex, setEndIndex]=useState(false);
  const pageSize=9;

  useEffect(() => {
    async function getImages(){
      setLoading(true);
      const url=`https://picsum.photos/v2/list?page=1&limit=200`
      const result=await fetch(url);
      const data=await result.json();
      setData(data);
      setLoading(false);
    }
    getImages();
  }, []);

  useEffect(() => {
    setPerPageData([])
    function setData(){
      setPerPageData(data.slice((currentIndex-1)*pageSize, currentIndex*pageSize))
    }
    if(data.length>0){
      setTimeout(() => {
        setData();
      }, 500);
    }
  }, [data,currentIndex])

  useEffect(() =>{
    if(perPageData.length>0){
      setLoading(false);
      currentIndex===1?setStartIndex(true):setStartIndex(false);
      currentIndex===Math.ceil(data.length/pageSize)?setEndIndex(true):setEndIndex(false);
    }else{
      setLoading(true);
    }
  }, [currentIndex, perPageData])

  const totalPages=Math.ceil(data.length/pageSize);
  return (
    <div className='main-container'>
      {/* pagination and images wrapper   */}
            <div className='pagination-container'>
                  <ImageItems perPageData={perPageData} loading={loading}/>
                  <Pagination setCurrentIndex={setCurrentIndex} startIndex={startIndex} endIndex={endIndex} totalPages={totalPages} currentIndex={currentIndex}/>
            </div>
      {/* pagination and images wrapper   */}
       </div>
  )
}
