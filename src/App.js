import React, {useState} from "react";
import "./App.css";
import Contacts from "./Contacts.json";

function App() {

  const [contact, setContact] = useState(Contacts.slice(0, 5));

  //No funciona el boton Random
  const handleRandom = () => {
    const contactRandom = contact[Math.floor(Math.random() * (contact.length))];
    setContact(contactRandom);
  }

  const handleShortByPopularity = () => {
    const orderPopularity = [...contact].sort((a, b) => a.popularity - b.popularity);
    setContact(orderPopularity);
  }

  const handleShortByName = () => {
    const orderName = [...contact].sort((a, b) => a.name.localeCompare(b.name))
    setContact(orderName);
  }

  const handleDelete = (id) => {
    setContact((deleteContact) => deleteContact.filter(contact => contact.id !== id)) ;
  }


  return <div className="App">
    <h1>IronContacts</h1>

    <button onClick={handleRandom}>Add random contact</button>
    <button onClick={handleShortByPopularity}>Short by popularity</button>
    <button onClick={handleShortByName}>Short by name</button>


    <table>

      <thead>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won Osccar</th>
          <th>Won Emmy</th>
          <th>Actions</th>
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
          <th><button onClick={handleDelete}>Delete</button></th>
        </tr>
        );
      })}
      </tbody>

    </table>

  </div>;

}
export default App;