//we create query file because we can top the functionality that quickly

const db = require('./db')
const User = require('./models/user')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

//findAllNames one
// const findAll = async () => {
//   const users = await User.find();
//   console.log("All users:", users)
// }

// createUser
// const createUser = async () => {
//   const users = await User.insertMany({ name: "David", age: 33, status: "active" });
//   console.log("Add David:", users)
// }

// //deleteUser
// const deleteUser = async () => {
//   const users = await User.deleteOne({ name: "Claire", age: 28, status: "active" });
//   console.log("Delete Claire:", users)
// }

// //updateUser
// const updateUser = async () => {
//   const users = await User.updateOne({ name: "David Eski", age: 32, status: "active" });
//   console.log("update David Eski:", users)
// }

//findAllOlderThan25
const findAllOlderThan25 = async () => {
  const OlderThan25 = await User.find({ age: { $gt: 25 } });
  console.log(" OlderThan25:",  OlderThan25)
}
// //active and less then 25
// const findAllActiveLessThan25 = async () => {
//   const lessThan25 = await User.find({ status: "acitve", age: { $lt: 25 } });
//   console.log("Find All Active and Less Than 25:",  lessThan25)
// }


const run = async () => {
  // await findAll();
  // await createUser();
  // await deleteUser();
  // await updateUser();
  await findAllOlderThan25();
  // await findAllActiveLessThan25();

  process.exit()  
}
run()


//on the terminal
//node query.js