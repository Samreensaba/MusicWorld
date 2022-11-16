/** @format */

import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import ChatBot from "../components/ChatBot";
import "../css/SideBar.css";
import fire from "../firebase-config";
import { getSongsAction } from "../redux/actions";

const SideBar = ({ search }) => {
  const logout = (e) => {
    fire.auth().signOut();
    e.preventDefault();
  };

  const [searchInput, setSearchInput] = useState("");
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();

  const navigate = useNavigate();
  return (
    <div className="sideNav">
      <main className={show ? "space-toggle" : null}>
        <aside className={`sidebar ${show ? "show" : null} `}>
          <nav className="nav  navbar-expand-md navbar-white bg-navbar fixed-left justify-content-between">
            <ul className="nav-list">
              <li>
                <div className="logo-details" style={{ fontSize: "20px" }}>
                  <i className="bx bx-music icon ml-2"></i>
                  <i
                    className="bx bx-menu mr-2"
                    id="btn"
                    onClick={() => setShow(!show)}></i>
                  <div className="logo_name ml-3 mr-5">Music World</div>
                </div>
              </li>
              <li>
                <i
                  className="bx bx-search"
                  onClick={() => {
                    dispatch(getSongsAction(searchInput));
                    /* search(searchInput); */
                    navigate("/searchResults");
                  }}></i>
                <input
                  type="text"
                  placeholder="Search..."
                  onChange={(event) =>
                    setSearchInput(event.currentTarget.value)
                  }
                />
              </li>
              <li>
                <a href="/" className="nav-link">
                  <i className="bx bx-home-alt nav-link-icon"></i>
                  <span className="nav-link-name">Home</span>
                  <span className="tooltip">Home</span>
                </a>
              </li>
              <li>
                <Link to="/favourites" className="nav-link">
                  <i className="bx bx-heart nav-link-icon"></i>
                  <span className="nav-link-name">Favourites</span>
                  <span className="tooltip">Favourites</span>
                </Link>
              </li>
              <li>
                <Link to="/playlists" className="nav-link">
                  <i className="bx bxs-playlist"></i>
                  <span className="nav-link-name">Play Lists</span>
                  <span className="tooltip">Play Lists</span>
                </Link>
              </li>
              <li>
                <Link to="/topsongs" className="nav-link">
                  <i className="bx bx-chat nav-link-icon"></i>
                  <span className="nav-link-name">Top Hits</span>
                  <span className="tooltip">Top Hits</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="nav-link">
                  <i className="bx bxs-user"></i>
                  <span className="nav-link-name">About</span>
                  <span className="tooltip">Trending</span>
                </Link>
              </li>
              <li className="mt-4">
                <Link to="/premium" className="upg-btn">
                  <button style={{ backgroundColor: "coral" }}>Upgrade</button>
                </Link>
              </li>
              <ChatBot />
              <div className="profile">
                <div className="profile-details">
                  <span className="name">Ganesh Sai Devarakonda</span>
                  <span className="job">Frontend Developer</span>
                  <i
                    className="info bx bx-log-out"
                    id="log_out"
                    onClick={() => {
                      logout();
                      navigate("/login");
                    }}></i>
                </div>
              </div>
            </ul>
          </nav>
        </aside>
      </main>
    </div>
  );
};

export default SideBar;
