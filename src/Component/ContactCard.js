import React from 'react'
import {FaEdit, FaTrash, FaUserCircle} from 'react-icons/fa'
import { Link } from 'react-router-dom'


const ContactCard = (props) => {
    const {id, name, email} = props.contact
    return (
        <div className='list-content'>
                <div className='contact-icon'>
                    <FaUserCircle />
                </div>
                <div className='contact-info'>
                    <Link to={{ pathname: `/contact/${id}`, state: { contact: props.contact } }}>
                        <h4>{name}</h4>
                        <span>{email}</span>
                    </Link>
                </div>
                <div className='icon'>
                    <Link to={{pathname: `/edit`, state: {contact: props.contact}}}><FaEdit /></Link>
                    <FaTrash onClick={() => props.clickHandler(id)} />
                </div>
        </div>
    )
}

export default ContactCard
