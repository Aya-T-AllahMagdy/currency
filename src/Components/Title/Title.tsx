import React from "react";
import { Link } from "react-router-dom";
import "./Title.css";
interface DetailsProps {
  showButton?: boolean;
  locationUrl?: any;
  title?: string | null;
  [rates: string]: any;
  currencyName: any;
}
const Title = ({
  showButton,
  title,
  currencyName,
  rates,
  locationUrl,
}: DetailsProps) => {
  return (
    <div className="title-component">
      {currencyName &&
        Object.keys(currencyName)
          .filter((item: any) => item.startsWith(rates?.base))
          .map((item, i) => (
            <h5 key={i}>
              {locationUrl?.pathname !== "/"
                ? currencyName[item]
                : "Currency Exchanger"}
            </h5>
          ))}
      {locationUrl?.pathname !== "/" ? <Link to="/">back to home</Link> : ""}
    </div>
  );
};

export default Title;
