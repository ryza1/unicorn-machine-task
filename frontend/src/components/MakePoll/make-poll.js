import { CORS_ROOT, createPoll } from '../../calls/calls.js';
import Poll from '../Poll/Poll.vue';
import { useRouter } from 'vue-router';

export default {
    name: "MakePoll",
    components: { Poll },
    data() {
        return {
            pollEditor: true,
            pollData: {
                title: "",
                options: []
            },
            link: ""
        }
    },
    mounted() {
        this.router = useRouter();
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
                createPoll(this.pollData).then(response => {
                    console.log(response)
                    this.link = CORS_ROOT + response.link;
                });
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
        copyLink() {
            const path = this.router.currentRoute;
            console.log(path);
            navigator.clipboard.writeText(this.link);
            alert("Copied the text: " + this.link);
        },
        check() {
            console.log('check this is all working');
        }
    }
}