import React from "react";
import * as names from "./Names";
import styles from "./Layout.module.css";

const RemoveNames = ({ removedBrothersNames, removedSistersNames }) => {
  const brothersList = Object.keys(names.masterListBrothers).sort();
  const sistersList = Object.keys(names.masterListSisters).sort();
  const removedNamesHandler = (e) => {
    e.persist();
    if (e.target.type === "checkbox") {
      if (e.target.className === "sister") {
        if (removedSistersNames.includes(e.target.id)) {
          removedSistersNames = removedSistersNames.filter(
            (value) => value !== e.target.id
          );
        } else {
          removedSistersNames.push(e.target.id);
        }
      } else if (e.target.className === "brother") {
        if (removedBrothersNames.includes(e.target.id)) {
          removedBrothersNames = removedBrothersNames.filter(
            (value) => value !== e.target.id
          );
        } else {
          removedBrothersNames.push(e.target.id);
        }
      }
    }else{
      e.preventDefault();
    }
  };

  return (
    <div onClick={removedNamesHandler} className={styles.tablesContainer}>
      {brothersList.map((value) => {
        return (
          <div className={styles.tableBrothersNames} key={value + Math.random()}>
            <input className="brother" type="checkbox" id={value} value={value} name={value} />
            <label htmlFor={value}>{value}</label>
          </div>
        );
      })}
      <div style={{ height: "20px", width: "100%" }}></div>
      {sistersList.map((value) => {
        return (
          <div className={styles.tableSistersNames} key={value}>
            <input
              className="sister"
              type="checkbox"
              id={value}
              value={value}
              name={value}
            />
            <label htmlFor={value}>{value}</label>
          </div>
        );
      })}
    </div>
  );
};
export default RemoveNames;
