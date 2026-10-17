
import React from 'react';
import Xcard from "../../../UI/Xcard"
const AvailableCard = ({ Cards,setItem,item,selectedCard,setSelectedCard}) => {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                {Cards.map((card) => {
                    return <Xcard key={card.id} card={card} setItem={setItem}
                    item={item} setSelectedCard={setSelectedCard} selectedCard={selectedCard}></Xcard>                                })}

            </div>

            
        </div>
    );
};

export default AvailableCard;
