import React from "react";
import "./Modal.css";

// PUBLIC_INTERFACE
function Modal({ show, onClose, title, children, actions, size = "md" }) {
  if (!show) return null;
  return (
    <div className="modal-backdrop" role="dialog" aria-modal>
      <div className={`modal ${size}`}>
        <header className="modal-title">
          {title}
          <button className="modal-close" aria-label="Close modal" onClick={onClose}>
            ×
          </button>
        </header>
        <div className="modal-content">{children}</div>
        {actions && <footer className="modal-actions">{actions}</footer>}
      </div>
    </div>
  );
}

export default Modal;
