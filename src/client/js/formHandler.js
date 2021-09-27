function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name')
    //checkForName(formText)
    const api = process.env.API
    const key = process.env.KEY
    const url = api + "key=" +key + '&txt=' + formText.value + '&lang=en';
    if(formText.value === '')
    {
        alert("Empty input is invalid.")
    }
    else
    {
        fetch(url)
        .then(res => res.json())
        .then((res) => {
            if(Client.checker(res))
            {
                Client.UpdateUI(res)
            }
        })
        .catch(e => alert("lost connection"))
    }
    formText.value = '';
    
}

export { handleSubmit }
