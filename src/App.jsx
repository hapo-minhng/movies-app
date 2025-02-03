import React, { useState } from "react";
import Header from "./components/Header";
import Search from "./components/Search";

export default function App() {
  const [searchText, setSearchText] = useState("");

  return (
    <main>
      <div className="pattern" />

      <div className="wrapper">
        <Header />

        <Search searchText={searchText} setSearchText={setSearchText} />
      </div>
    </main>
  );
}
