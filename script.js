document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("attendance-form");
  const resetBtn = document.querySelector(".reset-btn");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    calculate();
  });

  resetBtn.addEventListener("click", function () {
    resetForm();
  });
});

function calculate() {
  let total = parseInt(document.getElementById("total").value);
  let attended = parseInt(document.getElementById("attended").value);
  let required = parseInt(document.getElementById("required").value);

  if (isNaN(total) || isNaN(attended) || isNaN(required) || total <= 0) {
    document.getElementById("result").innerHTML = " Please enter valid numbers!";
    return;
  }

  let current = (attended / total) * 100;
  let resultText = ` Current Attendance: <b>${current.toFixed(2)}%</b><br>`;

  if (current < required) {
    let needed = Math.ceil((required * total - 100 * attended) / (100 - required));
    resultText += ` You need to attend <b>${needed}</b> more class(es) to reach ${required}%.`;
  } else {
    let canBunk = Math.floor((100 * attended - required * total) / required);
    resultText += ` You can bunk <b>${canBunk}</b> class(es) and still stay at ${required}%.`;
  }

  document.getElementById("result").innerHTML = resultText;
}

function resetForm() {
  document.getElementById("total").value = "";
  document.getElementById("attended").value = "";
  document.getElementById("required").value = "";
  document.getElementById("result").innerHTML = "";
}
