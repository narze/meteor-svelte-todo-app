<script>
  export let task;

  const toggleChecked = () =>
    Meteor.call("tasks.setIsChecked", task._id, !task.isChecked);

  const deleteTask = () => Meteor.call("tasks.remove", task._id);
</script>

<li>
  <input
    type="checkbox"
    readonly
    checked={!!task.isChecked}
    on:click={toggleChecked}
  />
  <span>
    {task.text}
  </span>
  <button class="delete" on:click={deleteTask}>&times;</button>
</li>
