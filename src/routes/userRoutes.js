const express = require('express');
const router = express.Router();
const {
    registerUser,
    authUser,
    getUserProfile,
    updateUserProfile,
    getUsers,
    deleteUser,
} = require('../controllers/userController');
const { protect } = require('../middlewares/authMiddleware');

router.post('/register', registerUser);
router.post('/login', authUser);
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile);
router.route('/').get(getUsers);
router.route('/:id').delete(deleteUser);

module.exports = router;
