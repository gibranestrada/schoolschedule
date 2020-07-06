import React from "react";
import styles from "./Layout.module.css";
import * as names from './Names';

const Layout = () => {
  const brothersList = Object.keys(names.masterListBrothers).sort();
  const sistersList = Object.keys(names.masterListSisters).sort();
  return (
    <div className={styles.container}>
      <h1>School Schedule</h1>

      <p style={{ fontSize: '22px', fontWeight: 600, marginBottom: '0px' }}>Remove Names</p>
      <div className={styles.tablesContainer}>
        {brothersList.map((value) => {
          return (
            <div className={styles.tableBrothersNames} key={value}>
              <input type="checkbox" id={value} value={value} name={value} />
              <label htmlFor={value}>{value}</label>
            </div>
          )
        })}
        <div style={{ height: '20px', width: '100%' }}></div>
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
      <div className={styles.tablesContainerAssignments}>
        <div>
          <p>Reading</p>
          <label>Yes</label>
          <input type="radio" value="yes" name="reading" require="true" />
          <label>No</label>
          <input type="radio" value="no" name="reading" require="true" />
          <div>
            <label>Brothers</label>
            <input type="radio" value="brother" name="readingGender" require="true" />
            <label>Sisters</label>
            <input type="radio" value="sister" name="readingGender" require="true" />
          </div>
        </div>
        <div>
          <p>Initial Call</p>
          <label>Yes</label>
          <input type="radio" value="yes" name="initial" require="true" />
          <label>No</label>
          <input type="radio" value="no" name="initial" require="true" />
          <div><label>Brothers</label>
          <input type="radio" value="brother" name="initialGender" require="true" />
          <label>Sisters</label>
          <input type="radio" value="sister" name="initialGender" require="true" />
          </div>
        </div>
        <div>
          <p>Return Visit</p>
          <label>Yes</label>
          <input type="radio" value="yes" name="return" require="true" />
          <label>No</label>
          <input type="radio" value="no" name="return" require="true" />
          <div>
          <label>Brothers</label>
          <input type="radio" value="brother" name="returnGender" require="true" />
          <label>Sisters</label>
          <input type="radio" value="sister" name="returnGender" require="true" />
          </div>
        </div>
        <div>
          <p>Bible Study</p>
          <label>Yes</label>
          <input type="radio" value="yes" name="bibleStudy" require="true" />
          <label>No</label>
          <input type="radio" value="no" name="bibleStudy" require="true" />
          <div>
          <label>Brothers</label>
          <input type="radio" value="brother" name="bibleStudyGender" require="true" />
          <label>Sisters</label>
          <input type="radio" value="sister" name="bibleStudyGender" require="true" />
          </div>
        </div>
        <div>
          <p>Talk</p>
          <label>Yes</label>
          <input type="radio" value="yes" name="talk" require="true" />
          <label>No</label>
          <input type="radio" value="no" name="talk" require="true" />
        </div>
      </div>
      <p style={{ fontSize: '22px', fontWeight: 600, marginBottom: '0px' }}>Second School</p>
      <div className={styles.tablesContainerAssignments}>
        <div>
          <p>Reading</p>
          <label>Yes</label>
          <input type="radio" value="yes" name="reading2" require="true" />
          <label>No</label>
          <input type="radio" value="no" name="reading2" require="true" />
          <div>
          <label>Brothers</label>
          <input type="radio" value="brother" name="readingGender2" require="true" />
          <label>Sisters</label>
          <input type="radio" value="sister" name="readingGender2" require="true" />
          </div>
        </div>
        <div>
          <p>Initial Call</p>
          <label>Yes</label>
          <input type="radio" value="yes" name="initial2" require="true" />
          <label>No</label>
          <input type="radio" value="no" name="initial2" require="true" />
          <div>
          <label>Brothers</label>
          <input type="radio" value="brother" name="initialGender2" require="true" />
          <label>Sisters</label>
          <input type="radio" value="sister" name="initialGender2" require="true" />
          </div>
        </div>
        <div>
          <p>Return Visit</p>
          <label>Yes</label>
          <input type="radio" value="yes" name="return2" require="true" />
          <label>No</label>
          <input type="radio" value="no" name="return2" require="true" />
          <div>
          <label>Brothers</label>
          <input type="radio" value="brother" name="returnGender2" require="true" />
          <label>Sisters</label>
          <input type="radio" value="sister" name="returnGender2" require="true" />
          </div>
        </div>
        <div>
          <p>Bible Study</p>
          <label>Yes</label>
          <input type="radio" value="yes" name="bibleStudy2" require="true" />
          <label>No</label>
          <input type="radio" value="no" name="bibleStudy2" require="true" />
          <div>
          <label>Brothers</label>
          <input type="radio" value="brother" name="bibleStudyGender2" require="true" />
          <label>Sisters</label>
          <input type="radio" value="sister" name="bibleStudyGender2" require="true" />
          </div>
        </div>
        <div>
          <p>Talk</p>
          <label>Yes</label>
          <input type="radio" value="yes" name="talk2" require="true" />
          <label>No</label>
          <input type="radio" value="no" name="talk2" require="true" />
        </div>
      </div>
    </div>
  );
};
export default Layout;
