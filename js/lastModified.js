try {
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
    };
    document.getElementById("lastModified").textContent = new Date().toLocaleDateString("en-us", options);
} catch (e){
    alert("Error with code or your browser does not support locale");
}