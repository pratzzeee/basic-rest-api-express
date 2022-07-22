import express from 'express';
import {allUsers, createUser, getUserId, deleteUser, updateUser} from '../controllers/users.js'

const router = express.Router();

router.get('/', allUsers);

router.get('/:id', getUserId);

router.post('/', createUser);

router.delete('/:id', deleteUser);

router.put('/:id', updateUser);

export default router;