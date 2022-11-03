const submitData = (name, email) => {
    return fetch("http://localhost3000/users", {
        method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
    body: JSON.stringify({
        name,
        email
    })
    });
}

// const configurationData = {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json",
//     },
//     body: JSON.stringify({
//         name: "Steve",
//         email: "steve@steve.com"
//     })
// }
