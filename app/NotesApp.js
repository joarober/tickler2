'use client';

import { useState } from "react";

const policyTypes = ["HNW Household", "Commercial Combined", "Motor Fleet", "Property Owners"];
const insurers = ["Hiscox", "Aviva", "Allianz", "AXA", "Chubb"];
const riskTypes = ["Flood", "Thatched Roof", "Unoccupied", "Listed Building", "Jewellery"];

export default function NotesApp() {
  const [notes, setNotes] = useState([]);
  const [form, setForm] = useState({
    policyType: "",
    insurer: "",
    riskType: "",
    appetite: "",
    tips: "",
  });

  const handleChange = (field) => (e) => {
    const value = e.target.value;
    setForm({ ...form, [field]: value });
  };

  const handleSubmit = () => {
    if (form.policyType && form.insurer && form.riskType) {
      setNotes([...notes, { ...form, id: Date.now() }]);
      setForm({ policyType: "", insurer: "", riskType: "", appetite: "", tips: "" });
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold">Policy Notes Tracker</h1>

      <div className="bg-white p-6 rounded-xl shadow space-y-4">
        <select className="w-full border p-2 rounded" value={form.policyType} onChange={handleChange("policyType")}>
          <option value="">Select Policy Type</option>
          {policyTypes.map((type) => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>

        <select className="w-full border p-2 rounded" value={form.insurer} onChange={handleChange("insurer")}>
          <option value="">Select Insurer</option>
          {insurers.map((ins) => (
            <option key={ins} value={ins}>{ins}</option>
          ))}
        </select>

        <select className="w-full border p-2 rounded" value={form.riskType} onChange={handleChange("riskType")}>
          <option value="">Select Risk Type</option>
          {riskTypes.map((risk) => (
            <option key={risk} value={risk}>{risk}</option>
          ))}
        </select>

        <textarea
          className="w-full border p-2 rounded"
          placeholder="Summarise appetite guide"
          value={form.appetite}
          onChange={handleChange("appetite")}
        />

        <textarea
          className="w-full border p-2 rounded"
          placeholder="Add underwriting tips or clauses"
          value={form.tips}
          onChange={handleChange("tips")}
        />

        <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={handleSubmit}>Add Note</button>
      </div>

      <div className="space-y-4">
        {notes.map((note) => (
          <div key={note.id} className="bg-white p-4 rounded shadow border space-y-2">
            <div><strong>Policy Type:</strong> {note.policyType}</div>
            <div><strong>Insurer:</strong> {note.insurer}</div>
            <div><strong>Risk Type:</strong> {note.riskType}</div>
            <div><strong>Appetite:</strong> {note.appetite}</div>
            <div><strong>Tips:</strong> {note.tips}</div>
          </div>
        ))}
      </div>
    </div>
  );
}