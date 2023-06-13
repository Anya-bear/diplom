<script lang="ts">
  import Table from "./Table.svelte";

  export let headers: string[] = []
  export let items: string[] = []
  export let id
  // const headers = ['Текст комментария', "Тональность"]
  // const items = [
  //   ["Большая молодец. Поздравляю. Новых вершин тебе.","Положительный"],
  //   ["Начинаются смутные времена.",'Отрицательный'],
  //   ['Родная школа','Положительный'],
  //   ['Здорово','Положительный'],
  //   ['Ок','Нейтральный']
  // ]

</script>


<div class="columns">
  <div class="vertical">
    {id}
    <Table {headers} {items} title="Определение эмоциональной окраски комментариев" ignoreLink/>
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
    /*.columns > div:first-child {*/
    /*    width: 30%;*/
    /*}*/
    .columns {
        align-items: center;
    }
    .vertical {
        display: flex;
        margin: auto;
        flex-direction: column;
    }
    .vertical > * {
        margin-bottom: 1.5rem;
    }

</style>