<script lang='ts'>
    import { arc } from 'd3-shape';
    
  	export let title = '';
	export let dataPoints: {color:string, name: string, qte: number}[] = [];
	export let target: number = 1;


	let width = 400;
	let height = 400;

	const fn = arc();
	let angle = Math.PI * 2;
	$: total = dataPoints.reduce((total, s) => Number(total) + Number(s.qte), 0);
	let arcs;
	$: {
		let acc = 0;
		arcs = dataPoints.map(segment => {
			const options = {
				innerRadius: 0,
				outerRadius: (height/2) - (height * 7 / 100),
				startAngle: acc,
				endAngle: (acc += (angle * segment.qte / total))
			};
			return {
				color: segment.color,
				label: segment.name,
                value: segment.qte,
				d: fn(options),
				centroid: fn.centroid(options)
			};
		});
	}
    setTimeout(() => {
        console.log(total);
        console.log(dataPoints);
        console.log(arcs);
    }, 1000);
    console.log(total);
    console.log(dataPoints);
    console.log(arcs);
</script>

<section class="target-{target}">
    <div class="table_view">
        <h2>{title}</h2>
        {#each dataPoints as point}
        <div class="row">
            <div class="color" style="background-color: {point.color}"></div>
            <div class="name">{point.name}</div>
            <div class="qte">{point.qte}</div>
        </div>
        {/each}
    </div>
    <div class="chart" bind:clientWidth={width} bind:clientHeight={height}>
        <svg>
            <g >
                {#each arcs as arc, i}
                <path d="{arc.d}" fill={arc.color} />
                <!-- <text class='outline' x={arc.centroid[0]} y={arc.centroid[1]}>{arc.label}</text>
			    <text x={arc.centroid[0]} y={arc.centroid[1]}>{arc.label}</text>
                <text class='outline' x={arc.centroid[0]} y={arc.centroid[1] + 20}>{arc.value}</text> -->
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
        /* flex-direction: column; */
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
    g{
        transform: translate(50%, 50%);
    }
    path {
        stroke: var(--secondary-color);
        stroke-width: 2px;
    }
    .table_view{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        height: 100%;
    }
    .row{
        display: grid;
        grid-template-columns: 1fr 4fr 1fr;
        font-size: .9rem;
        gap: 5px;
        width: 100%;
        height: 100%;
        margin: 0 auto;
        border-bottom: solid 1px var(--secondary-color);
    }
    .row:last-child{
        border-bottom: none;
    }
    .color{
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: var(--secondary-color);
    }
	
</style>
