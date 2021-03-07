function sendEmail() { 
    Email.send({ 
      Host: "smtp.gmail.com", 
      Username: "ebraheem.shakoor@gmail.com", 
      Password: "", 
      To: 'danialali101@gmail.com', 
      From: "ebraheem.shakoor@gmail.com", 
      Subject: "Sending Email using javascript", 
      Body: "Well that was easy!!", 
    }) 
      .then(function (message) { 
        alert("mail sent successfully") 
      }); 
  }
