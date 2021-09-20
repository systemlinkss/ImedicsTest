import {router} from '../main'
import routes from '../routes/routes'

import Vue from 'vue'

import axios from 'axios';
Vue.prototype.$http = axios;

const API_URL = 'https://imedics-api-identity.azurewebsites.ne'
const LOGIN_URL = API_URL + 'v1/user/authenticate'
const SIGNUP_URL = API_URL + 'users/'

export default {

  user: {
    authenticated: false
  },

  login(context, creds) {
    context.$http.post(LOGIN_URL, {
          username: "rahmat",
          password: "test"
        })
      .then(data => {

        
          localStorage.setItem('token', data.data.token)
         this.user.authenticated = true;
         if (this.user.authenticated) {
           window.location = "/admin/overview";
         }
       // this.routers.push('admin/overview');
        // this.$routes.push('/admin/overview')
          })
          .catch(function (error) {
            console.error(error.response);
          });


    //context.$http.post(LOGIN_URL, { creds }).then(data => {
    //  console.log(data);
    //  localStorage.setItem('id_token', data.token)

    //  this.user.authenticated = true

    //  if(redirect) {
    //    router.go(redirect)        
    //  }

    //}).error((err) => {
    //  context.error = err
    //})
  },

  //signup(context, creds, redirect) {
  //  context.$http.post(SIGNUP_URL, creds, (data) => {
  //    localStorage.setItem('id_token', data.id_token)

  //    this.user.authenticated = true

  //    if(redirect) {
  //      router.go(redirect)        
  //    }

  //  }).error((err) => {
  //    context.error = err
  //  })
  //},

  logout() {
    localStorage.removeItem('token')
    this.user.authenticated = false
  },

  checkAuth() {
    debugger;
    var jwt = localStorage.getItem('token')
    if(jwt) {
      this.user.authenticated = true
    }
    else {
      this.user.authenticated = false      
    }
  },


  getAuthHeader() {
    return {
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
  }
}
