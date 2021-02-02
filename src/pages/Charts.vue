<template>
    <div class="charts">
        <h1>Charts</h1>
        <div id="myPieChart" class="chart"></div>
    </div>
</template>

<script lang="ts">
import { debounce } from '@/utils/debounce'
import { loadGCharts } from '@/utils/gcharts'
import { LoggerFactory } from '@mmit/logging'
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({ name: 'Charts', components: {} })
export default class Charts extends Vue {
    private readonly logger = LoggerFactory.getLogger('mmit.vue-ts-starter.Charts');

    // @Prop({ default: false })
    // private myProp: boolean = false;

    // - LiveCycle-Hooks -----------------------------------------------------------------------

    // noinspection JSUnusedLocalSymbols
    private async mounted(): Promise<void> {

        // noinspection ES6MissingAwait
        const obj = await loadGCharts('current', {
            packages: ['corechart', 'table']
        })

        // Define the chart to be drawn.
        const data = new google.visualization.DataTable();
        data.addColumn('string', 'Element');
        data.addColumn('number', 'Percentage');
        data.addRows([
            ['Nitrogen', 0.78],
            ['Oxygen', 0.21],
            ['Other', 0.01]
        ]);

        // Instantiate and draw the chart.
        const div = document.getElementById('myPieChart')!
        const chart = new google.visualization.PieChart(div);

        const drawChart = (): void => {
            chart.draw(data, {
                // @ts-ignore
                // width: div.parentElement.clientWidth
                backgroundColor: { fill: 'transparent' }
            });
        }
        drawChart()

        window.setInterval(() => {
            data.setCell(0, 1, Math.random())
            drawChart()
        }, 1000)

        window.addEventListener('resize', debounce(drawChart))
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
// @import "./charts";
.charts {
    margin-left: auto;
    margin-right: auto;
    text-align: center;

    display: grid;
    grid-gap: 10px;

    grid-template-columns:  calc(100vw - 20px);
    grid-template-rows: auto; // 1fr 2fr;

    grid-template-areas:
        "headline"
        "chart"
    ;

    .chart {
        grid-area: chart;
        
        // max-width: 100%;
        // border: 1px solid red;
        min-height: 450px;
    }
}
</style>
