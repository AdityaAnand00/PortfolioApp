import React from "react";
import './TechStack.css' ; 
import c from '../../images/c.png' ; 
import js from '../../images/js.png' ; 
import css from '../../images/css.svg' ; 
import html from '../../images/html.svg' ; 
import react from '../../images/react.svg' ; 
import java from '../../images/java.png' ; 
import TechStackIconContainer from "./TechStackIconContainer/TechStackIconContainer";



 export  default function TechStack(){


    const techstackData  = [
        {
            iconName :'C++' ,
            iconImage : c,
            iconAltProperty :"reactImage" , 
        } ,
        {
            iconName :"JavaScript" ,
            iconImage : js ,
            iconAltProperty :"jsImage" , 
        } ,
        {
            iconName :"CSS" ,
            iconImage : css ,
            iconAltProperty :"cssImage" , 
        } ,
        

    ];
    const techstackData2  = [
        {
            iconName :'HTML' ,
            iconImage : html,
            iconAltProperty :"htmlImage" , 
        } ,
        {
            iconName :"React" ,
            iconImage : react ,
            iconAltProperty :"reactImage" , 
        } ,
        {
            iconName :"JAVA" ,
            iconImage : java ,
            iconAltProperty :"javaImage" , 
        } ,
        

    ];

  return (
        <div className="techstack_container">
            <p className="techstack_title">Tech Stack</p>
            <div className="techstack_icon_container">
                    {techstackData.map((item ,index) => {
                        return (
                           <TechStackIconContainer
                           image = {item.iconImage}
                           iconAltProperty ={item.iconAltProperty}
                           name = {item.iconName}
                           />
                        );
                    })}
            </div>

            <div className="techstack_icon_container">
                    {techstackData2.map((item ,index) => {
                        return (
                           <TechStackIconContainer
                           image = {item.iconImage}
                           iconAltProperty ={item.iconAltProperty}
                           name = {item.iconName}
                           />
                        );
                    })}
            </div>
         
        </div>
    

  );
}

