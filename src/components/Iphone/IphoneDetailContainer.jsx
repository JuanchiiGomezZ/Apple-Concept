import React, {useState, useEffect} from 'react'
import IphoneDetail from './IphoneDetail';
import dataIphones from '../../utils/dataProducts';
import {useParams} from 'react-router-dom';




const IphoneDetailContainer = () =>{
    const [data, setData] = useState({})
    
    const {iphoneId} = useParams()


    useEffect(() =>{
        const getData = new Promise(resolve =>{
            setTimeout(()=>{
                resolve(dataIphones);
            }, 0)
        });
        getData.then(res => setData(res.find(dataIphone => dataIphone.id === parseInt(iphoneId))))
    },[iphoneId]);



  return (
    <IphoneDetail data ={data}/>
  )
}

export default IphoneDetailContainer;