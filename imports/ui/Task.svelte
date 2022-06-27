<script>
  import { TasksCollection } from "/imports/api/TasksCollection";

  export let task;

  function toggleChceked() {
    TasksCollection.update(task._id, {
      $set: { isChecked: !task.isChecked },
    });
  }

  function deleteTask() {
    if (confirm("Delete this task?")) {
      TasksCollection.remove(task._id);
    }
  }
</script>

<li>
  <input
    type="checkbox"
    readonly
    checked={!!task.inChecked}
    on:click={toggleChceked}
  />
  <span>
    {task.text}
  </span>
  <button class="delete" on:click={deleteTask}>&times;</button>
</li>
