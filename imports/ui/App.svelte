<script>
  import Task from "./Task.svelte";

  const getTasks = () => [
    { _id: "task_1", text: "This is task 1" },
    { _id: "task_2", text: "This is task 2" },
    { _id: "task_3", text: "This is task 3" },
  ];
</script>

<div class="container">
  <h1>Todo in Meteor & Svelte</h1>

  <ul>
    {#each getTasks() as task (task._id)}
      <Task {task} />
    {/each}
  </ul>
</div>
