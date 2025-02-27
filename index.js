// Add your code here
function submitData(inputName, inputEmail) {
    const destinationURL = "http://localhost:3000/users";
    const configurationObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            name: inputName,
            email: inputEmail,
        })
    }
    return fetch(destinationURL, configurationObject)
    .then(response => response.json())
    .then(json => {
        const result = `Name: ${json.name}<br>Email: ${json.email}<br>ID: ${json.id}`;
        document.body.innerHTML = `<div>${result}</div>`;
        console.log(json);
        return json;
    })
    .catch(error => {
        document.body.innerHTML = `${error.message}`;
    });   
}
submitData("myname", "myemail");

