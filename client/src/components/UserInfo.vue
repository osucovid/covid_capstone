<template>

  <div class = "container">
  <br />
    <h2>Latest Posts</h2>
    <hr>
    <p class="error" v-if="error">{{ error }}</p>
      <div class="post" v-for="(post) in posts"
      v-bind:key="post.email">
        <template v-if="post.email == $auth.user.email">
        <div>
        <div>
          <h2>First Name</h2>
          <input type="text" v-model="firstName" :placeholder="[[ post.firstname ]]">
        </div>
        <div>
          <h2>Last Name</h2>
          <input type="text" v-model="lastName" :placeholder="[[ post.lastname ]]"> 
        </div>

        <div>
          <h2>Email</h2>
          <input type="text" v-model="email" :placeholder="[[ post.email ]]">
        </div>
        <div>
          <h2>Date Of Birth</h2>
          <input type="date" v-model="dob" :placeholder="[[ post.dob ]]">
        </div>
        <div>
          <h2>Submit</h2>
          <input type="submit" value="Submit" v-on:click="submit">
        </div>
        </div>
        </template>
      </div>
      <br>
      <br>
    </div>
</template>

<script>
import PostService from '../UserService'
export default {
  name: 'UserInfo',
  data() {
    return {
      posts: [],
      error: '',
      text: '',
      firstName: '',
      lastName: '',
      email: '',
      dob: ''
    }
  },
  async created() {
    try {
      this.posts = await PostService.getPosts();
    } catch(err) {
      this.error = err.message;
    }
  },
  methods: {
    async createPost() {
        await PostService.insertPost(this.text);
        this.posts = await PostService.getPosts();
    },
    async deletePost(id) {
        await PostService.deletePost(id);
        this.posts = await PostService.getPosts();
    },
    async submit(){
      await PostService.updatePost(this.email, this.firstName, this.lastName, this.dob);
      this.posts = await PostService.getPosts();
      window.location.reload();
      console.log("window reloaded");
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p.error { border: 1px solid #ff5b5f; background-color: #ffc5c1; padding: 10px; margin-bottom: 15px; }
div.created-at { position: absolute; top: 0; left: 0; padding: 5px 15px 5px 15px; background-color: darkgreen; }
p.text { font-size: 22px; font-weight: 700; margin-bottom: 0; }
  h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>