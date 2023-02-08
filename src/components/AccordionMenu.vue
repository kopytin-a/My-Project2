<template>
  <div>
    <user-item 
      v-for="user in users" 
      :user="user" 
      :key="user" 
    />
  </div>
</template>

<script>
import UserItem from "@/components/UserItem";
export default {
  components: { UserItem },
  props: {
    users: {
      type: Array,
      required: true,
    }
  }
}
</script>