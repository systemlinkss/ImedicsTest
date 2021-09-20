<template>
  <div class="row">
    <div class="col-md-12">
      <card>
        <h4 slot="header" class="card-title">
          Add Category
        </h4>
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
            <fg-input placeholder="Language" v-model="form.language_id" type="text" label="Language"></fg-input>

          </div>
          <div class="col-lg-6">
            <fg-input placeholder="Meta Title" v-model="form.metatitle" label="Meta Title" type="text"></fg-input>

          </div>
        </div>
        <div class="row">
          <div class="col-lg-6">
            <fg-input placeholder="Meta Description" v-model="form.metadescription" type="text" label="Meta Description"></fg-input>

          </div>
          <div class="col-lg-6">
            <fg-input placeholder="Meta KeyWork" v-model="form.metakeyword" label="Meta Keyword" type="text"></fg-input>

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
          category_id: '',
          language_id: '',
          name: '',
          description: '',
          metatitle: '',
          metadescription: '',
          metakeyword: '',
          active:0
        }
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
            this.$router.push('/admin/addupdatecategory')

          } 
        }, function (error) {
          var errorMessage = error.response.data.error;
          console.log(errorMessage);
        });
      }
    }
  }</script>
<style>
</style>
