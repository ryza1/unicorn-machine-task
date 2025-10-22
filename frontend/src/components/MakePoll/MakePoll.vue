<template>
    <div>
        <div class="button" @click="this?.createEmptyPoll()">Create a Poll</div>
        <Poll v-if=this.pollEditor :title="this.pollData.title" :options="this.pollData.options"  editable
            @updateTitle=this.updateTitle
            @addOption=this.addEmptyPollOption
            @updateOption=this.updateOption
        /> 
        <br>
        <div :style="this.readyToPublish()" class="button" @click="this?.publishPoll()">Publish Poll</div>
        <div @click=this.copyLink()>{{this.link}}</div>
    </div>    
</template>
<script src="./make-poll.js" />