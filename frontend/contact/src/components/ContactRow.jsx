
import React, { useState } from 'react';
import {
    TableCell,
    TableRow,
    Button,
    Box,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField,
} from '@mui/material';
import { Edit, Delete, AccountCircle } from '@mui/icons-material';
import axios from 'axios';

const ContactRow = ({ contact, handleEditContact, handleDeleteContact }) => {
    const [editOpen, setEditOpen] = useState(false);
    const [editForm, setEditForm] = useState(contact);

    const handleClickOpenEdit = () => {
        setEditOpen(true);
    };

    const handleCloseEdit = () => {
        setEditOpen(false);
    };

    const handleChange = (e) => {
        setEditForm({
            ...editForm,
            [e.target.name]: e.target.value,
        });
    };

    const handleUpdateContact = async () => {
        try {
            const response = await axios.put(`http://localhost:3000/contacts/${contact._id}`, editForm);
            handleEditContact(response.data);
            setEditOpen(false);
        } catch (error) {
            console.error('Error updating contact:', error);
        }
    };

    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:3000/contacts/${contact._id}`);
            handleDeleteContact(contact._id);
        } catch (error) {
            console.error('Error deleting contact:', error);
        }
    };

    return (
        <TableRow>
            <TableCell>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <AccountCircle sx={{ marginRight: 1 }} />
                    {contact.firstName} {contact.lastName}
                </Box>
            </TableCell>
            <TableCell>{contact.email}</TableCell>
            <TableCell>{contact.phoneNumber}</TableCell>
            <TableCell>{contact.company || 'N/A'}</TableCell>
            <TableCell>{contact.jobTitle || 'N/A'}</TableCell>
            <TableCell>
                <Button variant="contained" color="primary" startIcon={<Edit />} onClick={handleClickOpenEdit}>
                    Edit
                </Button>
            </TableCell>
            <TableCell>
                <Button variant="contained" color="error" startIcon={<Delete />} onClick={handleDelete}>
                    Delete
                </Button>
            </TableCell>

            {/* Edit Dialog */}
            <Dialog open={editOpen} onClose={handleCloseEdit}>
                <DialogTitle>Edit Contact</DialogTitle>
                <DialogContent>
                    <TextField margin="dense" name="firstName" label="First Name" fullWidth variant="outlined" value={editForm.firstName} onChange={handleChange} />
                    <TextField margin="dense" name="lastName" label="Last Name" fullWidth variant="outlined" value={editForm.lastName} onChange={handleChange} />
                    <TextField margin="dense" name="email" label="Email" fullWidth variant="outlined" value={editForm.email} onChange={handleChange} />
                    <TextField margin="dense" name="phoneNumber" label="Phone Number" fullWidth variant="outlined" value={editForm.phoneNumber} onChange={handleChange} />
                    <TextField margin="dense" name="company" label="Company" fullWidth variant="outlined" value={editForm.company} onChange={handleChange} />
                    <TextField margin="dense" name="jobTitle" label="Job Title" fullWidth variant="outlined" value={editForm.jobTitle} onChange={handleChange} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseEdit} color="primary">Cancel</Button>
                    <Button onClick={handleUpdateContact} color="primary">Update</Button>
                </DialogActions>
            </Dialog>
        </TableRow>
    );
};

export default ContactRow;

