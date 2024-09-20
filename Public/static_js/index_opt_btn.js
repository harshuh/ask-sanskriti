(function () {
  // DOM Elements
  const botMsgBtns = document.querySelectorAll(".bot-msg-btn p");
  const inputBtn = document.getElementById("search");
  const suggestionBox = document.getElementById("suggestion-box");
  const listElement = document.getElementById("list");
  const overlay = document.getElementById("overlay");

  // Actions for different button clicks
  const actions = [bookTicket, bookedHistory, raiseTicket];

  // Track if buttons have been clicked
  const clickedStatus = Array.from({ length: botMsgBtns.length }, () => false);

  function init() {
    botMsgBtns.forEach((btn, index) => {
      btn.addEventListener("click", (event) => handleButtonClick(event, index));
    });

    document
      .getElementById("suggestion-box-close-icon")
      .addEventListener("click", hideSuggestionBox);

    inputBtn.addEventListener("input", handleInputChange);
  }

  function handleButtonClick(event, index) {
    if (event.target.tagName.toLowerCase() === "p" && !clickedStatus[index]) {
      for (let i = 0; i < botMsgBtns.length; i++) {
        clickedStatus[i] = true;
      }
      appendUserMessage(botMsgBtns[index].innerText);
      actions[index]();
      scrollToBottom();
    }
  }

  function appendUserMessage(message) {
    const newUserMessage = createListItem(
      "incoming chat",
      "user-msg",
      "person",
      message
    );
    listElement.appendChild(newUserMessage);
  }

  function createListItem(className, id, icon, textContent) {
    const newListItem = document.createElement("li");
    newListItem.className = className;
    newListItem.id = id;
    if (icon === "smart_toy") {
      newListItem.innerHTML = `
      <span class="material-symbols-outlined">${icon}</span>
      <p>${textContent}</p>
    `;
    } else {
      newListItem.innerHTML = `
      <p>${textContent}</p>
      <span class="material-symbols-outlined">${icon}</span>
    `;
    }
    return newListItem;
  }

  function showSuggestionBox(placeholderText, para) {
    document.getElementById("suggestion-box-search").placeholder =
      placeholderText;
    document.querySelector("#suggestion-box-upper-text p").innerHTML = para;
    suggestionBox.classList.add("suggestion-box-visible");
    overlay.style.display = "block";
  }

  function hideSuggestionBox() {
    suggestionBox.classList.remove("suggestion-box-visible");
    setTimeout(() => {
      overlay.style.display = "none";
    }, 400);
    document.getElementById("suggestion-box-search").value = "";
  }

  function handleInputChange() {
    // Implement this if needed
  }

  async function bookTicket() {
    let museumToVisit = null;
    let numberOfPeople = null;
    let phoneNo = null;

    appendBotMessage("To which museum would you like to visit?");
    inputBtn.placeholder = "Select a museum";
    inputBtn.readOnly = true;

    const handleInputClick = () => {
      showSuggestionBox("Search Museums or city", "Select a museum");
    };

    inputBtn.addEventListener("click", handleInputClick);

    document.addEventListener("click", async (event) => {
      if (event.target.classList.contains("autocomplete-suggestions-p")) {
        museumToVisit = event.target.textContent; // Get the suggestion text
        hideSuggestionBox();
        appendUserMessage(museumToVisit);
        inputBtn.readOnly = false;
        inputBtn.removeEventListener("click", handleInputClick);

        numberOfPeople = await getNumberOfPeople(); // Wait for number of people
        phoneNo = await getPhoneNumber(); // Wait for phone number

        appendBotMessage(
          `Number of People: ${numberOfPeople}<br>Phone Number: ${phoneNo} <br>Museum: ${museumToVisit}`
        );
        qr();

        scrollToBottom();
      }
    });
  }

  function getPhoneNumber() {
    return new Promise((resolve) => {
      appendBotMessage("Please enter your phone number:");
      inputBtn.placeholder = "Enter phone number";
      inputBtn.readOnly = false;
      scrollToBottom();

      const handleSendClick = () => {
        const value = inputBtn.value.trim();
        const phoneRegex = /^[+]?[0-9]{10,15}$/; //

        if (value !== "" && phoneRegex.test(value)) {
          appendUserMessage(value);
          scrollToBottom();
          inputBtn.placeholder = "Enter message here...";
          inputBtn.value = "";
          document
            .getElementById("send-btn")
            .removeEventListener("click", handleSendClick);
          resolve(value); // Resolve the promise with the input value
        } else {
          appendBotMessage("Please enter a valid phone number.");
          scrollToBottom();
        }
      };

      document
        .getElementById("send-btn")
        .addEventListener("click", handleSendClick);
    });
  }

  function getNumberOfPeople() {
    return new Promise((resolve) => {
      appendBotMessage("Please enter the number of people ");
      inputBtn.placeholder = "Enter number of people";
      inputBtn.readOnly = false;
      scrollToBottom();

      const handleSendClick = () => {
        const value = inputBtn.value.trim();
        if (value !== "" && !isNaN(value) && Number(value) > 0) {
          appendUserMessage(`You have entered ${value} peoples`);
          scrollToBottom();
          inputBtn.placeholder = "Enter message here...";
          inputBtn.value = "";
          document
            .getElementById("send-btn")
            .removeEventListener("click", handleSendClick);
          resolve(value); // Resolve the promise with the input value
        } else {
          appendBotMessage("Please enter a valid number of people.");
          scrollToBottom();
        }
      };

      document
        .getElementById("send-btn")
        .addEventListener("click", handleSendClick);
    });
  }

  function appendBotMessage(message) {
    const newBotMessage = createListItem(
      "outgoing chat",
      "bot-msg",
      "smart_toy",
      message
    );
    listElement.appendChild(newBotMessage);
  }

  function bookedHistory() {
    appendBotMessage("Feature will be out soon...");
  }

  function raiseTicket() {
    appendBotMessage("Feature will be out soon...");
    // Implement the functionality to raise a ticket
  }

  function qr() {
    appendBotMessage(
      "As this is a prototype of our project, we plan to integrate a payment gateway in the future. Once the payment is successfully processed, the ticket will be booked, and a QR code will be generated for access."
    );
    // Create and append confirmation message
    let newListItem = document.createElement("li");
    newListItem.id = "cnfbtnicon";
    newListItem.innerHTML = `
    <p>Ticket Booked Successfully <i class="material-symbols-outlined">check_circle</i></p>
    `;
    listElement.appendChild(newListItem);

    // Create and append QR code image
    newListItem = document.createElement("li");
    newListItem.id = "qrImageContainer"; // Changed ID to avoid duplication
    newListItem.innerHTML = `
    <img src="/img/qr.png" alt="Ticket" />`;
    listElement.appendChild(newListItem);
    scrollToBottom();
  }
  function scrollToBottom() {
    window.scrollTo(0, document.body.scrollHeight);
  }

  init();
})();
