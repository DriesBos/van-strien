export const state = () => ({
  cacheVersion: ""
})

export const mutations = {
  setCacheVersion(state, version) {
    state.cacheVersion = version
  }
}

export const actions = {
  loadCacheVersion({ commit }) {
    return this.$storyapi.get(`cdn/spaces/me`).then((res) => {
      commit("setCacheVersion", res.data.space.version)
    })
  }
}

export default {
  actions: {
    async nuxtServerInit({ commit }, { app }) {
      let getHerinneringen = await app.$storyapi.get("cdn/stories", {
        version: process.env.NODE_ENV === "production" ? "published" : "draft",
        starts_with: "herinneringen/"
      })
      let herinneringen = getHerinneringen.data.stories.map((bp) => {
        return {
          id: bp.slug,
          title: bp.content.title,
          excerpt: bp.content.excerpt,
          cover_image: bp.content.cover_image,
          content: bp
        }
      })
      commit("herinneringen/update", herinneringen)

      let getGeneral = await app.$storyapi.get("cdn/stories", {
        version: process.env.NODE_ENV === "production" ? "published" : "draft",
        starts_with: "general/"
      })
      let general = getGeneral.data.stories.map((bp) => {
        return {
          content: bp.content
        }
      })
      commit("general/update", general)

      let getPopup = await app.$storyapi.get("cdn/stories", {
        version: process.env.NODE_ENV === "production" ? "published" : "draft",
        starts_with: "popup/"
      })
      let popup = getPopup.data.stories.map((bp) => {
        return {
          content: bp.content
        }
      })
      commit("popup/update", popup)

      let getMenus = await app.$storyapi.get("cdn/stories", {
        version: process.env.NODE_ENV === "production" ? "published" : "draft",
        starts_with: "menus/"
      })
      let menus = getMenus.data.stories.map((bp) => {
        return {
          name: bp.name,
          slug: bp.slug,
          items: bp.content.nav_menu_items
        }
      })
      commit("menus/update", menus)
    }
  }
}
