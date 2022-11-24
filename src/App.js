import React from 'react';
import { faClockFour, faMicrophone, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import Overview from './design-system/components/Overview';

function App() {
  return (
    <div className="App">
      <Overview icon={faUserGroup} title = "650 participants">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur eveniet delectus 
        error vitae perspiciatis facere quo sequi incidunt
      </Overview>
    
    
    </div>
  );
}

export default App;















// <Overview icon={faClockFour} title = "24 programs">
// Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur eveniet delectus 
//   error vitae perspiciatis facere quo sequi incidunt
// </Overview>
// <Overview icon={faMicrophone} title = "11 speaker">
// Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur eveniet delectus 
//   error vitae perspiciatis facere quo sequi incidunt
// </Overview>