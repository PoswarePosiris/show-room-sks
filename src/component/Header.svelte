<script lang='ts'>
    import Logo from '../assets/logo_sks.png';
</script>

<header>
    <img src="{Logo}" alt="logo">
    <div id="title">
        <h1>Posware     <span id="samsung">SAMSUNG</span>    Kiosk</h1>
    </div>
    <div id="sub">
        <p>Dashboard</p>
        <p>Show Room</p>
    </div>
</header>

<style>
    header {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 2rem;
        background-color: var(--secondary-color);
        /* For be place in the grid  */
        grid-column: 1/9;
        grid-row: 1/3;
    }

    header img {
        max-height: 100%;
        object-fit: contain;
    }

    header #title {
        flex-grow: 2;
        text-align: center;
        color: #fff;
        font-size: var(--fs-title);
    }

    header #title h1 {
        font-size: 3rem;
        margin: 0;
        display: inline;
        word-spacing: 5rem;
        font-weight: 600;
    }

    #samsung {
        position: relative;
        z-index: 1;
        font-weight: 700;
    }
    #samsung::after{
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        z-index: -1;
        transform: translate(-50%, -50%) rotate(-5deg);
        width: 150%;
        height: 120%;
        background-color: var(--secondary-color);
        border-radius: 50%;
        box-shadow: 0px 0px 20px 20px #fff;
    }
    

    #sub {
        display: flex;
        flex-direction: column;
        font-size: 2rem;
        margin: 0;
        color: var(--primary-color);
        font-weight: 600;
    }
</style>