<template>
  <div class="todaysdata">
    <h1>Today's Assessment Data</h1>
    <DailyForm />
    <PostComponent />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

// Main contains the main dashbord
import PostComponent from '@/components/PostComponent.vue'
import DailyForm from '@/components/DailyForm.vue'


export default {
  name: 'TodaysData',
  components: {
    PostComponent,
    DailyForm
  }
}
</script>
