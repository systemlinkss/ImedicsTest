<template>
  <div class="row">
    <div class="col-md-12">
      <card>
        <h4 slot="header" class="card-title">
          Edit Category
        </h4>
        <fg-input placeholder="Name" v-model="form.categoryId" type="hidden" label="Name"></fg-input>
        <div class="row">


          <div class="col-lg-6">
            <fg-input placeholder="Name" v-model="form.name" type="text" label="Name"></fg-input>

          </div>
          <div class="col-lg-6">
            <fg-input placeholder="Description" v-model="form.description" label="Description" type="text"></fg-input>

          </div>
        </div>
        <div class="row">
          <div class="col-lg-6">
            <fg-input placeholder="Language" v-model="form.languageId" type="text" label="Language"></fg-input>

          </div>
          <div class="col-lg-6">
            <fg-input placeholder="Meta Title" v-model="form.metaTitle" label="Meta Title" type="text"></fg-input>

          </div>
        </div>
        <div class="row">
          <div class="col-lg-6">
            <fg-input placeholder="Meta Description" v-model="form.metaDescription" type="text" label="Meta Description"></fg-input>

          </div>
          <div class="col-lg-6">
            <fg-input placeholder="Meta KeyWork" v-model="form.metaKeyword" label="Meta Keyword" type="text"></fg-input>

          </div>
        </div>
        <div class="row">
          <div class="col-lg-6">
            <!--<p-checkbox v-model="form.active">Active</p-checkbox>-->
            <input type="checkbox" v-model="form.active" />Active
          </div>
          <div class="col-lg-6">

          </div>
        </div>

        <p-button type="info" v-on:click="submit" round>Submit</p-button>

      </card> <!-- end card -->
    </div> <!--  end col-md-6  -->

  </div>
</template>
<script>
  import Vue from 'vue'

  import axios from 'axios';
  Vue.prototype.$http = axios;
  export default {

    data() {
      return {
        form: {
          categoryId: '',
          languageId: '',
          name: '',
          description: '',
          metaTitle: '',
          metaDescription: '',
          metaKeyword: '',
          active:0
        },
        cateId:''
      }
    },
    methods: {
      submit: function () {
        var root = this;
        if (root.form.active == true) {
          root.form.active = 1;
        }
        else {
          root.form.active = 0;
        }
        this.$http.post("https://localhost:44382/v1/category/add", this.form).then(function (data) {
          console.log(data);
          if (data !=null) {
            this.$router.push('/admin/category');
          }
        }, function (error) {
          var errorMessage = error.response.data.error;
          console.log(errorMessage);
        });
      }
    },

    mounted: function () {
      //console.log(this.$route.query.id)
      this.$http.get('https://localhost:44382/v1/category/get?categoryId=' + this.cateId)
        .then(response => {

          console.log(response);
          this.form = response.data;
          //var data = response.data.items;
          //this.tableData = data;
          //localStorage.setItem('user', JSON.stringify(response.data.user))
          //localStorage.setItem('jwt', response.data.token)
          //if (localStorage.getItem('jwt') != null) {
          //  this.$emit('loggedIn')
          //  if (this.$route.params.nextUrl != null) {
          //    debugger;
          //    this.$router.push(this.$route.params.nextUrl)
          //  }
          //  else {
          //    //if (is_admin == 1) {
          //    //  this.$router.push('admin')
          //    //}
          //    //else {
          //    //  this.$router.push('dashboard')
          //    //}
          //  }
          //}

        })
        .catch(function (error) {
          console.error(error.response);
        });
    },
    created() {
      console.log(this.$route.query.id)
      this.cateId = this.$route.query.id;
    }
  }</script>
<style>
</style>
