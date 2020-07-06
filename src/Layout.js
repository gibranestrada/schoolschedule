/* eslint-disable no-unused-expressions */
import React from "react";
import styles from "./Layout.module.css";
import * as names from './Names';

const Layout = () => {
  const brothersList = Object.keys(names.masterListBrothers).sort();
  const sistersList = Object.keys(names.masterListSisters).sort();
  let schoolOptions = {};
  let removedBrothersNames = [];
  let removedSistersNames = [];

  const removedBrothersNamesHandler = (e) => {
    e.persist();
    if (e.target.type === "checkbox") {
      if (removedBrothersNames.includes(e.target.id)) {
        removedBrothersNames = removedBrothersNames.filter(value => value !== e.target.id);
      } else {
        removedBrothersNames.push(e.target.id);
      }
    }
  }
  const removedSistersNamesHandler = (e) => {
    e.persist();
    if (e.target.type === "checkbox") {
      if (removedSistersNames.includes(e.target.id)) {
        removedSistersNames = removedSistersNames.filter(value => value !== e.target.id);
      } else {
        removedSistersNames.push(e.target.id);
      }
    }
  }
  const submitHandler = e => {
    e.persist();
    e.preventDefault();
    names.removeBrothersNames(removedBrothersNames);
    names.removeSistersNames(removedSistersNames);
    const assignedNames = Object.keys(schoolOptions).map(value => {
      const newString = changeAssignmentString(value);
      const assignmentArr = ['initial', 'return', 'bibleStudy'].some(val => value.includes(val));
      console.log(schoolOptions)
      if(schoolOptions[value].assignment === 'brother'){
        if(assignmentArr){
          const returnedNames = names.chooseBrother(value);
          return {[schoolOptions[value].school]: {assignedTo: returnedNames[0], assignment: newString, houseHolder: returnedNames[1]}};
        }else{
          return {[schoolOptions[value].school]: {assignedTo: names.chooseBrother(value), assignment: newString}};
        }
      }else {
        if(assignmentArr){
          const returnedNames = names.chooseSister(value);
          return {[schoolOptions[value].school]: {assignedTo: returnedNames[0], assignment: newString, houseHolder: returnedNames[1]}};
        }else{
          return {[schoolOptions[value].school]: {assignedTo: names.chooseSister(value), assignment: newString}};
        }
        // return {[names.chooseSister(value)] : value};
      }
    })
    console.log(assignedNames);
  }
  const changeAssignmentString = (assign) => {
    let newStr;
    /initial/.test(assign) ? newStr = 'initial' : '';
    /return/.test(assign) ? newStr = 'return' : '';
    /bibleStudy/.test(assign) ? newStr = 'bibleStudy' : '';
    /talk/.test(assign) ? newStr = 'talk' : '';
    /reading/.test(assign) ? newStr = 'reading' : '';
    return newStr;
  }
  const resetHandler = () => {
    window.location.reload();
  }

  const schoolOptionsHandler = e => {
    e.persist();
    if (e.target.type === "radio") {
      if (e.target.value === "no") {
        delete schoolOptions[e.target.name];
      } else {
        schoolOptions[e.target.name] = {assignment: e.target.value, school: e.target.className}
      }
    }
  }
 
  return (
    <div className={styles.container}>
      <form onSubmit={submitHandler}>
        <h1>School Schedule</h1>
        <p style={{ fontSize: '22px', fontWeight: 600, marginBottom: '0px' }}>Remove Names</p>
        <div onClick={removedBrothersNamesHandler} className={styles.tablesContainer}>
          {brothersList.map((value) => {
            return (
              <div className={styles.tableBrothersNames} key={value}>
                <input type="checkbox" id={value} value={value} name={value} />
                <label htmlFor={value}>{value}</label>
              </div>
            )
          })}
          <div onClick={removedSistersNamesHandler} style={{ height: '20px', width: '100%' }}></div>
          {sistersList.map((value) => {
            return (
              <div className={styles.tableSistersNames} key={value}>
                <input type="checkbox" id={value} value={value} name={value} />
                <label htmlFor={value}>{value}</label>
              </div>
            )
          })}
        </div>
        <p style={{ fontSize: '22px', fontWeight: 600, marginBottom: '0px' }}>First School</p>
        <div onClick={schoolOptionsHandler} className={styles.tablesContainerAssignments}>
          <div>
            <p>Reading</p>
            <label>Brothers</label>
            <input className="firstSchool" type="radio" value="brother" name="reading" required />
            <label>No</label>
            <input type="radio" value="no" name="reading" required />
          </div>
          <div>
            <p>Initial Call</p>
            <label>Brothers</label>
            <input className="firstSchool" type="radio" value="brother" name="initial" required />
            <label>Sisters</label>
            <input className="firstSchool" type="radio" value="sister" name="initial" required />
            <label>No</label>
            <input type="radio" value="no" name="initial" required />
          </div>
          <div>
            <p>Return Visit</p>
            <label>Brothers</label>
            <input className="firstSchool" type="radio" value="brother" name="return" required />
            <label>Sisters</label>
            <input className="firstSchool" type="radio" value="sister" name="return" required />
            <label>No</label>
            <input type="radio" value="no" name="return" required />
          </div>
          <div>
            <p>Return Visit 2</p>
            <label>Brothers</label>
            <input className="firstSchool" type="radio" value="brother" name="return2" required />
            <label>Sisters</label>
            <input className="firstSchool" type="radio" value="sister" name="return2" required />
            <label>No</label>
            <input type="radio" value="no" name="return2" required />
          </div>
          <div>
            <p>Bible Study</p>
            <label>Brothers</label>
            <input className="firstSchool" type="radio" value="brother" name="bibleStudy" required />
            <label>Sisters</label>
            <input className="firstSchool" type="radio" value="sister" name="bibleStudy" required />
            <label>No</label>
            <input type="radio" value="no" name="bibleStudy" required />
          </div>
          <div>
            <p>Talk</p>
            <label>Brothers</label>
            <input className="firstSchool" type="radio" value="brother" name="talk" required />
            <label>No</label>
            <input type="radio" value="no" name="talk" required />
          </div>
        </div>
        <p style={{ fontSize: '22px', fontWeight: 600, marginBottom: '0px' }}>Second School</p>
        <div onClick={schoolOptionsHandler} className={styles.tablesContainerAssignments}>
          <div>
            <p>Reading</p>
            <label>Brothers</label>
            <input className="secondSchool" type="radio" value="brother" name="reading2" required />
            <label>No</label>
            <input type="radio" value="no" name="reading2" required />
          </div>
          <div>
            <p>Initial Call</p>
            <label>Brothers</label>
            <input className="secondSchool" type="radio" value="brother" name="initial2" require="true" />
            <label>Sisters</label>
            <input className="secondSchool" type="radio" value="sister" name="initial2" require="true" />
            <label>No</label>
            <input type="radio" value="no" name="initial2" require="true" />
          </div>
          <div>
            <p>Return Visit</p>
            <label>Brothers</label>
            <input className="secondSchool" type="radio" value="brother" name="2ndreturn" require="true" />
            <label>Sisters</label>
            <input className="secondSchool" type="radio" value="sister" name="2ndreturn" require="true" />
            <label>No</label>
            <input type="radio" value="no" name="2ndreturn" require="true" />
          </div>
          <div>
            <p>Return Visit 2</p>
            <label>Brothers</label>
            <input className="secondSchool" type="radio" value="brother" name="2ndreturn2" require="true" />
            <label>Sisters</label>
            <input className="secondSchool" type="radio" value="sister" name="2ndreturn2" require="true" />
            <label>No</label>
            <input type="radio" value="no" name="2ndreturn2" require="true" />
          </div>
          <div>
            <p>Bible Study</p>
            <label>Brothers</label>
            <input className="secondSchool" type="radio" value="brother" name="bibleStudy2" require="true" />
            <label>Sisters</label>
            <input className="secondSchool" type="radio" value="sister" name="bibleStudy2" require="true" />
            <label>No</label>
            <input type="radio" value="no" name="bibleStudy2" require="true" />
          </div>
          <div>
            <p>Talk</p>
            <label>Brothers</label>
            <input className="secondSchool" type="radio" value="brother" name="talk2" require="true" />
            <label>No</label>
            <input type="radio" value="no" name="talk2" require="true" />
          </div>
        </div>
        <div className={styles.submitReset}>
          <button onClick={resetHandler} >Reset</button>
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};
export default Layout;
