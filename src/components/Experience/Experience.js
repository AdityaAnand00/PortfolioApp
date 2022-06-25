import React from "react";
import './Experience.css' ;
import ExperienceCard from "./ExperienceCard/ExperienceCard";
import html from '../../images/html.svg'  ;
import react from '../../images/react.svg'  ;
import js from '../../images/js.png'  ;
import  firebase from '../../images/firebase.png' ; 


export default function Experience(){
  
  const statements = [
    "1. I am a pretty great SDE sd,fj asldfjsjlk sdkjfhsjd  hesjfh h jskfh" , 
    '2. I have created various features in this app .',
    '3. lorwm ipsum jasdflk; asjfh kjfsd kj sdjkf s;k kj; sjf ' ,
    '4.  as;fhas;l shddfsdh jksgdfj jh sdgf  hjsagf g shkgf  sdg' ,
    '5, sdf g sg fs  gusgfusgsudagf gsugfus   guy sgf gs' 
  ]

  const iconImages = [react , js, html , firebase]
    return (
      <div className="experience_container">
        <p className="experience_title">Experience</p>
        <div className="experience_cards_contianer">
            <ExperienceCard
                companyName ="Lakshmi Chit Fund Pvt Ltd. "  
                designation= 'SDE'
                statements = {statements}
                iconImages = {iconImages}
            />
             <ExperienceCard
                companyName ="Lakshmi Chit Fund Pvt Ltd. "  
                designation= 'SDE'
                statements = {statements}
                iconImages = {iconImages}
            />
             <ExperienceCard
            companyName ="Lakshmi Chit Fund Pvt Ltd. "  
            designation= 'SDE'
            statements = {statements}
            iconImages = {iconImages}
        />
        </div>
      </div>
    )
}


// this component contains  , multiple projects u worked  in ,  u can  mention all your projects done  . 
