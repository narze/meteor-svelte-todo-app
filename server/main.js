import { Meteor } from "meteor/meteor"
import { TasksCollection } from "/imports/api/TasksCollection"

const insertTask = (text) => TasksCollection.insert({ text })

Meteor.startup(() => {
  // code to run on server at startup
  if (TasksCollection.find().count() === 0) {
    console.log("Inserting initial tasks")
    ;[
      "First Task",
      "Second Task",
      "Third Task",
      "Fourth Task",
      "Fifth Task",
      "Sixth Task",
      "Seventh Task",
    ].forEach(insertTask)
  } else {
    console.log("Already have tasks")
  }
})
