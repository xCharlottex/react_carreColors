import logo from './logo.svg';
import './App.css';
import AirtableApi from './AirtableApi';
import { useEffect, useState } from 'react';
import userEvent from '@testing-library/user-event';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
function App(){
  const [Color, setColor] = useState("");
  const [listColor, setListColor] = useState([])

  const getListColor = async () => {
    let listCarre = [];

    const resultCarre = await AirtableApi();
 
    resultCarre.data.records.forEach(carre => {
      listCarre.push({id: carre.id, Color: carre.fields.Color})
    })
    setListColor(listCarre)
  };

useEffect(() => {
  getListColor();
}, []);


const renderCarre = listColor.map((carre) =>
<div class="carre"
style={{
  backgroundColor: carre.Color
}}>{carre.Color}</div>
);

return(
  
  <div>
    {renderCarre}
  </div>
)

}

export default App;
