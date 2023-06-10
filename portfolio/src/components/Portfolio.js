import React from 'react';

import translator from '../assets/translator.png'
import readmeGenerator from '../assets/readme generator.png'
import logoGenerator from '../assets/logo generator.png'
import cms from '../assets/cms.png'
import ecom from '../assets/ecom.png'

export default function Portfolio() {
    return (
        <>
        <h1 className='center'>Click the images to view their repositories ☺</h1>

        <div className='container'>
        <h1 className='center'>Quotation Generator and Translator</h1>
        <p><h2 className='center'>APINinja Quote API, DeepL Translation API</h2></p>
        <p>
            <a href='https://github.com/tneiman19/Rutgers-Project1' target='_blank' rel="noreferrer"><img src={translator} alt='Translation project screenshot' id='translator' /></a>
        </p>
        </div>

        <div className='container'>
            <h1 className='center'>README Generator</h1>
            <p>
                <h2 className='center'>Node.js, FS, Inquirer</h2>
            </p>
            <p>
                <a href='https://github.com/AndrewRotolo/readme-generator' target='_blank' rel="noreferrer"> <img src={readmeGenerator} alt='Readme Generator Screenshot' id="readme" /></a>
            </p>
        </div>

        <div className='container'>
            <h1 className='center'>SVG Logo Generator</h1>
            <p>
                <h2 className='center'>Node.js, FS, Inquirer</h2>
            </p>
            <p>
                <a href='https://github.com/AndrewRotolo/logo-generator' target='_blank' rel="noreferrer"> <img src={logoGenerator} alt='Logo Generator Screenshot' id='logoGen' /> </a>
            </p>
        </div>

        <div className='container'>
            <h1 className='center'>Demo CMS Software</h1>
            <p>
                <h2 className='center'>Node.js, MySQL, Inquirer</h2>
            </p>
            <p>
                <a href='https://github.com/AndrewRotolo/CMS' target='_blank' rel="noreferrer"> <img src={cms} alt='CMS Project Screenshot' id='cms' /></a>
            </p>
        </div>

        <div className='container'>
            <h1 className='center'>E-Commerce Backend Framework</h1>
            <p>
                <h2 className='center'>Node.js, Express.js, Sequelize, MySQL</h2>
            </p>
            <p>
                <a href='https://github.com/AndrewRotolo/Ecom' target='_blank' rel='noreferrer'> <img src={ecom} alt='E-Commerce Project Screenshot' id='ecom' /></a>
            </p>
        </div>
        </>
    )
}