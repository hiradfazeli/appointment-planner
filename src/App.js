import React, {useState} from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  const {contacts, setContacts} = useState([
    {
      name: 'Hirad Fazeli',
      phone: '995579245036',
      email: 'hirad.fazeli94@gmail.com'
    },
    {
      name: 'Steven Jobs',
      phone: '017787654321',
      email: 'S.jobs@apple.com'
    }
  ]);
  const {appoitnments, setAppointments} = useState([]);
  /*
  Define state variables for 
  contacts and appointments 
  */

  

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  const addContact = (name, phone, email) => {
    const contact = {
      name,
      phone,
      email,
    }
    setContacts(prev => {
      return [contact, ...prev];
    })
  }

  const addAppointment = (title, contact, date, time) => {
    const appointment = {
      title,
      contact,
      date,
      time,
    }
    setAppointments(prev => {
      return [appointment, ...prev];
    })
  }

  /*
  Implement functions to add data to
  contacts and appointments
  */

  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
             {/* Add props to ContactsPage */}
            <ContactsPage contacts={contacts}
                          addContact={addContact} />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            {/* Add props to AppointmentsPage */}
            <AppointmentsPage appoitnments={appoitnments}
                              addAppointment={addAppointment} />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;