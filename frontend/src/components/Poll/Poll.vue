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
                <textarea id="poll_option" name="poll_option" rows="2" :value=item.option @input="value = this.updateOption(key, $event.target.value)"></textarea>
            </li>
        </ul>
    <div class="button" @click=this.addOption()>Add Option</div>
    </div>

    
    <div v-if=!this.editable>
        <fieldset>
            <legend>{{this.title}}</legend>
             <div v-for="(item, key) in this.options" :key="key">
                <input type="radio" :id="key+'poll'" name="poll-vote" :value=key @input="value = this.updateVote($event.target.value)" />
                <label :for="key+'poll'">{{item.option.option}}</label>
            </div>
            <div>
                <div class="button" type="submit" @click=this.submitVote()>Submit Vote</div>
            </div>
        </fieldset>
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
    data() {
        return {
            selectedOption: -1
        }
    },
    emits: ['updateTitle', 'addOption', 'updateOption', 'submitVote'],
    methods: {
        updateTitle(value) {
            this.$emit('updateTitle', value.replace(/\n/g,''));
        },
        addOption() {
            this.$emit('addOption');
        },
        updateOption(key, value) {
            this.$emit('updateOption', key, value.replace(/\n/g,''));
        },
        updateVote(value) {
            this.selectedOption = value;
        },
        submitVote() {
            if (this.selectedOption > -1) {
                this.$emit('submitVote', this.selectedOption);
            }
           
        }
    }
}
</script>
