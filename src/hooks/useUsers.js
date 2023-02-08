import axios from "axios"
import {onMounted, ref} from 'vue'

export function useUsers() {
    const users = ref([])
    const page = ref (1)
    const limit = ref(6)
    const totalPages = ref(0)
    const phoneList = ref([88505553535, 89046398745, 89541239867, 89006834572, 89647589687, 89314568789, 
        88457569248, 83645984231, 89002015869, 81061234782, 89116580234, 89120000456])
    const fetching = async () => {
        try {
            const result = await axios.get('https://reqres.in/api/users', {
            params: {
                page: page.value,
                per_page: limit.value,
               }
            })
      
            totalPages.value = result.data.total_pages
            users.value = result.data.data
      
            users.value.forEach(item => {
            item.phone = phoneList.value[item.id - 1]
            })
              
        } catch (e) {
            alert('Ошибка')
        }
    }

    onMounted(fetching)

    return {
        users, page, limit, totalPages, phoneList, fetching
    }
}