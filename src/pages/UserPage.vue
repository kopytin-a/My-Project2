<template>
  <div>
    <h2>Vue3</h2>
    <my-input 
      v-focus
      class="input" 
      v-model="searchQuery" 
      placeholder="Поиск (не менее 3х символов)..."
    />

    <div v-if="SearchedUsers.length">
      <div v-if="searchQuery.length">
        <accordion-menu
          v-if="searchQuery.length > 2"
          :users="SearchedUsers"
        />
        <h5 v-else class="error"> Пользователь не найден! </h5>
      </div>
      <div v-else>
        <accordion-menu
          :users="SearchedUsers"
        />
      </div>
    </div>
    <h5 v-else class="error"> Пользователь не найден! </h5>
          
    <my-paginate 
      :totalPages = totalPages
      @newChangePage ="changePage"
    />

    <my-button @click="showPopup"> Новый пользователь </my-button>

    <my-popup v-model:show="popupVisible">
      <new-user 
        @create="createUsers"
      />
    </my-popup>
  </div>
</template>

<script>
import AccordionMenu from "@/components/AccordionMenu"
import NewUser from "@/components/NewUser"
import MyPaginate from "@/components/MyPaginate"
import axios from "axios"

export default {
  components: {
    AccordionMenu,
    NewUser,
    MyPaginate
  },
  data() {
    return {
      users: [],
      searchQuery: '',
      page: 1,
      limit: 6,
      totalPages: 0,
      phoneList: [ 
        88505553535, 89046398745, 89541239867, 89006834572, 
        89647589687, 89314568789, 88457569248, 83645984231,
        89002015869, 81061234782, 89116580234, 89120000456
      ],
      popupVisible: false
    }
  },
  methods: {
    changePage(page) {
      this.page = page
      this.fetchUser()
    },
    showPopup() {
      this.popupVisible = true
    },
    async fetchUser() {
      try {
        const result = await axios.get('https://reqres.in/api/users',{
          params: {
            page: this.page,
            per_page: this.limit,
          }
        })

        this.totalPages = result.data.total_pages
        this.users = result.data.data

        this.users.forEach(item => {
          item.phone = this.phoneList[item.id - 1]
        })
        
      } catch (e) {
        alert('Ошибка')
      }
    },
    createUsers(user) {
      this.popupVisible = false
      axios.post('https://reqres.in/api/users', user)
        .then(response => {
          console.log(response)
      })
        .catch(error => {
          alert(error)
      })
    }
  },
  mounted() {
    this.fetchUser()
  },
  computed: {
    SearchedUsers() {
      return this.users.filter(user => (user.first_name + ' ' + user.last_name).toLowerCase().includes(this.searchQuery.toLowerCase()))
    }
  }
}
</script>

<style scoped>
h2 {
  padding: 10px; 
  color: blue;
  text-align: center;
}
.error {
  padding: 10px;
}
.input {
  width: 100%;
  border: 1px solid black;
  padding: 10px 15px ;
  margin-top: 15px;
}
</style>