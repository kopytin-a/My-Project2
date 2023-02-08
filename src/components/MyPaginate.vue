<template>
    <div class="page-wrapper">
        <paginate
            v-model="page"
            :page-count="totalPages"
            @click="changePage"
            :prev-text="'Назад'"
            :next-text="'Вперед'"
        />
    </div>
</template>

<script>
import paginateMixin from "@/mixins/paginateMixin"
export default {
    name: 'my-paginate ',
    mixins: [paginateMixin]
}
</script>

<style scoped>
.page-wrapper {
    display: flex;
    margin-top: 15px;
}
</style>
