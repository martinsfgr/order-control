var pedidosBalcao = document.getElementById('pedidosBalcao').innerHTML;
var pedidosDelivery = document.getElementById('pedidosDelivery').innerHTML;
var numeroPedidos = document.getElementById('chartOrders').getContext('2d');

var graficoPedidos = new Chart(numeroPedidos, {
    type: 'doughnut',
    data: {
        labels: ['Balcão', 'Delivery'],
        datasets: [{
            label: 'Número de Pedidos',
            data: [pedidosBalcao, pedidosDelivery],
            backgroundColor: ['#fcb150', '#11a8ab']
        }]
    },
    options: {
        title: {
            display: true,
            fontSize: 22,
            fontColor: '#fff',
            text: 'Número de Pedidos'
        },
        legend: {
            labels: {
                fontColor: '#fff'
            }
        },
    }
})

var totalBalcao = document.getElementById('totalBalcao').innerHTML;
var totalDelivery = document.getElementById('totalDelivery').innerHTML;
var comparativoPedidos = document.getElementById('chartComparative').getContext('2d');

var graficoComparativo = new Chart(comparativoPedidos, {
    type: 'doughnut',
    data: {
        labels: ['Balcão', 'Delivery'],
        datasets: [{
            label: 'Gráfico Comparativo',
            data: [totalBalcao, totalDelivery],
            backgroundColor: ['#fcb150', '#11a8ab']
        }]
    },
    options: {
        title: {
            display: true,
            fontSize: 22,
            fontColor: '#fff',
            text: 'Comparativo de Pedidos'
        },
        legend: {
            labels: {
                fontColor: '#fff'
            }
        },
    }
})

var totalDinheiro = document.getElementById('totalDinheiro').innerHTML;
console.log(totalDinheiro)
var totalDebito = document.getElementById('totalDebito').innerHTML;
console.log(totalDebito)
var totalCredito = document.getElementById('totalCredito').innerHTML;
console.log(totalCredito)
var fechamentoTotal = document.getElementById('chartIncome').getContext('2d');

var graficoFechamento = new Chart(fechamentoTotal, {
    type: 'doughnut',
    data: {
        labels: ['Dinheiro', 'Débito', 'Crédito'],
        datasets: [{
            label: 'Fechamento Total',
            data: [totalDinheiro, totalDebito, totalCredito],
            backgroundColor: ['#09b858', '#11a8ab', '#fcb150']
        }]
    },
    options: {
        title: {
            display: true,
            fontSize: 22,
            fontColor: '#fff',
            text: 'Comparativo de Pedidos'
        },
        legend: {
            labels: {
                fontColor: '#fff'
            }
        },
    }
})
