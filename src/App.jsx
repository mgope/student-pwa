import { useEffect, useState } from "react";

import UserForm from "./components/UserForm";

import UserList from "./components/UserList";

import { addUser, getUsers, deleteUser } from "./services/userService";

function App() {

    const [users, setUsers] = useState([]);

    async function loadUsers() {

        const data = await getUsers();

        setUsers(data);

    }

    useEffect(() => {
        async function loadUsers() {
            const data = await getUsers();
            setUsers(data);
        }

        loadUsers();
    }, []);

    async function handleAdd(user) {

        await addUser(user);

        loadUsers();

    }

    async function handleDelete(id) {

        await deleteUser(id);

        loadUsers();

    }

    return (

        <div>

            <h1>Student List</h1>

            <UserForm onAdd={handleAdd}/>

            <UserList
                users={users}
                onDelete={handleDelete}
            />

        </div>

    );

}

export default App;