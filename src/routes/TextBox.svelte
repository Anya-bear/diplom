<script lang="ts">
    export let placeholder: string = ''
    export let value: string
</script>


<div class="input-wrap">
    <input type="text" class="input-text" placeholder={placeholder} bind:value={value}>
</div>


<style>
    .input-wrap {
        position: relative;
        display: inline-block;
    }
    input {
        font-size: 24px;
    }
</style>
