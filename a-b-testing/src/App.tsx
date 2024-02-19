import React, { useEffect } from 'react';
import { useState } from 'react';
import "./App.css";

export default function App() {

const [downloadColor, setDownloadColor] = useState<string>("green")
const [cancelColor, setCancelColor] = useState<string>("red")

const handleButtonClick = (buttonName: string, color: string) => {
  console.log(`${color} ${buttonName} button is clicked`)
}

useEffect(() => {
  const isVariantA = Math.random() < 0.5;
  
  if (isVariantA) {
    setDownloadColor("green");
    setCancelColor("red")
  } 
  else {
    setDownloadColor("red");
    setCancelColor("green")
  }
}, []);

  return (
    <main className="main">'
      <h1>Best tutorial for A/B testing</h1>
      <section className="button-section">
        <button className="button" 
              style={{ backgroundColor: downloadColor }}
              onClick={() => handleButtonClick("download", downloadColor)}>Download Now!
        </button>
        <button className="button"
              style={{backgroundColor: cancelColor}}
              onClick={() => handleButtonClick("cancel", cancelColor)}>Cancel
        </button>
      </section>
    </main>
  )
}

