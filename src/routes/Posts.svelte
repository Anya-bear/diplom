<script lang="ts">
  import Button from "./Button.svelte";
import DateBox from "./DateBox.svelte";
import TextBox from "./TextBox.svelte";
  import Table from "./Table.svelte";
  import {getGraphics, getLastUpdate, getPostsForDates, menu, posts} from "./utils";
  import {onMount} from "svelte";
  import {browser} from "$app/environment";

    export let link: string
    export let dateFrom: string
    export let dateTo: string
    export let info: any | undefined
    export let lastUpdate: string

    async function getInfo() {
        info = await getPostsForDates(link, dateFrom, dateTo)
        $posts = info
        lastUpdate = await getLastUpdate()
    }
    
    const headers = ["Ссылка на пост", "Кол-во лайков", "Тональность комментариев"]
  $: items = info ? info?.sort((a, b) => a.likes.count > b.likes.count ? -1 : 1).map(x => [{url: 'https://vk.com/' + link +'?w=wall'+ x.owner_id + '_' + x.id}, x.likes.count, {text: 'Получить', url: 'http://' + location.host + '/tonal/' +x.owner_id+ '/'+ x.id}]) : []
  $: itemsComments = info ? info?.sort((a, b) => a.comments.count > b.comments.count ? -1 : 1).map(x => [{url: 'https://vk.com/' + link +'?w=wall'+ x.owner_id + '_' + x.id}, x.comments.count, {text: 'Получить', url: 'http://' + location.host + '/tonal/' +x.owner_id+ '/'+ x.id}]) : []
  // Math.abs(12).toString()
  
  const headerComments = ['Ссылка на пост', 'Кол-во комментариев', 'Тональность комментариев']
  let hash = ''
  onMount(async () => {
      hash = location.hash
      if (hash !== '') $menu = 1
     lastUpdate = await getLastUpdate()
  })
  let image: string | undefined = undefined
  async function getGraph() {
       const an =  await getGraphics(dateTo, dateFrom, info)
      image = an
  }
  
  $: canRequest = link?.length > 0 && dateTo && dateFrom && dateFrom <= dateTo 
  // $: canRequest = link?.length > 0
</script>


<div class="columns">
<div class="vertical">
    <div>
        <TextBox placeholder="Ссылка" bind:value={link}/>
    </div>
    <div>Диапазон дат: <DateBox bind:value={dateFrom}/> - <DateBox bind:value={dateTo}/></div>
    <div>Дата и время последнего обновления: {lastUpdate ?? ''}</div>
    <Button action={getInfo} canUse={canRequest} label="Составить рейтинг"/>
    <Button action={getGraph} canUse label="Просмотреть результаты графически"/>
    {#if image}
        <img src={'data:image/png;base64,' + image} alt="test">
    {/if}
</div>
<div class="vertical">
    <Table {headers} {items} title="Рейтинг постов по лайкам"/>
    <Table headers={headerComments} items={itemsComments} title="Рейтинг постов по комментариям"/>
</div>
</div>

<style>
    .columns {
        display: flex;
        flex-direction: row;
        /* justify-content: space-evenly; */
    }
    .columns > div {
        padding: 2%;
    }
    .columns > div:first-child {
        width: 30%;
    }
    .columns > div:last-child {
        align-items: center;
    }
    .vertical {
        display: flex;
        flex-direction: column;
    }
    .vertical > * {
        margin-bottom: 1.5rem;
    }
    
</style>