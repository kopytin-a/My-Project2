<template>
  <div>
    <h2>Composition API</h2>
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
import {useUsers} from "@/hooks/useUsers"
import useSortedUsers from "@/hooks/useSortedUsers"
import {useShowPopup} from "@/hooks/useShowPopup"
import {usecCreateUsers} from "@/hooks/usecCreateUsers"
import {useChangePage} from "@/hooks/useChangePage"

export default {
  components: {
    AccordionMenu,
    NewUser,
    MyPaginate
  },
  setup() {
    const {users, page, limit, totalPages, phoneList, fetching} = useUsers()
    const {searchQuery, SearchedUsers} = useSortedUsers(users)
    const {popupVisible, showPopup} = useShowPopup()
    const {createUsers} = usecCreateUsers(popupVisible)
    const {changePage} = useChangePage(page, fetching)

    return {
      users,
      page,
      limit, 
      totalPages, 
      phoneList,
      fetching,
      searchQuery, 
      SearchedUsers,
      showPopup,
      popupVisible,
      createUsers,
      changePage
    }
  }
}
</script>

<style scoped>
h2 {
  padding: 10px; 
  color: orange;
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