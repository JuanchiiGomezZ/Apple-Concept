import React, {useState, useEffect} from 'react'
import ItemDetail from './ItemDetail';
import dataProducts from '../../utils/dataProducts';
import {useParams} from 'react-router-dom';
import Loading from '../../utils/Loading';



const ItemDetailContainer = () =>{
    const [data, setData] = useState({})
    const {iphoneId} = useParams()
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() =>{
        const getData = new Promise(resolve =>{
            setTimeout(()=>{
                resolve(dataProducts);
            },0)
        });
        getData.then(res => setData(res.find(dataIphone => dataIphone.id === parseInt(iphoneId))))

        const getIsLoading = new Promise ((resolve) =>{
          setTimeout(()=>{
            resolve(false);
          }, 3000);
        });
        getIsLoading.then(res => setIsLoading(res))
    },[iphoneId]);



  return (
    <>
    {
      isLoading ?(
        <Loading/>
      )
    :(
      <ItemDetail data ={data}/>
    )
    }
    </>
    

  )
}

export default ItemDetailContainer;