import React from "react";
import "./PublicProfile.css";

// PUBLIC_INTERFACE
function PublicProfile({ profile }) {
  // Demo profile if none provided
  const pf = profile || {
    name: "Alice Smith",
    email: "alice@university.edu",
    department: "Computer Science",
    role: "Student",
    cardStatus: "Active",
    nfcId: "NFC-87324",
    qrLink: "https://card.univ.edu/alice"
  };

  return (
    <section className="public-profile">
      <header className="public-profile-header">
        <div className="public-profile-avatar">
          {pf.name?.charAt(0) || "?"}
        </div>
        <div>
          <h2>{pf.name}</h2>
          <p>{pf.role}</p>
        </div>
      </header>
      <div className="public-profile-details">
        <p><strong>Email:</strong> <a href={`mailto:${pf.email}`}>{pf.email}</a></p>
        <p><strong>Department:</strong> {pf.department}</p>
        <p><strong>Status:</strong> {pf.cardStatus}</p>
        <p><strong>QR:</strong> <a href={pf.qrLink} target="_blank" rel="noopener noreferrer">{pf.qrLink}</a></p>
        <p><strong>NFC ID:</strong> {pf.nfcId}</p>
      </div>
      <div className="public-profile-footer">
        <button className="profile-form-btn" onClick={() => window.print()}>
          Print Card
        </button>
      </div>
    </section>
  );
}

export default PublicProfile;
