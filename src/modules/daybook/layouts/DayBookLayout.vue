<template>
  <Navbar />

  <section class="d-flex">
    <div class="col-4">
      <EntryList />
    </div>
    <div class="col">
      <router-view />
    </div>
  </section>
</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core'

export default {
  components: {
    Navbar: defineAsyncComponent(() => import('../components/Navbar')),
    EntryList: defineAsyncComponent(() => import('../components/EntryList.vue'))
  }
}
</script>
