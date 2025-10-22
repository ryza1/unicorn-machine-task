import { createPoll } from '../../calls/calls.js';

export default {
    name: "MakePoll",
    data() {
        return {
            pollEditor: false,
            pollData: {
                title: "ok",
                options: ["go team go", "option B I guess"]
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
        check() {
            console.log('check this is all working');
        }
    }
}