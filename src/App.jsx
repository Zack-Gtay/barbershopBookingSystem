import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Spinner from "./components/Spinner";
import CoreHighlight from "./components/CoreHighlight";
import BestProducts from "./components/BestProducts";


function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-customBeige font-noto h-full w-full">
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <Navbar />
          <CoreHighlight />
          <BestProducts />

        </>
      )}
    </div>
  );
}

export default App;
