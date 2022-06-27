<template>
  <client-only>
    <q-layout view="lHh lpR lfr">
      <q-header reveal elevated class="bg-primary text-white" height-hint="98">
        <q-toolbar>
          <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
          <q-toolbar-title>
            {{ titleAppend || title }}
          </q-toolbar-title>
          <span v-if="isLogin" @click="logout">로그아웃</span>
          <span v-else @click="login">로그인</span>
        </q-toolbar>
      </q-header>

      <q-drawer v-model="leftDrawerOpen" side="left" overlay bordered>
        <MenuBar />
      </q-drawer>

      <q-page-container :class="{ dimmed: leftDrawerOpen }">
        <NuxtPage />
      </q-page-container>
    </q-layout>
  </client-only>
</template>
<script>
import { GET_MEMBER_INFO, GET_IS_MANAGER } from './api/member'
import MenuBar from './layouts/menu.vue'
import { useMemberStore } from './stores/member'
import { mapActions, mapState } from 'pinia'
export default {
  name: 'App',
  components: { MenuBar },
  provide() {
    return {
      toggleLeftDrawer: this.toggleLeftDrawer,
    }
  },
  data: () => ({
    leftDrawerOpen: false,
    title: import.meta.env.VITE_TITLE,
    titleAppend: '',
  }),
  computed: {
    ...mapState(useMemberStore, ['isLogin']),
  },
  watch: {
    isLogin() {
      if (!this.isLogin) {
        if (this.$loadId()) {
          this.reloadUserData()
        } else {
          this.$move('notLogin')
        }
      }
    },
    $route() {
      const title = this.$route.meta.title
      if (title) {
        this.titleAppend = `${this.title} - ${title}`
      } else {
        this.titleAppend = ''
      }
    },
  },
  async mounted() {
    if (!this.isLogin) {
      await this.reloadUserData()
    }
    await this.userAuth()
  },
  methods: {
    ...mapActions(useMemberStore, ['setAuth', 'setInfo']),
    toggleLeftDrawer() {
      this.leftDrawerOpen = !this.leftDrawerOpen
    },
    async userAuth() {
      const res = await GET_IS_MANAGER()
      this.setAuth(res.role)
    },
    login() {
      location.reload()
    },
    logout() {
      this.setInfo({}) // store data 지우기
      this.$removeId() // localStorage memberId 지우기
    },
    async reloadUserData() {
      const mid = this.$loadId()
      const res = await GET_MEMBER_INFO(mid)
      this.setInfo(res)
    },
  },
}
</script>
<style>
@import 'assets/base.css';
</style>
