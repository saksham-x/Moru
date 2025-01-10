import React from "react";
import Dashboard from "./pages/Dashboard";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="p-5 flex flex-col justify-start items-center bg-gray-100 mx-8 my-2  shadow-lg rounded-md">
      <Header />
      <div className="flex-grow">
        <Dashboard />
      </div>
      <Footer />
    </div>
  );
};

export default App;
