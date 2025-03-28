var submitButton = document.getElementById("submit-button");

submitButton.addEventListener("click", sendEmail);

function sendEmail() {
    var subject = document.getElementById("subject").value;
    var projectSize = document.getElementById("project-size").value;
    var projectSizeDetails = "Project Size:\n" + projectSize;
    var message = document.getElementById("message").value + "\n\n" + projectSizeDetails;

    var link = "mailto:kadenduckwitz6@gmail.com?"
    + "subject=" + encodeURIComponent(subject) 
    + "&body=" + encodeURIComponent(message);

    window.open(link);
}