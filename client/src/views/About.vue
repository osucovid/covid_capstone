<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Guide />
    <GeneralForm />
  </div>
</template>

<script>
import Guide from '@/components/Guide.vue'

export default {
  name: 'About',
  components: {
    Guide
  }
}
</script>
