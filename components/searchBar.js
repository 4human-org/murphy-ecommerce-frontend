const searchInput = document.querySelector(".search-input");
const searchButton = document.querySelector(".search-button");
const suggestionsContainer = document.querySelector(".suggestions");

const dummyData = [
  "Apple",
  "Banana",
  "Orange",
  "Mango",
  "Pineapple",
  "Strawberry",
  "Watermelon",
];

searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value.toLowerCase();
  const filteredSuggestions = dummyData.filter((item) =>
    item.toLowerCase().startsWith(searchTerm)
  );

  suggestionsContainer.innerHTML = ""; // Clear previous suggestions

  if (filteredSuggestions.length > 0) {
    filteredSuggestions.forEach((suggestion) => {
      const suggestionItem = document.createElement("li");
      suggestionItem.textContent = suggestion;
      suggestionItem.addEventListener("click", () => {
        searchInput.value = suggestion;
        suggestionsContainer.innerHTML = ""; // Clear suggestions on selection
      });
      suggestionsContainer.appendChild(suggestionItem);
    });
  }
});

// We can Replace this with the actual API call logic when ready
function fetchDataFromAPI(searchTerm) {
  // Simulate an API call with a timeout
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(dummyData.filter((item) => item.toLowerCase().includes(searchTerm)));
    }, 500);
  });
}

searchButton.addEventListener("click", async () => {
  const searchTerm = searchInput.value;
  const suggestions = await fetchDataFromAPI(searchTerm);

  // Handle the search results here (e.g., display them on a separate page)
  console.log("Search results:", suggestions);
});