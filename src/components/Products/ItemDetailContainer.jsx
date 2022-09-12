import React, {useState, useEffect} from 'react'
import ItemDetail from './ItemDetail';
import dataIphones from '../../utils/dataProducts';
import {useParams} from 'react-router-dom';




const ItemDetailContainer = () =>{
    const [data, setData] = useState({})
    const {iphoneId} = useParams()


    useEffect(() =>{
        const getData = new Promise(resolve =>{
            setTimeout(()=>{
                resolve(dataIphones);
            }, 2000)
        });
        getData.then(res => setData(res.find(dataIphone => dataIphone.id === parseInt(iphoneId))))
    },[iphoneId]);



  return (
    <ItemDetail data ={data}/>

  )
}

export default ItemDetailContainer;