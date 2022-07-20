import React from "react";
import { Button, Card, CardBody, CardSubtitle, CardTitle } from "reactstrap";

function Avatar() {
  return (
    <Card
      color="dark"
      inverse
      style={{
        width: "18rem",
      }}
    >
      <img alt="Card image" src="https://picsum.photos/300/200" />
      <CardBody>
        <CardTitle tag="h5">John Doe</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          Software Engineer
        </CardSubtitle>      
        <Button>See More</Button>
      </CardBody>
    </Card>
  );
}

export default Avatar;
