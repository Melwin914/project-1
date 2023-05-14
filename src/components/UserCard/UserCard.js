import React from 'react';
import { Link } from 'react-router-dom';
import './UserCard.css'
function UserCard({ users }) {
    return (
        <>
            {users.length > 0 ?
                <div className="user-card-container">
                    {users.map((user) => (
                        <Link to={`/user/${user.id}`} state={{ user: user }}
                            className="user-card"
                        >
                            <div className="user-image-container">
                                <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
                            </div>
                            <div className="user-info">
                                <h2>{`${user.first_name} ${user.last_name}`}</h2>
                                <p>{user.email}</p>
                                <button className="details-button">Show User Details</button>
                            </div>
                        </Link>
                    ))}
                </div>
                :
                <p>No Users Found</p>
            }
        </>
    );
}
export default UserCard