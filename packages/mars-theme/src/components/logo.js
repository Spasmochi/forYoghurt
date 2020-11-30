import React from "react";

const Logo = (props) => {
  const { height, width } = props;
  return (
    <>
      <img
        width={width}
        height={height}
        src="https://testingeverything752826403.files.wordpress.com/2020/11/cropped-willow-logo-1.png"
      ></img>
    </>
  );
};

export default Logo;
