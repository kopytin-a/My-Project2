<template>
  <div>
    <form @submit.prevent>
      <AccordionList open-multiple-items>
        <AccordionItem>
          <template #summary>
            {{ user.first_name }} {{ user.last_name }}
          </template>
          <template #icon>+</template>
          <div>
            <b>id:</b> 
            {{ user.id }}
          </div>

          <div>
            <b>email:</b> 
            {{ user.email }}
          </div>

          <div>
            <b>Имя:</b> 
            {{ user.first_name }}
          </div>

          <div>
            <b>Фамилия:</b> 
            {{ user.last_name }}
          </div>

          <div>
            <b>Номер телефона:</b> 
            {{ user.phone }}
          </div>

          <div>
            <img :src="'' + user.avatar" />
          </div>
        </AccordionItem>
      </AccordionList>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
};
</script>