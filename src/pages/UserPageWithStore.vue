<template>
  <div>
    <h2>Vuex</h2>
    <my-input 
      v-focus
      class="input" 
      :model-value="searchQuery"
      @update:model-value="setSearchQuery"
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

    <my-popup  
      v-model:show="popupVisible"
    >
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
  import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'
  export default {
    components: {
      AccordionMenu,
      NewUser,
      MyPaginate
    },
    methods: {
      ...mapMutations({
        setSearchQuery: 'user/setSearchQuery'
      }),
      ...mapActions({
        fetchUser: 'user/fetchUser',
        changePage: 'user/changePage',
        createUsers: 'user/createUsers',
        showPopup: 'user/showPopup'
      }),
    },
    mounted() {
      this.fetchUser()
    },
    computed: {
      ...mapState({
        users: state => state.user.users,
        searchQuery: state => state.user.searchQuery,
        page: state => state.user.page,
        limit: state => state.user.limit,
        totalPages: state => state.user.totalPages,
        phoneList: state => state.user.phoneList,
        popupVisible: state => state.user.popupVisible
      }),
      ...mapGetters({
        SearchedUsers: 'user/SearchedUsers'
      })
    }
  }
</script>
  
<style scoped>
h2 {
  padding: 10px; 
  color: red;
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
.page-wrapper {
  display: flex;
  margin-top: 15px;
}
</style>