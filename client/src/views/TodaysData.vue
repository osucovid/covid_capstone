<template>
  <div class="todaysdata">
    <h1>Today's Assessment Data</h1>
    <PostComponent />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

// Main contains the main dashbord 
import PostComponent from '@/components/PostComponent.vue'

export default {
  name: 'TodaysData',
  components: {
    PostComponent
  }
}
</script>