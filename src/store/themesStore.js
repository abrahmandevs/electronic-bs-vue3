import { reactive } from "vue"

const themesStore = reactive({

    currentTheme: null,

    toggleTheme: (current, next, primeVue) => {

        themesStore.currentTheme = current

        // What is next theme? (2nd parameter)
        let nextTheme = ""
        if (themesStore.currentTheme === current) nextTheme = next
        else if (themesStore.currentTheme === next) nextTheme = themesStore.currentTheme

        // 1. Current theme name
        // 2. Next theme name
        // 3. id of <link>, what reference to where set theme css file --> fix, single id to <link>
        primeVue.changeTheme(themesStore.currentTheme, nextTheme, "theme-link", () => {
            console.log("theme changed")
        })
        // So current theme now:
        themesStore.currentTheme = nextTheme
    }
})

export { themesStore }