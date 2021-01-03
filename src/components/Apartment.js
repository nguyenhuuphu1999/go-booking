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

const Apartment = ({apartment: {image_url, title}}) => {
  return (
    <div className="apartment">
      <Card className="card">
        {/* <CardImg top width="100%" src="" alt={title}/> */}
        <CardImg top width="100%" src="https://s3-alpha-sig.figma.com/img/81d1/dde5/b9af47bab333b1cc6774cfae3fd7838c?Expires=1610323200&Signature=TxTuKx73tQDYLn4iHGaVH-wS04LLvv7VxzAAlZrNkI1m1EUojg7uecHfALh0~yP~AIZ9d3iu4k8TrFw9MyFxH6xHGrzSpPuXVgNjgdMHzf41TaYmO0Vndal5EwGxmKA40mUrbzlUy-g-0FA76xBBbroe6-l1Dzokb4A2giYDtnID~KN9fsQ1-~HudDP6Q7Up9UeaigiozGLKLZoWt0hYpDr3tdelQvBIqxEyu2Sa80mI6efd6eV-5Kz1hzYa6wo5ROUvRMsHmJVTNKNJlhp9dCL20pnkOXob4wcT4caOT1rTfmIsXQ-jQNrmMqbZY1ZbCVMyNRcGYpxUnM-BBvoZBQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt={title}/>
        <CardBody>
          <CardTitle tag="h5">{title}</CardTitle>
        </CardBody>
      </Card>
    </div>
  );
};

export default Apartment;