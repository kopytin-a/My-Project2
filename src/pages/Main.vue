<template>
    <div>
        <my-popup v-model:show="popupVisible" @click.stop="popupVisible = true">
            <user-authorization
              @create="UserLogin"
            />
        </my-popup>
    </div>
</template>

<script>
import UserAuthorization from "@/components/UserAuthorization"
export default {
  components: {
    UserAuthorization
  },
  data() {
    return{
      popupVisible: true
    }
  },
  methods: {
    UserLogin() {
      this.popupVisible = false
    }
  }
}
</script>