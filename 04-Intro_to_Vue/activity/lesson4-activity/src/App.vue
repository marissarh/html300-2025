<template>
 <form>
      <div class="form-group p-5">
        <label for="info">Add info</label>
        <input type="text" id="info">
          <button type="button"class="btn btn-secondary" id="submit" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Click other button" >Submit</button>
        <button type="button" class="btn btn-primary">Unlock Form</button>
    </div>
    </form>
</template>

<script>
 let options={
      animation: true,
    };
    let element = document.getElementById( "Submit" );
    let tooltip = new bootstrap.Tooltip( element, options );
</script>

<style>
@import url(main.scss);
</style>
