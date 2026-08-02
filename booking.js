function submitF(e){
    e.preventDefault()

    const name=document.getElementById('clientName').value;
    const tel =document.getElementById('clientNo').value;
    const service=document.getElementById('Service').value;
    const notes=document.getElementById('textarea').value;
    const date=document.getElementById('datee').value;
    const timee=document.getElementById('timee').value;

    const number='265986416261'
    const textMessage=`*Name : * ${name}
    Date :  ${tel}
    Gender : ${service}
    Nationality :  ${notes}
    time:${timee}
    date : ${date}
    `

    const wapURL=`https://wa.me/${number}?text=${encodeURIComponent(textMessage)}`
    window.open(wapURL, '_blank');

}