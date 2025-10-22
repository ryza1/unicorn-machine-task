<template>
    <div>
        <div class="button" @click="this?.createEmptyPoll()">Create a Poll</div>
        <!-- <Poll v-if=this.pollEditor editable />  -->
        <div class="button" @click="this?.publishPoll()">Publish Poll</div>
    </div>    
</template>
<script src="./make-poll.js" />