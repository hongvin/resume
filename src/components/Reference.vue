<template>
<div>
    <div class="title"><span class="title">References</span></div>
    <div class="reference">
    <vs-row>
      <vs-col vs-type="flex" vs-justify="flex-start" vs-align="center" vs-w="6">
        <span class="text-bold" contenteditable="true" @keydown.enter.prevent v-html="name"/>
      </vs-col>
      <vs-col vs-type="flex" vs-justify="flex-start" vs-align="center" vs-w="6">
        <span class="text-bold" contenteditable="true" @keydown.enter.prevent v-html="name"/>
      </vs-col>
    </vs-row>
    <vs-row>
      <vs-col vs-type="flex" vs-justify="flex-start" vs-align="center" vs-w="6">
        <span class="text-detail margin-adj" contenteditable="true" @keydown.enter.prevent v-html="title"/>
      </vs-col>
      <vs-col vs-type="flex" vs-justify="flex-start" vs-align="center" vs-w="6">
        <span class="text-detail margin-adj" contenteditable="true" @keydown.enter.prevent v-html="title"/>
      </vs-col>
    </vs-row>
    <vs-row>
      <vs-col vs-type="flex" vs-justify="flex-start" vs-align="center" vs-w="6">
        <span class="text-detail margin-adj" contenteditable="true" @keydown.enter.prevent v-html="contact"/>
        <span class="seperator">|</span>
        <span class="text-detail margin-adj" contenteditable="true" @keydown.enter.prevent v-html="email"/>
      </vs-col>
      <vs-col vs-type="flex" vs-justify="flex-start" vs-align="center" vs-w="6">
        <span class="text-detail margin-adj" contenteditable="true" @keydown.enter.prevent v-html="contact"/>
        <span class="seperator">|</span>
        <span class="text-detail margin-adj" contenteditable="true" @keydown.enter.prevent v-html="email"/>
      </vs-col>
    </vs-row>
  </div>
</div>
</template>

<script>
export default {
    name: 'Reference',
  data(){
    return{
      name:'Name',
      title: 'Title',
      contact: '012345678',
      email:'email@email.com',
    }
  }
}
</script>
