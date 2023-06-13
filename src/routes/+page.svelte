<script lang="ts">
    import Navbar from "./Navbar.svelte";
    import Posts from "./Posts.svelte";
    import './null.css';
    import { menu } from "./utils";
    // import Tonal from "./Tonal.svelte";
    // import Graphics from "./Graphics.svelte";
    // import { Router, Route, Link } from "svelte-routing";


    let dateFrom: string | undefined
    let link: string | undefined
    let dateTo: string | undefined
    let info: any | undefined
    let lastUpdate: string


    export let url = "";
    
    $: cc = $menu
</script>


<!--<Router url="{url}">-->
 <nav>
  <Navbar/>
  <Posts/>
  
<!--  <Link to="/">Лайки</Link>-->
<!--  <Link to="graph">Графики</Link>-->
 </nav>
 <div>
<!--  <Route path="/" exact><Posts bind:dateFrom bind:dateTo bind:info bind:link /></Route>-->
<!--  <Route path="graph" ><Graphics {dateTo} {dateFrom} {info}/></Route>-->
<!--  <Route path="tonal/:id" let:params><Tonal id={params.id}/></Route>-->
<!--  <Route><Graphics/></Route>-->
 </div>
<!--</Router>-->

<!--&lt;!&ndash; {cc} &ndash;&gt;-->
<!--{#if cc == 0 }-->
<!-- <Posts/>-->
<!--{:else if cc == 1}-->
<!--<Tonal/>-->
<!--{:else if cc == 2}-->
<!-- <Graphics/>-->
<!--{/if}-->
<!-- <Button isTab/> -->

<style>
  body {
    margin: 0;
    padding: 0;
  }
  *,
  *::before,
  *::after { 
      margin: 0; 
      padding: 0; 
      box-sizing: border-box; 
  }
</style>