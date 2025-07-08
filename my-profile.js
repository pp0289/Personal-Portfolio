// const document = dom.window.document;
const now = new Date();


// Greetings
const hours = now.getHours();
const min = now.getMinutes();
const sec = now.getSeconds();

if (hours >= 0 && hours < 12) {
  document.getElementById('greetings').textContent = 'Good Morning!'
}
else if (hours >= 12 && hours < 17) {
  document.getElementById('greetings').textContent = 'Good Afternoon!'
}
else {
  document.getElementById('greetings').textContent = 'Good Evening!'
}


// Days
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const dayOfWeek = days[now.getDay()];
document.getElementById("day").textContent = dayOfWeek;


// Date
const date = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`;
document.getElementById("date").textContent = date;
