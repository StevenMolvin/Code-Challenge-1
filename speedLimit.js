const speedTest = document.querySelector('#speedGov-btn')


speedTest.addEventListener("click", function () {
    const speedInput = document.querySelector('#speedValue');
    const speed = parseInt(speedInput.value);
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
    let demeritPoints = 0;
    if (speed <= speedLimit) {
      alert("Ok");
    }   else if (speed > speedLimit) {
      demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
      alert(`SLOW DOWN!
      Demerit Points: ${demeritPoints}`);
    }
  
      if (demeritPoints >= 12) {
        alert("License suspended!! KINDLY VISIT OUR OFFICES FOR RENEWAL.");
      }
    }
);
  
  
  