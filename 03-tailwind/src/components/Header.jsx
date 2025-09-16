import React from "react";
import Navbar from "./Navbar";

export default function Header(props) {
  return (
    <header className="bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <Navbar {...props} />
      </div>
    </header>
  );
}
