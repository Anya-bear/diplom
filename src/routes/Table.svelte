<script lang="ts">
  
  export let headers: string[] = []
  export let items: any[][] | undefined = [[]] 
  export let title: string = 'Title'
</script>

<h2>{title}</h2>
<div class="table-wrapper">
  <table class="fl-table">
  <thead>
    <th>
      {'#'}
    </th>
    {#each headers as header}
      <th>
        {header}
      </th>
    {/each}
  </thead>
  <tbody>
  {#if items}
    {#each items as item, i}
      <tr>
        <td>
          {i+1}
        </td>
        {#each item as cell}
          <td>
            {#if cell?.url}
              <a href={cell.url} target="_blank">{cell.text ?? cell.url}</a>
            {:else}
              {cell}
            {/if}
          </td>  
        {/each}
      </tr>
    {/each}
    {/if}
  </tbody>
</table>
</div>

<style>
    *{
        font-size: 18px;
        box-sizing: border-box;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
    }
    body{
        font-family: Helvetica;
        -webkit-font-smoothing: antialiased;
        background: rgba( 71, 147, 227, 1);
    }
    h2{
        text-align: center;
        font-size: 18px;
        text-transform: uppercase;
        letter-spacing: 1px;
        padding: 1.5rem 0;
    }

    /* Table Styles */

    .table-wrapper{
        margin: 0.5rem 2rem 2rem;
        box-shadow: 0px 35px 50px rgba( 0, 0, 0, 0.2 );
    }

    .fl-table {
        border-radius: 5px;
        font-size: 12px;
        font-weight: normal;
        border: none;
        border-collapse: collapse;
        width: 100%;
        max-width: 100%;
        white-space: nowrap;
        background-color: white;
    }

    .fl-table td, .fl-table th {
        /*text-align: center;*/
        padding: 0.7rem;
    }

    .fl-table td {
        border-right: 1px solid #f8f8f8;
        font-size: 24px;
    }

    .fl-table thead th {
        color: #ffffff;
        background: #4FC3A1;
    }


    .fl-table thead th:nth-child(odd) {
        color: #ffffff;
        background: #324960;
    }

    .fl-table tr:nth-child(even) {
        background: #F8F8F8;
    }

    /* Responsive */

    /*@media (max-width: 767px) {*/
    /*    .fl-table {*/
    /*        display: block;*/
    /*        width: 100%;*/
    /*    }*/
    /*    .table-wrapper:before{*/
    /*        content: "Scroll horizontally >";*/
    /*        display: block;*/
    /*        text-align: right;*/
    /*        font-size: 11px;*/
    /*        color: white;*/
    /*        padding: 0 0 10px;*/
    /*    }*/
    /*    .fl-table thead, .fl-table tbody, .fl-table thead th {*/
    /*        display: block;*/
    /*    }*/
    /*    .fl-table thead th:last-child{*/
    /*        border-bottom: none;*/
    /*    }*/
    /*    .fl-table thead {*/
    /*        float: left;*/
    /*    }*/
    /*    .fl-table tbody {*/
    /*        width: auto;*/
    /*        position: relative;*/
    /*        overflow-x: auto;*/
    /*    }*/
    /*    .fl-table td, .fl-table th {*/
    /*        padding: 20px .625em .625em .625em;*/
    /*        height: 60px;*/
    /*        vertical-align: middle;*/
    /*        box-sizing: border-box;*/
    /*        overflow-x: hidden;*/
    /*        overflow-y: auto;*/
    /*        width: 120px;*/
    /*        font-size: 13px;*/
    /*        text-overflow: ellipsis;*/
    /*    }*/
    /*    .fl-table thead th {*/
    /*        text-align: left;*/
    /*        border-bottom: 1px solid #f7f7f9;*/
    /*    }*/
    /*    .fl-table tbody tr {*/
    /*        display: table-cell;*/
    /*    }*/
    /*    .fl-table tbody tr:nth-child(odd) {*/
    /*        background: none;*/
    /*    }*/
    /*    .fl-table tr:nth-child(even) {*/
    /*        background: transparent;*/
    /*    }*/
    /*    .fl-table tr td:nth-child(odd) {*/
    /*        background: #F8F8F8;*/
    /*        border-right: 1px solid #E6E4E4;*/
    /*    }*/
    /*    .fl-table tr td:nth-child(even) {*/
    /*        border-right: 1px solid #E6E4E4;*/
    /*    }*/
    /*    .fl-table tbody td {*/
    /*        display: block;*/
    /*        text-align: center;*/
    /*    }*/
    /*}*/
</style>