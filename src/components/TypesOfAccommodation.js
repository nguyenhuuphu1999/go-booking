import React from 'react';
import {
  Card, CardImg, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';

const TypesOfAccommodation = () => {
    return (
        <div>
            <div className="famous-place">
                <Card className="card">
                    <CardImg top width="100%" src={photos} alt={photos}/>
                    <CardBody>
                    <CardTitle tag="h5">{name}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                    </CardBody>
                </Card>
            </div>
        </div>
    );
};

export default TypesOfAccommodation;