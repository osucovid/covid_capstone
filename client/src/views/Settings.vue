<template>
  <div class="Settings">
    <h1>Set user info</h1>
    <GeneralForm />
  </div>
</template>

<script>
import GeneralForm from '@/components/GeneralForm.vue'

export default {
  name: 'Settings',
  components: {
    GeneralForm
  }
}
</script>
