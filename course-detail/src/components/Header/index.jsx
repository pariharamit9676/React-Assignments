import React, { useState } from 'react';
import './index.css';
import ModalBox from '../ModalBox';
import { useLocation } from 'react-router-dom';


const Header = () => {

  const [isModalOpen, setModalOpen] = useState(false);

  const location = useLocation();
    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);
 

  return (
    <div className="bg-dark text-white py-3">
    <div className="container d-flex justify-content-between align-items-center">
        <h1 className="h4 mb-0">Course Platform</h1>
        <nav className="d-flex align-items-center">
            <ul className="nav mb-0 me-4">
                <li className="nav-item">
                    <span className="nav-link text-white">Home</span>
                </li>
                <li className="nav-item">
                    <span className="nav-link text-white">Courses</span>
                </li>
                <li className="nav-item">
                    <span className="nav-link text-white">About</span>
                </li>
                <li className="nav-item">
                    <span className="nav-link text-white">Contact</span>
                </li>
            </ul>
            {location.pathname !== '/dashboard' && (
            <button 
                className="btn btn-primary"
                onClick={() => {
                  openModal()
                }}
            >
                Go to Dashboard
            </button>
            )}
            <ModalBox isOpen={isModalOpen} onClose={closeModal} />
        </nav>
    </div>
</div>

  );
}

export default Header;
