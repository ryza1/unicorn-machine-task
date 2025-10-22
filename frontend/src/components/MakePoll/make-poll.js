import { CORS_ROOT, createPoll } from '../../calls/calls.js';
import Poll from '../Poll/Poll.vue';

export default {
    name: "MakePoll",
    components: { Poll },
    data() {
        return {
            pollEditor: false,
            pollData: {
                title: "",
                options: []
            },
            link: ""
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
            this.link = "";
        },
        publishPoll() {
            if (!this.pollData.title || this.pollData.length < 2) {
                alert("You need a title and at least 2 options to publish a poll.");
                return;
            } else {
                this.cleanOptions();
                createPoll(this.pollData).then(response => {
                    console.log(response)
                    this.link = CORS_ROOT + response.link;
                });
            }
        },
        cleanOptions() {
            const tempArray = [];
            for (let index=0; index < this.pollData.options.length; index++) {
                if (this.pollData.options[index].option !== "") {
                    tempArray.push(this.pollData.options[index]);
                }
            }
            this.pollData.options = tempArray;
        },
        updateTitle(newTitle) {
            this.pollData.title = newTitle;
        },
        readyToPublish() {
            return (this.pollData.title !== "" && this.pollData.options.length > 1) ? "display: block" : "display: none";
        },
        addEmptyPollOption() {
            this.cleanOptions();
            this.pollData.options.push({option: "", votes: 0});
        },
        updateOption(key, value) {
            this.pollData.options[Number(key)] = {option: value, votes: 0};
        },
        copyLink() {
            navigator.clipboard.writeText(this.link);
            alert("Copied the text: " + this.link);
        },
        check() {
            console.log('check this is all working');
        }
    }
}