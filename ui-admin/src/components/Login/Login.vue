<template>
  <div class="login-page">
    <!--<app-navbar></app-navbar>-->
    <div class="wrapper wrapper-full-page">
      <div class="full-page login-page section-image">
        <!--   you can change the color of the filter page using: data-color="blue | azure | green | orange | red | purple" -->
        <div class="content">
          <div class="container">
            <div class="col-lg-4 col-md-6 ml-auto mr-auto">
              <form @submit.prevent="login">
                <card type="login">
                  <h3 slot="header" class="header text-center">Login</h3>

                  <fg-input v-model="form.username" addon-left-icon="nc-icon nc-single-02"
                            placeholder="User Name..."></fg-input>

                  <fg-input v-model="form.password" addon-left-icon="nc-icon nc-key-25" placeholder="Password"
                            type="password"></fg-input>

                  <br>

                  <p-button native-type="submit" slot="footer" type="warning" round block class="mb-3">Get started</p-button>
                </card>
              </form>
            </div>
          </div>
        </div>
        <!--<app-footer></app-footer>-->
        <div class="full-page-background" style="background-image: url(static/img/background/background-2.jpg) "></div>
      </div>
    </div>
  </div>
</template>
<script>
  import { Card, Checkbox, Button } from 'src/components/UIComponents';

  import auth from 'src/auth'

  
  export default {
    components: {
      Card,
      //AppNavbar,
      //AppFooter,
      [Checkbox.name]: Checkbox,
      [Button.name]: Button
    },
  

    methods: {
      toggleNavbar() {
        document.body.classList.toggle('nav-open')
      },
      closeMenu() {
        document.body.classList.remove('nav-open')
        document.body.classList.remove('off-canvas-sidebar')
      },
      login() {
        debugger;
        let username = "rahmat"
        let password = "test"
        var credentials = {
          username: username,
          password: password
        }

        auth.login(this, credentials)

       // this.$router.push('/admin/overview');
          //this.$store.dispatch('auth/login', this.user).then(
          //  () => {
          //    this.$router.push('/admin/');
          //  },
          //  error => {
          //      (error.response && error.response.data && error.response.data.message) ||
          //      error.message ||
          //      error.toString();
          //  }
          //);
        
        //this.$http.post('https://localhost:44382/v1/user/authenticate', {
        //  username: "rahmat",
        //  password: "test"
        //})
        //  .then(response => {
        //    console.log(response);
        //    localStorage.setItem('user', JSON.stringify(response.data.user))
        //    localStorage.setItem('jwt', response.data.token)
        //    if (localStorage.getItem('jwt') != null) {
        //      this.$emit('loggedIn')
        //      if (this.$route.params.nextUrl != null) {
        //        debugger;
        //        this.$router.push(this.$route.params.nextUrl)
        //      }
        //      else {
        //        //if (is_admin == 1) {
        //        //  this.$router.push('admin')
        //        //}
        //        //else {
        //        //  this.$router.push('dashboard')
        //        //}
        //      }
        //    }
        //    // ...
        //  })
        //  .catch(function (error) {
        //    console.error(error.response);
        //  });



       
       //const response = this.$http.post("https://localhost:44382/v1/user/authenticate");
       //console.log(response);
       // this.$router.push('/admin/overview')
        // handle login here
      }
    },
    data() {
      return {
        form: {
          username: '',
          password: ''
        }
      }
    },
    computed: {
      loggedIn() {
        return this.$store.state.auth.status.loggedIn;
      }
    },
    beforeDestroy() {
      this.closeMenu()
    }
  }
</script>
<style>
</style>
