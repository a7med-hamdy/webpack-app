function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    //checkForName(formText)
    const api = process.env.API
    const key = process.env.KEY
    const url = api +key + '&txt=' + formText + '&lang=en';
    fetch(url)
    .then(res => res.json())
    .then((res) => {
        if(Client.checker(res))
        {
            Client.UpdateUI(res)
        }
    })
}

export { handleSubmit }
