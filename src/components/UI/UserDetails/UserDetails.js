import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import './UserDetails.css'
function UserDetails() {
    const location = useLocation();
    const { user } = location.state;
    return (
        <div className="user-details-container">
            <div class="card">
                <div class="img-bx">
                    <img src={user.avatar} alt="img" />
                </div>
                <div class="content">
                    <div class="detail">
                        <h2>{`${user.first_name} ${user.last_name}`}<br /><span>{user.email}</span></h2>
                        <Link to='/'>
                            <button className='go-back-home-button'>Go back Home</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserDetails