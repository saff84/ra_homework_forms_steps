import { useState } from "react";

export default function Form({ onAdd }) {
    const [form, setForm] = useState({ date: "", distance: "" });

    const handlerChange = ({ target }) => {
        const name = target.name;
        const value = target.value;
        setForm((prevForm) => ({ ...prevForm, [name]: value }));
    };

    const handlerSubmit = (e) => {
        e.preventDefault();
        const walk = {
            id: "id" + Math.random().toString(16).slice(2),
            date: form.date,
            distance: Number(form.distance),
        };

        onAdd(walk);
        setForm({ date: "", distance: "" });
    };

    return (
        <form className="form" onSubmit={handlerSubmit}>
            <div className="form-elem">
                <label className="input-description" htmlFor="date">
                    Дата (ДД.ММ.ГГ)
                </label>
                <input
                    className="form-input"
                    type="date"
                    id="date"
                    name="date"
                    value={form.date}
                    onChange={handlerChange}
                    required
                />
            </div>
            <div className="form-elem">
                <label className="input-description" htmlFor="distance">
                    Пройдено км
                </label>
                <input
                    className="form-input"
                    type="number"
                    id="distance"
                    name="distance"
                    step="0.1"
                    value={form.distance}
                    onChange={handlerChange}
                    required
                />
            </div>
            <button className="btn" type="submit">
                OK
            </button>
        </form>
    );
}