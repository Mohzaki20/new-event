import React from "react";
import ourProgramData from "./design-system/components/OurPrograms/OurProgramData";
import OurPrograms from "./design-system/components/OurPrograms/OurPrograms";
import "./design-system/main.css";

function App() {
  return (
    <div className="App">
      {ourProgramData.map((item) => {
        return (
        <OurPrograms
          img={item.img}
          name={item.name}
          key={item.id}
          title={item.title}
          time={item.time}
          alt={item.alt}
          description={item.description}
          room={item.room}
        />)
        ;
      })}
    </div>
  );
}

export default App;
