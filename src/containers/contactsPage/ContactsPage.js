import React, { useState, useEffect } from "react";
import {ContactForm} from '../../components/contactForm/ContactForm';
import {TileList} from '../../components/tileList/TileList';

export const ContactsPage = ({contacts, addContact}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [duplicate, setDuplicate] = useState(false);
  /*
  Define state variables for 
  contact info and duplicate check
  */

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
    const nameCheck = () => {
      const found = contacts.filter(item => {
        return item.name !== name;
      })
      if(found) {
        return true;
      }
      return false;
    } 

    if(nameCheck()) {
      setDuplicate(true);
    } else {
      setDuplicate(false);
    }
  }, [name, contacts, duplicate])
  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm name={name}
                     setName={setName} 
                     phone={phone}
                     setPhone={setPhone}
                     email={email}
                     setEmail={setEmail}
                     handleSubmit={handleSubmit} />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList tiles={contacts} />
      </section>
    </div>
  );
};
