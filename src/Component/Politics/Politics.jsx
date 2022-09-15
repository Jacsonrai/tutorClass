import React from "react";
import Images from "../../Images.jpg";
const Politics = () => {
  return (
    <>
      <div className="politicscontainer">
        <div className="imagecontainer">
          <img src={Images} alt="imageload" />
        </div>
        <div className="descriptioncontainer">
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, ipsam
            dolore! Architecto porro pariatur exercitationem veniam culpa ullam
            ad odio ab reiciendis, autem at incidunt fugit, assumenda eum
            consequatur vero.
          </div>
        </div>
      </div>
    </>
  );
};

export default Politics;
