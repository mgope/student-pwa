import { openDB } from "idb";

export const dbPromise = openDB("StudentDB", 1, {
    upgrade(db) {

        if (!db.objectStoreNames.contains("students")) {

            db.createObjectStore("students", {
                keyPath: "id",
                autoIncrement: true
            });

        }

    }
});