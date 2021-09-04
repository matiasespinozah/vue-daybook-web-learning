<template>
  <Navbar />

  <div v-if="isLoading" class="row justify-content-md-center">
    <div class="col-3 alert-info text-center mt-5">
      Espere por favor...
      <h3 class="mt-3">
        <i class="fa fa-spin fa-sync"></i>
      </h3>
    </div>
  </div>

  <section v-else class="d-flex">
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
import { mapActions, mapState } from 'vuex'

export default {
  components: {
    Navbar: defineAsyncComponent(() => import('../components/Navbar')),
    EntryList: defineAsyncComponent(() => import('../components/EntryList.vue'))
  },
  computed: {
    ...mapState('daybook', ['isLoading'])
  },
  methods: {
    ...mapActions('daybook', ['loadEntries'])
  },
  created() {
    this.loadEntries()
  }
}
</script>
