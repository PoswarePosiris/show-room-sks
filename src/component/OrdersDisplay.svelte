<script lang='ts'>
  import { orders } from "../store/orders";
  import { getFullQte } from "../utils/getQteOrders";
  import { getFullTotal } from "../utils/getTotalOrders";

    $: last = $orders ? ($orders.length > 6 ? $orders.slice(-6, $orders.length) : $orders) : null;
</script>

<section>
    <h2>Dernières commandes</h2>
    {#if last && last.length > 0}
        <div class="row">
            <p class="ticket">Nº Ticket</p>
            <p class="name">Kiosk</p>
            <p class="date">Date</p>
            <p class="qte">Quantité</p>
            <p class="total">Total</p>
        </div>
        {#each last as order}
        <div class="row">
            <p class="ticket">{order.ticketNumber}</p>
            <p class="name">{order.kioskName}</p>
            <p class="date">{order.date}</p>
            <p class="qte">{getFullQte(order)}</p>
            <p class="total">{getFullTotal(order)}€</p>
        </div>
        {/each}
    {:else}
        <p>Pas de commandes</p>
    {/if}
</section>

<style>
    section{
        grid-column: 1/4;
        grid-row: 5/11;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0.5rem;
        margin: 0.5rem;
        border: solid 1px var(--secondary-color);
        border-radius: 20px;
    }
    h2{
        font-size: 1.5rem;
        font-weight: 600;
        color: var(--secondary-color);
        margin: 0;
    }
    .row{
        display: grid;
        grid-template-columns: repeat(8, 1fr);
        align-items: center;
        justify-items: center;
        width: 100%;
        padding: 0.5rem;
        border-bottom: solid 1px var(--secondary-color);
        justify-items: center;
    }
    .ticket{
        grid-column: 1/2;
    }
    .name{
        grid-column: 2/4;
    }
    .date{
        grid-column: 4/6;
        text-align: center;
    }
    .qte{
        grid-column: 6/7;
    }
    .total{
        grid-column: 7/9;
    }


</style>