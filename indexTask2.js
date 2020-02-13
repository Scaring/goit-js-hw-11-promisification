'use strict';

//TASK-2
const users = [
  { name: 'Mango', active: true },
  { name: 'Poly', active: false },
  { name: 'Ajax', active: true },
  { name: 'Lux', active: false },
];

/*
 * работало так
 */
// const toggleUserState = (allUsers, userName, callback) => {
//   const updatedUsers = allUsers.map(user =>
//     user.name === userName ? { ...user, active: !user.active } : user,
//   );

//   callback(updatedUsers);
// };

/*
 * работает с промисом так
 */
const toggleUserState = (allUsers, userName, callback) => {
  const promise = new Promise(reject => {
    const updatedUsers = allUsers.map(user =>
      user.name === userName ? { ...user, active: !user.active } : user,
    );
    reject(updatedUsers);
  });

  return promise;
};

const logger = updatedUsers => console.table(updatedUsers);

/*
 * работало так
 */
// toggleUserState(users, 'Mango', logger);
// toggleUserState(users, 'Lux', logger);

/*
 * работает с промисом так
 */
toggleUserState(users, 'Mango').then(logger);
toggleUserState(users, 'Lux').then(logger);
