import { Env } from "./env";
import * as $ from 'jquery';
//import * as bs from 'bootstrap'; 

class App {

  greg: string;

  greeter(person: string) {
    return "Hello " + person;
  }

  Main() {
    this.greg = this.greeter("Gregory P. Doud"); 
    console.log(this.greg, Env.e); 
    // let ctrl = document.getElementById("p");
    // ctrl.textContent = this.greg;
    $("#p").addClass("text-primary").text(this.greg);
  }


}

(new App()).Main();