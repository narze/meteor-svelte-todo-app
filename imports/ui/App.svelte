<script>
  import LoginForm from "./LoginForm.svelte";
  import Task from "./Task.svelte";
  import TaskForm from "./TaskForm.svelte";

  import { TasksCollection } from "/imports/db/TasksCollection";

  const handler = Meteor.subscribe("tasks");
  let isLoading = true;

  const hideCompletedFilter = { isChecked: { $ne: true } };
  const logout = () => Meteor.logout();

  // $m: tasks = TasksCollection.find({}).fetch();
  // $m: tasks = TasksCollection.find(hideCompleted ? hideCompletedFilter : {}, {
  //   sort: { createdAt: -1 },
  // }).fetch();

  // $m: incompleteCount = TasksCollection.find(hideCompletedFilter).count();

  let hideCompleted = false;

  let user, incompleteCount, pendingTasksTitle;
  let tasks = [];

  $m: {
    user = Meteor.user();

    if (user) {
      isLoading = !handler.ready();

      const userFilter = user ? { userId: user._id } : {};
      const pendingOnlyFilter = { ...hideCompletedFilter, ...userFilter };

      tasks = user
        ? TasksCollection.find(hideCompleted ? pendingOnlyFilter : userFilter, {
            sort: { createdAt: -1 },
          }).fetch()
        : [];

      incompleteCount = user
        ? TasksCollection.find(pendingOnlyFilter).count()
        : 0;

      pendingTasksTitle =
        incompleteCount > 0 ? `(${incompleteCount} pending tasks)` : "";
    }
  }
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
    {#if user}
      <div class="user" on:click={logout}>
        {user.username} 🚪
      </div>

      <TaskForm />

      <div class="filter">
        <button on:click={() => (hideCompleted = !hideCompleted)}>
          {hideCompleted ? "Show" : "Hide"} completed tasks
        </button>
      </div>

      {#if isLoading}
        <div class="loading">loading...</div>
      {/if}

      <ul class="tasks">
        {#each tasks as task (task._id)}
          <Task {task} />
        {/each}
      </ul>
    {:else}
      <LoginForm />
    {/if}
  </div>
</div>
