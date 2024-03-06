const ctx = document.getElementById('barChart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Looking Away', 'Drowzy', 'Confused', 'Bored', 'Frustated'],
    datasets: [{
      label: 'No of students',
      data: [12, 19, 3, 5, 2],
      backgroundColor: '#299B63',
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});