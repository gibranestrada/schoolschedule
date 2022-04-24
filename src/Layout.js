/* eslint-disable no-unused-expressions */
import React, { useState } from "react";
import styles from "./Layout.module.css";
import * as names from "./Names";
import RemoveNames from "./removeNames";
//var FileSaver = require("file-saver");

const Layout = () => {
  const [schoolOptions, setSchoolOptions] = useState({});
  const [removedBrothersNames, setRemovedBrothersNames] = useState([]);
  const [removedSistersNames, setRemovedSistersNames] = useState([]);
  const [tajikSisters, setTajikSisters] = useState([]);
  const [tajikBrothers, setTajikBrothers] = useState([]);
  const [finalNames, setFinalNames] = useState({});
  const [householder, setHouseholder] = useState([]);
  const [date, setDate] = useState({ day: "", month: "" });

  const russianAssign = {
    reading: "Чтение",
    initial: "1й разговор",
    initial2: "1й разговор",
    initial3: "1й разговор",
    return: "2й разговор",
    return2: "2й разговор",
    bibleStudy: "Изучение",
    talk: "Речь",
    firstSchool: "ШКОЛА",
    secondSchool: "2АЯ ШКОЛА",
  };

  const submitHandler = (e) => {
    e.persist();
    e.preventDefault();
    const combineArraysSisters = [
      ...removedSistersNames,
      ...tajikSisters,
    ].filter((v, i, a) => a.indexOf(v) === i);
    const combineArraysBrothers = [
      ...removedBrothersNames,
      ...tajikBrothers,
    ].filter((v, i, a) => a.indexOf(v) === i);

    names.removeBrothersNames(combineArraysBrothers);
    names.removeSistersNames(combineArraysSisters);
    const assignedNames = Object.keys(schoolOptions).map((value) => {
      const newString = changeAssignmentString(value);
      const assignmentArr = ["initial", "return", "bibleStudy"].some((val) =>
        value.includes(val)
      );
      if (schoolOptions[value].assignment === "brother") {
        if (assignmentArr) {
          const returnedNames = names.chooseBrother(value);
          return {
            [schoolOptions[value].school]: {
              assignedTo: returnedNames[0],
              assignment: newString,
              houseHolder: returnedNames[1],
            },
          };
        } else {
          return {
            [schoolOptions[value].school]: {
              assignedTo: names.chooseBrother(value),
              assignment: newString,
            },
          };
        }
      } else {
        if (assignmentArr) {
          const returnedNames = names.chooseSister(value, householder);
          return {
            [schoolOptions[value].school]: {
              assignedTo: returnedNames[0],
              assignment: newString,
              houseHolder: returnedNames[1],
            },
          };
        } else {
          return {
            [schoolOptions[value].school]: {
              assignedTo: names.chooseSister(value),
              assignment: newString,
            },
          };
        }
      }
    });
    const newArray = { firstSchool: [], secondSchool: [] };
    assignedNames.forEach((value) => {
      if (value.hasOwnProperty("firstSchool")) {
        newArray.firstSchool.push(value.firstSchool);
      } else {
        newArray.secondSchool.push(value.secondSchool);
      }
    });
    console.log(removedBrothersNames, removedSistersNames, assignedNames);
    setFinalNames(newArray);
  };
  const changeAssignmentString = (assign) => {
    let newStr;
    /initial/.test(assign) ? (newStr = "initial") : "";
    /return/.test(assign) ? (newStr = "return") : "";
    /bibleStudy/.test(assign) ? (newStr = "bibleStudy") : "";
    /talk/.test(assign) ? (newStr = "talk") : "";
    /reading/.test(assign) ? (newStr = "reading") : "";

    if (/initial2/.test(assign)) {
      newStr = "initial2";
    } else if (/initial3/.test(assign)) {
      newStr = "initial3";
    } else if (/return2/.test(assign)) {
      newStr = "return2";
    }

    return newStr;
  };
  const resetHandler = () => {
    window.location.reload();
  };

  const schoolOptionsHandler = (e) => {
    e.persist();
    if (e.target.type === "radio") {
      if (e.target.value === "no") {
        const copyOfSchoolOptions = { ...schoolOptions };
        delete copyOfSchoolOptions[e.target.name];
        setSchoolOptions({ ...copyOfSchoolOptions });
      } else {
        setSchoolOptions((s) => {
          return {
            ...s,
            [e.target.name]: { assignment: e.target.value, school: e.target.className }
          }
        })
      }
    } else if (e.target.nextSibling.type !== "radio") {
      e.preventDefault();
    }
  };
  //console.log("school option after", schoolOptions)
  const tajikHandler = (e) => {
    e.persist();
    console.log("tajikHandler", e.target.checked)
    if (e.target.checked) {
      setTajikSisters(() => [
        "nisso_davlyatova",
        "farzona_asimova",
        "khidoyat_asimova",
        "tamano_davlyatova",
        "dilnoza_otozhonova",
        "erkenai_joraeva",
        "ruhafzo_joraeva",
        "ganimat_bekmamadova",
      ]);
      setTajikBrothers(() => [
        "alijon_davlyatov",
        "kahor_otozhonov",
        "abdulla_kadirov",
        "aziz_joraev",
        "akhmad_davlyatov",
        "babajon_gurbandurdiev",
        "akmal_davlyatov",
        "dilovar_babahanov",
      ]);
    } else {
      setTajikSisters(() => []);
      setTajikBrothers(() => []);
    }
    console.log("tajikHandler after", tajikBrothers, tajikSisters)
  };
  const setDateHandler = (e) => {
    e.persist();
    e.preventDefault();
    
    if (e.target.id === "day") {
      setDate((s) => { return { ...s, day: e.target.value } })
      //date.day = e.target.value;
    } else if (e.target.id === "month") {
      setDate((s) => { return { ...s, month: e.target.value } })
      //date.month = e.target.value;
    }
    console.log("setDate after", date)
  };
  const russianNameBrothers = names.masterListBrothers;
  const russianNameSisters = names.masterListSisters;
  const combineNames = { ...russianNameBrothers, ...russianNameSisters };
  const saveResults = (e) => {
    e.persist();
    e.preventDefault();
    if (Object.keys(finalNames).length) {
      let counter = 0;
      let blob = `${date.day}-${date.month} \r\n ${russianAssign.firstSchool} \r\n `;

      finalNames.firstSchool.forEach((value) => {
        let name = combineNames[value.assignedTo].russianName;
        let householder = combineNames?.[value.houseHolder]?.russianName;
        blob += `${russianAssign[value.assignment]}: ${name} ${householder ? " / " + householder : ""
          } \r\n `;
      });
      finalNames.secondSchool.forEach((value) => {
        let name = combineNames[value.assignedTo].russianName;
        let householder = combineNames?.[value.houseHolder]?.russianName;
        if (!counter) {
          counter += 1;
          blob += `\r\n ${russianAssign.secondSchool} \r\n `;
        }
        blob += `${russianAssign[value.assignment]}: ${name} ${householder ? " / " + householder : ""
          } \r\n `;
      });
      console.log(blob);
      // var blob2 = new Blob([blob], {
      //   type: "text/plain;charset=utf-8",
      // });
      // FileSaver.saveAs(blob2, `${date.day}-${date.month}.txt`);
    } else {
      alert("Select assignments first");
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={submitHandler}>
        <h1>School Schedule</h1>
        <p style={{ fontSize: "22px", fontWeight: 600, marginBottom: "0px" }}>
          Remove Names{" "}
        </p>
        <div>
          <input
            onClick={tajikHandler}
            style={{ fontSize: "16px" }}
            type="checkbox"
            id="tajik"
            value="tajik"
            name="tajik"
          />
          <label htmlFor="tajik">Tajik</label>
        </div>
        <RemoveNames
          broNames={setRemovedBrothersNames}
          sisNames={setRemovedSistersNames}
          removedBrothersNames={removedBrothersNames}
          removedSistersNames={removedSistersNames}
          houseHolder={householder}
          setHouseholder={setHouseholder}
        />
        <p style={{ fontSize: "22px", fontWeight: 600, marginBottom: "0px" }}>
          First School
        </p>
        <div
          onClick={schoolOptionsHandler}
          className={styles.tablesContainerAssignments}
        >
          <div>
            <p>Reading</p>
            <label htmlFor="reading1">Brothers</label>
            <input
              id="reading1"
              className="firstSchool"
              type="radio"
              value="brother"
              name="reading"
              required
            />
            <label htmlFor="reading2">No</label>
            <input id="reading2" type="radio" value="no" name="reading" defaultChecked required />
          </div>
          <div>
            <p>Initial Call</p>
            <label htmlFor="initialCall1">Brothers</label>
            <input
              id="initialCall1"
              className="firstSchool"
              type="radio"
              value="brother"
              name="initial"
              required
            />
            <label htmlFor="initialCall2">Sisters</label>
            <input
              id="initialCall2"
              className="firstSchool"
              type="radio"
              value="sister"
              name="initial"
              required
            />
            <label htmlFor="initialCall3">No</label>
            <input id="initialCall3" type="radio" value="no" defaultChecked name="initial" required />
          </div>
          <div>
            <p>Initial Call 2</p>
            <label htmlFor="2initialCall1">Brothers</label>
            <input
              id="2initialCall1"
              className="firstSchool"
              type="radio"
              value="brother"
              name="initial2"
              required
            />
            <label htmlFor="2initialCall2">Sisters</label>
            <input
              id="2initialCall2"
              className="firstSchool"
              type="radio"
              value="sister"
              name="initial2"
              required
            />
            <label htmlFor="2initialCall3">No</label>
            <input id="2initialCall3" type="radio" defaultChecked value="no" name="initial2" required />
          </div>
          <div>
            <p>Initial Call 3</p>
            <label htmlFor="3initialCall1">Brothers</label>
            <input
              id="3initialCall1"
              className="firstSchool"
              type="radio"
              value="brother"
              name="initial3"
              required
            />
            <label htmlFor="3initialCall2">Sisters</label>
            <input
              id="3initialCall2"
              className="firstSchool"
              type="radio"
              value="sister"
              name="initial3"
              required
            />
            <label htmlFor="3initialCall3">No</label>
            <input id="3initialCall3" defaultChecked type="radio" value="no" name="initial3" required />
          </div>
          <div>
            <p>Return Visit</p>
            <label htmlFor="returnVisit1">Brothers</label>
            <input
              id="returnVisit1"
              className="firstSchool"
              type="radio"
              value="brother"
              name="return"
              required
            />
            <label htmlFor="returnVisit2">Sisters</label>
            <input
              id="returnVisit2"
              className="firstSchool"
              type="radio"
              value="sister"
              name="return"
              required
            />
            <label htmlFor="returnVisit3">No</label>
            <input id="returnVisit3" defaultChecked type="radio" value="no" name="return" required />
          </div>
          <div>
            <p>Return Visit 2</p>
            <label htmlFor="2returnVisit1">Brothers</label>
            <input
              id="2returnVisit1"
              className="firstSchool"
              type="radio"
              value="brother"
              name="return2"
              required
            />
            <label htmlFor="2returnVisit2">Sisters</label>
            <input
              id="2returnVisit2"
              className="firstSchool"
              type="radio"
              value="sister"
              name="return2"
              required
            />
            <label htmlFor="2returnVisit3">No</label>
            <input id="2returnVisit3" defaultChecked type="radio" value="no" name="return2" required />
          </div>
          <div>
            <p>Bible Study</p>
            <label htmlFor="bibleStudy1">Brothers</label>
            <input
              id="bibleStudy1"
              className="firstSchool"
              type="radio"
              value="brother"
              name="bibleStudy"
              required
            />
            <label htmlFor="bibleStudy2">Sisters</label>
            <input
              id="bibleStudy2"
              className="firstSchool"
              type="radio"
              value="sister"
              name="bibleStudy"
              required
            />
            <label htmlFor="bibleStudy3">No</label>
            <input id="bibleStudy3" defaultChecked type="radio" value="no" name="bibleStudy" required />
          </div>
          <div>
            <p>Talk</p>
            <label htmlFor="talk1">Brothers</label>
            <input
              id="talk1"
              className="firstSchool"
              type="radio"
              value="brother"
              name="talk"
              required
            />
            <label htmlFor="talk2">No</label>
            <input id="talk2" defaultChecked type="radio" value="no" name="talk" required />
          </div>
        </div>
        <p style={{ fontSize: "22px", fontWeight: 600, marginBottom: "0px" }}>
          Second School
        </p>
        <div
          onClick={schoolOptionsHandler}
          className={styles.tablesContainerAssignments}
        >
          <div>
            <p>Reading</p>
            <label htmlFor="2ndreading1">Brothers</label>
            <input
              id="2ndreading1"
              className="secondSchool"
              type="radio"
              value="brother"
              name="reading2"
              required
            />
            <label htmlFor="2ndreading2">No</label>
            <input id="2ndreading2" defaultChecked type="radio" value="no" name="reading2" required />
          </div>
          <div>
            <p>Initial Call</p>
            <label htmlFor="2ndinitialCall1">Brothers</label>
            <input
              id="2ndinitialCall1"
              className="secondSchool"
              type="radio"
              value="brother"
              name="2ndinitial"
              required
            />
            <label htmlFor="2ndinitialCall2">Sisters</label>
            <input id="2ndinitialCall2"
              className="secondSchool"
              type="radio"
              value="sister"
              name="2ndinitial"
              required
            />
            <label htmlFor="2ndinitialCall3">No</label>
            <input id="2ndinitialCall3" defaultChecked type="radio" value="no" name="2ndinitial" required />
          </div>
          <div>
            <p>Initial Call 2</p>
            <label htmlFor="2ndinitialCall21">Brothers</label>
            <input id="2ndinitialCall21"
              className="secondSchool"
              type="radio"
              value="brother"
              name="2ndinitial2"
              required
            />
            <label htmlFor="2ndinitialCall22">Sisters</label>
            <input id="2ndinitialCall22"
              className="secondSchool"
              type="radio"
              value="sister"
              name="2ndinitial2"
              required
            />
            <label htmlFor="2ndinitialCall23">No</label>
            <input id="2ndinitialCall23" defaultChecked type="radio" value="no" name="2ndinitial2" required />
          </div>
          <div>
            <p>Initial Call 3</p>
            <label htmlFor="2ndinitialCall31">Brothers</label>
            <input id="2ndinitialCall31"
              className="secondSchool"
              type="radio"
              value="brother"
              name="2ndinitial3"
              required
            />
            <label htmlFor="ic32">Sisters</label>
            <input id="ic32"
              className="secondSchool"
              type="radio"
              value="sister"
              name="2ndinitial3"
              required
            />
            <label htmlFor="ic33">No</label>
            <input id="ic33" type="radio" defaultChecked value="no" name="2ndinitial3" required />
          </div>
          <div>
            <p>Return Visit</p>
            <label htmlFor="rv1">Brothers</label>
            <input id="rv1"
              className="secondSchool"
              type="radio"
              value="brother"
              name="2ndreturn"
              required
            />
            <label htmlFor="rv2">Sisters</label>
            <input id="rv2"
              className="secondSchool"
              type="radio"
              value="sister"
              name="2ndreturn"
              required
            />
            <label htmlFor="rv3">No</label>
            <input id="rv3" type="radio" defaultChecked value="no" name="2ndreturn" required />
          </div>
          <div>
            <p>Return Visit 2</p>
            <label htmlFor="rv21">Brothers</label>
            <input id="rv21"
              className="secondSchool"
              type="radio"
              value="brother"
              name="2ndreturn2"
              required
            />
            <label htmlFor="rv22">Sisters</label>
            <input id="rv22"
              className="secondSchool"
              type="radio"
              value="sister"
              name="2ndreturn2"
              required
            />
            <label htmlFor="rv23">No</label>
            <input id="rv23" type="radio" defaultChecked value="no" name="2ndreturn2" required />
          </div>
          <div>
            <p>Bible Study</p>
            <label htmlFor="bs1">Brothers</label>
            <input id="bs1"
              className="secondSchool"
              type="radio"
              value="brother"
              name="bibleStudy2"
              required
            />
            <label htmlFor="bs2">Sisters</label>
            <input id="bs2"
              className="secondSchool"
              type="radio"
              value="sister"
              name="bibleStudy2"
              required
            />
            <label htmlFor="bs3">No</label>
            <input id="bs3" type="radio" defaultChecked value="no" name="bibleStudy2" required />
          </div>
          <div>
            <p>Talk</p>
            <label htmlFor="t1">Brothers</label>
            <input id="t1"
              className="secondSchool"
              type="radio"
              value="brother"
              name="talk2"
              required
            />
            <label htmlFor="t2">No</label>
            <input id="t2" type="radio" defaultChecked value="no" name="talk2" required />
          </div>
        </div>
        <div onChange={setDateHandler} className={styles.submitReset}>
          <button onClick={resetHandler}>Reset</button>
          <input type="submit" value="Submit" />
          <input
            style={{ fontSize: "12px", width: "60px", cursor: "auto" }}
            type="text"
            name="day"
            id="day"
            autoComplete="off"
            placeholder="Day"
          />
          <select name="month" id="month">
            <option value="selected" hidden defaultValue>
              Month
            </option>
            <option value="январь">January</option>
            <option value="февраль">February</option>
            <option value="Март">March</option>
            <option value="Апрель">April</option>
            <option value="май">May</option>
            <option value="июнь">June</option>
            <option value="июль">July</option>
            <option value="Август">August</option>
            <option value="Сентябрь">September</option>
            <option value="Октябрь">October</option>
            <option value="Ноябрь">November</option>
            <option value="Декабрь">December</option>
          </select>
          <button
            type="button"
            style={{ marginLeft: "10px" }}
            onClick={saveResults}
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};
export default Layout;
