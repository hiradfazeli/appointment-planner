import React, { useState, useEffect } from "react";
import {ContactForm} from '../../components/contactForm/ContactForm';
import {TileList} from '../../components/tileList/TileList';

export const ContactsPage = (props) => {
  const {name, setName} = useState('');
  const {phone, setPhone} = useState('');
  const {email, setEmail} = useState('');
  const {duplicate, setDuplicate} = useState(false);
  /*
  Define state variables for 
  contact info and duplicate check
  */

  const { contacts, addContact } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!duplicate) {
      addContact(name, phone, email);
      setName('');
      setPhone('');
      setEmail('');
    }
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
  };


  useEffect(() => {
    const nameCheck = contacts.filter(item => {
      return item.name !== name;
    })

    if(nameCheck) {
      setDuplicate(true);
    }
  }, [name])
  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
      </section>
    </div>
  );
};
