function sendEmail() {
    let name = document.forms["form1"].elements[0].value;
    let phone = document.forms["form1"].elements[1].value;
    let email = document.forms["form1"].elements[2].value;
    let topic = document.forms["form1"].elements[3].value;
    let message = document.forms["form1"].elements[4].value;
    //     Email.send({
    //         Host: "smtp.gmail.com",
    //         Username: "testLMRMail@gmail.com",
    //         Password: "12345679LMR",
    //         To: 'testLMRMail@gmail.com',
    //         From: email,
    //         Subject: topic,
    //         Body: message + "Celular:" + phone
    //     }).then(
    //         message => console.log(message)
    //     );
}