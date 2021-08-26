import React, { useState } from "react";
import * as names from "./Names";
import styles from "./Layout.module.css";

const RemoveNames = ({ removedBrothersNames, removedSistersNames, setSis, setBro }) => {
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
        //console.log('sister')
        if (removedSistersNames.includes(e.target.id)) {
          setSis(s => removedSistersNames.filter(
            (value) => value !== e.target.id
          ))
        } else {
          //removedSistersNames.push(e.target.id);
          setSis(s => [...s, e.target.id])
        }
      } else if (e.target.className === "brother") {
        //console.log('brother')
        if (removedBrothersNames.includes(e.target.id)) {
          setBro(s => removedBrothersNames.filter(
            (value) => value !== e.target.id
          ))
          //console.log(removedBrothersNames);
        } else {
          //removedBrothersNames.push(e.target.id);
          setBro(s => [...s, e.target.id])
        }
      }
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
      {brothersList.map((value) => {
        return (
          <div className={styles.tableBrothersNames} key={value + Math.random()}>
            <input className="brother" type="checkbox" checked={initial[value]} onChange={checkHandler} id={value} value={value} name={value} />
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
              checked={initial[value]}
              onChange={checkHandler}
            />
            <label htmlFor={value}>{value}</label>
          </div>
        );
      })}
    </div>
  );
};
export default RemoveNames;
