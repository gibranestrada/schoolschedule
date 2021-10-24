import React, { useState } from "react";
import * as names from "./Names";
import styles from "./Layout.module.css";

const RemoveNames = ({ removedBrothersNames, removedSistersNames, broNames, sisNames }) => {
  const brothersList = Object.keys(names.masterListBrothers).sort();
  const sistersList = Object.keys(names.masterListSisters).sort();
  const combined = [...brothersList, ...sistersList];
  const [initial, setInitial] = useState(combined.reduce((obj, item) => {
    return { ...obj, [item]: false }
  }, {}))
  const removedNamesHandler = (e) => {
    e.persist();
    if (e.target.type === "checkbox") {
      if (e.target.className === "sister") {
        if (removedSistersNames.includes(e.target.name)) {
         sisNames(removedSistersNames.filter(
            (value) => value !== e.target.name
          ));
        } else {
          sisNames((s)=> [...s, e.target.name])
        }
      } else if (e.target.className === "brother") {
        if (removedBrothersNames.includes(e.target.name)) {
          broNames(removedBrothersNames.filter(
            (value) => value !== e.target.name
          ));
        } else {
          broNames((s)=> [...s, e.target.name]);
        }
      }
    }else if(e.target.previousSibling.type !== "checkbox"){
      e.preventDefault();
    }
  };

  const checkHandler = (e) => {
    e.persist()
    const value = !initial[e.target.id]
    setInitial(s => { return { ...s, [e.target.id]: value } })
    return true;
  }

  return (
    <div onClick={removedNamesHandler} className={styles.tablesContainer}>
      {brothersList.map((value, id) => {
        return (
          <div className={styles.tableBrothersNames} key={value}>
            <input className="brother" type="checkbox" id={value + id} value={value} name={value} />
            <label htmlFor={value + id}>{value}</label>
          </div>
        );
      })}
      <div style={{ height: "20px", width: "100%" }}></div>
      {sistersList.map((value, id) => {
        return (
          <div className={styles.tableSistersNames} key={value}>
            <input
              className="sister"
              type="checkbox"
              id={value + id}
              value={value}
              name={value}
              checked={initial[value]}
              onChange={checkHandler}
            />
            <label htmlFor={value + id}>{value}</label>
          </div>
        );
      })}
    </div>
  );
};
export default RemoveNames;
