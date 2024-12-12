import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBell, faLanguage, faSave, faUndo } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Settings = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [notifications, setNotifications] = useState(true);
  const [language, setLanguage] = useState("English");

  // Fonction pour gérer la sauvegarde des paramètres
  const saveSettings = () => {
    alert("Settings Saved!");
  };

  // Fonction pour réinitialiser les paramètres
  const resetSettings = () => {
    setUsername("");
    setEmail("");
    setNotifications(true);
    setLanguage("English");
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">Settings</h2>

      {/* Section Profile */}
      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">
            <FontAwesomeIcon icon={faUser} /> Profile Settings
          </h5>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Section Notifications */}
      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">
            <FontAwesomeIcon icon={faBell} /> Notification Settings
          </h5>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="notifications"
              checked={notifications}
              onChange={() => setNotifications(!notifications)}
            />
            <label className="form-check-label" htmlFor="notifications">
              Enable Notifications
            </label>
          </div>
        </div>
      </div>

      {/* Section Language */}
      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">
            <FontAwesomeIcon icon={faLanguage} /> Language Preferences
          </h5>
          <div className="mb-3">
            <label htmlFor="language" className="form-label">
              Preferred Language
            </label>
            <select
              id="language"
              className="form-select"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option value="English">English</option>
              <option value="French">French</option>
              <option value="Spanish">Spanish</option>
              <option value="German">German</option>
            </select>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="d-flex justify-content-between">
        <button
          className="btn btn-outline-secondary"
          onClick={resetSettings}
        >
          <FontAwesomeIcon icon={faUndo} /> Reset
        </button>
        <button
          className="btn btn-primary"
          onClick={saveSettings}
        >
          <FontAwesomeIcon icon={faSave} /> Save Settings
        </button>
      </div>

      {/* Link back to Profile */}
      <div className="mt-3 text-center">
        <Link to="/profile" className="btn btn-link">
          Back to My Profile
        </Link>
      </div>
    </div>
  );
};

export default Settings;
