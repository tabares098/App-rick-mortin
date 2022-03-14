import React from 'react';
import axios from 'axios';
import { useState,useEffect } from 'react';
import SearchBox from './SearchBox';
import ResidentsLis from './ResidentsLis'




const LocationInfo = () => {
    const [location, setLocation] = useState({});
    useEffect(()=>{
   
     const random = Math.floor(Math.random() * 126) + 1;
      axios.get(`https://rickandmortyapi.com/api/location/${random}`)
      .then((res)=> setLocation(res.data))
    },[])
   console.log(location)
    return (
        <div>
                <div className="body"></div>
                <div className="container">
                            <SearchBox setLocation={setLocation}/>
                            <h1>{location.name}</h1>
                        <div className="centrales">
                          <p><b>Tipo:</b>{location.type}</p> 
                          <p><b>Dimension:</b>{location.dimension} </p>
                          <p><b>Resindents:</b>{location.residents?.length}</p>
                        </div>
                            
                        
                </div>
                <ResidentsLis characters={location.residents}/>
        </div>
    );
};

export default LocationInfo;
