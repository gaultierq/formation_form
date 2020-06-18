import React, { useState } from 'react'
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import { useHistory } from "react-router-dom";
import {Step0, Step1, Step2, Step3} from './Steps'
import { useDispatch, useSelector } from 'react-redux'
import _ from "lodash";
import { clearForm } from './store/action'

export default function Form() {

  const [step, setStep] = useState(-1)
  console.log('my current step is', step)
  const currentForm = useSelector(state => _.get(state, 'currentForm'))
  const history = useHistory();
  const dispatch = useDispatch();

  return (

    <div>
      <span>{`Current step is ${step}`}</span>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path={"/step_0"}><Step0 /></Route>
        <Route path={"/step_1"}><Step1 /></Route>
        <Route path={"/step_2"}><Step2 /></Route>
      </Switch>
      <div>
        <button onClick={() => {
          if (step === 2) {
            console.info('Congratulation for your new client', currentForm)
            dispatch(clearForm())
            setStep(-1)
            // submit and clear
            history.push("/");
            return
          }
          let newStep = step + 1
          setStep(newStep)
          history.push("/step_" + newStep);
        }}>{`Next step`}</button>
      </div>
    </div>
  );
}

// You can think of these components as "pages"
// in your app.

function Home() {
  return (
    <div>
      <h2>Bienvenue sur le formulaire d'inscription </h2>
    </div>
  );
}


