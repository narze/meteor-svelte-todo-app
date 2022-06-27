<script>
  import Task from "./Task.svelte";
  import TaskForm from "./TaskForm.svelte";

  import { TasksCollection } from "/imports/api/TasksCollection";

  // $m: tasks = TasksCollection.find({}).fetch();
  $m: tasks = TasksCollection.find({}, { sort: { createdAt: -1 } }).fetch();
</script>

<div class="container">
  <h1>Todo in Meteor & Svelte</h1>

  <ul>
    {#each tasks as task (task._id)}
      <Task {task} />
    {/each}
  </ul>

  <TaskForm />
</div>
