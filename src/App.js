import React from 'react';
import CreativeSpeaker from './design-system/components/CreativeSpeakers/CreativeSpeakers';
import SpeakersData from './design-system/components/CreativeSpeakers/SpeakersData';
import "./design-system/main.css"

function App() {
  return (
    <div className="App">
      <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
      {
        SpeakersData.map(item => {
          return(
          <CreativeSpeaker name={item.name} img={item.img} job={item.job} alt={item.alt}/>
          )
        })
      }
        </div>
    </div>
  );
}

export default App;

