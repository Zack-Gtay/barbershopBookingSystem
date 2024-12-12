import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Spinner from "./components/Spinner";
import CoreHighlight from "./components/CoreHighlight";
import BestProducts from "./components/BestProducts";
import Shop from "./components/Shop";
import Product from "./components/Product";
import Contact from "./components/Contact";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="bg-customBeige font-noto h-full w-full">
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <Navbar />
            <Routes>
              {/* Home Route */}
              <Route
                path="/"
                element={
                  <>
                    <CoreHighlight />
                    <BestProducts />
                  </>
                }
              />

              {/* Other Routes */}
              <Route path="/shop" element={<Shop />} />
              <Route path="/product" element={<Product />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
