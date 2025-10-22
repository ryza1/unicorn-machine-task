import { createPoll } from '../../calls/calls.js';
import Poll from '../Poll/Poll.vue';

export default {
    name: "MakePoll",
    components: { Poll },
    data() {
        return {
            pollEditor: true,
            pollData: {
                title: "",
                options: []
            }
        }
    },
    methods: {
        createEmptyPoll() {
            //clear the fields
            this.pollData = {
                title: "",
                options: []
            };
            this.pollEditor = true;
        },
        publishPoll() {
            if (!this.pollData.title || this.pollData.length < 2) {
                alert("You need a title and at least 2 options to publish a poll.");
                return;
            } else {
                createPoll(this.pollData);
            }
        },
        updateTitle(newTitle) {
            this.pollData.title = newTitle;
        },
        readyToPublish() {
            return (this.pollData.title !== "" && this.pollData.options.length > 1) ? "display: block" : "display: none";
        },
        addEmptyPollOption() {
            this.pollData.options.push({option: "", votes: 0});
        },
        updateOption(key, value) {
            this.pollData.options[Number(key)] = {option: value, votes: 0};
        },
        check() {
            console.log('check this is all working');
        }
    }
}