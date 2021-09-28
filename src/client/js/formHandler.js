function handleSubmit(event) {
    event.preventDefault()
    let formText = document.getElementById('name')

    const api = process.env.API
    const key = process.env.KEY
    const url = api + "key=" +key + '&txt=' + formText.value + '&lang=en';
    if(formText.value === '')
    {
        alert("Empty input is invalid.")
    }
    else
    {
        if(Client.checker(url))
        {
            fetch(url)
            .then(res => res.json())
            .then((res) => {
               Client.UpdateUI(res)
            })
            .catch(e => alert("lost connection"))
        }
    
    }
    formText.value = '';
    
}

export { handleSubmit }
