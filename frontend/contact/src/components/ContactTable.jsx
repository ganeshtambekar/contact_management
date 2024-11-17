
import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import ContactRow from './ContactRow';

const ContactTable = ({ contacts, handleEditContact, handleDeleteContact }) => {
    return (
        <TableContainer component={Paper} sx={{ maxWidth: '90%', margin: '0 auto' }}>
            <Table>
                <TableHead sx={{ backgroundColor: '#007BFF' }}>
                    <TableRow>
                        <TableCell sx={{ color: '#FFF' }}>Name</TableCell>
                        <TableCell sx={{ color: '#FFF' }}>Email</TableCell>
                        <TableCell sx={{ color: '#FFF' }}>Phone Number</TableCell>
                        <TableCell sx={{ color: '#FFF' }}>Company</TableCell>
                        <TableCell sx={{ color: '#FFF' }}>Job Title</TableCell>
                        <TableCell sx={{ color: '#FFF' }}>Edit</TableCell>
                        <TableCell sx={{ color: '#FFF' }}>Delete</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {contacts.map((contact) => (
                        <ContactRow
                            key={contact._id}
                            contact={contact}
                            handleEditContact={handleEditContact}
                            handleDeleteContact={handleDeleteContact}
                        />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default ContactTable;
