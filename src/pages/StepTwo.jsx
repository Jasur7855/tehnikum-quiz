import React, { useState } from "react";
import { ProgressBar } from "../components/ProgressBar";
import { AppHeader } from "../components/AppHeader";
import { AnswerItem } from "../components/AnswerItem";
import { LinkButton } from "../components/LinkButton";

const StepTwo = () => {

  const variants = [
    {
      id:"variant-1",
      labelText:"Frontend"
    },
    {
      id:"variant-2",
      labelText:"BackEnd"
    },
    {
      id:"variant-3",
      labelText:"UX/UI"
    },
    {
      id:"variant-4",
      labelText:"Uzum"
    },
  ]

  const [checkedAnswer,setCheckedAnswer]= useState(null);

  checkedAnswer==null ? localStorage.setItem("checkedCourse","") :localStorage.setItem("checkedCourse",JSON.stringify(checkedAnswer))
  
  return (
    <div className="container">
      <div className="wrapper">
        <div className="variants-quiz">
          <ProgressBar currentStep={1}/>
          <div className="question">
            <AppHeader headerText="На каком курсе вы обучаетесь ? " headerType="h2"/>
            <ul className="variants">
              {variants.map((elem)=>{
                return<AnswerItem
                 key={elem.id}
                 id={elem.id} 
                 labelText={elem.labelText}
                 onChange={()=>setCheckedAnswer(elem.labelText)}
                 checked={checkedAnswer===elem.labelText}
                 />
              })}
            </ul>
            <LinkButton 
            isDisabled={checkedAnswer===null} 
            linkType="button" 
            linkText="Далее" 
            linkBtn="/step-three"
            />
            {/* <button type="button" disabled id="next-btn">
              Далее
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepTwo;
