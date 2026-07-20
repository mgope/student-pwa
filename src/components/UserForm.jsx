import { useState } from "react";

function UserForm({ onAdd }) {

    const [name, setName] = useState("");

    function submit(e) {

        e.preventDefault();

        if (!name.trim()) return;

        onAdd({
            name
        });

        setName("");

    }

    return (

        <form onSubmit={submit}>

            <input
                value={name}
                onChange={(e)=>setName(e.target.value)}
                placeholder="Enter name"
            />

            <button>Add</button>

        </form>

    );

}

export default UserForm;