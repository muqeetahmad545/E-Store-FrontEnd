import React from "react";

const Footer = () => {
  return (
    <footer
      className="bg-body-tertiary text-center text-lg-start"
      style={{
        position: "fixed",
        bottom: 0,
        width: "100%",
      }}
    >
      <div className="text-center p-3" style={{ backgroundColor: "#af7c74" }}>
        © 2024 Copyright:{"Muqeet Ahmad "}
        <a className="text-body" href="http://localhost:3000/">
          E-Shop(MF).com
        </a>
      </div>
    </footer>
  );
};

export default Footer;
