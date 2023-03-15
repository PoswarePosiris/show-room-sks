<script lang='ts'>
    export let target: number = 1;
    export let title: string;
    export let legend: string;
    export let important: string;
</script>

<section class="target-{target}">
    <h2>{title}</h2>
    <span>{legend}</span>
    <p>{important}</p>
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
    span{
        font-size: 1.2rem;
        font-weight: 400;
        color: var(--secondary-color);
        margin: 0;
    }
    p{
        font-size: 4rem;
        font-weight: 600;
        color: var(--secondary-color);
        margin: 0;
    }

	
</style>
