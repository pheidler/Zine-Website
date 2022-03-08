import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Zines } from "helper/Constants";
import ZineCard from "./ZineCard";

function ZineList(props) {
  const isMultipleZines = Zines.length - 1;
  return (
    <>
      {!isMultipleZines ? (
        Zines.map((zine) => <ZineCard zine={zine} />)
      ) : (
        <Carousel>
          {Zines.map((zine, index) => (
            <Carousel.Item key={index}>
              <ZineCard zine={zine} />
            </Carousel.Item>
          ))}
        </Carousel>
      )}
    </>
  );
}
export default ZineList;
