function windChill() {
    let temp = parseFloat(document.getElementById("dailytemp").textContent);
    let mph = parseFloat(document.getElementById("dailyspeed").textContent);
  
    if (temp <= 50 && mph >= 3) {
      let f = 35.74 + (0.6215 * temp) - 35.75 * Math.pow(mph, 0.16) + 0.4275 * temp * Math.pow(mph, 0.16);
      let result = f.toFixed(0);
      document.getElementById("dailychill").innerHTML = result + '&#8457';
    } else {
      document.getElementById("dailychill").textContent = "N/A";
    }
  }

  windChill();