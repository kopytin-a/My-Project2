<template>
  <div>
    <h3 style="text-align: center">Новый пользователь</h3>
    <div class="form-group">
      <label :class="{error: isActiveEmail}"> Введите email: </label>
      <my-input
        v-focus
        @focus="isActiveEmail = false"
        v-model.trim="user.email"
        type="email"
        :class="{input: isActiveEmail}"
        placeholder="Email"
      />
    </div>

    <div class="form-group">
      <label :class="{error: isActiveName}"> Введите имя: </label>
      <my-input
        @focus="isActiveName = false"
        v-model.trim="user.first_name"
        type="text"
        :class="{input: isActiveName}"
        placeholder="Name"
      />
    </div>

    <div class="form-group">
      <label>Введите фамилию:</label>
      <my-input
        v-model.trim="user.last_name"
        type="text"
        placeholder="Surname"
      />
    </div>

    <div class="form-group">
      <label>Введите номер телефона:</label>
      <my-input
        v-model.trim="user.phone"
        type="text"
        placeholder="Phone"
      />
    </div>

    <div class="form-group">
      <label :class="{error: isActivePassword}"> Введите пароль: </label>
      <my-input
        @focus="isActivePassword = false"
        v-model.trim="user.password"
        type="password"
        :class="{input: isActivePassword}"
        placeholder="Password"
      />
    </div>

    <div class="form-group" style="text-align: center">
      <my-button @click="createUsers"> Добавить </my-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        id: 13,
        email: "",
        password: "",
        first_name: "",
        last_name: "",
        phone: "",
      },
      isActiveName: false,
      isActiveEmail: false,
      isActivePassword: false,
    };
  },
  methods: {
    createUsers() {
      if (!this.user.email) {
        this.isActiveEmail = true;
      }

      if (!this.user.first_name) {
        this.isActiveName = true;
      }

      if (!this.user.password) {
        this.isActivePassword = true;
      }
      
      if (this.user.email && this.user.first_name && this.user.password) {
        this.$emit("create", this.user)
        this.user = {
          id: ++this.user.id,
          email: "",
          password: "",
          first_name: "",
          last_name: "",
          phone: "",
        }
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