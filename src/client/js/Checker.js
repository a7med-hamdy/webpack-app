function checker(data) {
    if(data.status.code === '200')//when the user try to enter empty input
    {
        alert("Empty input is invalid.")
        return false;
    }
    else if(data.status.code === '100')
    {
        alert("Unexpected error. Please, try again.")//dealing with other errors
        return false;
    }
    else
    {
        return true;
    }
}

export { checker }
