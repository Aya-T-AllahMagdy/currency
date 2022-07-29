import React from "react";
import { Link } from "react-router-dom";
import "./Title.css";
interface DetailsProps {
  showButton?: boolean;
  locationUrl?: any ;
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
          .filter((item: string) => item.startsWith(locationUrl?.pathname?.split("/")[2]))
          .map((item, i) => (
            <h5 key={i}>
              {locationUrl?.pathname !== "/"
                ? <> {item}-{currencyName[item]} </>
                : "Currency Exchanger"}
            </h5>
          ))}
      {locationUrl?.pathname !== "/" ? <Link to="/">back to home</Link> : ""}
    </div>
  );
};

export default Title;
