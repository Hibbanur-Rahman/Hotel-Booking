/*==== result-chart =====*/
var ctx = document.getElementById('bar-chart');
Chart.defaults.global.defaultFontFamily = 'Arial';
Chart.defaults.global.defaultFontSize = 14;
Chart.defaults.global.defaultFontStyle = '500';
Chart.defaults.global.defaultFontColor = '#808996';

var chart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
      label: "One",
      data: [40, 35, 54, 40, 45, 60, 70, 65, 70, 90],
      backgroundColor: '#287dfa',
      hoverBackgroundColor: '#2273e5',
      pointBackgroundColor: '#fff',
      borderWidth: 0,
      pointRadius: 4
    }]
  },
  options: {
    tooltips: {
      backgroundColor: '#1c2540'
    },
    legend: {
      display: false
    },
    scales: {
      xAxes: [{
        barPercentage: 0.4,
        barThickness: 15,
        display: true,
        gridLines: {
          offsetGridLines: false,
          display: false
        }
      }],
      yAxes: [{
        display: true,
        gridLines: {
          color: '#eee',
        },
        ticks: {
          fontSize: 14,
        }
      }]
    },
    elements: {
      bar: {
        borderRadius: 20 // Adjust the value based on your preference
      }
    }
  }
});
