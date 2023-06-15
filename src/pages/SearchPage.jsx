import { useState } from "react";
import MyButton from "../components/MyButton"
import Disclaimer from "../components/Disclaimer";
import "../styles/SearchPage.css"
function SearchBar(props) {
  const [searchVal, setSearchVal] = useState('');
  
  const handleInput = (e) => {
    setSearchVal(e.target.value);
  }
  
  const handleClearBtn = () => {
    setSearchVal('');
  }
  
  return (
    <div className='search-container'>
      <div className='input-wrap'>
      <span class="material-symbols-outlined" >
          search
        </span>
        <input 
          onChange={handleInput}
          value={searchVal}
          type="text" 
          name="search" 
          id="search" 
          placeholder="Search"
        />
        
        <span class="material-symbols-outlined" onClick={handleClearBtn}>
          close
        </span>
      </div>

    </div>
  );
}
function DownloadContainer(){
  return (
    <section className="download-container | transparent-container flex-col">
      <div>
        <h1>Search page is under construction</h1>
      </div>
      <small>
        no available
      </small>
      <div className="download-btns">
        <MyButton text={"Download"}/>
        <MyButton text={"Share"} icon={"share"}/>
      </div>
    </section>
  )
}

function SearchPage() {
  return (
    <div>
      <SearchBar></SearchBar>
      <DownloadContainer />
      <Disclaimer />
    </div>
  );
}

export default SearchPage;