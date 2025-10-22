<template>
    
    <div v-if=this.editable>
        editable
        <div>
            <label for="title">Title</label>
            <textarea id="title" name="title" rows="1" @input="value = this.updateTitle($event.target.value)"></textarea>
        </div>
        <ul>
            <li v-for="(item, key) in this.options" :key="key">
                <label for="poll_option">Poll option</label>
                <textarea id="poll_option" name="poll_option" rows="2" :value=item @input="value = this.updateOption(key, $event.target.value)"></textarea>
            </li>
        </ul>
    <div class="button" @click=this.addOption()>Add Option</div>
    </div>

    
    <div v-if=!this.editable>
        <div>{{this.title}}</div>
        <ul>
            <li v-for="(item, key) in this.options" :key="key">
                <label for="poll_option">Poll option</label>
                <div id="poll_option" name="poll_option" rows="2">{{item}}</div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: "Poll",
    props: {
        title: String,
        options: [],
        editable: Boolean
    },
    emits: ['updateTitle', 'addOption', 'updateOption'],
    methods: {
        updateTitle(value) {
            this.$emit('updateTitle', value);
        },
        addOption() {
            this.$emit('addOption');
        },
        updateOption(key, value) {
            this.$emit('updateOption', key, value);
        },
    }
}
</script>
