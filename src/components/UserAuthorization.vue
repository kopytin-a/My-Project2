<template>
  <div>
    <h3 style="text-align: center">Авторизация</h3>
    <div class="form-group">
      <label :class="{ error: isActiveLogin }">Введите Login:</label>
      <my-input
        v-focus
        @focus="(isActiveLogin = false), (errorOppen = false)"
        v-model.trim="loginPanel"
        type="text"
        :class="{ input: isActiveLogin }"
        placeholder="Login"
      />
    </div>

    <div class="form-group">
      <label :class="{ error: isActivePassword }">Введите пароль:</label>
      <my-input
        @focus="(isActivePassword = false), (errorOppen = false)"
        v-model.trim="passwordPanel"
        type="password"
        :class="{ input: isActivePassword }"
        placeholder="Password"
      />
    </div>

    <h6 
      v-if="errorOppen" 
      :class="{ error: errorOppen }"
    >
      Неверный login или пароль!
    </h6>

    <div style="text-align: center">
      <my-button
        @click="authorization"
      >
        Вход
      </my-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginPanel: "",
      passwordPanel: "",
      isActiveLogin: false,
      isActivePassword: false,
      errorOppen: false
    }
  },
  methods: {
    authorization() {
      if (!this.loginPanel) {
        this.isActiveLogin = true
      }

      if (!this.passwordPanel) {
        this.isActivePassword = true
      }

      if (this.loginPanel === "1" && this.passwordPanel === "1") {
        this.$router.push("/Vue3")
      } else if (this.loginPanel && this.passwordPanel) {
        this.errorOppen = true
      }
    }
  }
}
</script>

<style scoped>
.form-group {
  margin-bottom: 15px;
}
label {
  margin-bottom: 5px;
}
.error {
  color: red;
}
.input {
  border: 2px solid red;
}
</style>