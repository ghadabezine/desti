import { reactive } from 'vue';
import { UserImpl } from '@/repositories/user.js';

const state = reactive({
    users: []
});

export function addUser(user) {
    state.users.push(user);
}

export function findUser(usernameOrEmail) {
    return state.users.find(user => user.email === usernameOrEmail || user.name === usernameOrEmail);
}