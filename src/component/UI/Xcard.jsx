
import React, { useState } from 'react';
import { ToastContainer, 
toast } from 'react-toastify';
  

const xcard = ({card,setItem,item,selectedCard,setSelectedCard}) => {

    const [isSelected,setIsSelected]=useState(false);
      
    const handlechoseplayer= () => {
        
        setIsSelected(true);
         setItem(item+1)
         toast(`${card.name} is selected`)
       
        setSelectedCard([...selectedCard,card])
        }               

    return (
         <div
                            key={card.id}
                            className="card w-full bg-base-100 border border-base-300 rounded-2xl shadow-sm"
                        >
                            <div className="card-body p-5">

                                <div className="flex justify-between items-start">
                                    <div className="w-14 h-14 rounded-full border border-base-200 flex items-center justify-center text-2xl">
                                        <img src={card.image} alt={card.name} />
                                    </div>

                                    <span className="rounded-full p-3 bg-amber-200">
                                        {card.tag}
                                    </span>
                                </div>

                                <h2 className="text-xl font-bold mt-2">
                                    {card.name}
                                </h2>

                                <p className="text-sm text-base-content/70 leading-5">
                                    {card.description}
                                </p>

                                <div className="mt-1">
                                    <span className="text-2xl font-bold">
                                        ${card.price}
                                    </span>

                                    <span className="text-sm text-base-content/60">
                                        /{card.period}
                                    </span>
                                </div>

                                <div>
                                    {card.features.map((feature, index) => (
                                        <p key={index} className="text-sm mb-2">
                                            ✅ {feature}
                                        </p>
                                    ))}
                                </div>

                                <button
                                  onClick={handlechoseplayer}
                                  className={`btn border-0      rounded-full w-full mt-2 text-white ${
                                    isSelected
                                      ? "bg-green-500 hover:bg-green-600"
                                      : "bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700"
                                  }`}
                                  disabled={isSelected?true:false}
                                >
                                    {isSelected === true ? "Selected" : "Buy Now"}
                                </button>

                            </div>
                        </div>
    );
};

export default xcard;
