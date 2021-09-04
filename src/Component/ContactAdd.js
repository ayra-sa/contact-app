import React from 'react'

class ContactAdd extends React.Component {
    state = {
        name: "",
        email: "",
    }
    
    add = (e) => {
        e.preventDefault();
        if (this.state.name === "" || this.state.email === "") {
          alert("Field is empty. Fill it!");
          return
        }
        this.props.addContactHandler(this.state);
        this.setState({name: "", email: ""});
        this.props.history.push("/");
      };

    render() {
        return (
            <div className='contact-container'>
                <h2>Add Contact</h2>
                <form className='add-form' onSubmit={this.add}>
                    <div className='field'>
                        <label>Name</label>
                        <input type='text' name='name' placeholder='Name' value={this.state.name} onChange={(e) => this.setState({name: e.target.value})} />
                    </div>
                    <div className='field'>
                        <label>Email</label>
                        <input type='text' name='email' placeholder='Email' value={this.state.email} onChange={(e) => this.setState({email: e.target.value})} />
                    </div>
                    <button>Add</button>
                </form>
            </div>
        )
    }
}

export default ContactAdd