<template>
  <div>
    <b-card-group deck>
      <b-card bg-variant="light" title="Traveling Risk Status" img-alt="Image" img-top>
        <b-card-text>
          {{message}}
        </b-card-text>
        <template v-slot:footer>
          <small class="text-muted"></small>
        </template>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
import PostService from '../../DashboardService';
export default {
  name: "RiskStatusCard3",
  props: {
    // msg: String
  },
  components: {},
  data() {
    return {
      posts: '',
      message: ''
    };
  },
  async created (){
      try{
        let values = []
        values = await PostService.getPosts();
        let i;
        for(i = 0; i < values.length; i++){
          if(values[i].email == this.$auth.user.email){
            this.posts = values[i];
          }
        }
      } catch(err){
        this.error = err.message;
      }

      if(this.posts.form.travel_type == "international" || this.posts.travel_type == "domestic"){
          this.message = "Please try to refrain from traveling unless absolutely necessary. Traveling can cause a greater spread of COVID."
      }
      else{
          this.message = "You are doing a great job! Please continue to not travel, as traveling can cause the unnecessary spread of COVID."
      }
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
