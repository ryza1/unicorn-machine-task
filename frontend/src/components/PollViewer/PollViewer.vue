<template>
    <Poll :title=this.pollData.title :options=this.pollData.options 
        @submitVote=this.submitVote
    />
</template>
<script>
import { getPoll, votePoll } from '../../calls/calls.js';
import Poll from '../Poll/Poll.vue';
export default {
    name: "PollViewer",
    components: {Poll},
    data() {
        return {
            uniquePollId: "",
            pollData: {
                title: "",
                options: [],
                locked: false
            },
            showResults: false,
            optionsUnsorted: {}
        }
    },
    mounted() {
        this.uniquePollId = this.$route.params.pollId;
        getPoll(this.uniquePollId).then(response => {
           
            this.pollData.title = response.title;
            this.optionsUnsorted = response.options;
            const numberOfOptions = Object.keys(this.optionsUnsorted).length;
            //force order:
            for (let index = 0; index < numberOfOptions; index++) {
                const key = Number(index);
                this.pollData.options.push(this.optionsUnsorted[key]);
            }
            this.pollData.locked = response.locked;
            console.log("data stored", this.pollData);
        })
    },
    methods: {
        showResults() {
            if (localStorage.getItem("voted" + "_"  + this.uniquePollId)) {
                this.showResults = true;
            }
        },
        submitVote(value) {
            if (localStorage.getItem("voted" + "_"  + this.uniquePollId)) {
                alert("already voted");
            } else {
                votePoll(this.uniquePollId, Number(value));
                localStorage.setItem("voted" + "_"  + this.uniquePollId, value);
            }
            
        }
    }
}
</script>