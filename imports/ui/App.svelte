<script>
  import Task from "./Task.svelte";
  import TaskForm from "./TaskForm.svelte";

  import { TasksCollection } from "/imports/api/TasksCollection";

  const hideCompletedFilter = { isChecked: { $ne: true } };

  // $m: tasks = TasksCollection.find({}).fetch();
  $m: tasks = TasksCollection.find(hideCompleted ? hideCompletedFilter : {}, {
    sort: { createdAt: -1 },
  }).fetch();

  $m: incompleteCount = TasksCollection.find(hideCompletedFilter).count();

  $m: pendingTasksTitle =
    incompleteCount > 0 ? `(${incompleteCount} pending tasks)` : "";

  let hideCompleted = false;
</script>

<div class="app">
  <header>
    <div class="app-bar">
      <div class="app-header">
        <h1>📝️ Todo in Meteor.js & Svelte {pendingTasksTitle}</h1>
      </div>
    </div>
  </header>

  <div class="main">
    <TaskForm />

    <div class="filter">
      <button on:click={() => (hideCompleted = !hideCompleted)}>
        {hideCompleted ? "Show" : "Hide"} completed tasks
      </button>
    </div>

    <ul class="tasks">
      {#each tasks as task (task._id)}
        <Task {task} />
      {/each}
    </ul>
  </div>
</div>
