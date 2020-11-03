<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Guide />
    <GeneralForm />
  </div>
</template>

<script>
import GeneralForm from '@/components/GeneralForm.vue'
import Guide from '@/components/Guide.vue'

export default {
  name: 'About',
  components: {
    // HelloWorld
    GeneralForm,
    Guide
  }
}
</script>
