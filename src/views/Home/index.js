import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <Fragment>
            <p>Hola mundo</p>
            <Link to='/shop'>Shop</Link>
        </Fragment>
    );
}