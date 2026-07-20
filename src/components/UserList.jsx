import UserCard from "./UserCard";

function UserList({ users, onDelete }) {

    return (

        <>

            {users.map(user=>

                <UserCard
                    key={user.id}
                    user={user}
                    onDelete={onDelete}
                />

            )}

        </>

    );

}

export default UserList;