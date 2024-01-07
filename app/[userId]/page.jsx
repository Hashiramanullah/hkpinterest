"use client"

import React, { useState } from 'react'
import { useEffect } from 'react';
import app from '../Shared/firebaseConfig';
import { doc, getDoc, getFirestore,query,where,collection,getDocs } from 'firebase/firestore';
import UserInfo from "./../component/UserInfo"
import PinList from "./../component/Pins/PinList"
function Profile({params}) {

   const db = getFirestore(app)
   const [userInfo, setUserInfo] = useState(null);
   const [listofPins, setlistofPins] = useState([]);
   


    useEffect(() => {
       console.log(params.userId.replace("%40", "@"));

       if (params) {
         getUserInfo(params.userId.replace("%40","@"))
       }
    },[])
      
     const getUserInfo = async(email)=>{
      const docRef = doc(db,"user",email);
      const docSnap = await getDoc(docRef);

       if(docSnap.exists()){
        console.log("Document Data", docSnap.data());
        setUserInfo(docSnap.data());
       }else{
        console.log("no such document!");
       }
     }




     useEffect(() => {
      if (userInfo) {
       getUserPins();
        
      }
     }, [userInfo]); // Include userInfo as a dependency
   
     const getUserPins=async()=>{
      setlistofPins([])
        const q=query(collection(db,'pinterest-post')
        ,where("email",'==',userInfo.email));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
       
        setlistofPins(listOfPins=>[...listOfPins,doc.data()]);
        console.log(listofPins);
        });
    }

  return (
    <div>
      {userInfo?
      <UserInfo userInfo={userInfo}/>
      :null}
      <PinList listofPins={listofPins}/>
    </div>
  )
}

export default Profile