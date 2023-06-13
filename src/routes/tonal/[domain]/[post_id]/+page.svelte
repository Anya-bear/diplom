<script lang="ts">
	import { page } from '$app/stores';
    import Table from "../../../Table.svelte";
    import {onMount} from "svelte";
    import {getComments} from "../../../utils";

	let items: string[][] = []
    const headers = ['Текст комментария', "Тональность"]
	onMount(async () => {
        const x = await getComments($page.params.domain,$page.params.post_id)
		items = x.map(item => {
            const stringPrediction = item.prediction === 0 ? 'Отрицательный' :
				item.prediction === 1 ? 'Положительный' : 'Нейтральный'
            return [item.text, stringPrediction]
        })
    })

</script>

<div class="columns">
	<div class="vertical">
		{#if items?.length > 0}
			<Table {headers} {items} title="Определение эмоциональной окраски комментариев" ignoreLink/>
		{:else }
			{'У этого поста нет комментариев, возможных для анализа'}
		{/if}
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
