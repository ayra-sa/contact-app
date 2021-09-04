import React from 'react'
import { Link } from 'react-router-dom'
import ContactCard from './ContactCard'

const ContactList = (props) => {
    console.log(props)

    const deleteHandler = (id) => {
        props.getContactId(id)
    }

    const renderContactList = props.contacts.map((contact) => {
        return (
            <ContactCard 
                contact={contact}
                clickHandler={deleteHandler}
                key={contact.id}
            />
        )
    })
    return (
        <div className='contact-container'>
            <div className='list-header'>
                <div className='title'>
                    <h2>Contact List</h2>
                </div>
                <div className='button'>
                    <Link to='/add'><button>Add Contact</button></Link>
                </div>
            </div>
                {renderContactList}
            
        </div>
    )
}

export default ContactList
