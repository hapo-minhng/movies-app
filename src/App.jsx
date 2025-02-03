import React from "react";
import Header from "./components/Header";
import Search from "./components/Search";

export default function App() {
  return (
    <main>
      <div className="pattern" />
      <div className="wrapper">
        <Header />

        <Search />
      </div>
    </main>
  );
}
