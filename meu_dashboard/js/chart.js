
const meses = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
const rendimento = [60, 100, 80, 90, 70,50, 100, 80,40,80,90,100];

const config = {
  type: 'line',
  data: {
    labels: meses,
    datasets: [{
      label: 'Rendimento Potencial',
      data: rendimento,
      borderColor: 'green',
      backgroundColor: 'rgba(0, 128, 0)',
    }]
  },
  options: {
    animation: {
      duration: 3000,
      easing: 'easeInOutElastic',
      from: (ctx) => {
        if (ctx.type === 'data') {
          if (ctx.mode === 'default' && !ctx.dropped) {
            ctx.dropped = true;
            return 0;
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: ''
        }
      },
      x: {
        title: {
          display: true,
          text: 'Mês'
        }
      }
    }
  }
};

const ctx = document.getElementById('grafico').getContext('2d');
new Chart(ctx, config);