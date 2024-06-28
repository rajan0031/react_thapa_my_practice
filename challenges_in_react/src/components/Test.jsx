import React from 'react'

const arr = ["dal", "sabji"];

// Adding more items to the array
arr.push("rice", "chapati", "curry", "paneer", "salad", "pulao", "roti", "bhindi", "raita", "paratha", "soup", "sambar", "idli", "dosa", "biryani", "kheer", "lassi", "tandoori", "naan", "korma");

console.log(arr.length);

var cond1 = arr.length >= 20;


function Test() {
    return (
        <>
            {
                cond1 && 1 ?
                    arr.map((items, key) => {
                        return (
                            <>
                                <h1 key={key}>{key + 1}:{items}</h1>
                            </>
                        )
                    })
                    : null

            }
        </>
    )
}

export default Test
