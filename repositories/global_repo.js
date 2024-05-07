import { reactive } from "vue"

const repo = reactive({
    crurentUser: null,
})


export function setCurrentUser(user) {
    repo.crurentUser = user
}