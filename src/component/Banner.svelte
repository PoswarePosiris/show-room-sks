<script lang='ts'>
  import { theme } from '../store/theme';

   
</script>

<div id="banner">
   {#if $theme == null}
    <p>l</p>
   {:else}
        <img class="images" src="{$theme.CompanyLogo}" alt="logo">
        <p class="name">{$theme.CompanyName}</p>
        <div class="colors" style="background-color: {$theme.ColorPrimary};"><p class="colors_text">
            {$theme.ColorPrimary}
        </p></div>
        <div class="colors" style="background-color: {$theme.ColorSecondary};"><p class="colors_text">
            {$theme.ColorSecondary}
        </p></div>
        <div class="colors" style="background-color: {$theme.ColorTertiary};"><p class="colors_text">
            {$theme.ColorTertiary}
        </p></div>
        <img src="{$theme.BackgroundIntro}" alt="intro" class="images">
        <img src="{$theme.BackgroundImage}" alt="main" class="images">
        <img src="{$theme.ImageTpe}" alt="tpe" class="images">
        <img src="{$theme.CompanyLogoPrinter}" alt="pinter" class="images">
    {/if}
</div>

<style>
 #banner{
    grid-row: 3/5;
    grid-column: 1/9;
    padding: 1rem;
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    align-items: center;
    justify-items: center;
 }
 .images{
    max-height: 100%;
    width: min(100%, 5rem);
    object-fit: contain;
}
.name{
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--secondary-color);
    margin: 0;
}
.colors{
    width: 5rem;
    height: 5rem;
    border: solid 1px #000;
    position: relative;
}
.colors_text{
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    font-size: 1rem;
    background-color: #fff;
    color: #000;
    margin: 0;
}

</style>