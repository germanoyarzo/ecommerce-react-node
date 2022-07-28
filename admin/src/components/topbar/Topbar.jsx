import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import styled from "styled-components";
import { Link } from "react-router-dom";

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px; 
`

export default function Topbar() {
  return (
    <div className="topbar" style={{
      backgroundColor: 'teal',
    }}>
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo" style={{color: 'white',
    }}>Admin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" />
          <Link to="/login">
                        <MenuItem>Log Out</MenuItem>
          </Link>
        </div>
      </div>
    </div>
  );
}
