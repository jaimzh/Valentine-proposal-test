function showMessage(response) {
    if (response === "No") {
      const noButton = document.getElementById("no-button");
      const container = document.querySelector(".container");
      
      const maxWidth = window.innerWidth - noButton.offsetWidth;
      const maxHeight = window.innerHeight - noButton.offsetHeight;
  
      // Set button position to absolute
      noButton.style.position = "absolute";
  
      // Change image source to "gun.gif"
      document.getElementsByClassName("image")[0].src = "images/gun.gif";
  
      // Generate random coordinates within the visible container
      const randomX = Math.max(0, Math.floor(Math.random() * maxWidth));
      const randomY = Math.max(0, Math.floor(Math.random() * maxHeight));
  
      // Apply new coordinates to the button
      noButton.style.left = randomX + "px";
      noButton.style.top = randomY + "px";
  
      // Update text content and hide name message
      document.getElementById("question").textContent =
        "The no button is just for visuals, do you think you have a choice?....nah you don't. Now imma ask again, will you be my valentine? ";
        document.getElementById("question").style.fontSize="30px";
        document.getElementById("question").style.padding="10px";
      document.getElementById("name").style.display = "none";
  
      // Optional: You can also add a timeout to reset the position after a few seconds
    }
  
    if (response === "Yes") {
      // Remove name message and no button
      
      document.getElementById("name").remove();
      document.getElementById("no-button").remove();
  
      // Update text content, show message, and change image source to "dance.gif"
      const yesMessage = document.getElementById("question");
      yesMessage.textContent = "AYY LET'S GOOO!!!! see you on the 14th b😘😘...or basically whenever";
      yesMessage.style.display = "block";
      yesMessage.style.fontStyle = "normal";
      document.getElementsByClassName("image")[0].src = "images/dance.gif";
  
      // Remove yes button
      document.getElementById("yesButton").remove();

      const additionalText = document.createElement("p");
        additionalText.textContent = "Chaii I don't get paid enough for this lol";
        additionalText.style.fontSize = "20px"; // Example styling
        additionalText.style.padding = "10px"; // Example styling
        document.querySelector(".Mainprompt").appendChild(additionalText);
    }
  }