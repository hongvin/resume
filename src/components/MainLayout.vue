<template>
<div>
  <div class="heading">
    <vs-row>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
        <div class="name" contenteditable="true" @keydown.enter.prevent v-html="name"/>
        </vs-col>
    </vs-row>

    <vs-row vs-type="flex" vs-justify="space-between">
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
        <span class="text-bold">Email: </span> 
        <span class="text-detail" contenteditable="true" @keydown.enter.prevent v-html="email" />
        <span class="seperator">|</span>
        <span class="text-bold">Phone: </span> 
        <span class="text-detail" contenteditable="true" @keydown.enter.prevent v-html="phone"/>
        <span class="seperator">|</span>
        <span class="text-bold">Linkedin: </span> 
        <span class="text-detail" contenteditable="true" @keydown.enter.prevent v-html="linkedin"/>
      </vs-col>
    </vs-row>
    <vs-row>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
        <span class="text-bold">Address: </span> 
        <span class="text-detail" contenteditable="true" @keydown.enter.prevent v-html="address"/>
      </vs-col>
    </vs-row>
  </div>

  <hr class="solid">

  <div class="personalStat">
    <div class="title" contenteditable="true">About Me</div>
    <div class="text-detail" contenteditable="true" v-html="textarea" />
  </div>

  <hr class="solid">
</div>
</template>

<script>
export default {
  name: 'MainLayout',
  data(){
    return{
      name:'John Doe',
      email: 'jdoe@gmail.com',
      phone: '012345678',
      linkedin:'linkedin.com/in/abcd',
      address:'1234, Jalan University, Kuala Lumpur, Malaysia.',
      textarea:'About me.',
    }
  }
}
</script>

<style>


</style>