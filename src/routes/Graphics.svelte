<script lang="ts">
  import {onMount} from "svelte";
  import {getGraphics, getLastUpdate, menu} from "./utils";

  export let text = ''
  export let dateFrom: string | undefined
  export let dateTo: string | undefined
  export let info: any | undefined
  export let lastUpdate: string
  let image: string | undefined = undefined

  onMount(async () => {
    if (dateTo === undefined) return
    if (dateFrom === undefined) return
    if (info === undefined) return
    image =  await getGraphics(dateTo, dateFrom, info)
  })
</script>

<div class="vert-center">
  <h2>Результаты анализа в графиках</h2>
  <div class="columns">
    <div>
      <h3>Динамика лайков за выбранный период</h3>
      {#if image}
        <img src={'data:image/png;base64,' + image} alt="test">
      {/if}
    <img src="../img.png" alt="график">
    </div>
    <div>
      <h3>Динамика комментариев за выбранный период</h3>
    <img src="../img_1.png" alt="gr2">
  </div>
  </div>
</div>
<style>
    h2 {
        text-align: center;
        font-size: 30px;
        text-transform: uppercase;
        letter-spacing: 1px;
        margin: 4rem;
    }
    h3 {
        text-align: center;
        font-size: 26px;
        padding: 0.5rem;
    }
    .vert-center {
        margin: 2rem;
    }
    .columns {
        display: flex;
        flex-direction: row;
         justify-content: center; 
    }
    .columns > * {
        margin: 1rem;
    }
</style>