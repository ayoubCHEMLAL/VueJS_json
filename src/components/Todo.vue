<template>
  <div>
      <h2 v-bind:class="{'is-completed':todo.completed}">{{todo.title}}</h2>
      <div class="text-right">
            <button v-on:click="editTodo" class="btn btn-info btn-smmr-1">Edit</button>
            <button @click="deleteTodo(todo.id)" class="btn btn-danger btn-sm">Delete</button>
          </div>
    </div>
</template>

<script>

export default {
 props: ['todo'],
 methods:{
   deleteTodo(id){
    this.$emit('delete-todo',id)
   },
   editTodo(){
     this.$emit('edit-todo',this.todo)
   }
 }
}
</script>

<style>
  .is-completed{
    text-decoration: line-through;
  }
</style>