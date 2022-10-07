import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import '../css/viewproject.css';

export default function ViewProject(props) {

    const { id } = useParams();
    const [project, setProject] = useState({id:id, name:"", img:"", tags:[], files:[], authors:[],desc:""});

    useEffect(() => {

        if (window.innerWidth < 1000) {
            const thumbnail = document.getElementsByClassName('viewproject--thumbnail');
            const underThumbnail = document.getElementsByClassName('viewproject--underThumbnail');
            const uploadedFiles = document.getElementsByClassName('viewproject--uploadedFiles');
            const description = document.getElementsByClassName('viewproject--descriptionContainer');
            thumbnail[0].style.width = '95%';
            underThumbnail[0].style.justifyContent = 'space-around';
            uploadedFiles[0].style.width = '95%';
            description[0].style.width = '95%';
        }
        
        fetch(`${window.location.origin}${process.env.PUBLIC_URL}/db.json`)
        .then(res => res.json())
        .then(
            (result) => { 
                setProject(
                    prevData => result.filter(element => String(element.id) === prevData['id'])[0]
                )
            }
        )
    }, [])
    /*
    useEffect(() => {
        if (window.innerWidth < 1000) {
            const thumbnail = document.getElementsByClassName('viewproject--thumbnail');
            const underThumbnail = document.getElementsByClassName('viewproject--underThumbnail');
            const uploadedFiles = document.getElementsByClassName('viewproject--uploadedFiles');
            const description = document.getElementsByClassName('viewproject--descriptionContainer');
            thumbnail     [0].style.width = '95%';
            underThumbnail[0].style.justifyContent = 'space-around';
            uploadedFiles [0].style.width = '95%';
            description   [0].style.width = '95%';
        } else {
            const thumbnail = document.getElementsByClassName('viewproject--thumbnail');
            const underThumbnail = document.getElementsByClassName('viewproject--underThumbnail');
            const uploadedFiles = document.getElementsByClassName('viewproject--uploadedFiles');
            const description = document.getElementsByClassName('viewproject--descriptionContainer');
            thumbnail     [0].style.width = 'min(100%, 1000px)';
            underThumbnail[0].style.justifyContent = 'space-between';
            uploadedFiles [0].style.width = '275px';
            description   [0].style.width = 'min(715px, 100%)';
        }
    }, [window.innerWidth])
    // */
    return (
        <div>
            <div className="viewproject--thumbnail" style={{backgroundImage: `url("${window.location.origin}${process.env.PUBLIC_URL}/projects/${project.id}/${project.img}")`}}>
                <div className="viewproject--thumbnailText">
                    <div><h1 className="viewproject--projectTitle contrasted">{project.name}</h1></div>
                    <div className="viewproject--bottomText">
                        <p className="viewproject--tags contrasted"> { 
                            project.tags.map((tag) => ("#"+tag+" ")) 
                        } </p>
                        <p className="viewproject--authors contrasted"> By { 
                            project.authors.map((author, index) => (
                                author + (((index+1<project.authors.length) && ", ") || " "))
                            )
                        } </p>
                    </div>
                </div>
            </div>
            <div className="viewproject--underThumbnail">
                <div className="viewproject--uploadedFiles">
                    <h2>Files:</h2>
                    {
                        project.files.map((filename, index) => (
                            <div className="viewproject--fileContainer" key={ index }>
                                <a key={index} className="viewproject--link" href={ `${window.location.origin}${process.env.PUBLIC_URL}/projects/${project.id}/${filename}`} download>
                                    <div className="viewproject--filename"> { filename } </div>
                                </a>
                            </div>
                        ))
                    }
                </div>
                <div className="viewproject--descriptionContainer">
                    <h2>Project description:</h2>
                    <div className="viewproject--description">
                        {
                            project.desc
                        }
                    </div>
                </div>
            </div>
            
        </div>
    )
}

