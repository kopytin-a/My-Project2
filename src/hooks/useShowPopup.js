import {ref} from 'vue'

export function useShowPopup () {
    const popupVisible = ref(false)
    const showPopup = () => {
        popupVisible.value = true
    }

    return {
        popupVisible,
        showPopup
    }
}