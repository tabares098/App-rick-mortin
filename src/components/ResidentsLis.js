import React from 'react';
import ResidentInfo from './ResidentInfo'

const ResidentsLis = ({characters}) => {
    console.log(characters)
    return (
        <div>
            {
                characters?.map(character =>(
                   <ResidentInfo information={character} key={character}/> 
                )
                    )
            }
        </div>
    );
};

export default ResidentsLis;