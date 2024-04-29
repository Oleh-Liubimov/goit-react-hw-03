import { useEffect, useState } from 'react'
import initialContacts from "./contacts.json"
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import ContactForm from './components/ContactForm/ContactForm';
import * as Yup from "yup";


const objSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too short!")
    .max(50, "Too long!")
    .required("Required")
    .matches(/^[a-zA-Z]+$/, "Only Latin letters allowed"),
  number: Yup.string()
    .min(3, "Too short number!")
    .max(12, "Too long!")
    .required("Requaired"),
});





function App() {

  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem("saved contacts")
    return savedContacts ? JSON.parse(savedContacts) : initialContacts;
  });

  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem("saved contacts", JSON.stringify(contacts))
  },[contacts])

  const addContact = (newContact) => {
    setContacts(() => {
      return [...contacts,newContact]
    })
  }

  const deleteContact = (deleteId) => {
    setContacts(() => {
     return contacts.filter(item => item.id !== deleteId )
    })
  }

  const filteredContacts = contacts.filter(item => (
    item.name.toLowerCase().includes(filter.toLowerCase())
  ))

  return (
    <div className="root flex flex-col justify-center items-center h-screen">
      <h1 className="text-3xl mb-5 font-bold">Phonebook</h1>
      <ContactForm onAdd={addContact} validation={objSchema} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={filteredContacts} onDelete={deleteContact} />
    </div>
  );
}

export default App
