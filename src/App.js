import React from 'react';
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import ViewBar from "./components/ViewBar";
import FontCtn from "./components/FontCtn"

function App() {
  return (
    <div>
      <Header />
      <div className="ctn-main">
        <SearchBar />
        <ViewBar />
        <FontCtn />
      </div>      
    </div>      
  );
}
export default App;
