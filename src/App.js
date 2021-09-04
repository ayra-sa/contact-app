import React, { useState, useEffect } from 'react'
import Header from './Component/Header'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import api from './api/contact'
import {v4 as uuid} from 'uuid'
import ContactList from './Component/ContactList';
import ContactAdd from './Component/ContactAdd';
import ContactDetail from './Component/ContactDetail';
import ContactEdit from './Component/CotactEdit';

function App() {
  // const LOCAL_STORAGE_KEY = "contacts"
  const [contacts, setContacts] = useState([])

  const retrieveContacts = async () => {
    const response = await api.get('/contacts')
    return response.data
  }

  const addContactHandler = async (contact) => {
    console.log(contact)
    const request = {
      id: uuid(),
      ...contact,
    }
    const response = await api.post('/contacts', request)
    setContacts([...contacts, response.data])
  }

  const updateContactHandler = async (contact) => {
    const response = await api.put(`/contacts/${contact.id}`, contact);
    const { id, name, email } = response.data;
    setContacts(
      contacts.map((contact) => {
        return contact.id === id ? { ...response.data } : contact;
      })
    );
  };

  const removeContactHandler = async (id) => {
    await api.delete(`/contacts/${id}`)
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id
    })
    setContacts(newContactList)
  }

  useEffect(() => {
    // const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    // if (retrieveContacts) setContacts(retrieveContacts);
    const getAllContacts = async () => {
      const allContacts = await retrieveContacts()
      if (allContacts) setContacts(allContacts)
    }
    getAllContacts()
  }, []);

  useEffect(() => {
    // localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact render={(props) => (
            <ContactList {...props} contacts={contacts} getContactId={removeContactHandler} />
          )} />
          <Route path='/add' render={(props) => (
              <ContactAdd {...props} addContactHandler={addContactHandler} />
          )} />
          <Route path='/edit' render={(props) => (
              <ContactEdit {...props} updateContactHandler={updateContactHandler} />
          )} />
          <Route path='/contact/:id' component={ContactDetail} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
