import React, { useState, useEffect } from 'react';
import styles from "./Form.module.css";

function Form() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [form, setForm] = useState({});

    // useEffect(() => {
    //     console.log(form);
    // }, [form]);

    const handleForm = (e) => {
        e.preventDefault();
        console.log(name, email, password);

        // setForm((prev) => ({
        //     ...prev,
        //     name: name,
        //     email: email,
        //     password: password
        // }));

        setForm((prev) => ({
            ...prev,
            name: name,
            email: email,
            password: password

        }))
    }
    useEffect(() => {
        console.log(form)
    }, [form])
    // console.log(form);

    return (
        <div className={styles.Style}>
            <form>
                <label htmlFor="name">Enter Name</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <label htmlFor="email">Enter Email</label>
                <input
                    type="text"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <label htmlFor="password">Enter Password</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value)
                    }}
                />

                <button onClick={handleForm}>Submit</button>
            </form>
        </div>
    );
}

export default Form;
