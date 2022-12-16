import './home.css'
import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className='container'>
            <h1>All landing pages</h1>
            <ul>
                <li>
                    <Link to='/buffer'>
                        Buffer
                    </Link>
                </li>
            </ul>
        </div>
    )
}
