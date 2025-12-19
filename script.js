function generatePlan() {
  const area = document.getElementById("area").value;
  const beds = document.getElementById("bedrooms").value;

  if (!area || !beds) {
    alert("Enter all details");
    return;
  }

  const plan = document.getElementById("floor-plan");
  plan.innerHTML = "";

  plan.innerHTML = `
    <div class="room bed1">Bedroom 🛏️</div>
    <div class="room kitchen">Kitchen / Dining 🍽️</div>
    <div class="room hall">Hall / Living Room 🛋️</div>
    <div class="room bed2">Bedroom 🛏️</div>
    <div class="room bed3">Bedroom 🛏️</div>
  `;
}
