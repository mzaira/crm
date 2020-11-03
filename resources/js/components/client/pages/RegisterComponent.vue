<template>
    
  <div class="row">
    <div class="col-lg-3"></div>
    <div class="col-lg-6">
      <a href="https://creativouae.com/">← Back to Website</a>
      <div id="login" class="text-center">
        <img class="img-fluid" src="/logo-creativo-normal.png" alt="Creativo" />

        <!--Login-->
        <div id="form" class="form-login">
           <h1> Register</h1>
              <div class="form-group">
            <input type="text" v-model="collection.fullname" class="form-control" placeholder="Name">
          </div>
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
                <input type="submit" @click.prevent="register" class="form-control" value="Register →">
              </div>
            </div>
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
                    fullname: '',
                    email: '', 
                    password: '',
                },
                password: {
                  email: '',
                },

                is_success: true,
            };
        },
        props: [
            'register_route',
        ],
        methods: {

            register(){

                let data = this.collection
                var _this = this

                if(data.fullname == '')
                {
                    this.$toastr.e("Please Enter your Name");
                } 
                else if(data.email == '')
                {
                    this.$toastr.e( "Please Enter your Email");
                }  
                else if(data.password == '') 
                {
                    this.$toastr.e("Please enter your password");
                } 
                else 
                {
                     axios.post(this.register_route, data).then(function(response){
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
        },
        mounted: function() {
           this.$toastr.defaultPosition = "toast-top-right";
        }
}
</script>

<style>

</style>