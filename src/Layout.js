import React from "react";
import styles from "./Layout.module.css";

const Layout = () => {
  return (
    <div className={styles.container}>
      <h1>School Schedule</h1>

      <p style={{fontSize: '22px', fontWeight: 600, marginBottom: '0px'}}>Remove Names</p>
      <div className={styles.tablesContainer}>
        <div>
          <select className={styles.removeNames} name="removeNames" size="10" multiple={true}>
            <option value="valeriy_filipenka">valeriy_filipenka</option>
            <option value="anatoly_lesitsa">anatoly_lesitsa</option>
            <option value="maksim_petrov">maksim_petrov</option>
            <option value="gibran_estrada">gibran_estrada</option>
            <option value="vadim_klimenko">vadim_klimenko</option>
            <option value="georgiy_pleev">georgiy_pleev</option>
          </select>
        </div>
      </div>
      <p style={{fontSize: '22px', fontWeight: 600, marginBottom: '0px'}}>First School</p>
      <div className={styles.tablesContainer}>
        <div>
          <p>Reading</p>
          <label>Yes</label>
          <input type="radio" value="yes" name="reading" require />
          <label>No</label>
          <input type="radio" value="no" name="reading" require />
          <label>Brothers</label>
          <input type="radio" value="brother" name="readingGender" require />
          <label>Sisters</label>
          <input type="radio" value="sister" name="readingGender" require />
        </div>
        <div>
            <p>Initial Call</p>
            <label>Yes</label>
          <input type="radio" value="yes" name="initial" require />
          <label>No</label>
          <input type="radio" value="no" name="initial" require />
          <label>Brothers</label>
          <input type="radio" value="brother" name="initialGender" require />
          <label>Sisters</label>
          <input type="radio" value="sister" name="initialGender" require />
        </div>
        <div>
            <p>Return Visit</p>
            <label>Yes</label>
          <input type="radio" value="yes" name="return" require />
          <label>No</label>
          <input type="radio" value="no" name="return" require />
          <label>Brothers</label>
          <input type="radio" value="brother" name="returnGender" require />
          <label>Sisters</label>
          <input type="radio" value="sister" name="returnGender" require />
        </div>
        <div>
            <p>Bible Study</p>
            <label>Yes</label>
          <input type="radio" value="yes" name="bibleStudy" require />
          <label>No</label>
          <input type="radio" value="no" name="bibleStudy" require />
          <label>Brothers</label>
          <input type="radio" value="brother" name="bibleStudyGender" require />
          <label>Sisters</label>
          <input type="radio" value="sister" name="bibleStudyGender" require />
        </div>
        <div>
            <p>Talk</p>
            <label>Yes</label>
          <input type="radio" value="yes" name="talk" require />
          <label>No</label>
          <input type="radio" value="no" name="talk" require />
        </div>
      </div>
      <p style={{fontSize: '22px', fontWeight: 600, marginBottom: '0px'}}>Second School</p>
      <div className={styles.tablesContainer}>
        <div>
          <p>Reading</p>
          <label>Yes</label>
          <input type="radio" value="yes" name="reading2" require />
          <label>No</label>
          <input type="radio" value="no" name="reading2" require />
          <label>Brothers</label>
          <input type="radio" value="brother" name="readingGender2" require />
          <label>Sisters</label>
          <input type="radio" value="sister" name="readingGender2" require />
        </div>
        <div>
            <p>Initial Call</p>
            <label>Yes</label>
          <input type="radio" value="yes" name="initial2" require />
          <label>No</label>
          <input type="radio" value="no" name="initial2" require />
          <label>Brothers</label>
          <input type="radio" value="brother" name="initialGender2" require />
          <label>Sisters</label>
          <input type="radio" value="sister" name="initialGender2" require />
        </div>
        <div>
            <p>Return Visit</p>
            <label>Yes</label>
          <input type="radio" value="yes" name="return2" require />
          <label>No</label>
          <input type="radio" value="no" name="return2" require />
          <label>Brothers</label>
          <input type="radio" value="brother" name="returnGender2" require />
          <label>Sisters</label>
          <input type="radio" value="sister" name="returnGender2" require />
        </div>
        <div>
            <p>Bible Study</p>
            <label>Yes</label>
          <input type="radio" value="yes" name="bibleStudy2" require />
          <label>No</label>
          <input type="radio" value="no" name="bibleStudy2" require />
          <label>Brothers</label>
          <input type="radio" value="brother" name="bibleStudyGender2" require />
          <label>Sisters</label>
          <input type="radio" value="sister" name="bibleStudyGender2" require />
        </div>
        <div>
            <p>Talk</p>
            <label>Yes</label>
          <input type="radio" value="yes" name="talk2" require />
          <label>No</label>
          <input type="radio" value="no" name="talk2" require />
        </div>
      </div>
    </div>
  );
};
export default Layout;
