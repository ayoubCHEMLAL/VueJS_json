<template>
<div>
  <h1>List of Todos</h1>
  <form action="">
    <div class="form-group">
      <input v-model="title" type="text" placeholder="new todo ..." class="form-control"/>
    </div>
    
      <button v-if="myTodo" type="sublime" @click.prevent="updateTodo()" class="btn btn-block btn-warning mb-2">Update Todo</button>
     <button v-else type="sublime" @click.prevent="addTodo()" class="btn btn-block btn-success mb-2">Add Todo</button>
  </form>
 
    <button class="btn btn-primary">Salam</button>
    <ul class="list-group-item">
      <li class="list-group-item" :key="todo.id" v-for="todo in Todos">
          <Todo v-bind:todo="todo" v-on:edit-todo="editOntodo"  v-on:delete-todo="deleteOnTodo"/>
          
      </li>
    </ul>
  </div>
</template>


<script>
import axios from 'axios';
import Todo from './Todo';
export default {
    components:{
        Todo
    },
    name: "Todos",
   
  data() {
    return {
      myTodo:null,
      title:'',
        Todos:[]
        //  {
        //      id:1,
        //      title:"Learn VUEJS",
        //      completed:true
        //  },
        //  {
        //      id:2,
        //      title:"Learn Angular",
        //      completed:false
        //  }
    // ]

    }
  },
   methods: {
     updateTodo(){
       let todo={
         ...this.myTodo,
         title:this.title
       }
      axios.put('http://localhost:5000/Todos/'+todo.id,todo)
          .then(res =>{
            this.Todos=this.Todos.map(t=>{
              if(res.data.id==t.id){
                return res.data
              }
              return t;
            })
            this.title=''
            this.myTodo=null;
          })
     },
    addTodo(){
      if(this.title !=''){
        
      let newTodo={
        title:this.title,
        completed:false
      } 
      
      axios.post('http://localhost:5000/Todos',newTodo)
           .then((res) => {
             this.Todos=[res.data, ...this.Todos];
             this.title=''
              
      })
      
      }
    },
    getToodos(){
      axios.get('http://localhost:5000/Todos')
            .then(res => this.Todos=res.data)        
            .catch(err => console.log(err))
          },
      deleteOnTodo(id){
        if(confirm('Are you sure to delete this element')){
          axios.delete(`http://localhost:5000/Todos/${id}`)
               .then(() => {
                 this.Todos=this.Todos.filter(todo => todo.id!==id)
               });
        }
      },
      editOntodo(todo){
        this.myTodo=todo;
        this.title=todo.title;
      }
   },
     created(){
       this.getToodos();  
     }
 
}
</script>

<style>
  
</style>