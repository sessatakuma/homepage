import React, { useState, useEffect, useRef } from 'react';

import Nav from './Nav';
import Footer from './Footer';

import ToolCards from './ToolCards';
import './Main.css';

import { tools } from '../assets/tools'

export default function Main() {
    return <>
        <Nav/>
        <div className='main' role='main'>
            <h1>Tools title placeholder</h1>
            <ToolCards tools={tools}/>
        </div>
        <Footer/>
    </>
}