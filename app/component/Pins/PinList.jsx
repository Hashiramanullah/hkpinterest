import PinItem from "./PinItem"

function PinList({ listofPins }) {
  console.log(listofPins);
 

  return ( <div className='mt-7 px-2 md:px-5
     columns-2 md:columns-3
     lg:columns-4 mb-4
     xl:columns-5 space-y-6 mx-auto'>
       {listofPins.map((item,index)=>{
        return <div>
            <PinItem pin={item} />
        </div>
       })}
        {/* {listofPins.map((item,index)=>(
           return <div>
               <PinItem pin={item} />

            </div>
           
        ))} */}
    </div>

  )
}

export default PinList