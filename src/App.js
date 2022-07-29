import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {
    const [allData, setAllData] = useState([]);

    useEffect(() => {
        axios({
            url: "https://jsonplaceholder.typicode.com/posts",
            method: "GET",
            dataResponse: "json"
        }).then((res) => {
            console.log(res.data);

            return (
                    function displayData () {
                        return (
                            <section>
                                <h1>Here is the data</h1>
                                <div>
                                    {res.data.map((info) => {
                                        return (
                                            
                                        )
                                    })}
                                </div>
                            </section>
                        );
                    }
            );
        })
    }, [])

    return (
    <div>This was made from scratch!</div>
    );

};

export default App;