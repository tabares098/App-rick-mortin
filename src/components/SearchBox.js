import React from 'react';
import { useState } from 'react';
import axios from 'axios';


const SearchBox = ({setLocation}) => {
   const [search, setSearch] = useState("");
    const searchType = () => {
        // Hacemos la petición con el id que haya
        // colocado el usuario en el input
        axios
          .get(`https://rickandmortyapi.com/api/location/${search}`)
          .then((res) => setLocation(res.data));
      }; 
    return (
        <div >
           <input className="form-control" type="text" onChange={(e) =>setSearch(e.target.value)} value={search} placeholder="type a location id" />
             <button className="btn" onClick={searchType} >Search</button>
        </div>
    );
};

export default SearchBox;
 /* 
      >*/