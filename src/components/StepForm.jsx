import React from 'react';
import {useForm, useStep} from "react-hooks-helper";
import Names from "./stepsForm/Names";
import Address from './stepsForm/Address';
import Contact from './stepsForm/Contact';
import Payment from './stepsForm/Payment';
import Review from './stepsForm/Review';
// import { RenderAccordion } from './stepsForm/Review';
import Submit from './stepsForm/Submit';
import { useState } from "react";
// import { DateRange } from '@mui/icons-material';
// import {dog1} from "./images/dog11.png"

const defaultData = {
  firstName: "",
  lastName: "",
  gender: "",
  city: "",
  pincode: "",
  state: "",
  country: "",
  phone: "",
  email: "",
  cardNo: "",
  expiryDate: new Date(),
  cvv: "",
 
}

const steps = [
  { id: 'names' },
  { id: 'address'},
  { id: 'contact'},
  { id: 'payment'},
  { id: 'review'},
  { id: 'submit'},
]

const StepForm = () => {
const [form, setForm] = useForm(defaultData);
const {step, navigation} = useStep({
  steps,
  initialStep: 0,
});

const props = { form, setForm, navigation }

switch(step.id){
  case 'names':
    return <Names { ...props}/>
  case 'address':
    return <Address { ...props}/>
  case 'contact':
    return <Contact { ...props}/>
  case 'payment':
    return <Payment { ...props}/>
  case 'review':
    return <Review { ...props}/>
  case 'submit':
    return <Submit { ...props}/>
}
console.log(step);

  return (
    <div className="">
    </div>
  )
}

export default StepForm