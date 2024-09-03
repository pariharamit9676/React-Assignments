import React, { useState } from 'react';
import './index.css';
import { useDispatch } from 'react-redux';
import { setEnrolledCourse } from '../../store/courses';
import { useLocation } from 'react-router-dom';

const ModalBox = ({ isOpen, onClose }) => {
    const [email, setEmail] = useState('');
    const dispatch = useDispatch()
    const location = useLocation()

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(setEnrolledCourse(email))
        setEmail('');
        onClose();
        window.location.href = '/dashboard';
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2 className="modal-title">Enter Your Email</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        className="modal-input"
                        placeholder="Enter your email"
                        value={email}
                        onChange={handleEmailChange}
                        required
                    />
                    <div className="modal-buttons">
                        <button type="submit" className="modal-submit-btn">Submit</button>
                        <button type="button" className="modal-close-btn" onClick={onClose}>Close</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ModalBox;
