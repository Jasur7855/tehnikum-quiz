import React, { useEffect, useState } from "react";
import { ProgressBar } from "../components/ProgressBar";
import { AppHeader } from "../components/AppHeader";
import { AppInput } from "../components/AppInput";
import { useNavigate } from "react-router-dom";
import { AppButton } from "../components/AppButton";

const StepOne = () => {
  let [userAnswer, setUserAnswer]= useState("");
  let [useError, setUserError] = useState(false);
  let [buttonError,setButtonError]= useState(true);
  let navigate = useNavigate()

  const handleClick = () => {
    if (!userAnswer) {
      setUserError(true);
    }  else {
      setUserError(false);
      navigate("/step-two");
      localStorage.setItem("userOrigin", JSON.stringify(userAnswer))
    }
  };
  useEffect(() => {
    if (!userAnswer) {
      setButtonError(true)
    } else {
      setButtonError(false)
    }
  }, [userAnswer]);
 

  return (
    <div className="container">
      <div className="wrapper">
        <div className="single-input-quiz">
          
        <ProgressBar currentStep={1}/>
          <div className="question">
            <AppHeader headerType="h2" headerText ="Откуда вы про нас узнали ?" />
            <AppInput
              errorText="Введите текст" 
              inputValue={userAnswer}
              hasError={useError}
              inputChange={setUserAnswer}
            />
            <AppButton buttonClick={handleClick} isDisabled={buttonError}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepOne;
