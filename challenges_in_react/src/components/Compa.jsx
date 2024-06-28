import React, { useEffect, useState } from 'react'
import Compb from './Compb';



function Compa() {

    const [name, setname] = useState({
        firstName: "",
        lastName: ""
    });

    useEffect(() => {
        const fname = "rajan ";
        const lname = "kushwaha";
        setname({
            firstName: fname,
            lastName: lname
        })

    }, [])
    return (
        <div>
            <h1>hello world</h1>
            {/* <Compb prop={name} /> */}
        </div>
    )
}

export default Compa;
