
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import SearchAndActions from './components/SearchAndActions';
import ContactTable from './components/ContactTable';
import axios from 'axios';

const App = () => {
    const [contacts, setContacts] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    
    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const response = await axios.get('http://localhost:3000/contacts');
                setContacts(response.data);
            } catch (error) {
                console.error('Error fetching contacts:', error);
            }
        };
        fetchContacts();
    }, []);

   
    const handleCreateContact = async (newContact) => {
        try {
            const response = await axios.post('http://localhost:3000/contacts', newContact);
            setContacts((prevContacts) => [...prevContacts, response.data]);
        } catch (error) {
            console.error('Error creating contact:', error);
        }
    };

   
    const handleDeleteContact = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/contacts/${id}`);
            setContacts((prevContacts) => prevContacts.filter(contact => contact._id !== id));
        } catch (error) {
            console.error('Error deleting contact:', error);
        }
    };

    
    const handleEditContact = (updatedContact) => {
        setContacts((prevContacts) =>
            prevContacts.map((contact) =>
                contact._id === updatedContact._id ? updatedContact : contact
            )
        );
    };

    const filteredContacts = contacts.filter((contact) =>
        contact.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        contact.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        contact.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        contact.phoneNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
        contact.company?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        contact.jobTitle?.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div>
            <Header />
            <SearchAndActions
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                handleCreateContact={handleCreateContact}
            />
            <ContactTable
                contacts={filteredContacts}
                handleEditContact={handleEditContact}
                handleDeleteContact={handleDeleteContact}
            />
        </div>
    );
};

export default App;
