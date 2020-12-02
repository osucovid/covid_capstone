<template>
  <div>
    <b-card-group deck>
      <b-card bg-variant="light" title="Mask Risk Status" img-alt="Image" img-top>
        <b-card-text>
          {{ message }}
        </b-card-text>
        <template v-slot:footer>
          <small class="text-muted">Last updated 3 mins ago</small>
        </template>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
import PostService from '../../DashboardService';
export default {
  name: "RiskStatusCard1",
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

      if(this.posts.form.mask_wearing_percentage != "100"){
        this.message = "It is highly recommendd that you wear a mask at all times when around other people or in public.";
      }
      else{
        this.message = "You are doing an awesome job! Continue wearing a mask when in public, or around other people!";
      }
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
