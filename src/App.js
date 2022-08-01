import React, {useState} from "react";
import "./App.css";
import Contacts from "./Contacts.json";

function App() {

  const [contact] = useState(Contacts.slice(0, 5));

  return <div className="App">
    <h1>IronContacts</h1>

      <table>

        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Osccar</th>
            <th>Won Emmy</th>
          </tr>
        </thead>

        <tbody>
        {contact.map(elem => {
        const {name, pictureUrl, popularity,wonOscar, wonEmmy } = elem;
        return (
          <tr key={elem._id}>
            <th><img src={pictureUrl} style={{ height:"100px" }} alt="profileImage" ></img></th>
            <th><p>{name}</p></th>
            <th><p>{popularity.toFixed(2)}</p></th>
            <th>{wonOscar && <span>🏆</span>}</th>
            <th>{wonEmmy  && <span>🏆</span>}</th>
          </tr>
          );
        })}
        </tbody>
        
      </table>
  </div>;

}
export default App;