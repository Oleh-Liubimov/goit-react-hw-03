import { useState } from 'react'
import initialContacts from "./contacts.json"
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import ContactForm from './components/ContactForm/ContactForm';



function App() {

  const [contacts, setContacts] = useState(initialContacts);
  const [filter, setFilter] = useState('');

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
      <ContactForm onAdd={addContact} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={filteredContacts} onDelete={deleteContact} />
    </div>
  );
}

export default App
