import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AddContact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');

    const contacts = useSelector(state => state);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();

        const checkEmail = contacts.find(contact => contact.email === email && email);
        const checkNumber = contacts.find(contact => contact.number === parseInt(number) && number);

        if (!email || !number || !name) {
            return toast.warning("Please fill in all fields!");
        }

        if (checkEmail) {
            return toast.error("This email already exists!");
        }

        if (checkNumber) {
            return toast.error("This number already exists!");
        }

        const data = {
            id: contacts.length + 1,
            name,
            email,
            number
        };

        dispatch({ type: 'ADD_CONTACT', payload: data });
        toast.success("Contact added successfully!");
        navigate('/');
    };

    return (
        <div className='container'>
            <h1 className='display-3 text-center fw-bold'>Add Contact</h1>
            <div className='row'>
                <div className='col-md-6 shadow mx-auto p-5'>
                    <form className='text-center' onSubmit={handleSubmit}>
                        <div className='form-group mb-3'>
                            <input
                                type='text'
                                placeholder='Name'
                                className='form-control'
                                value={name}
                                onChange={e => setName(e.target.value)}
                            />
                        </div>
                        <div className='form-group mb-3'>
                            <input
                                type='email'
                                placeholder='Email'
                                className='form-control'
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                        </div>
                        <div className='form-group mb-3'>
                            <input
                                type='number'
                                placeholder='Phone Number'
                                className='form-control'
                                value={number}
                                onChange={e => setNumber(e.target.value)}
                            />
                        </div>
                        <div className='form-group mb-3'>
                            <input
                                type='submit'
                                value='Add Contact'
                                className='btn btn-primary btn-block'
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddContact;
