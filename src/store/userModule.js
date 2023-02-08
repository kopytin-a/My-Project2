import axios from "axios"

export const userModule = {
    state: () => ({
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
    }),
    getters: {
      SearchedUsers(state) {
        return state.users.filter(user => (user.first_name + ' ' + user.last_name).toLowerCase().includes(state.searchQuery.toLowerCase()))
      }
    },
    mutations: {
      setUsers(state, users) {
        state.users = users
      },
      setPage(state, page) {
        state.page = page
      },
      setTotalPages(state, totalPages) {
        state.totalPages = totalPages
      },
      setSearchQuery(state, searchQuery) {
        state.searchQuery = searchQuery
      },
      setPopupVisible(state, popupVisible) {
        state.popupVisible = popupVisible
      }
    },
    actions: {
      async fetchUser({state, commit}) {
        try {
          const result = await axios.get('https://reqres.in/api/users', {
            params: {
              page: state.page,
              per_page: state.limit,
            }
          })
          commit('setTotalPages', result.data.total_pages)
          commit('setUsers', result.data.data)
  
          state.users.forEach(item => {
            item.phone = state.phoneList[item.id - 1]
          })
        } catch (e) {
          alert(e)
        }
      },
      changePage({state, dispatch}, page) {
        state.page = page
        dispatch('fetchUser')
      },
      showPopup({state}) {
        state.popupVisible = true
      },
      createUsers({state}, user) {
        state.popupVisible = false
        axios.post('https://reqres.in/api/users', user)
          .then(response => {
            console.log(response)
        })
          .catch(error => {
            alert(error)
        })
      },
    },

    namespaced: true
}