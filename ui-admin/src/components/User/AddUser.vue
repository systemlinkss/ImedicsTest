<template>
  <div class="row">
    <div class="col-md-12">
      <card>
        <h4 slot="header" class="card-title">
          Add User
        </h4>
        <div class="row">
          <div class="col-lg-6">
            <fg-input placeholder="Username" v-model="form.username" type="text" label="Username"></fg-input>

          </div>
          <div class="col-lg-6">
            <!--<fg-input placeholder="User Group" v-model="form.userGroupId" label="User Group" type="text"></fg-input>-->
            <label>User Group</label>
            <select class="form-control" v-model="form.usergroupId">
              <option v-for="item in userGroups" :value="item.userGroupId">{{item.name}}</option>
            </select>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6">
            <fg-input placeholder="First Name" v-model="form.firstName" type="text" label="First Name"></fg-input>

          </div>
          <div class="col-lg-6">
            <fg-input placeholder="Last Name" v-model="form.lastName" label="Last Name" type="text"></fg-input>

          </div>
        </div>
        <div class="row">
          <div class="col-lg-6">
            <fg-input placeholder="Email" v-model="form.email" type="text" label="Email"></fg-input>

          </div>
          <div class="col-lg-6">
            <!--<fg-input placeholder="Status" v-model="form.status" label="Status" type="text"></fg-input>-->
            <label>User Group</label>
            <select class="form-control" v-model="form.status">
              <option value="">Select Status</option>
              <option value="0">Disabled</option>
              <option value="1">Enabled</option>

            </select>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6">
            <fg-input placeholder="Password" v-model="form.password" type="text" label="Password"></fg-input>

          </div>
          <div class="col-lg-6">
            <fg-input placeholder="Confirm" v-model="form.confirm" label="Confirm" type="text"></fg-input>

          </div>
        </div>
        <div class="row">
          <div class="col-lg-6">
            <!--<p-checkbox v-model="form.active">Active</p-checkbox>-->
            <!--<input type="text" class="form-control" v-model="form.image" />Active-->
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
          id: 0,
          username: '',
          usergroupId: '',
          firstName: '',
          lastName: '',
          email: '',
          status: 0,
          password: '',
          confrim: '',
          image: '',
          ip:''
        },
        userGroups:[]
      }
    },
    methods: {
      submit: function () {
        var root = this;
        console.log(this.form.usergroupId);
        if (root.form.status == "1") {
          root.form.status = 1;
        }
        if (root.form.status == "0") {
          root.form.status = 0;
        }
        root.form.usergroupId = parseInt(this.form.usergroupId)
        debugger;
        this.$http.post("https://localhost:44382/v1/user/add", root.form).then(function (data) {
          console.log(data);
          if (data !=null) {
            this.$router.push('/admin/userlisting');
           // this.$router.push('/admin/addupdatecategory')

          }
        }, function (error) {
          console.log(error);
        });
      },
      getUserGroup: function () {
        this.$http.get('https://localhost:44382/v1/usergroup/list')
          .then(response => {

            console.log(response);
            var data = response.data.items;
            this.userGroups = data;
      

          })
          .catch(function (error) {
            console.error(error.response);
          });

      }
    },
    mounted() {
      this.getUserGroup();
    }
  }</script>
<style>
</style>
