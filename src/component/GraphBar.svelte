<script lang='ts'>
    import { scaleLinear } from 'd3-scale';
    
  	export let title = '';
	export let legend = '';
	export let xTicks: number[] = [];
	export let yTicks: number[] = [];
	export let dataPoints = [];
	export let target: number = 1;

	const padding = { top: 20, right: 15, bottom: 20, left: 25 };

	let lastY = yTicks[yTicks.length - 1];
	let width = 400;
	let height = 200;

	$: xScale = scaleLinear()
		.domain([0, xTicks.length])
		.range([padding.left, width - padding.right]);

	$: yScale = scaleLinear()
		.domain([0, Math.max.apply(null, yTicks)])
		.range([height - padding.bottom, padding.top]);

	$: innerWidth = width - (padding.left + padding.right);
	$: barWidth = innerWidth / xTicks.length;
</script>

<section class="target-{target}">
    
    <h2>{title}</h2>
    
    <div class="chart" bind:clientWidth={width} bind:clientHeight={height}>
        <svg>
            <!-- y axis -->
            <g class="axis y-axis">
                {#each yTicks as tick}
				<g class="tick tick-{tick}" transform="translate(0, {yScale(tick)})">
					<line x2="100%"></line>
					<text y="-4">{tick} {tick === lastY ? legend : ''}</text>
				</g>
                {/each}
            </g>
            
            <!-- x axis -->
            <g class="axis x-axis">
                {#each dataPoints as point, i}
				<g class="tick" transform="translate({xScale(i)},{height})">
					<text x="{barWidth/2}" y="-4">{point.x}</text>
				</g>
                {/each}
            </g>
            
            <g class='bars'>
                {#each dataPoints as point, i}
				<rect
                x="{xScale(i) + 2}"
                y="{yScale(point.y)}"
                width="{barWidth - 4}"
                height="{yScale(0) - yScale(point.y)}"
				></rect>
                {/each}
            </g>
        </svg>
    </div>
</section>
    
    <style>
	.target-1{
		grid-column: 4/6;
        grid-row: 5/7;
	}
	.target-2{
		grid-column: 6/9;
        grid-row: 5/7;
	}
	.target-3{
		grid-column: 4/9;
        grid-row: 7/11;
	}
    section{ 
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0.5rem;
        margin: 0.5rem;
        border: solid 1px var(--secondary-color);
        border-radius: 20px;
    }
	h2 {
        font-size: 1.5rem;
        font-weight: 600;
        color: var(--secondary-color);
        margin: 0;
	}

	.chart {
		width: 100%;
		height: 100%;
		margin: 0 auto;

	}

	svg {
		position: relative;
		width: 100%;
		height: 100%;
	}

	.tick {
		font-size: 1em;
		font-weight: 200;
	}

	.tick line {
		stroke: var(--tertiary-color);
		stroke-dasharray: 2;
	}

	.tick text {
		stroke: var(--tertiary-color);
		text-anchor: start;
	}

	.tick.tick-0 line {
		stroke-dasharray: 0;
	}

	.x-axis .tick text {
		text-anchor: middle;
	}

	.bars rect {
		fill: var(--secondary-color);
		stroke: none;
		opacity: 0.65;
	}
</style>
