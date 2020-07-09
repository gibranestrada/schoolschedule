/* eslint-disable no-unused-expressions */
import React from "react";
import styles from "./Layout.module.css";
import * as names from "./Names";
import RemoveNames from "./removeNames";
var FileSaver = require("file-saver");

const Layout = () => {
  let schoolOptions = {};
  let removedBrothersNames = [];
  let removedSistersNames = [];
  let tajikSisters = [];
  let tajikBrothers = [];
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
  const date = { day: "", month: "" };
  let finalNames = {};

  const submitHandler = (e) => {
    e.persist();
    e.preventDefault();
    const combineArraysSisters = [...removedSistersNames, ...tajikSisters].filter((v, i, a) => a.indexOf(v) === i);
    const combineArraysBrothers = [...removedBrothersNames, ...tajikBrothers].filter((v, i, a) => a.indexOf(v) === i);
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
          const returnedNames = names.chooseSister(value);
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
    assignedNames.forEach(value => {
      if (value.hasOwnProperty('firstSchool')) {
        newArray.firstSchool.push(value.firstSchool);
      } else {
        newArray.secondSchool.push(value.secondSchool);
      }
    })
    finalNames = newArray;
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
        delete schoolOptions[e.target.name];
      } else {
        schoolOptions[e.target.name] = {
          assignment: e.target.value,
          school: e.target.className,
        };
      }
    }

  };
  const tajikHandler = (e) => {
    e.persist();
    if (e.target.checked) {
      tajikSisters = [
        "nisso_davlyatova",
        "farzona_asimova",
        "khidoyat_asimova",
        "tamano_davlyatova",
        "dilnoza_otozhonova",
        "erkenai_joraeva",
        "ruhafzo_joraeva",
        "khidoyat_asimova"
      ];
      tajikBrothers = [
        "alijon_davlyatov",
        "kahor_otozhonov",
        "abdulla_kadirov",
        "aziz_joraev",
        "akhmad_davlyatov",
        "babajon_gurbandurdiev",
        "akmal_davlyatov",
        "dilovar_babahanov"
      ];
    } else {
      tajikSisters = [];
      tajikBrothers = [];
    }
  };
  const setDate = (e) => {
    e.persist();
    if (e.target.id === "day") {
      date.day = e.target.value;
    } else if (e.target.id === "month") {
      date.month = e.target.value;
    }
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
        blob += `${russianAssign[value.assignment]}: ${
          name
          } ${
          householder
            ? " / " +
            householder
            : ""
          } \r\n `;
      });
      finalNames.secondSchool.forEach((value) => {
        let name = combineNames[value.assignedTo].russianName;
        let householder = combineNames?.[value.houseHolder]?.russianName;
        if (!counter) {
          counter += 1;
          blob += `\r\n ${russianAssign.secondSchool} \r\n `;
        }
        blob += `${russianAssign[value.assignment]}: ${
          name
          } ${
          householder
            ? " / " +
            householder
            : ""
          } \r\n `;
      });
      console.log(blob);
      var blob2 = new Blob([blob], {
        type: "text/plain;charset=utf-8",
      });
      FileSaver.saveAs(blob2, `${date.day}-${date.month}.txt`);
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
          removedBrothersNames={removedBrothersNames}
          removedSistersNames={removedSistersNames}
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
            <label>Brothers</label>
            <input
              className="firstSchool"
              type="radio"
              value="brother"
              name="reading"
              required
            />
            <label>No</label>
            <input type="radio" value="no" name="reading" required />
          </div>
          <div>
            <p>Initial Call</p>
            <label>Brothers</label>
            <input
              className="firstSchool"
              type="radio"
              value="brother"
              name="initial"
              required
            />
            <label>Sisters</label>
            <input
              className="firstSchool"
              type="radio"
              value="sister"
              name="initial"
              required
            />
            <label>No</label>
            <input type="radio" value="no" name="initial" required />
          </div>
          <div>
            <p>Initial Call 2</p>
            <label>Brothers</label>
            <input
              className="firstSchool"
              type="radio"
              value="brother"
              name="initial2"
              required
            />
            <label>Sisters</label>
            <input
              className="firstSchool"
              type="radio"
              value="sister"
              name="initial2"
              required
            />
            <label>No</label>
            <input type="radio" value="no" name="initial2" required />
          </div>
          <div>
            <p>Initial Call 3</p>
            <label>Brothers</label>
            <input
              className="firstSchool"
              type="radio"
              value="brother"
              name="initial3"
              required
            />
            <label>Sisters</label>
            <input
              className="firstSchool"
              type="radio"
              value="sister"
              name="initial3"
              required
            />
            <label>No</label>
            <input type="radio" value="no" name="initial3" required />
          </div>
          <div>
            <p>Return Visit</p>
            <label>Brothers</label>
            <input
              className="firstSchool"
              type="radio"
              value="brother"
              name="return"
              required
            />
            <label>Sisters</label>
            <input
              className="firstSchool"
              type="radio"
              value="sister"
              name="return"
              required
            />
            <label>No</label>
            <input type="radio" value="no" name="return" required />
          </div>
          <div>
            <p>Return Visit 2</p>
            <label>Brothers</label>
            <input
              className="firstSchool"
              type="radio"
              value="brother"
              name="return2"
              required
            />
            <label>Sisters</label>
            <input
              className="firstSchool"
              type="radio"
              value="sister"
              name="return2"
              required
            />
            <label>No</label>
            <input type="radio" value="no" name="return2" required />
          </div>
          <div>
            <p>Bible Study</p>
            <label>Brothers</label>
            <input
              className="firstSchool"
              type="radio"
              value="brother"
              name="bibleStudy"
              required
            />
            <label>Sisters</label>
            <input
              className="firstSchool"
              type="radio"
              value="sister"
              name="bibleStudy"
              required
            />
            <label>No</label>
            <input type="radio" value="no" name="bibleStudy" required />
          </div>
          <div>
            <p>Talk</p>
            <label>Brothers</label>
            <input
              className="firstSchool"
              type="radio"
              value="brother"
              name="talk"
              required
            />
            <label>No</label>
            <input type="radio" value="no" name="talk" required />
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
            <label>Brothers</label>
            <input
              className="secondSchool"
              type="radio"
              value="brother"
              name="reading2"
              required
            />
            <label>No</label>
            <input type="radio" value="no" name="reading2" required />
          </div>
          <div>
            <p>Initial Call</p>
            <label>Brothers</label>
            <input
              className="secondSchool"
              type="radio"
              value="brother"
              name="2ndinitial"
              required
            />
            <label>Sisters</label>
            <input
              className="secondSchool"
              type="radio"
              value="sister"
              name="2ndinitial"
              required
            />
            <label>No</label>
            <input type="radio" value="no" name="2ndinitial" required />
          </div>
          <div>
            <p>Initial Call 2</p>
            <label>Brothers</label>
            <input
              className="secondSchool"
              type="radio"
              value="brother"
              name="2ndinitial2"
              required
            />
            <label>Sisters</label>
            <input
              className="secondSchool"
              type="radio"
              value="sister"
              name="2ndinitial2"
              required
            />
            <label>No</label>
            <input type="radio" value="no" name="2ndinitial2" required />
          </div>
          <div>
            <p>Initial Call 3</p>
            <label>Brothers</label>
            <input
              className="secondSchool"
              type="radio"
              value="brother"
              name="2ndinitial3"
              required
            />
            <label>Sisters</label>
            <input
              className="secondSchool"
              type="radio"
              value="sister"
              name="2ndinitial3"
              required
            />
            <label>No</label>
            <input type="radio" value="no" name="2ndinitial3" required />
          </div>
          <div>
            <p>Return Visit</p>
            <label>Brothers</label>
            <input
              className="secondSchool"
              type="radio"
              value="brother"
              name="2ndreturn"
              required
            />
            <label>Sisters</label>
            <input
              className="secondSchool"
              type="radio"
              value="sister"
              name="2ndreturn"
              required
            />
            <label>No</label>
            <input type="radio" value="no" name="2ndreturn" required />
          </div>
          <div>
            <p>Return Visit 2</p>
            <label>Brothers</label>
            <input
              className="secondSchool"
              type="radio"
              value="brother"
              name="2ndreturn2"
              required
            />
            <label>Sisters</label>
            <input
              className="secondSchool"
              type="radio"
              value="sister"
              name="2ndreturn2"
              required
            />
            <label>No</label>
            <input type="radio" value="no" name="2ndreturn2" required />
          </div>
          <div>
            <p>Bible Study</p>
            <label>Brothers</label>
            <input
              className="secondSchool"
              type="radio"
              value="brother"
              name="bibleStudy2"
              required
            />
            <label>Sisters</label>
            <input
              className="secondSchool"
              type="radio"
              value="sister"
              name="bibleStudy2"
              required
            />
            <label>No</label>
            <input type="radio" value="no" name="bibleStudy2" required />
          </div>
          <div>
            <p>Talk</p>
            <label>Brothers</label>
            <input
              className="secondSchool"
              type="radio"
              value="brother"
              name="talk2"
              required
            />
            <label>No</label>
            <input type="radio" value="no" name="talk2" required />
          </div>
        </div>
        <div onChange={setDate} className={styles.submitReset}>
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
