<template>
    <div class="context-list">
        <div class="list-heading">
            <div class="title">
                <span class="title" contenteditable="true">{{title}}</span>
                <div class="button add" @click="add">+</div>
            </div>
            
        </div>
        <ul id="luo">
            <div v-if="id == 'a'">
            <Achievement v-for="item in arry" :key ="item.id"/>
            </div>
            <div v-else>
            <Experience v-for="item in arry" :key="item.id"/>
            </div>
            <slot name="listItem"></slot>
        </ul>
    </div>
</template>
<script>
import Experience from '@/components/Experience'
import Achievement from '@/components/Achievement'
export default {
    name: 'ContextList',
    components: {
        Experience,
        Achievement
    },
    props: {
        title: {
            type: String,
            default: 'Title'
        },
        id:{
            type: String,
            default: ''
        }
    },
    data () {
        return {
            arry: []
        }
    },
    methods: {
        showAdd () {
            this.add = true
        },
        add () {
            this.arry.push(1)
        }
    }
}
</script>
<style lang="less">

.context-list {
    width: 100%;
    margin-bottom: 0px;

    .list-heading {
        display: flex;
        justify-content: space-between;
        align-items: center;

        

        &:hover .add {
            display: block;
        }

        .add {
            display: none;
        }

        .button {
            width: 16px;
            height: 16px;
            line-height: 16px;
            text-align: center;
            font-size: 16px;
            border-radius: 50%;
            background: none;
            border: 1px solid #dad8d7;
            cursor: pointer;

            &:hover {
                background: #f2f2f2;
            }
        }
    }
}

</style>
