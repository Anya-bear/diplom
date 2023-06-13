<script lang="ts">
    export let placeholder: string = ''
    export let value: Date
</script>


<div class="input-wrap">
    <input type="date" class="input-text" placeholder={placeholder} bind:value={value}>
</div>


<style>
    .input-wrap {
    position: relative;
    display: inline-block;
}
    input {
        font-size: 18px;
    }
</style>
