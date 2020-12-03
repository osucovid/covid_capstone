<template>
  <div>
    <b-card-group deck>
      <b-card bg-variant="light" title="Shopping Risk Status" img-alt="Image" img-top>
        <b-card-text>
          {{ message }}
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
  name: "RiskStatusCard2",
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
        if(this.posts.form.social_distancing_q5 != "Yes"){
            this.message = "Please try to not go to stores unless absolutely necessary. Try using InstaCart to order grocery/household items whenever necessary."
        }
        else{
            this.message = "You are doing an awesome job! Continue only visiting stores when absolutely necessary!";
        }
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
