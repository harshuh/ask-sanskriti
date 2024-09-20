const searchInput = document.getElementById("suggestion-box-search");
const suggestionsBox = document.getElementById("suggestions");

//
const baseURL =
  window.location.hostname === "localhost"
    ? "http://localhost:2024"
    : "https://chatbot-khpf.onrender.com"; // Enter Your local machine ipv4 address to run this site on phone using that ip address

async function printer(query = "") {
  try {
    const url = query ? `${baseURL}/search?q=${query}` : `${baseURL}/search?q=`;

    const response = await fetch(url);
    const suggestions = await response.json();
    if (suggestions.length === 0) {
      suggestionsBox.innerHTML = `
        <div class="autocomplete-suggestions-no-result">
          <span class="material-symbols-outlined">error</span><p>No Matches Found</p>
        </div>`;
      return;
    }

    suggestionsBox.innerHTML = suggestions
      .map(
        (Museum) => `<p class="autocomplete-suggestions-p">${Museum.name} </p>`
      )
      .join("");

    document
      .querySelectorAll(".autocomplete-suggestions-p")
      .forEach((element) => {
        element.addEventListener("click", () => {
          searchInput.value = element.textContent;
          suggestionsBox.innerHTML = "";
        });
      });
  } catch (error) {
    console.error("Error fetching suggestions:", error);
  }
}
const searchIdbtn = document.getElementById("search");
searchIdbtn.addEventListener("click", () => {
  if (searchIdbtn.placeholder == "Select a museum") {
    printer();
  }
});
searchInput.addEventListener("input", async () => {
  const query = searchInput.value;
  if (query.length < 1) {
    printer();
  } else {
    printer(query);
  }
});
