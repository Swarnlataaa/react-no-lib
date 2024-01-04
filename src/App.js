// src/App.js
import React, { useState, useEffect } from "react";
import "./App.css"; // You may need to create this CSS file for general styling
import "./styles.css"; // Import the newly created styles.css file
import Projects from "./Projects";

function App() {
  const [loaderText, setLoaderText] = useState("Getting you in ....");
  const [websiteText, setWebsiteText] = useState(
    "Welcome to my side of the internet"
  );
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    // Show loader when the page starts loading
    setTimeout(() => {
      setShowLoader(false);
      typeWriterWebsite();
    }, 3000);

    typeWriterLoader();
  }, []);

  const typeWriterLoader = () => {
    let iLoader = 0;
    const speed = 50;

    const loaderTextInterval = setInterval(() => {
      if (iLoader < loaderText.length) {
        setLoaderText((prevText) => prevText + loaderText.charAt(iLoader));
        iLoader++;
      } else {
        clearInterval(loaderTextInterval);
        setTimeout(() => {
          setShowLoader(false);
        }, 2000);
      }
    }, speed);
  };

  const typeWriterWebsite = () => {
    let iWebsite = 0;
    const speed = 50;

    const websiteTextInterval = setInterval(() => {
      if (iWebsite < websiteText.length) {
        setWebsiteText((prevText) => prevText + websiteText.charAt(iWebsite));
        iWebsite++;
      } else {
        clearInterval(websiteTextInterval);
      }
    }, speed);
  };

  return (
    <div className="App bg-gray-100 flex flex-col min-h-screen">
      {showLoader && (
        <div className="loader-overlay">
          <div className="loader-text">{loaderText}</div>
        </div>
      )}

      <div className="border-l-4 border-blue-500 h-screen absolute left-0 top-0"></div>
      <div className="border-l-4 border-blue-500 h-screen absolute right-0 top-0"></div>

      <div className="relative flex-grow margin-container bg-hero-image">
        <nav className="bg-blue-500 p-4">
          <div className="container mx-auto">
            <a href="index.html" className="text-white text-2xl font-bold">
              HOME
            </a>
            <a href="/projects" className="text-white ml-4 hover:underline">
              Projects
            </a>
          </div>
        </nav>

        {/* Use the Projects component here */}
        <Projects />
      </div>

      <footer className="bg-blue-500 text-white py-4">
        <div className="container mx-auto text-center">
          &copy; 2023 Swarnlata
        </div>
      </footer>
    </div>
  );
}

export default App;
