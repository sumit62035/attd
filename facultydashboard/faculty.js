// Dynamic Greeting
const greetText = document.getElementById("greetText");
const hour = new Date().getHours();
if(hour < 12) greetText.textContent = "Good Morning,";
else if(hour < 18) greetText.textContent = "Good Afternoon,";
else greetText.textContent = "Good Evening,";

// Notifications
document.getElementById("bell").addEventListener("click", ()=>{
  alert("📢 New notification: Attendance report ready!");
});

// Live Count (QR Simulation)
let count = 0;
document.getElementById("generateQR").addEventListener("click", ()=>{
  alert("✅ QR generated (valid 3 mins)");
  count = 0;
  document.getElementById("liveNumber").innerText = count;
  const interval = setInterval(()=>{
    if(count >= 20){ clearInterval(interval); return; }
    count++;
    document.getElementById("liveNumber").innerText = count;
  }, 800);
});

// Emergency Attendance
document.getElementById("emergency").addEventListener("click", ()=>{
  alert("🚨 Emergency Attendance: Faculty can manually mark attendance (demo)");
});

// Export Data
document.getElementById("exportData")?.addEventListener("click", ()=>{
  alert("⬇ Attendance exported as CSV/PDF (demo)");
});

// Student Search
const searchBox = document.getElementById("searchBox");
const studentList = document.querySelectorAll("#studentList li");
searchBox.addEventListener("input", ()=>{
  const value = searchBox.value.toLowerCase();
  studentList.forEach(li=>{
    li.style.display = li.textContent.toLowerCase().includes(value) ? "" : "none";
  });
});
