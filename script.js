
// first example 
var chapter=new Array(6).fill(false)
app= new Vue({
    el:'#app',
    data:{
        message:"Vue here",
        meetup:"hy- everyone",
          chapter:chapter
    }
});

//vanila
var vanil = document.getElementById("vanilla");
vanil.innerHTML = "vanilla here";
//jquery
var jq = $("#jquery");
jq.text("jquery here");

//example 2 attribute bind


app2= new Vue({
    el:'#app2',
    data:{
        message:' on ' + new Date().toLocaleString()
    , chapter:chapter
    }
});

//vanila
vanil = document.getElementById("vanilla2");
vanil.children[0].title = "vanila title here"
vanil.querySelector('span').title= vanil.children[0].title + " with query selector";
//jquery
jq = $("#jquery2 > span");

jq.prop("title","jquery title here");


//example 3  attribute bind


app3= new Vue({
    el:'#app3',
    data:{
        toto:true
        , chapter:chapter
    }
});

//vanila
vanil = document.getElementById("vanilla3");
vanil.hidden=false;
//jquery
jq = $("#jquery3");

jq.prop("hidden",false);

//example 4 loops
var app4 = new Vue({
    el: '#app4',
    data: {
        
      todos: [
        { text: 'Learn JavaScript' },
        { text: 'Learn Vue' },
        { text: 'Build something awesome' }
      ]
      , chapter:chapter
    }
  })

  
//vanila
var todos= [
    { text: 'Learn JavaScript' },
    { text: 'Learn Vue' },
    { text: 'Build something awesome' }
  ];

vanil = document.getElementById("vanilla4");
todos.forEach(function (obj){
    var node = document.createElement("LI");                 // Create a <li> node
    //var textnode = document.createTextNode(obj.text);         // Create a text node
    //node.appendChild(textnode);                              // Append the text to <li>
    node.innerText=obj.text;                              // Append the text to <li>
   vanil.querySelector("ol").appendChild(node);     // Append <li> to <ol> 
});

//jquery
jq = $("#jquery4 > ol ");
$.each(todos,function(index,obj){

    jq.append("<li>"+obj.text+"</li>");
});

//example 5 one direction event binding

var app5 = new Vue({
    el:"#app5",
    data:{
        message:"reverse text example"
        , chapter:chapter
    },
    methods:{
        reverseMessage:function(a){
            console.log(a)
            this.message = this.message.split('').reverse().join('');
        }
        
    }
})

//vanilla
// vanil5 = document.getElementById("vanilla5");
// v5p = vanil5.querySelector("p");
// v5p.innerText = "vanilla reverse";
// function reverseMessage(){

//     v5p.innerText =  v5p.innerText.split('').reverse().join('');

// }

function vanilla_OBJ( element,text) {

    this.vanil5 =  document.getElementById(element);
    this.v5p = this.vanil5.querySelector("p");
    this.text= this.v5p.innerText = text;
    this.click=function reverseMessage(){
    
        this.v5p.innerText =  this.v5p.innerText.split('').reverse().join('');
    
    }


}
vanilla5 = new vanilla_OBJ ( "vanilla5" , "vanilla reverse");

//jquery
jq5paragraph = $('#jquery5 p');
jq5paragraph.text("jquery reverse");
jq5button = $('#jquery5 button');
jq5button.click(function (){
    jq5paragraph.text( jq5paragraph.text().split('').reverse().join('') ) ;
});


// example 6 two direction event binding
var  app6= new Vue(
       {el:"#app6",
       data:{
           message:"hello vue meetup",
           message2:"second 2 direction binding"
           , chapter:chapter
        }
    });

//navbar app

var navbarApp = new Vue({
    el:"#navbarApp",
    data:{
        titles:[
            "strings template",
            "HTML attribute binding",
            "conditionals",
            "loops",
            "one direction event binding",
            "two direction event binding"

        ]
        ,chapter:chapter
    }
    ,methods:{
        toggle:function(index){
            console.log(index)
            this.chapter.forEach(function (element, index, array) {
              
                Vue.set(array, index, false);
            }, this);
            Vue.set (chapter,index ,!chapter[index])
        }
    }

})