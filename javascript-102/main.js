/* 
/ 1 Задание*/

const user = {
   name: 'Bogdan',
   age: '20',
   hometown: 'Kemerovo'

}
console.log(`я живу в городе `, user.hometown) 

/* 
/ 2 Задание
const user = {
Bogdan: {
   age: '20',
   hometown: 'Kemerovo',

   sayHello(name){
      console.log(`Hello ${name}`)
}
   }
   }

console.log(user.Bogdan)
user.Bogdan.sayHello('Bard')
*/

/* 
/ 3 Задание
const users = [
{
   name: 'Mark',
   age: 20,
   isAdmin: true,
},
{
   name: 'Nikita',
   age: 19,
   isAdmin: false,
},
{
   name: 'Jonn',
   age: 22,
   isAdmin: true,
},
{
   name: 'Kirill',
   age: 26,
      isAdmin: false,
},
{
   name: 'Artem',
   age: 26,
   isAdmin: false,
}
      
   ]

let chillBoy = 0

   for (let i = 0; i < users.length; i++) {
if(users[i].isAdmin == false) {
   chillBoy = chillBoy + 1;
}     
   }
   console.log(chillBoy)
   */