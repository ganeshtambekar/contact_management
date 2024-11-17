import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ContactTable from './ContactTable';
import SearchAndActions from './SearchAndActions';

const ContactList = () => {
    const [contacts, setContacts] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    const fetchContacts = async () => {
        try {
            const response = await axios.get('http://localhost:3000/contacts/get'); 
            setContacts(response.data);
        } catch (error) {
            console.error('Error fetching contacts:', error);
        }
    };


    useEffect(() => {
        fetchContacts();
    }, []); 

    
    const handleAddContact = async (newContact) => {
        try {
            await axios.post('http://localhost:3000/contacts', newContact);
            fetchContacts(); 
        } catch (error) {
            console.error('Error adding new contact:', error);
        }
    };

    
    const handleEditContact = (updatedContact) => {
        setContacts((prevContacts) =>
            prevContacts.map((contact) =>
                contact._id === updatedContact._id ? updatedContact : contact
            )
        );
    };

    
    const handleDeleteContact = (id) => {
        setContacts((prevContacts) => prevContacts.filter((contact) => contact._id !== id));
    };

    const filteredContacts = contacts.filter(
        (contact) =>
            contact.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            contact.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            contact.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
            contact.phoneNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
            contact.company?.toLowerCase().includes(searchQuery.toLowerCase()) ||
            contact.jobTitle?.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div>
            <SearchAndActions
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                handleAddContact={handleAddContact}
            />
            <ContactTable
                contacts={filteredContacts}
                handleEditContact={handleEditContact}
                handleDeleteContact={handleDeleteContact}
            />
        </div>
    );
};

export default ContactList;