import Chalk from "chalk";
import axios, { AxiosResponse } from "axios";
//const chalk = require('chalk');

//console.log(Chalk.yellow('H')+Chalk.green('e')+Chalk.blue('l')+Chalk.red('l')+Chalk.magenta('o ')+Chalk.white('w')+Chalk.gray('o')+Chalk.cyan('r')+Chalk.redBright('l')+Chalk.greenBright('d')+Chalk.blueBright('!'));
//let loopnumber: number = 0
//console.log(loopnumber)
//while(loopnumber < 3){
   //loopnumber =loopnumber+1;
   //console.log(loopnumber)
//}
function whenresponded(response: AxiosResponse<user[]>){

    for (let index = 0; index < response.data.length; index++) {
        const element: user = response.data[index];
        console.log(element.address.street) 
        console.log(element.address.zipcode) 
    }
    
}
function whenrespondedwitherror(response:Error){
console.error(response)
    
    
}
axios.get("https://jsonplaceholder.typicode.com/users").then(whenresponded).catch(whenrespondedwitherror)

interface user {
    id:number;
    name: string;
    username:string;
    email:string;
    address: address;
}
interface address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo:geo;
}
interface geo{
    lat:string;
    lng:string;

}













class product 
{
   cost: number;
   id: string;

   constructor(cost: number, id: string){
       this.cost = cost
       this.id = id
   }
   setid(){

   }
   SetCost(){

   }
}
class book extends product {
   title: string;
   author: string;

   constructor(cost: number, id: string,title: string,author: string){
       super(cost, id)
       this.title = title
       this.author = author

   }
   GetTitle():string{
       return this.title
   }
   GetAuthor():string{
       return this.author
   }
}
class bluray extends product {
   title: string;
   year: number;

   constructor(cost: number, id: string,title: string,year: number){
       super(cost, id)
       this.title = title
       this.year = year

   }
   GetTitle():string{
       return this.title
   }
   GetYear():number{
       return this.year
   }

}
let book1: book = new book(5,'1','the book','somebody',)
let book2: book = new book(5,'2','the other book','somebody else',)
let bluray1: bluray = new bluray(10,'3','the movie',2010)
let bluray2: bluray = new bluray(10,'4','the other movie',2011)