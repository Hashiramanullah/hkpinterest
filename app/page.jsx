"use client"

import { collection, getDocs, getFirestore, query } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import app from './Shared/firebaseConfig';
import PinList from './component/Pins/PinList';
import Image from 'next/image';

export default function Home() {
 const db = getFirestore(app)
 const [listofPins, setlistofPins] = useState([]);

  useEffect(() => {
    getAllPins()
  }, [])
  
 const getAllPins=async()=>{
  setlistofPins([])
    const q=query(collection(db,'pinterest-post'));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
   
    setlistofPins(listOfPins=>[...listOfPins,doc.data()]);
    console.log(listofPins);
    });
}
  return (
    <>
    <div className='p-3'>
      <PinList listofPins={listofPins} />
      </div>
    </>
  )
}
