export function useChangePage(page, fetching) {
    const changePage = (pages) => {
        page.value = pages
        fetching()
    }

    return {
        changePage
    }
}