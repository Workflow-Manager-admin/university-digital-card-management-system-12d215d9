import React, { useState } from "react";
import Modal from "../components/Modal";
import { useToast } from "../components/ToastProvider";
import "./CreateProfile.css";

// PUBLIC_INTERFACE
function CreateProfile() {
  const [role, setRole] = useState("student");
  const [form, setForm] = useState({
    name: "",
    email: "",
    department: "",
    nfcId: "",
    qrLink: "",
    cardStatus: "active"
  });
  const [showPreview, setShowPreview] = useState(false);
  const toast = useToast();

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setShowPreview(true);
  }

  function handleConfirm() {
    setShowPreview(false);
    toast("Profile created & card linked!", "success");
    setForm({
      name: "",
      email: "",
      department: "",
      nfcId: "",
      qrLink: "",
      cardStatus: "active"
    });
  }

  return (
    <section className="profile-form-section">
      <h1>Create New Profile</h1>
      <form className="profile-form" onSubmit={handleSubmit}>
        <label>
          Name
          <input required name="name" value={form.name} onChange={handleChange} />
        </label>
        <label>
          Email
          <input required name="email" type="email" value={form.email} onChange={handleChange} />
        </label>
        <label>
          Department
          <input name="department" value={form.department} onChange={handleChange} placeholder="e.g. Computer Science" />
        </label>
        <label>
          Role
          <select name="role" value={role} onChange={e => setRole(e.target.value)}>
            <option value="student">Student</option>
            <option value="faculty">Faculty</option>
            <option value="staff">Staff</option>
          </select>
        </label>
        <label>
          NFC ID
          <input name="nfcId" value={form.nfcId} onChange={handleChange} placeholder="Tap to autofill" />
        </label>
        <label>
          QR/Link
          <input name="qrLink" value={form.qrLink} onChange={handleChange} placeholder="https://..." />
        </label>
        <label>
          Card Status
          <select name="cardStatus" value={form.cardStatus} onChange={handleChange}>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </label>
        <div style={{ textAlign: "right" }}>
          <button type="submit" className="profile-form-btn">Preview</button>
        </div>
      </form>
      <Modal
        show={showPreview}
        onClose={() => setShowPreview(false)}
        title="Profile Preview"
        actions={
          <>
            <button className="login-btn-ghost" onClick={() => setShowPreview(false)}>
              Cancel
            </button>
            <button className="login-btn" onClick={handleConfirm}>
              Confirm & Create
            </button>
          </>
        }
      >
        <div>
          <h3>{role.charAt(0).toUpperCase() + role.slice(1)} Profile</h3>
          <p><strong>Name:</strong> {form.name}</p>
          <p><strong>Email:</strong> {form.email}</p>
          <p><strong>Dept:</strong> {form.department || "-"}</p>
          <p><strong>NFC ID:</strong> {form.nfcId || "-"}</p>
          <p><strong>QR/Link:</strong> {form.qrLink || "-"}</p>
          <p><strong>Status:</strong> {form.cardStatus}</p>
        </div>
      </Modal>
    </section>
  );
}

export default CreateProfile;
