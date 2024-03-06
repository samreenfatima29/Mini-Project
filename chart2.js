const ch = document.getElementById('pieChart');
const xValues = ["Engaged", "Not-Engaged"];
const yValues = [55, 20];
const barColors = [
  "#299B63",
  "#00aba9",
  "#b91d47",
  "#2b5797",
  "#e8c3b9",
  "#1e7145"
];

new Chart(ch, {
  type: "pie",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    title: {
      display: true,
      text: "Student Attentiveness",
      fontSize: 18
    },
    legend: {
      display: true,
      position: 'absolute',
      labels: {
        fontSize: 14
      }
    }
  }
});