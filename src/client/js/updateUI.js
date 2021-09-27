const UpdateUI = (data) =>{
    const text = document.getElementById('text');
    text.className = "";
    text.innerHTML = `
    Your words are : <br/>
    1- ${(data.subjectivity).charAt(0) + (data.subjectivity).slice(1).toLowerCase()}<br/>
    2- ${data.irony.charAt(0) + data.irony.slice(1).toLowerCase()}<br/>
    3- Confidence level : ${data.confidence}%<br/>
    4- Your feelings are in ${data.agreement.toLowerCase()}<br/>
    `;
}

export { UpdateUI }