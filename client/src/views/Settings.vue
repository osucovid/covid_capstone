<template>
  <div class="Settings">
    <h1>Set user info</h1>
    <GeneralForm />
    <MedicalConditions />
    <Age />
  </div>
</template>

<script>
import GeneralForm from '@/components/GeneralForm.vue'
import MedicalConditions from "@/components/MedicalConditions.vue";
import Age from "@/components/Age.vue";

export default {
  name: 'Settings',
  components: {
    GeneralForm,
    MedicalConditions,
    Age
  }
}
</script>
