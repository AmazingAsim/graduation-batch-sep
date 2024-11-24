// //what is javascript. javascript is a programming language. 
// //it is used to calculate , mathematical operations,controlling css and html,add events and functions
// // to the webpages.



// // varaibles , data types

// let a = 10
// let b = 2.01 // numbers
// let c = -456
// let name = 'Asim' // string '' or "" or ``
// var car = "BMW"
// let phone = `iPhone`

// let isTrue = true // boolean
// var day = false;
// const pi = 3.14
// const g = 9.8
// {
//     let x = 10
//     var y = 20
// }

// // non premitive datatypes
// let arr = [10, 20, 30, 40, 50]

// let obj = {
//     name: 'Asim',
//     age: 25
// }

// console.log(typeof(name))
// console.log(typeof(pi))
// console.log(typeof(arr))
// console.log(typeof(obj))
// // operations
//   // arthematic operations
//    // + - / * % ++ -- **
//    let x = 10
//    console.log(x++)
//    console.log(x)
//    console.log('asim'+'sheikh')
//    console.log('asim'-'sheikh')
//    console.log('asim'*2)
//    console.log(2**3)


//    // conditons statements

// let coin = 'copper'

// if(coin=='heads'){
//     console.log('heads');
// }
// else if(coin=='tails'){
//     console.log('tails');
// }
// else{
//     console.log('invalid coin value');
// }

// let dice = 1000;

// switch(dice){
//     case 1:
//         console.log('move one step');
//         break
//     case 2:
//         console.log('move two step');
//         break
//     case 3: 
//         console.log('move three steps');
//         break
//     default:
//         console.log('invalid dice value');
// }

// let hungry = false;
 
// hungry? console.log('eat someting'): console.log('do something')

// // functions
// let r = add(10,20)
// function add(a,b){
//     return a+b;
//     console.log('hu hahaah');
// }

// // anonymous function

// let jump = function (){
//     console.log('jump jump jump');
// }

// jump();

// let result = add(10,20)
//  console.log(result)

//  // arrow function   a=>Math.round(a)
//  let subtract = (a,b)=>{return Math.abs(a-b)}

//  let Car = {
//      name: 'BMW',
//      start:function(){
//         console.log(this)
//      },
//      stop:()=>{console.log(this)}
//  }

//  Car.stop()


// higher order functions


// callback functions.


// loops

// for loop  ,  white loop, for in loop, for of loop, map, filter , reduce

// for(let i=0; i<=50;i+=5){
    //     console.log(i)
    // }
    
    // let hungry = true;
    
    // while(hungry){
        //     alert('eat pizza');
        //     hungry = confirm('press okay to eat something or press cancel to exit');
        // }
        
        // let pen = {
            //     color: 'black',
            //     ink:"red",
            //     price:"10"
            // }

// for(let key in pen){
//     console.log(pen[key])
// }

// let fruits = ['apple','mango','banana'];

// for(let fruit of fruits){
//     console.log(fruit)
// }

// let numbers = [1,2,3,4,5,6,7,8,9,10];
// map
// let result = numbers.map(function(n){
//     return n*5
// })

// let odd = numbers.filter(n=>n%2!=0);
// let even = numbers.filter(function(n){return n%2==0})
// console.log(result);

// reduce
// let sum = numbers.reduce((a,b)=>a+b)
// let product = numbers.reduce(function(total,current){return total*current})

// dom manipulation  // document object model


/// DOM --> document object model


// let hello = document.getElementById('hello');
// console.log(hello)
// hello.innerHTML = 'bye bye'
// hello.style.color = 'red';
// let h3 = document.createElement('h3');
// h3.innerHTML = 'added with javascript';
// document.body.appendChild(h3);
// document.body.removeChild(hello);

// let subheaders = document.getElementsByClassName('subheader');

// console.log(subheaders)

// for(let subheader of subheaders){
//     subheader.style.fontFamily = 'cursive';
//     subheader.style.backgroundColor = 'blue';
//     subheader.style.display = 'block';
// }

// subheaders[2].innerHTML = 'I am batman';

// let asim = document.querySelector('.asim');
// let allasim = document.querySelectorAll('.asim');
// asim.style.color = 'red';

// console.log(allasim);

// for(let a of allasim){
    //     a.style.color = 'green';
    // }
    // events
    
    // let name = ""
    // function setName(e){
        //  name = e.target.value;
//  document.getElementById('nameDisplay').innerHTML = name;
// }


// function setColor(e){
    //     document.body.style.backgroundColor = e.target.value;
    // }
    
    // function submitData(){
        
    //     document.getElementById('nameDisplay').innerHTML = name;
    //     document.getElementById('nameDisplay').style.fontSize = '30px';
//     console.log({name:name})
// }

// let flag = true;

// let togglebtn = document.getElementById('toggle');

// togglebtn.addEventListener('click',function(){
    //     let para = document.getElementById('para');
    //     if(flag){
        //         para.style.display = 'none';
        //         flag = false;
        //     }
        //     else{
            //         para.style.display = 'block';
            //         flag = true;
            //     }
            // })
            
            // function f1(){
                //     f2()
                // }
                
                // function f2(){
                    //   f3()
                    // }
                    
                    // function f3(){
                        //   console.log('last')
// }

// f1();


// async javascript
// how javascript works


// setTimeout(function(){
//     console.log('surprise');
//     setTimeout(function(){console.log('good bye')},1000);
// },1000);


// console.log('hello')
// console.log('jello')
// console.log('mello')
// console.log('yello')

// promises

// let marks = 90;

// let iPhone = new Promise(function(res,rej){
//     if(marks>=90){
//         setTimeout(function(){res('new I phone')},5000)
//     }
//     else{
//         rej('no phone now')
//     }
// });


// iPhone.then(function(res){console.log(res)}).catch(function(err){console.log(err)}).finally(function(){ console.log('finally');})


let data = fetch('https://jsonplaceholder.typicode.com/users')

data
.then(function(res){return res.json()})
.then(function(res){console.log(res)});