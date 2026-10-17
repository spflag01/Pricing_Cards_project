import React, { useState } from 'react';
import { use } from 'react';
import AvailableCard from './AvailableCart/AvailableCard';
import SelectedCard from './SelectedCards/SelectedCard';

const Card = ({cardPromise,setItem,item}) => {
    
    const Cards=use(cardPromise);

    const [selectedType,setSelectedtype]=useState("available");
    console.log(selectedType);

    const [selectedCard,          
    setSelectedCard]=useState([]);
    return (
        <div className='container mx-auto py-15'>

            <div className='flex flex-col items-center text-center py-8 px-4"'>
                <h2 className='text-3xl font-bold'>Premium Digital Tools</h2>
                <p className='text-gray-500 py-3'>Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today. Explore Products.</p>

                <div className='flex gap-18 py-4 mt-6' >
                    <button
                    onClick={()=>setSelectedtype("available")}

                    className={`btn ${selectedType==="available"? "bg-red-400":"bg-amber-100"}    text-lg px-12 `}>Product</button>

                    <button
                    
                    onClick={()=>setSelectedtype("selected")}
                    className={`btn ${selectedType==="selected"? "bg-red-400":"bg-amber-100"}  px-12 text-lg`}>Cart {selectedCard.length}</button>
                </div>

            </div>

            
           {selectedType==="available"?
           (<AvailableCard Cards={Cards} 
           setItem={setItem}
           item={item}
           setSelectedCard={setSelectedCard}
           selectedCard={selectedCard}
           ></AvailableCard>):
           
           (<SelectedCard
           setItem={setItem}
           item={item}      setSelectedCard={setSelectedCard}
           selectedCard={selectedCard}></SelectedCard>)}
        </div>
    );
};

export default Card;