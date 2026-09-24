import React from "react";
import {
  Facebook,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <h4>mommie BABY CARE</h4>
            <p
              style={{
                color: "#A0AEC0",
                fontSize: "0.9rem",
                marginBottom: "1.5rem",
              }}
            >
              Premium mother and baby care products designed for a healthier
              tomorrow. Trusted by thousands of families across Pakistan.
            </p>
            <div className="social-icons">
              <a href="#">
                <Facebook size={20} />
              </a>
              <a href="#">
                <Instagram size={20} />
              </a>
              <a href="#">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Shop</h4>
            <ul>
              <li>
                <a href="#">Baby Care</a>
              </li>
              <li>
                <a href="#">Mother Care</a>
              </li>
              <li>
                <a href="#">Clothing</a>
              </li>
              <li>
                <a href="#">Baby Gear</a>
              </li>
              <li>
                <a href="#">Bundles</a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Customer Care</h4>
            <ul>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Shipping Info</a>
              </li>
              <li>
                <a href="#">Returns</a>
              </li>
              <li>
                <a href="#">FAQs</a>
              </li>
              <li>
                <a href="#">Track Order</a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Care Guide</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} mommie BABY CARE. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
