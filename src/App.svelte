<script lang="ts">
  import { onDestroy, onMount } from "svelte";
  import {  orderFetch } from "./api/orderFetch";
  import Banner from "./component/Banner.svelte";
  import GraphBar from "./component/GraphBar.svelte";
  import GraphPie from "./component/GraphPie.svelte";
  import Header from "./component/Header.svelte";
  import Important from "./component/Important.svelte";
  import OrdersDisplay from "./component/OrdersDisplay.svelte";
  import DataApi from "./dataApi";
  import { orders } from "./store/orders";
  import { theme } from "./store/theme";
  import { getFullTotal } from "./utils/getTotalOrders";
  import { randomColor } from "./utils/randomColor";

  const setStore = async () => {
    // const t = await DataApi.getMacTheme();
    // theme.set(t);
    const ordersList = await orderFetch();
    orders.set(ordersList);
    
  };
  const chartOrder = () =>{
    dataOrders = $orders.reduce((acc, order) => {
      const hour = new Date(order.date).getHours();
      //TODO conditons for check the date
      acc[hour].y++;
      return acc;
    }, hours.map((hour) => {
    return { x: hour, y: 0 };
    }));
    commands = (dataOrders.map((order) => {
      return order.y
    })).reduce((acc, order) => {
      if(acc.includes(order)){
        return acc;
      }else{
        acc.push(order);
        return acc;
      }
    }, []);
  }
  
  const moy = () => {
    importantMoy = $orders.sort((a, b) => {
      return getFullTotal(a) - getFullTotal(b);
    }).reduce((acc, order) => {
      return acc + getFullTotal(order);
    }, 0) / $orders.length;
  }

  const best = () => {
    bestSell = $orders.reduce((acc, order) => {
      order.list.forEach((product) => {
        const index = acc.findIndex((item) => {
          return item.name === product.name;
        });
        if(index === -1){
          acc.push({color: randomColor(), name: product.name, qte: product.quantity});
        }else{
          acc[index].qte = Number(acc[index].qte) + Number(product.quantity);
        }
      });
      return acc;
    }, []).sort((a, b) => {
      return b.qte - a.qte;
    }).splice(0, 5);
  }

  onMount(async ()=>{
    await setStore();
    chartOrder();
    moy();
    best();
    })
    
  const interval = setInterval(async () => {
    await setStore();
    chartOrder();
    moy();
    best();
  }, 10000);

  onDestroy(() => {
    clearInterval(interval);
  });

  let hours = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
  let commands: number[] = [];
  const ordersListTitle = "Nombre de commande par heures";
  const ordersListLegend = " commandes";
  let dataOrders: { x: number, y: number }[] = [];
 
  let titleMoy = "Moyenne des commandes";
  let legendMoy = "Prix moyenne des commandes";
  let importantMoy: number = 0;

  
  let bestSell: {color:string, name: string, qte: number}[] = [];
  const title = "Meilleurs ventes";
</script>

<div id="full_screnn">
  <Header />
  <!-- <Banner /> -->
  <OrdersDisplay />
  <Important title={titleMoy} legend={legendMoy} important={importantMoy.toFixed(2) + '€'} target={1}/>
  <GraphPie title={title}  dataPoints={bestSell} target={2}/>
  <GraphBar title={ordersListTitle} legend={ordersListLegend} xTicks={hours} yTicks={commands} dataPoints={dataOrders} target={3}/>
</div>

<style>
  #full_screnn {
    display: grid;
    height: 100vh;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(8, 1fr);
  }
</style>