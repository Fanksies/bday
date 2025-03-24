// Get the 'data' parameter from the URL
const params = new URLSearchParams(window.location.search);
const encodedData = params.get("data");

if (encodedData) {
    // Decode Base64 back to normal text
    const decodedName = atob(encodedData);
    
    // Update the text
    document.getElementById("person").innerText = `${decodedName}!`;
}