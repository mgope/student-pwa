function UserCard({ user, onDelete }) {

    return (

        <div className="card">

            <span>{user.name}</span>

            <button onClick={()=>onDelete(user.id)}>
                Delete
            </button>

        </div>

    );

}

export default UserCard;