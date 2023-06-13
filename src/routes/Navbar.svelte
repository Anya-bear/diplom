<script lang="ts">
  import Button from "./Button.svelte";
    import { menu } from "./utils";
  import { browser } from "$app/environment"
  import {Link} from "svelte-routing";
  import TextBox from "./TextBox.svelte";
  let token = browser && localStorage ? localStorage?.getItem('token') ?? '' : ''
</script>


<ul class="topnav">
    <li><div class:active={$menu == 0} on:click={() => {menu.set(0)
    location.href = '/'}}>Лайки и комментарии за период</div></li>
    <li><div class:active={$menu == 1} on:click={() => menu.set(1)}>Тональность комментариев</div></li>
    <li><div class:active={$menu == 2} on:click={() => menu.set(2)}>Графики</div></li>
    <li class="right" ><div><TextBox on:input={(e)=>  browser && localStorage && localStorage.setItem('token', e.target.value)} placeholder="Токен" bind:value={token}/></div></li>    
<!--    <li><div class:active={$menu == 0} on:click={() => menu.set(0)}><Link class='header' to="/">Лайки</Link></div></li>-->
<!--    <li><div class:active={$menu == 1} on:click={() => menu.set(1)}><Link class="header" to="graph">Графики</Link></div></li>-->
<!--    <li><div class:active={$menu == 2} on:click={() => menu.set(2)}><Link class="header" to="tonal/:id">Тональность</Link></div></li>-->
<!--    <li class="right" class:active={$menu == 3} on:click={() => menu.set(3)}><div>Токен</div></li>-->
  </ul>
<!-- <div class="navbar">
    <div class="no-stretch">
        <Button label="Info" isTab/>
    </div>
    
</div> -->

<style>
    ul.topnav {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}

ul.topnav li {float: left;}

ul.topnav li div {
  display: block;
  color: white;
  /*text-align: center;*/
  /*padding: 14px 16px;*/
  text-decoration: none;
  cursor: pointer;
}
ul.topnav li div:hover:not(.active) {background-color: #111;}

ul.topnav li div.active {background-color: #0454aa;}

ul.topnav li.right {float: right;}

@media screen and (max-width: 600px) {
  ul.topnav li.right, 
  ul.topnav li {float: none;}
}




.navbar {
    padding: 0 1rem;
    width: 100%;
    background-color: black;
    height: 4rem;
    position: absolute;
    display: flex;
    flex-direction: row;
    vertical-align: middle;
}
.no-stretch {
    align-self: center;
    vertical-align: midd;
}
</style>