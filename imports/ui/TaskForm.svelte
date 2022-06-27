<script>
  import { TasksCollection } from "/imports/api/TasksCollection"

  export let user = null

  let newTask

  function handleSubmit() {
    TasksCollection.insert({
      text: newTask,
      createdAt: new Date(),
      userId: user._id,
    })

    newTask = ""
  }
</script>

<form class="task-form" on:submit|preventDefault={handleSubmit}>
  <input type="text" name="text" placeholder="New task" bind:value={newTask} />
  <button type="submit">Add Task</button>
</form>
