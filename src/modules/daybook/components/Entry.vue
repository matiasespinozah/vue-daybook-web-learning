<template>
  <div class="entry-container mb-3 p-2 pointer" @click="$router.push({ name: 'entry', params: { id: entry.id } })">
    <div class="entry-title d-flex">
      <span class="text-success fs-5 fw-bold">{{ day }}</span>
      <span class="mx-1 fs-5">{{ month }}</span>
      <span class="mx-2 fw-light">{{ yearDay }}</span>
    </div>

    <div class="entry-description">
      {{ shortText }}
    </div>
  </div>
</template>

<script>
import getDayMonthYear from '../helpers/getDayMonthYear'

export default {
  props: {
    entry: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      date: getDayMonthYear(this.entry.date)
    }
  },
  computed: {
    shortText() {
      return this.entry.text.length > 130 ? this.entry.text.substring(0, 130) + '...' : this.entry.text
    },
    day() {
      return this.date.day
    },
    month() {
      return this.date.month
    },
    yearDay() {
      return this.date.yearDate
    }
  }
}
</script>

<style lang="scss" scoped>
.entry-container {
  border-bottom: 1px solid #2c3e50;
  transition: 0.2s all ease-in;

  &:hover {
    background-color: lighten($color: grey, $amount: 45);
    transition: 0.2s all ease-in;
  }

  .entry-description {
    font-size: 12px;
  }
}
</style>
