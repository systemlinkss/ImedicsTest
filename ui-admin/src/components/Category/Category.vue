<template>
  <div class="row">

      <div class="col-md-12">
        <div class="card">
          <div class="card-header">
            <div class="row">


              <div class="col-lg-6">
                <h5 class="title">Categories </h5>

              </div>

              <div class="col-lg-6 ">
                <button class="btn float-right btn-primary small" v-on:click="AddNew">Add Category</button>

              </div>
            </div>
          </div>
          <div class="card-body table-responsive table-full-width">
            <el-table :data="tableData">
              <el-table-column label="Id" property="categoryId" width="100px"></el-table-column>
              <el-table-column label="Name" property="name"></el-table-column>
              <el-table-column label="Description" property="description"></el-table-column>
              <el-table-column label="Meta Title" property="metaTitle"></el-table-column>

              <el-table-column label="Meta Description" property="metaDescription"></el-table-column>
              <el-table-column label="Meta Keyword" property="metaKeyword"></el-table-column>
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
            </el-table>

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

      getCategory: function () {
        this.$http.get('https://localhost:44382/v1/category/list')
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
      handleEdit(index, row) {

        this.$router.push('/admin/categoryedit?id=' + row.categoryId)  
      },
      handleDelete(index, row) {
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
        this.$router.push('/admin/addupdatecategory')
      }
    },
    mounted() {
     this.getCategory();
    }
  }</script>
<style lang="scss">
  .el-table .td-actions {
    button.btn {
      margin-right: 5px;
    }
  }
</style>
