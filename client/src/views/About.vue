<template>
  <div class="about">
    <Resources />
    <Guide />
  </div>
</template>

<script>
import Guide from '@/components/Guide.vue'
import Resources from '@/components/Resources.vue'

export default {
  name: "About",
  components: {
    Resources,
    Guide
  },
};
</script>
