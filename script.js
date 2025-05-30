let intervalId;

function calculateAge() {
  const dateInput = document.getElementById("date").value;

  if (!dateInput) {
    alert("Please enter your birthdate!");
    return;
  }

  const birthdate = new Date(`${dateInput}T00:00:00`);
  clearInterval(intervalId); 

  intervalId = setInterval(() => {
    const now = new Date();
    let ageInMilliseconds = now - birthdate;

    if (ageInMilliseconds < 0) {
      clearInterval(intervalId);
      alert("Invalid date! You entered a future date.");
      return;
    }

    const years = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24 * 365));
    const months = Math.floor((ageInMilliseconds % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
    const days = Math.floor((ageInMilliseconds % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((ageInMilliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((ageInMilliseconds % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((ageInMilliseconds % (1000 * 60)) / 1000);
    const milliseconds = ageInMilliseconds % 1000;

    const ageOutput = document.getElementById("ageOutput");
    ageOutput.innerHTML = `
      <p>Your age is:</p>
      <p>${years} years, ${months} months, ${days} days,</p>
      <p>${hours} hours, ${minutes} minutes, ${seconds} seconds,</p>
      <p>${milliseconds} milliseconds</p>
    `;
 }
 , 1);} // Update every second 
 
 document.getElementById("date").addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    calculateAge(); // Call the calculateAge function
  }
});

