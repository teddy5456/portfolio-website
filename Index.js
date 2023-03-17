function sendForm() {
    const form = document.getElementById("myForm");
    const formData = new FormData(form);

    const email = "teddywambua043@gmail.com";
    const subject = "Form Submission";
    let body= "";
    for (const pair of formData.entries()) {
        body += pair[0] + ": " +pair[1] + "%OD%OA"; 
    }
    const mailtolink = "mailto:" + email + "?subject" + subject + "&body" + body;
}