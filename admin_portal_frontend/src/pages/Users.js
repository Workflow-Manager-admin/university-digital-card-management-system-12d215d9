import React, { useState } from "react";
import UserTable from "../components/UserTable";
import Modal from "../components/Modal";
import { useToast } from "../components/ToastProvider";

// Dummy users
const DEFAULT_USERS = [
  { id: 1, name: "Alice Smith", email: "alice@university.edu", role: "student", active: true },
  { id: 2, name: "Dr. Bob Lee", email: "b.lee@university.edu", role: "faculty", active: true },
  { id: 3, name: "Jane Doe", email: "jane@university.edu", role: "staff", active: false },
  { id: 4, name: "Prof. Max Ray", email: "max@university.edu", role: "faculty", active: true },
  { id: 5, name: "John S.", email: "john@university.edu", role: "student", active: true },
  { id: 6, name: "Alex Cooper", email: "acooper@university.edu", role: "staff", active: false }
];

// PUBLIC_INTERFACE
function Users() {
  const [users, setUsers] = useState(DEFAULT_USERS);
  const [selected, setSelected] = useState(null);
  const [view, setView] = useState(false);
  const [edit, setEdit] = useState(false);
  const toast = useToast();

  function handleDelete(u) {
    setUsers((prev) => prev.filter((x) => x.id !== u.id));
    setSelected(null);
    toast("User deleted.", "success");
  }

  function handleEdit(u) {
    setSelected(u);
    setEdit(true);
  }

  function handleView(u) {
    setSelected(u);
    setView(true);
  }

  function handleSaveEdit(newUser) {
    setUsers((prev) => prev.map((u) => (u.id === newUser.id ? newUser : u)));
    setEdit(false);
    toast("User updated.", "success");
  }

  return (
    <section>
      <h1>Users</h1>
      <UserTable
        users={users}
        onEdit={handleEdit}
        onView={handleView}
        onDelete={handleDelete}
      />
      {/* View Modal */}
      <Modal
        show={view}
        onClose={() => setView(false)}
        title={selected ? "View User" : ""}
        actions={<button onClick={() => setView(false)} className="login-btn-ghost">Close</button>}
      >
        {selected && (
          <div>
            <p><strong>Name:</strong> {selected.name}</p>
            <p><strong>Email:</strong> {selected.email}</p>
            <p><strong>Role:</strong> {selected.role}</p>
            <p><strong>Status:</strong> {selected.active ? "Active" : "Inactive"}</p>
          </div>
        )}
      </Modal>
      {/* Edit Modal */}
      <Modal
        show={edit}
        onClose={() => setEdit(false)}
        title={selected ? "Edit User" : ""}
        actions={
          <>
            <button onClick={() => setEdit(false)} className="login-btn-ghost">Cancel</button>
            <button onClick={() => handleSaveEdit(selected)} className="login-btn">Save</button>
          </>
        }
      >
        {selected && (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSaveEdit(selected);
            }}
            style={{ display: "flex", flexDirection: "column", gap: "14px" }}
          >
            <label>
              Name
              <input value={selected.name} onChange={e => setSelected({ ...selected, name: e.target.value })} required />
            </label>
            <label>
              Email
              <input type="email" value={selected.email} onChange={e => setSelected({ ...selected, email: e.target.value })} required />
            </label>
            <label>
              Role
              <select value={selected.role} onChange={e => setSelected({ ...selected, role: e.target.value })}>
                <option value="student">Student</option>
                <option value="faculty">Faculty</option>
                <option value="staff">Staff</option>
              </select>
            </label>
            <label>
              Active
              <select value={selected.active ? "yes" : "no"} onChange={e => setSelected({ ...selected, active: e.target.value === "yes" })}>
                <option value="yes">Active</option>
                <option value="no">Inactive</option>
              </select>
            </label>
          </form>
        )}
      </Modal>
    </section>
  );
}

export default Users;
