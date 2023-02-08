import {computed, ref} from 'vue'

export default function useSortedUsers(users) {
    const searchQuery = ref('')
    const SearchedUsers = computed(() => {
        return users.value.filter(user => (user.first_name + ' ' + user.last_name).toLowerCase().includes(searchQuery.value.toLowerCase()))
    })

    return {
        searchQuery, SearchedUsers
    }
}