import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebookF,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "../css/footer.css";

function Footer() {
  return (
    <footer
      style={{
        background: "#333",
        color: "#fff",
        padding: "20px",
        textAlign: "center",
        marginTop: "50px",
      }}
      className="footer"
    >
      <div style={{ marginBottom: "20px" }}>
        <a
          href="https://twitter.com"
          style={{ color: "#fff", marginRight: "15px" }}
        >
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        <a
          href="https://facebook.com"
          style={{ color: "#fff", marginRight: "15px" }}
        >
          <FontAwesomeIcon icon={faFacebookF} size="2x" />
        </a>
        <a href="https://instagram.com" style={{ color: "#fff" }}>
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
      </div>
      <div>
        © {new Date().getFullYear()} Global Games & Co. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
