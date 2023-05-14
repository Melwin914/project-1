import React, { useState, useEffect } from 'react';
import { getAllUsers } from '../../../ApiService/APIservice';
import UserCard from '../../UserCard/UserCard';
import Loader from '../../Loader/Loader';

function Home() {
    const [users, setUsers] = useState([]);
    const [loader, setLoader] = useState(true)
    useEffect(() => {
        // Api Call For Data Fetching
        async function fetchData() {
            try {
                const response = await getAllUsers();
                setUsers(response);
                setLoader(false)
            } catch (error) {
                console.log("Error occured")
                setUsers([]);
            }
        }
        setTimeout(() => {
            fetchData();
        }, 1000);

    }, []);

    if (loader) {
        return <Loader />
    }

    return (
        <>
        <UserCard users={users} />
        </>
    )
}

export default Home