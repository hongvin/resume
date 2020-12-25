<template>
  <div class="experience">
    <ListItem>
      <vs-row vs-type="flex" vs-justify="space-between">
        <vs-col vs-justify="flex-start" vs-align="center" vs-w="6">
          <div
            class="text-bold"
            contenteditable="true"
            @keydown.enter.prevent
            v-html="company"
          />
          <div
            class="text-detail"
            contenteditable="true"
            @keydown.enter.prevent
            style="margin-top:-2px;"
            v-html="company"
          />
        </vs-col>
        <vs-col vs-type="flex" vs-justify="flex-end" vs-align="center" vs-w="6">
          <span
            class="text-bold"
            contenteditable="true"
            @keydown.enter.prevent
            v-html="year"
          />
        </vs-col>
      </vs-row>
      <div class="text-detail" contenteditable="true" v-html="description" />
    </ListItem>
  </div>
</template>

<script>
import ListItem from "@/components/list-item";
export default {
  name: "Experience",
  components: {
    ListItem,
  },
  props: {
    data: {
      type: Object,
      default() {
        return {};
      },
    },
    company: {
      type: String,
      default: "Title",
    },
    year: {
      type: String,
      default: "Date/Period",
    },
    description: {
      type: String,
      default: "Descriptions",
    },
  },
};
</script>
