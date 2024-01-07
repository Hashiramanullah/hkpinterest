import React from 'react'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { signOut,useSession } from 'next-auth/react';
function UserInfo({userInfo}) {
 console.log(userInfo);
   const {data:session} = useSession()
   const router = useRouter();
    const onLogoutClick=()=>{
      signOut();
      router.push("/")
    }
    
    return (
      <>
      {session?.user.email== userInfo.email?

    <div className='flex flex-col items-center'>
        <Image src={userInfo.userImage}
        alt='userImage'
        width={80}
        height={80}
        className='rounded-full'/>
  <h2 className='text-[30px] font-semibold'>{userInfo.userName}</h2>
  <h2 className='text-gray-400'>{userInfo.email}</h2>
  <div className='flex gap-4'>
        <button className='bg-gray-200
         p-2 px-3 font-semibold mt-5 rounded-full'>Share</button>
       <button className='bg-gray-200
         p-2 px-3 font-semibold mt-5 rounded-full'
         onClick={()=>onLogoutClick()}>Logout</button>
      </div>
 
    </div>
    :null}
      </>

  )
}

export default UserInfo;