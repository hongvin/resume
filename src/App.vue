<template>
  <div id="app">
    <div class="resume">
      <MainLayout />
      <ContextList title="Profesional Experience">
        <Experiences slot="listItem" />
      </ContextList>
      <hr class="solid" />
      <ContextList title="Education">
        <Experiences slot="listItem" />
      </ContextList>
      <hr class="solid" />
      <ContextList title="Awards, Achievement, Honorable Mentions" id="a">
        <Achievement slot="listItem" />
      </ContextList>
      <hr class="solid" />
      <ContextList title="Leadership Experiences" id="a">
        <Achievement slot="listItem" />
      </ContextList>
      <hr class="solid" />
      <Reference />
    </div>
    <div class="actions">
      <div>
        <vs-row>
          <img :src="require(`@/assets/MESA.png`)" style="width:100%"/>
    <label style="margin-right:12px;">Enable Dark mode</label>
    <vs-switch color="dark" v-model="darkMode" />
    </vs-row>
    </div>
      <!-- <vs-button color="primary" type="border" @click="saveAsImage">Save as PNG</vs-button> -->
      <vs-button color="primary" id="button-margin" type="border" @click="print"
        >Print</vs-button
      >
      <!-- <a href="https://www.buymeacoffee.com/hongvin" target="_blank">
        <img
          src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
          alt="Buy Me A Coffee"
          style="
            margin-top: 10px;
            height: 30px !important;
            width: 100px !important;
          "
      /></a> -->

      <div class="info-card">
        <vs-row vs-justify="center">
          <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="12">
            <vs-card class="bg-card">
              <div slot="header" >
                <h3>Hello there !</h3>
              </div>
              
              <div>
                <span>All dotted boxes are editable</span>
                <hr class="solid line-c" />
                <span
                  >You are able to add additional items in all sections, except
                  About Me and References. Right click on any item to delete
                  too!</span
                >
                <hr class="solid line-c" />
                <span
                  >If you found this useful, please consider contributing by buy
                  me a coffee or contributing to the repo. Or, just spread the
                  words!</span
                >
                <hr class="solid line-c" />
                <span>Click print to save as PDF.</span>
                <hr class="solid line-c" />
                <!-- Place this tag where you want the button to render. -->
                <span>Follow the Github project:</span>
                <a
                  class="github-button"
                  href="https://github.com/khvmaths/resume"
                  data-color-scheme="no-preference: light; light: light; dark: dark;"
                  data-icon="octicon-star"
                  aria-label="Star khvmaths/resume on GitHub"
                  >Star</a
                >
                <!-- Place this tag where you want the button to render. -->
                <span> </span>
                <a
                  class="github-button"
                  href="https://github.com/khvmaths"
                  data-color-scheme="no-preference: light; light: light; dark: dark;"
                  aria-label="Follow @khvmaths on GitHub"
                  >Follow @khvmaths</a
                >
              </div>
            </vs-card>
          </vs-col>
        </vs-row>
      </div>
    </div>
  </div>
</template>

<script>
import MainLayout from "@/components/MainLayout";
import ContextList from "@/components/context-list";
import Experiences from "@/components/Experience";
import Achievement from "@/components/Achievement";
import Reference from "@/components/Reference";
import html2canvas from "html2canvas";
import FileSaver from "file-saver";

export default {
  name: "App",
  components: {
    MainLayout,
    ContextList,
    Achievement,
    Experiences,
    Reference,
  },
  data(){
    return{
      darkMode:false,
    }
  },
  mounted(){
    let bodyElement=document.body;
    bodyElement.classList.add("app-bg");

    let htmlElement = document.documentElement;
            let theme = localStorage.getItem("theme");
            if (theme === 'dark') {
                htmlElement.setAttribute('theme', 'dark')
                this.darkMode = true
            } else {
                htmlElement.setAttribute('theme', 'light');
                this.darkMode = false
            }
  },
  watch:{
    darkMode: function() {
      let htmlElement = document.documentElement;

      if(this.darkMode){
        localStorage.setItem("theme","dark");
        htmlElement.setAttribute("theme","dark");
      }
      else{
        localStorage.setItem("theme","light");
        htmlElement.setAttribute("theme","light");
      }
    }
  },
  methods: {
    saveAsImage() {
      let resume = document.querySelector(".resume");
      html2canvas(resume).then((canvas) => {
        canvas.toBlob((blob) => {
          FileSaver.saveAs(blob, "Resume.png");
        });
      });
    },
    print() {
      window.print();
    },
  },
};
</script>

<style>
:root {
    --primary-color: #302AE6;
    --secondary-color: #536390;
    --font-color: #000;
    --bg-color: #fff;
    --heading-color: #292922;
}
[theme="dark"] {
    --primary-color: #9A97F3;
    --secondary-color: #818cab;
    --font-color: #e1e1ff;
    --bg-color: #161625;
    --heading-color: #818cab;
}
html{
  background-color: var(--bg-color)
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50;
   */
  background-color: var(--bg-color);
  color: var(--font-color);
  margin-top: 20px;
}
.line-c{
  border: 1px solid #dad8d7;
  margin:10px;
}
.bg-card{
  background-color: var(--bg-color) !important;
  border: 1px solid #dad8d7;
}
.resume {
  position: relative;
  width: 70%;
  margin: 2% 5% 5%;
  border: 1px solid #dad8d7;
  background-color: var(--bg-color);
  overflow: hidden;
  box-sizing: border-box;
}
.actions {
  position: absolute;
  top: 40px;
  left: 50%;
  margin-left: 415px;
  display: flex;
  flex-direction: column;
  width: 15%;
}

#button-margin {
  margin-top: 10px;
}

hr.solid {
  border-top: 1px solid #bbb;
}
.seperator {
  font-size: 12px;
  margin-right: 12px;
  margin-left: 12px;
}
.personalStat,
.experience,
.reference {
  text-align: left;
  margin: 12px;
}
.name {
  font-size: 24px;
  font-weight: bold;
  padding: 4px;
  margin-bottom: -4px;
}
.title {
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: bold;
  margin-left: 6px;
  margin-top: 6px;
  margin-right: 12px;
}
.text-bold {
  font-size: 12px;
  font-weight: bold;
  margin-right: 3px;
}
.text-bold-heading {
  font-size: 16px;
  font-weight: bold;
  text-align: left;
  margin-left: 12px;
}
.text-detail {
  font-size: 12px;
}
.seperator {
  font-size: 12px;
  margin-right: 12px;
  margin-left: 12px;
}
.margin-adj {
  margin-top: -3px;
}
[contenteditable="true"]:empty:before {
  content: attr(placeholder);
  pointer-events: none;
  display: block; /* For Firefox */
}
div[contenteditable="true"] {
  border: 1px dashed #aaa;
  padding: 0px;
  margin-bottom: 3px;
  margin: 1% 1% 0 0;
  width: 100%;
}
span[contenteditable="true"] {
  border: 1px dashed #aaa;
  /* width: 290px; */
  padding: 0px;
  margin-bottom: 3px;
}
@page {
  size: "A4";
  margin: 0cm;
  color: #bebdbd;
}
@media print {
  html,
  body,
  * {
    color: #000 !important;
    overflow: hidden !important;
  }
  div[contenteditable="true"] {
    margin-bottom: 0px;
    border: 0px !important;
  }
  span[contenteditable="true"] {
    margin-bottom: 0px;
    border: 0px !important;
  }
  .resume {
    margin-top: 0 !important;
    width: 90%;
    white-space: nowrap;
    border: 0px !important;
  }
  .actions,
  .guide,
  .footer {
    display: none !important;
  }
}
</style>
