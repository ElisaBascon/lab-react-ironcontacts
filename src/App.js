import React, {useState} from "react";
import "./App.css";
import Contacts from "./Contacts.json";

function App() {

  const [contact] = useState(Contacts.slice(0, 5));

  return <div className="App">
    <h1>IronContacts</h1>

  {contact.map(elem => {
    const {name, pictureUrl, popularity,wonOscar, wonEmmy } = elem;
    return (
      <table key={elem._id}>
        <tr>
          <th><img src={pictureUrl} style={{ height:"100px" }} alt="profileImage" ></img></th>
          <th><p>{name}</p></th>
          <th><p>{popularity.toFixed(2)}</p></th>
          <th>{wonOscar && <span>🏆</span>}</th>
          <th>{wonEmmy  && <span>🏆</span>}</th>
        </tr>
      </table>
    );
  })}

  </div>;

}
export default App;