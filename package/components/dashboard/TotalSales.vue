<script setup lang="ts">
import { ref, computed } from 'vue';

/*Chart*/
const chartOptions = computed(() => {
    return {
        series: [50, 40, 30, 10],
        labels: ['Mobile', 'Tablet', 'Other', 'Desktop'],
        chart: {
            type: 'donut',
            height: 250,
            fontFamily: 'inherit'
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            width: 0
        },
        plotOptions: {
            pie: {
                expandOnClick: true,
                donut: {
                    size: '83',
                    labels: {
                        show: true,
                        name: {
                            show: true,
                            offsetY: 7
                        },
                        value: {
                            show: false
                        },
                        total: {
                            show: true,
                            color: '#a1aab2',
                            fontSize: '13px',
                            label: 'Our Visitor'
                        }
                    }
                }
            }
        },
        colors: ['rgba(var(--v-theme-primary))', 'rgba(var(--v-theme-secondary))', '#ecf0f2', 'rgba(var(--v-theme-purple))'],
        tooltip: {
            show: true,
            fillSeriesColor: false
        },
        legend: {
            show: false
        },
        responsive: [
            {
                breakpoint: 1025,
                options: {
                    chart: {
                        height: 270
                    }
                }
            },
            {
                breakpoint: 426,
                options: {
                    chart: {
                        height: 250
                    }
                }
            }
        ]
    };
});

const select = ref('March');
const items = ref(['March', 'April', 'May', 'June']);
</script>

<template>
    <VCard elevation="10">
        <v-card-text>
            <div>
                <h3 class="card-title mb-1">Our Visitors</h3>
                <h5 class="card-subtitle">Different Devices Used to Visit</h5>
            </div>
            <div class="mt-5 pt-5 position-relative">
                <apexchart type="donut" height="265" :options="chartOptions" :series="chartOptions.series"></apexchart>
            </div>
        </v-card-text>
        <div class="d-flex align-center justify-center border-t py-6 ga-1">
            <div class="d-flex align-center px-2 text-primary">
                <span class="pa-1 bg-primary rounded-circle me-2"></span>
                <span class="text-subtitle-1">Mobile</span>
            </div>
            <div class="d-flex align-center px-2 text-purple">
              <span class="pa-1 bg-purple rounded-circle me-2"></span>
                <span class="text-subtitle-1 ">Desktop</span>
            </div>
            <div class="d-flex align-center px-2 text-secondary">
              <span class="pa-1 bg-secondary rounded-circle me-2"></span>
                <span class="text-subtitle-1 ">Tablet </span>
            </div>
        </div>
    </VCard>
</template>

<style scoped>
.total-sales-icon {
    position: absolute;
    left: 46%;
    top: 45%;
}

</style>
