<template>
  <div class="prose prose-sm md:prose-base">
    <h1>Chart Penjualan</h1>
    <div class="bg-slate-50">
      <Line :data="chartData" />
    </div>
  </div>
</template>

<script>
import { Line } from 'vue-chartjs'
import {
  Chart as ChartJS, CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend)

export default {
  name: 'LineChart',
  components: { Line },
  data: () => ({
    chartData: {
      labels: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni'],
      datasets: [
        {
          label: 'Penjualan',
          data: [251437000, 469456000, 754631000, 444912000, 159987000, 387547000],
          borderColor: '#3e95cd',
        }
      ]
    },
    chartOptions: {
      responsive: true
    }
  }),
}
</script>