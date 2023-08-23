const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addToFriendList,
  removeFromFriendList,
} = require('../../controllers/userController');

// /api/users
router
  .route('/')
  .get(getUsers)
  .post(createUser);

// /api/users/:userId
router
    .route('/:userId')
    .get(getSingleUser)
    .put(updateUser)
    .delete(deleteUser);

// router
//   .route('/:usersId/friends')
//   .post(addToFriendList);

router
  .route('/:userId/friends/:friendsId')
  .post(addToFriendList)
  .delete(removeFromFriendList);


module.exports = router;