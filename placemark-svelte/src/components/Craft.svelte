<script>
    export let title;
    export let id;
</script>

<div class="box box-link-hover-shadow has-background-warning-light">
    <h2 class="title">
      {title}
    </h2>
    <a href="#/craft/{id}" class="button">
      <span class="icon is-small">
        <i class="fas fa-folder-open"></i>
      </span>
    </a>
    <a href="#/dashboard/deletecraft/{id}" class="button">
      <span class="icon-is-small">
        <i class="fas fa-trash"></i>
      </span>
    </a>
  </div>