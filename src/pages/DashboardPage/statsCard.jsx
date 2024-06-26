import React from "react";

const StatsCard = ({
  icon,
  value,
  fontSize,
  iconWidth,
  text,
  cardWidth,
  paraSize,
  paraColor,
}) => {
  return (
    <div
      className="border rounded-3 mb-1"
      style={{
        paddingLeft: "1rem",
        paddingTop: "0.5rem",
        paddingBottom: "0.5rem",
        width: cardWidth ? cardWidth : "",
      }}
    >
      <div className="d-flex align-items-center gap-3">
        <img
          src={icon}
          alt=""
          style={{ width: iconWidth ? iconWidth : "2vw" }}
        />
        <strong
          className="gradiant-color"
          style={{
            fontSize: fontSize ? fontSize : " xx-large",
          }}
        >
          {value}
        </strong>
      </div>
      <p
        style={{
          fontWeight: "600",
          fontSize: paraSize ? paraSize : "16px",
          color: paraColor ? paraColor : "",
        }}
      >
        {text}
      </p>
    </div>
  );
};

export default StatsCard;
