import React from "react";
import './Projects.css' ;
import ProjectBox from "./ProjectBox/ProjectBox"; 


export default function  Projects(){


    const projectData =  [

        {
            image : "https://img.freepik.com/free-vector/painted-background-multicoloured-palette_23-2148427592.jpg?w=2000",
            title : 'Ecom Website',
            sentences:[ 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ali',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ali',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ali'
                
            ],
            link:'https://www.google.co.in/'
        } ,

        {
            image : "https://img.freepik.com/free-vector/painted-background-multicoloured-palette_23-2148427592.jpg?w=2000",
            title : 'Ecom Website',
            sentences:[ 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ali',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ali',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ali'
                
            ],
            link:'https://www.google.co.in/'
        } ,
        {
            image : "https://img.freepik.com/free-vector/painted-background-multicoloured-palette_23-2148427592.jpg?w=2000",
            title : 'Ecom Website',
            sentences:[ 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ali',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ali',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ali'
                
            ],
            link:'https://www.google.co.in/'
        }
    ]

    return(
        <div>
            <p className="projects_title">Projects</p>
            <div className="projects_box_container">
                {projectData.map((value,index)=>(
                    <ProjectBox
                    title = {value.title}
                    image = {value.image}
                    sentences = {value.sentences}
                    link = {value.link}
                    />
                ))}
            </div>
        </div>
    );
}