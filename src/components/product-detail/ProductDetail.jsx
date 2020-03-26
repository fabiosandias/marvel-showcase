import React, {useEffect, useState} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Card from "../card/Card";
import Typography from "@material-ui/core/Typography";

export default props => {
const { id } = useParams();
    useEffect(() => {
        // const { id } = useParams();
        console.log(id);
    })
    // const { id } = useParams();
    // console.log(id);
    return (

        <>
            <h1>Product Detail {id}</h1>
        </>
    );
}