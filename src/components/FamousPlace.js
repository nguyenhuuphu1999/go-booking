// function FamousPlace({famousPlace: {name, photos}}){
//     return (
//         <div className="famous-place">
//             <div>
//                 <img src={photos} alt={photos}/>
//             </div>
//             <div>
//                 <h3>{name}</h3>
//             </div>
//         </div>
//     )
// }

// export default FamousPlace;

import React from 'react';
import {
  Card, CardImg, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';

const FamousPlace = ({famousPlace: {name, photos}}) => {
  return (
    <div className="famous-place">
      <Card className="card">
        <CardImg top width="100%" src={photos} alt={photos}/>
        <CardBody>
          <CardTitle tag="h5">{name}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
        </CardBody>
      </Card>
    </div>
  );
};

export default FamousPlace;