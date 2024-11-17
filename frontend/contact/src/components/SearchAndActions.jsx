
import React, { useState } from 'react';
import { Box, Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { Search, Add, Sort } from '@mui/icons-material';

const SearchAndActions = ({ searchQuery, setSearchQuery, handleCreateContact }) => {
    const [open, setOpen] = useState(false);
    const [contactForm, setContactForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        company: '',
        jobTitle: ''
    });

    const handleClickOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleChange = (e) => {
        setContactForm({
            ...contactForm,
            [e.target.name]: e.target.value
        });
    };

    const handleCreate = () => {
        handleCreateContact(contactForm);
        setContactForm({
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            company: '',
            jobTitle: ''
        });
        setOpen(false);
    };

    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <TextField
                    variant="outlined"
                    placeholder="Search Contacts"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    size="small"
                    sx={{ marginRight: 2 }}
                />
                <Button variant="contained" color="primary" startIcon={<Search />}>
                    Search
                </Button>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Button variant="contained" color="success" startIcon={<Add />} onClick={handleClickOpen}>
                    Add Contact
                </Button>
            </Box>

            {/* Add Contact Dialog */}
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Add New Contact</DialogTitle>
                <DialogContent>
                    <TextField margin="dense" name="firstName" label="First Name" fullWidth variant="outlined" value={contactForm.firstName} onChange={handleChange} />
                    <TextField margin="dense" name="lastName" label="Last Name" fullWidth variant="outlined" value={contactForm.lastName} onChange={handleChange} />
                    <TextField margin="dense" name="email" label="Email" fullWidth variant="outlined" value={contactForm.email} onChange={handleChange} />
                    <TextField margin="dense" name="phoneNumber" label="Phone Number" fullWidth variant="outlined" value={contactForm.phoneNumber} onChange={handleChange} />
                    <TextField margin="dense" name="company" label="Company" fullWidth variant="outlined" value={contactForm.company} onChange={handleChange} />
                    <TextField margin="dense" name="jobTitle" label="Job Title" fullWidth variant="outlined" value={contactForm.jobTitle} onChange={handleChange} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">Cancel</Button>
                    <Button onClick={handleCreate} color="primary">Create</Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default SearchAndActions;
