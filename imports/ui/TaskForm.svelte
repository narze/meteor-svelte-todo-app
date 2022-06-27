<script>
  import { TasksCollection } from "/imports/api/TasksCollection"

  let newTask

  function handleSubmit() {
    TasksCollection.insert({ text: newTask, createdAt: new Date() })

    newTask = ""
  }
</script>

<form class="task-form" on:submit|preventDefault={handleSubmit}>
  <input type="text" name="text" placeholder="New task" bind:value={newTask} />
  <button type="submit">Add Task</button>
</form>
