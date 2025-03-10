document.getElementById('tempForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    // Get input values
    const temperature = parseFloat(document.getElementById('temperature').value);
    const unit = document.querySelector('input[name="unit"]:checked').value;
  
    let convertedTemp;
  
    // Perform conversion
    if (unit === 'celsius') {
      convertedTemp = (temperature * 9 / 5 + 32).toFixed(2) + ' °F';
    } else {
      
      convertedTemp = ((temperature - 32) * 5 / 9).toFixed(2) + ' °C';
    }
  
    document.getElementById('convertedTemp').textContent = convertedTemp;
  });