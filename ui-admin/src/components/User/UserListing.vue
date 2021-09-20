<template>
  <div class="row">

    <div class="col-md-12">
      <div class="card">
        <div class="card-header">
          <div class="row">


            <div class="col-lg-6">
              <h5 class="title">Users </h5>

            </div>

            <div class="col-lg-6 ">
              <button class="btn float-right btn-primary small" v-on:click="AddNew">Add Users</button>

            </div>
          </div>
        </div>
        <div class="card-body table-responsive table-full-width">
          <table class="table">
            <tr>
              <th>Id</th>
              <th>User Name</th>
              <th>Status</th>
              <th>Date Added</th>
              <th>Action</th>
            </tr>
            <tr v-for="item in tableData">
              <td>{{item.id}}</td>
              <td>{{item.username}}</td>
              <td v-if="item.status == 0">Disabled</td>
              <td  v-else>Enabled</td>
              <td>{{item.dateAdded | formatDate}}</td>
              <td>

                  <p-button type="success" size="sm" icon @click="handleEdit(item.id)">
                    <i class="fa fa-edit"></i>
                  </p-button>
                  <p-button type="danger" size="sm" icon @click="handleDelete(item.id)">
                    <i class="fa fa-times"></i>
                  </p-button>
              </td>
            </tr>
          </table>
          <!--<el-table :data="tableData">
            <el-table-column label="Id" property="id" width="100px"></el-table-column>
            <el-table-column label="User Name" property="username"></el-table-column>
            <el-table-column label="Status" property="status" ></el-table-column>
            <el-table-column label="Date Added" property="dateAdded"></el-table-column>

           
            <el-table-column class-name="action-buttons td-actions"
                             align="right"
                             label="Actions">
              <template slot-scope="props">

                <p-button type="success" size="sm" icon @click="handleEdit(props.$index, props.row)">
                  <i class="fa fa-edit"></i>
                </p-button>
                <p-button type="danger" size="sm" icon @click="handleDelete(props.$index, props.row)">
                  <i class="fa fa-times"></i>
                </p-button>
              </template>
            </el-table-column>
          </el-table>-->

        </div>
      </div>
    </div>



  </div>
</template>
<script>
  import Vue from 'vue'
  import { Table, TableColumn } from 'element-ui'

  Vue.use(Table)
  Vue.use(TableColumn)
  export default {
    data () {
      return {
        tableData: [],

      }
    },
    methods: {

      getUser: function () {
       
        this.$http.get('https://localhost:44382/v1/user/list')
          .then(response => {

            console.log(response);
            var data = response.data.items;
           this.tableData = data;
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
      tableRowClassName ({row, rowIndex}) {
        if (rowIndex === 0) {
          return 'table-success'
        } else if (rowIndex === 2) {
          return 'table-info'
        } else if (rowIndex === 4) {
          return 'table-danger'
        } else if (rowIndex === 6) {
          return 'table-warning'
        }
        return ''
      },
      handleLike(index, row) {
        alert(`Your clicked on Like button`)
      },
      handleEdit(row) {
        //alert(row)

        this.$router.push('/admin/edituser?id=' + row)
      },
      handleDelete(row) {
        this.$http.delete('https://localhost:44382/v1/category/delete?groupId=' + row.categoryId)
          .then(response => {

            console.log(response);
            alert(`Your want to delete ${row.name}`)



          })
          .catch(function (error) {
            console.error(error.response);
          });

      },
      AddNew: function () {
        this.$router.push('/admin/adduser')
      }
    },
    mounted() {
     this.getUser();
    }
  }</script>
<style lang="scss">
  .el-table .td-actions {
    button.btn {
      margin-right: 5px;
    }
  }
</style>
