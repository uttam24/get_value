import React, {useState} from 'react'
import './App.css';

const App = ()=> {
  const [first, setFirstName] = useState();
  const [last, setLastName] = useState();
  const [get, getData] = useState();
  const [getlast, getLastData] = useState();
  const [firstError, setFirstError] = useState(false);
  const [lastError, setLastError] = useState(false);

  const [english, setEnglish] = useState();
  const [hindi, setHindi] = useState();
  const [math, setMath] = useState();
  const [science, setScience] = useState();  
  const [totalMarks, setTotalMarks] = useState();
  const [averageMarks, setAverageMarks] = useState();
  const [gradesubject, setGradeSubject] = useState();


  const [printEnglish, setEnglshPrint] = useState();
  const [printHindi, setHindiPrint] = useState();
  const [printMath, setMathPrint] = useState();
  const [printScience, setSciencePrint] = useState();


  let totalsubject = (english+hindi+math+science)/4;
  let gradesub= 0;
  if (totalsubject > 80 ){
    gradesub = 'A'
  } 
  else if (totalsubject > 60 && totalsubject < 80){
    gradesub = 'B'
  } 
   else if (totalsubject > 45 && totalsubject < 55){
    gradesub = 'C'
  }
  else{
    gradesub = 'Fail'
  }
  

  console.log(totalsubject)
  const formHandler =(e)=>{
   
    {/* if(first.length<3 || last.length<3){
      alert('type correct value');
    }
    else{
      alert('All Good');
    }*/}
     e.preventDefault();
    getData(first);
    getLastData(last);
    {/*setEnglshPrint(english)
    setHindiPrint(hindi)
    setMathPrint(math)
    setSciencePrint(science)*/}
    setTotalMarks(english+hindi+math+science)
    setAverageMarks(totalsubject)
    setGradeSubject(gradesub)
  }


  const getEnglish =(e)=>{
    setEnglish(+e.target.value); 

  }
  const getHindi = (e)=>{
     setHindi(+e.target.value);
  }
   const getMath =(e)=>{
    setMath(+e.target.value); 
  }
  const getScience = (e)=>{
     setScience(+e.target.value);
  }

  const getFirst =(e)=>{
    
    let item = e.target.value;
    if(item.length<3 )
    {
      setFirstError(true);
    }
    else{
      setFirstError(false);
    }
    setFirstName(item);
  }
  const getLast =(e)=>{
    
    let itemlast = e.target.value;
      if(itemlast.length<3)
      {
        setLastError(true);
      }
      else{
        setLastError(false);
      }
      setLastName(itemlast);
  }


  return (
    <div className="App">
     
      <form onSubmit={formHandler}>
       <fieldset>
        <legend> Student  Input Section :-</legend>
        <div className="student_name"><label>First Name :-</label><input type="text" value={first} onChange={getFirst}/>{firstError?<span>invalid user name</span>:''}</div>
        <div className="student_name"><label>Last Name :-</label><input type="text" value={last} onChange={getLast}/>{lastError?<span>invalid last name</span>:''}</div>
        <div className="table">
          <table border="1" style={{width:'300px'}}>
            <tr>
              <td>English</td>
              <td><input type="text" type="number" value={english} onChange={getEnglish}/></td>
            </tr>
            <tr>
              <td>Hindi</td>
              <td><input type="text" type="number" value={hindi} onChange={getHindi}/></td>
            </tr>
            <tr>
              <td>Math</td>
              <td><input type="text" type="number" value={math} onChange={getMath}/></td>
            </tr>
            <tr>
              <td>Science</td>
              <td><input type="text" type="number" value={science} onChange={getScience}/></td>
            </tr>
          </table>
        </div>
        <button type="submit" className="button_click">Get Data</button>
       </fieldset>
      </form>
      
     <div className="report_card">
       <h2>Report Card</h2>
       <table border="1" style={{width:'300px'}}>
       <tr>
        <td style={{width:'120px'}}>Name :-</td>
        <td>{get}</td>
       </tr>
       <tr>
        <td style={{width:'120px'}}>Last :-</td>
        <td>{getlast}</td>
       </tr>
       {/*<tr>
        <td style={{width:'120px'}}>English :-</td>
        <td>{printEnglish}</td>
       </tr>
       <tr>
       <td style={{width:'120px'}}>Hindi :-</td>
        <td>{printHindi}</td>
       </tr>
       <tr>
       <td style={{width:'120px'}}>Math :-</td>
        <td>{printMath}</td>
       </tr>
       <tr>
       <td style={{width:'120px'}}>Science :-</td>
        <td>{printScience}</td>
       </tr>*/}
        <tr>
       <td style={{width:'120px'}}>Total Marks :-</td>
        <td>{totalMarks}</td>
       </tr>
        <tr>
        <td style={{width:'120px'}}>Average Marks :-</td>
        <td><b>{averageMarks}</b></td>
       </tr>
        <tr>
        <td style={{width:'120px'}}>Grade :-</td>
        <td><b>{gradesubject}</b></td>
       </tr>
       
       </table>
     </div>
    </div>
  );
}

export default App;
