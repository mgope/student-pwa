import { dbPromise } from "../database/db";

export async function addUser(user) {

    const db = await dbPromise;

    return db.add("students", user);

}

export async function getUsers() {

    const db = await dbPromise;

    return db.getAll("students");

}

export async function deleteUser(id) {

    const db = await dbPromise;

    return db.delete("students", id);

}