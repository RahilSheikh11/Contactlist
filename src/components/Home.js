import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Home = () => {
    const contacts = useSelector(state => state);
    const dispatch = useDispatch();

    const deleteContact = (id) => {
        dispatch({ type: 'DELETE_CONTACT', payload: id });
        toast.success('Contact deleted successfully!');
    }

    return (
        <div className='container-fluid' style={{ backgroundColor: 'white', padding: '20px', borderRadius: '10px', color: 'white', border: '2px solid black', minHeight: '100vh', margin: '0' }}>
            <div className='row justify-content-center align-items-center'>
                <div className='col-md-8'>
                    <h1 className='text-center mb-4'>Contact List</h1>
                    <Link to='/add' className='btn btn-primary mb-4' style={{ backgroundColor: '#2ecc71' }}>Add Contact</Link>
                    <table className='table table-bordered text-black'>
                        <thead style={{ backgroundColor: 'white' }}>
                            <tr>
                                <th scope='col'>#</th>
                                <th scope='col'>Name</th>
                                <th scope='col'>Email</th>
                                <th scope='col'>Number</th>
                                <th scope='col'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {contacts.map((contact, id) => (
                                <tr key={id}>
                                    <td>{id + 1}</td>
                                    <td>{contact.name}</td>
                                    <td>{contact.email}</td>
                                    <td>{contact.number}</td>
                                    <td>
                                        <Link to={`/edit/${contact.id}`} className='btn btn-primary me-2' style={{ backgroundColor: '#2ecc71' }}>Edit</Link>
                                        <button type='button' onClick={() => deleteContact(contact.id)} className='btn btn-danger' style={{ backgroundColor: '#e74c3c' }}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Home;
