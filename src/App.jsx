
import { Suspense, useState } from "react";
import Banner from "./component/Homepage/Banner/Banner";
import Card from "./component/Homepage/cards/Card";
import Navbar from "./component/Navbar/Navbar";
import GetStart from "./component/Homepage/GetStarted/GetStart";
import Pricing from "./component/Homepage/Pricing/Pricing";
  


const fetchCard = async () => {
  const res = await fetch("/Data.json");
  return res.json();
};

function App() {
  const cardPromise = fetchCard();

  const [item, setItem] = useState(0);

  return (
    <>
      <Navbar item={item} />
      <Banner />

      <Suspense
        fallback={
          <span className="loading loading-spinner text-primary"></span>
        }
      >
        <Card
          cardPromise={cardPromise}
          setItem={setItem}
          item={item}
        />
      </Suspense>

      <GetStart></GetStart>
      <Pricing></Pricing>
       

     
    </>
  );
}

export default App;
