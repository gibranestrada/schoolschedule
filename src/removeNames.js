import React from "react";
import * as names from "./Names";
import styles from "./Layout.module.css";

const RemoveNames = ({
  removedBrothersNames,
  removedSistersNames,
  broNames,
  sisNames,
  householder,
  setHouseholder,
}) => {
  const brothersList = Object.keys(names.masterListBrothers).sort();
  const sistersList = Object.keys(names.masterListSisters).sort();
  const removedNamesHandler = (e) => {
    e.persist();
    if (e.target.type === "checkbox") {
      if (e.target.className === "sister") {
        if (removedSistersNames.includes(e.target.name)) {
          sisNames(
            removedSistersNames.filter(
              (value) => value !== e.target.name //removed .id
            )
          );
        } else {
          sisNames((s) => [...s, e.target.name]);
          //removedSistersNames.push(e.target.id);
        }
      } else if (e.target.className === "brother") {
        if (removedBrothersNames.includes(e.target.name)) {
          broNames(
            removedBrothersNames.filter((value) => value !== e.target.name)
          );
        } else {
          broNames((s) => [...s, e.target.name]);
        }
      } else if (e.target.className === "householder") {
        if (householder?.includes(e.target.name)) {
          setHouseholder(
            householder.filter((value) => value !== e.target.name)
          );
        } else {
          setHouseholder((s) => [...s, e.target.name]);
        }
      }
    } else if (e.target.previousSibling.type !== "checkbox") {
      e.preventDefault();
    }
  };

  const onlyMainSchool = [
    "valentina_ignatova",
    "irina_osadze",
    "glorya_bankhead",
    "irina_timchuk",
    "mavis_springer",
    "lida_smik",
    "tatyana_verzhbo",
    "sveta_ambartsumyan",
    "natalya_nikolaeva",
    "baktygul_saberkulova",
    "aisha_novikova",
    "natalya_vidulina",
    "valentina_kudravets",
    "luba_ostarkhova",
    "kirill_stupko"
  ];

  return (
    <div onClick={removedNamesHandler} className={styles.tablesContainer}>
      {brothersList.map((value, id) => {
        return (
          <div className={styles.tableBrothersNames} key={value}>
            <input
              className="brother"
              type="checkbox"
              id={value + id}
              value={value}
              name={value}
            />
            <label
              htmlFor={value + id}
              style={{
                color: `${onlyMainSchool.includes(value) ? "red" : ""}`,
              }}
            >
              {value}
            </label>
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
            />
            <input
              className="householder"
              type="checkbox"
              id={"householder" + id}
              value={value}
              name={value}
            />
            <label
              htmlFor={value + id}
              style={{
                color: `${onlyMainSchool.includes(value) ? "red" : ""}`,
              }}
            >
              {value}
            </label>
          </div>
        );
      })}
    </div>
  );
};
export default RemoveNames;
