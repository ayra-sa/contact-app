import React from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const ContactDetail = (props) => {
    console.log(props.location.state.contact)
    const {name, email} = props.location.state.contact;
    return (
        <div className='contact-container'>
            <h2>Contact Detail</h2>
            <div className='detail-info'>
                <div className='d-icon'>
                    <FaUserCircle />
                </div>
                <b>{name}</b>
                <span>{email}</span>
            </div>
            <Link to='/'>
                <button>Back</button>
            </Link>
        </div>
    )
}

export default ContactDetail
