import React, { useState, useMemo } from "react";
import "./UserTable.css";

// PUBLIC_INTERFACE
function UserTable({ users, onEdit, onView, onDelete }) {
  const [search, setSearch] = useState("");
  const [role, setRole] = useState("all");
  const [page, setPage] = useState(1);
  const PAGE_SIZE = 8;

  const filtered = useMemo(() => {
    let rows = users;
    if (role !== "all") rows = rows.filter((u) => u.role === role);
    if (search)
      rows = rows.filter(
        (u) => u.name.toLowerCase().includes(search.toLowerCase()) ||
          u.email.toLowerCase().includes(search.toLowerCase())
      );
    return rows;
  }, [users, search, role]);

  const pageCount = Math.ceil(filtered.length / PAGE_SIZE);

  return (
    <section>
      <div className="user-table-controls">
        <input
          placeholder="Search user by name or email"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          aria-label="Search user"
        />
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          aria-label="Filter by role"
        >
          <option value="all">All roles</option>
          <option value="student">Student</option>
          <option value="faculty">Faculty</option>
          <option value="staff">Staff</option>
        </select>
      </div>
      <table className="user-table">
        <thead>
          <tr>
            <th>Name</th><th>Email</th><th>Role</th><th>Status</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filtered
            .slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)
            .map((u) => (
              <tr key={u.id}>
                <td>{u.name}</td>
                <td>{u.email}</td>
                <td style={{ textTransform: "capitalize" }}>{u.role}</td>
                <td>
                  <span className={u.active ? "badge active" : "badge"} tabIndex={0}>
                    {u.active ? "Active" : "Inactive"}
                  </span>
                </td>
                <td>
                  <button className="action-btn" aria-label="View" onClick={() => onView(u)}>👁️</button>
                  <button className="action-btn" aria-label="Edit" onClick={() => onEdit(u)}>✏️</button>
                  <button className="action-btn red" aria-label="Delete" onClick={() => onDelete(u)}>🗑️</button>
                </td>
              </tr>
            ))}
          {filtered.length === 0 && (
            <tr>
              <td colSpan={5} style={{ textAlign: "center", color: "#aaa", fontWeight: 500 }}>
                No users found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
      {/* Pagination controls */}
      {pageCount > 1 && (
        <nav className="user-table-pager" aria-label="pagination">
          <button onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page === 1} aria-label="Previous page">
            Prev
          </button>
          <span>
            Page <strong>{page}</strong> of {pageCount}
          </span>
          <button onClick={() => setPage((p) => Math.min(pageCount, p + 1))} disabled={page === pageCount} aria-label="Next page">
            Next
          </button>
        </nav>
      )}
    </section>
  );
}

export default UserTable;
