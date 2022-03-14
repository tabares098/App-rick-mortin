import React from 'react';
import { useEffect,useState } from 'react';
import axios from 'axios';


const ResidentInfo = ({information}) => {
    const[informations,setInfomations] = useState([""])
    useEffect(() => {
        axios
          .get(information)
          .then((res) => setInfomations(res.data));
      }, [information]);
      console.log(informations);
    return (
        <div className="hi"  >
            <div className="card">
                <div><img src={informations.image} alt="" /></div>
            
                 <div className="datos">
                   <b>{informations.name} <br /></b> 
                    <b>Status:</b> {informations.status} <br />
                    <br />
                    <b>Specie:</b>{informations.species} <br />
                    <br />
                    <b>Origin:</b>{informations.origin?.name} <br />
                    <br />
                    <b>Episodes:</b>{informations.episode?.length}
                    
                    
                 </div>
            </div>
        </div>
    );
};

export default ResidentInfo;