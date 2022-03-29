Vue.component('codenames', {
    data: function (){
        return {
            flipped:false
        };
},
    props:["name", "codename"],
    template: '<div v-on:click="flip"><h3 v-bind:class="{hidden:flipped}">{{name}}</h3> <h3 v-bind:class="{hidden:!flipped}">{{codename}}</h3></div>',
        methods:{
            flip:function(){
            this.flipped=!this.flipped;
        }
        }

})

var app = new Vue({
    el:"#app",
    data:{
        name:"",
        email:"",
        nameError:"",
        emailError:"",
        submit:""
    },

    methods:{
        validate:function(){
            if (this.nameError== null && this.emailError == null){
                this.submit = "Thank you! Info is submitted";
            }else{
                this.submit ="Enter in name & email info before submitting";
            }
        }

    },
    watch: {
        name: function(name) {
            if (this.name.length < 3){
                this.nameError ="Please enter first & last name.";
            }else {
                this.nameError= null;
            }
        },
        email: function (email) {
            if(this.email.length <3){
                this.emailError = "Please enter a valid email."
            }else{
                this.emailError=null;
            }
        }
    }
})


var app2 = new Vue({
    el:"#app2",
    data: {
        codenames: [
            {name: "Protagonist", codename: "Joker"},
            {name: "Annie", codename: "Panther"},
            {name: "Ryuji", codename: "Skull"}

        ]
    }
});