import React from 'react';
import './Profile.css';
import { MdOutlineAccountCircle } from "react-icons/md";


function Profile() {
return(
    <div className="Profile">
        <header className="Profile-header">
            <div className="Profile-logo">
                <li><a href="/"><MdOutlineAccountCircle /><span>Perfil</span></a></li>
            </div>
        </header>
    </div>
);

}

export default Profile;