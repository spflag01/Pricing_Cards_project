
import React, { useState } from 'react';
import { MdDeleteSweep } from "react-icons/md";


const SelectedCard = ({selectedCard,setSelectedCard,item,setItem}) => {

    const handledeletecard=(card)=>{
        const filterCard=selectedCard.filter(selectedCard=>selectedCard.name!==card.name);
        setSelectedCard(filterCard);
         setItem(item-1);

    }


    return (
        <div>
            <h2 className='text-4xl'>Selected carts-{selectedCard.length}</h2>


            <div className='flex flex-col gap-5'>
            {
                selectedCard.length===0? 
                <div className='h[400px] flex items-center justify-center flex-col gap-5 py-5'>
                    <h2 className='font-bold text-2xl '>No Cart is selected yet</h2>
                    <p>Go to available to select Cart</p>
                </div>
                :
                selectedCard.map((card,index)=>{
                    return (<div className='gap-5'>
                    <div key={index} className='flex items-center gap-6 justify-between p-10 rounded-lg border h-[120px]'>
                        <div className=' flex flex-col gap-2'>
                     <div className='flex gap-3'>
                     <img src={card.image} alt="" />
                      <h1 className='font-semi-bold text-2xl'>{card.name}</h1>
                     </div>
                    <h2>${card.price}</h2>
                     </div>
                     
                     <button
                     onClick={()=>handledeletecard(card)}
                     className=''>
                        <MdDeleteSweep />

                     </button>

                    </div>

                   

                    </div>
                    );
                    
    
                })
                
                
            }
            </div>
            <button className=" text-2xl w-full h-[80px]
               bg-gradient-to-r from-purple-600 to-pink-500 text-white p-3 rounded-lg mt-4">
                Process to check out
            </button>
        </div>
    );
};

export default SelectedCard;
