<script>
  import { TasksCollection } from "/imports/api/TasksCollection";

  export let task;

  function toggleChceked() {
    TasksCollection.update(task._id, {
      $set: { isChecked: !task.isChecked },
    });
  }
</script>

<li>
  <input
    type="checkbox"
    readonly
    checked={!!task.inChecked}
    on:click={toggleChceked}
  />
  {task.text}
</li>
