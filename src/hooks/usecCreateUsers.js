import axios from "axios"

export function usecCreateUsers (popupVisible) {
    const createUsers = (user) => {
        popupVisible.value = false
        axios.post('https://reqres.in/api/users', user)
          .then(response => {
            console.log(response)
        })
          .catch(error => {
            alert(error)
        })
    }

    return {
        createUsers
    }
}