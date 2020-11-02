<template>
    
  <div class="row">
    <div class="col-lg-3"></div>
    <div class="col-lg-6">
      <a href="https://creativouae.com/">← Back to Website</a>
      <div id="login" class="text-center">
        <img class="img-fluid" src="/logo-creativo-normal.png" alt="Creativo" />

        <!--Login-->
        <div id="form" class="form-login" v-if="login_page">
           <h1> Login</h1>
          <div class="form-group">
            <input type="email" v-model="collection.email" class="form-control" placeholder="Email Address">
          </div>
          <div class="form-group">
            <input type="password" v-model="collection.password" class="form-control" placeholder="Password">
          </div>
          <div class="form-group">
            <div class="row">
              <div class="col-lg-6"></div>
              <div class="col-lg-6">
                <input type="submit" @click="login" class="form-control" value="Login →">
              </div>
            </div>
          </div>
           <div id="forgot" class="col-lg-12 text-left">
            <p>Forgot password? <a href="#" @click="login_page=false;password_page=true">Click here.</a></p>
          </div>
        </div>
       
       
        <!--Forgot-->
        <div class="" v-if="password_page">
          <h1>Forgot Password</h1>
          <div id="form">
            <div class="form-group">
              <input type="text" class="form-control" placeholder="Email Address">
            </div>
            <div class="form-group">
              <div class="row">
                <div class="col-lg-6"></div>
                <div class="col-lg-6">
                  <input type="submit" @click="forgot_password" class="form-control" value="Submit →">
                </div>
              </div>
            </div>
          </div>
          <div id="forgot" class="col-lg-12 text-left">
            <a href="#" @click="password_page=false;login_page=true">← Back to Login</a>
          </div> 
        </div>

      </div>
    </div>
    <div class="col-lg-3"></div>
  </div>
</template>

<script>

export default {
        data() {
            return {

                collection: { 
                    email: '', 
                    password: '',
                },
                password: {
                  email: '',
                },
                is_success: true,
                login_page: true,
                password_page: false,
            };
        },
        methods: {
            login(){
                let data = this.collection
                var _this = this

                if(data.email == '' && data.password == '') {
                        console.log('requred')
                } else {
                     axios.post('auth/submit', data).then(function(response){
                       if(response.status) {
                          console.log(data)
                       }
                    }).catch(error=>{
                        console.log("Insert: "+error);
                    });
                }
            },

            forgot_password() {
              let data = this.password

              if(data.email == '') {
                 console.log('required')
              } else {
                     axios.post('auth/submit', data).then(function(response){
                       if(response.status) {
                          console.log(data)
                       }
                    }).catch(error=>{
                        console.log("Insert: "+error);
                    });
              }
            },
        },
        created: function() {
            console.log('realoaded')
        }
}
</script>

<style>

</style>