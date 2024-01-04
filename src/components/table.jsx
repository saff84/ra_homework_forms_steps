import React from "react";

export default function Table({ walks, onDelete }) {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Дата (ДД.ММ.ГГ)</th>
                    <th>Пройдено км</th>
                    <th>Действия</th>
                </tr>
            </thead>
            <tbody>
                {walks.map((o) => (
                    <tr key={o.id}>
                        <td>{new Date(o.date).toLocaleDateString()}</td>
                        <td>{o.distance}</td>
                        <td>
                            <button className="btn delete-btn" onClick={() => onDelete(o.id)}>
                                &#10060;
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}