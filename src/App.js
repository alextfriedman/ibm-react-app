import React from "react";
import axios from "axios";
import { useEffect } from "react";

const App = () => {

    useEffect(() => {
        axios({
            url: "https://jsonplaceholder.typicode.com/posts",
            method: "GET",
            dataResponse: "json"
        }).then((res) => {
            console.log(res);
        })
    }, [])

    return <div>This was made from scratch!</div>

};

export default App;