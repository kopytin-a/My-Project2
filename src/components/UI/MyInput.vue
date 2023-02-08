<template>
    <input :value="modelValue" @input="updateInput" class="form-control">
</template>
<script>
export default {
    name: 'my-input',
    props: {
        modelValue: [String, Number]
    },
    methods: {
        updateInput(event){
            this.$emit('update:modelValue', event.target.value)
        }
    }
}
</script>

<style scoped>

.form-control {
  height: auto;
  padding: 8px 12px;
}
</style>