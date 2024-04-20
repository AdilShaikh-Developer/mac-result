import { useState, Fragment } from "react";
import data from "./data/result-data.json";

import "./stylesheets/app.css";

const App = () => {
  const [name, setName] = useState("");
  const [rollNumber, setRollNumber] = useState("");
  const [faculty, setFaculty] = useState("");

  const [result, setResult] = useState(false);

  const handleResult = (e) => {
    const result = data.filter(
      (result) =>
        result.NAME.toUpperCase().includes(name.toUpperCase()) &&
        result.ROLLNO == rollNumber &&
        result.FACULTY.toUpperCase() === faculty.toUpperCase()
    );

    if (result.length === 1) setResult(result);
    else setResult(true);
  };

  return (
    <>
      <div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className={`resultBox  ${result ? "" : "Visibility"}`}
        >
          <div className="Instruction">
            <h1>Maulana Azad College of Arts, Science & Commerce</h1>
            <h1>Dr. Rafiq Zakaria Campus</h1>
            <h2>Rauza Bagh, Aurangabad, Maharastra</h2>
          </div>
          <div className="Instruction">
            <h1>XI - Exam Result</h1>
            <p>Fill Your Correct Information Below...</p>
          </div>
          <input
            required
            type="text"
            name="CandidateName"
            id="candidateName"
            className="candidateInfo"
            placeholder="Enter Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            required
            type="number"
            name="CandidateRollNo"
            id="candidateRollNo"
            className="candidateInfo"
            placeholder="Enter Your Roll No"
            value={rollNumber}
            onChange={(e) => setRollNumber(e.target.value)}
          />
          <select
            name="CandidateFaculty"
            id="facultyInfo"
            className="candidateInfo"
            onChange={(e) => setFaculty(e.target.value)}
            value={faculty}
          >
            <option value="Select Your Faculty">Select Your Faculty...</option>
            <option value="Science">Science</option>
            <option value="Commerce">Commerce</option>
            <option value="Arts">Arts</option>
          </select>
          <input
            type="submit"
            value="Check Your Result"
            id="submitButton"
            onClick={handleResult}
          />
          <div id="notice">
            <span>Notice</span>
            <ol>
              <li>WH = Withheld (Contact office)</li>
              <li>OV = Office Verification</li>
            </ol>
          </div>
        </form>
      </div>
      <div
        id="resultPage"
        className={`resultSheet ${result ? "Visibility" : ""}`}
      >
        {Array.isArray(result) ? (
          result.map((result, index) => (
            <Fragment key={index}>
              <div>
                <h4>Maulana Azad College of Arts, Science & Commerce </h4>
                <br />
                <p>Name : {result.NAME} </p>
                <p>Roll No : {result.ROLLNO} </p>
                <p>FACULTY : XI - {result.FACULTY} </p>
                <p>Total : {result.TOTAL} </p>
                <p>
                  Percentage: {result.PERCENTAGE.toString().substring(0, 5)}%{" "}
                </p>
                <p>Remark : {result.REMARK} </p>
              </div>
              <br />
              <table>
                <thead>
                  <tr>
                    <th>Sr No</th>
                    <th>Subject</th>
                    <th>Marks</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>{result.SUBJECT1}</td>
                    <td>{result.MARK1}</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>{result.SUBJECT2}</td>
                    <td>{result.MARK2}</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>{result.SUBJECT3}</td>
                    <td>{result.MARK3}</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>{result.SUBJECT4}</td>
                    <td>{result.MARK4}</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>{result.SUBJECT5}</td>
                    <td>{result.MARK5}</td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>{result.SUBJECT6}</td>
                    <td>{result.MARK6}</td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>{result.SUBJECT7}</td>
                    <td>{result.MARK7}</td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td>{result.SUBJECT8}</td>
                    <td>{result.MARK8}</td>
                  </tr>
                </tbody>
              </table>
            </Fragment>
          ))
        ) : (
          <span>
            The Information You Have Filled Is Invalid <br /> Refresh The Page
            And Try Again
          </span>
        )}
      </div>
    </>
  );
};

export default App;
