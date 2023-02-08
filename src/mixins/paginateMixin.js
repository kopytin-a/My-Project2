import Paginate from "vuejs-paginate-next"
export default {
    components: {Paginate},
    props: {
        totalPages: Number
    },
    data() {
        return {
            page: 1,
        }
    },
    methods: {
        changePage() {
            this.$emit('newChangePage', this.page, this.totalPages)
        }
    }
}