<script>
  let newTask

  function handleSubmit() {
    if (!newTask) return

    Meteor.call("tasks.insert", newTask)

    newTask = ""
  }
</script>

<form class="task-form" on:submit|preventDefault={handleSubmit}>
  <input type="text" name="text" placeholder="New task" bind:value={newTask} />
  <button type="submit">Add Task</button>
</form>
