import axios from "axios";

const url = "api/users/";

class PostService {
  //get posts
  //using static means that even though we have a class and a method
  //we don't have to instantiate a new PostService object to use it
  //we can simply use PostService.getPosts()

  static getPosts() {
    return new Promise((resolve, reject) => {
      axios
        .get(url)
        .then((res) => {
          const data = res.data;
          resolve(
            data.map((post) => ({
              ...post,
              createdAt: new Date(post.createdAt),
            }))
          );
        })
        .catch((err) => {
          reject(err);
        });
    });
  }


  static updatePost(email, firstName, lastName, dob){
    return axios.put(url, {
      email, firstName, lastName, dob,
    });
  }
}
export default PostService;
