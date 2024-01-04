import { useState } from "react";
import Form from "./form";
import Table from "./table";
import React from "react";

export default function Steps() {
    const [walks, setWalks] = useState([]);

    const handleAdd = (walk) => {
        const newWalks = [...walks];
        const sameDate = newWalks.find((o) => o.date === walk.date);

        if (sameDate) {
            sameDate.distance += walk.distance;
        } else {
            newWalks.push(walk);
            newWalks.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
        }

        setWalks(newWalks);
    };

    const handleDelete = (id) => {
        setWalks((prevWalks) => prevWalks.filter((o) => o.id !== id));
    };

    return (
        <div className="step-counter">
            <Form onAdd={handleAdd} />
            <Table walks={walks} onDelete={handleDelete} />
        </div>
    );
}
