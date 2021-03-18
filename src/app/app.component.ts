import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'big5';
  questions = [
  {id:1 , Q:"Én vagyok a partik lelke."},
  {id:2 , Q:"Kevésbé érdekelnek más emberek."},
  {id:3 , Q:"Mindig felkészült vagyok."},
  {id:4 , Q:"Könnyen rástresszelek a dolgokra."},
  {id:5 , Q:"Bő szókinccsel rendelkezem."},
  {id:6 , Q:"Nem beszélek sokat."},
  {id:7 , Q:"Érdekelnek az emberek."},
  {id:8 , Q:"Rendetlen vagyok."},
  {id:9 , Q:"Többnyire nyugodt vagyok."},
  {id:10, Q:"Nehezemre esik, hogy megértsek elvont elképzeléseket."},
  {id:11, Q:"Komfortosan érzem magam más emberek között."},
  {id:12, Q:"Könnyen megsértek másokat."},
  {id:13, Q:"Odafigyelek a részletekre."},
  {id:14, Q:"Aggodalmas típus vagyok."},
  {id:15, Q:"Élénk a képzeletem."},
  {id:16, Q:"Szeretek a háttérben maradni."},
  {id:17, Q:"Azonosulni tudok mások érzéseivel."},
  {id:18, Q:"Felfordulást keltek."},
  {id:19, Q:"Ritkán vagyok levert."},
  {id:20, Q:"Nem érdekelnek az absztrakt ideák."},
  {id:21, Q:"Általában én kezdeményezem a beszélgetéseket."},
  {id:22, Q:"Nem érdekelnek mások problémái."},
  {id:23, Q:"Azonnal elvégzem a rám bízott feladatokat."},
  {id:24, Q:"Könnyen kizökkentenek a váratlan dolgok/események."},
  {id:25, Q:"Kiváló ötleteim vannak."},
  {id:26, Q:"Kevés mondanivalóm van."},
  {id:27, Q:"Vajszívű vagyok."},
  {id:28, Q:"Gyakran elfelejtem visszatenni a dolgokat a helyükre."},
  {id:29, Q:"Könnyen felbosszantom magam."},
  {id:30, Q:"Nincs jó képzelőerőm."},
  {id:31, Q:"Egy eseményen sokat társalgok különböző emberekkel."},
  {id:32, Q:"Nem nagyon érdekelnek mások."},
  {id:33, Q:"Kedvelem a rendezettséget."},
  {id:34, Q:"Jellemez a hangulatváltozás."},
  {id:35, Q:"Gyorsan megértek dolgokat."},
  {id:36, Q:"Nem szeretem magamra vonni a figyelmet."},
  {id:37, Q:"Szívesen szánok időt másokra."},
  {id:38, Q:"Kibújok a felelősség alól."},
  {id:39, Q:"Gyakoriak a hangulatingadozásaim."},
  {id:40, Q:"Bonyolult szavakat használok."},
  {id:41, Q:"Nem zavar, ha a figyelem középpontjában vagyok."},
  {id:42, Q:"Átérzem mások érzéseit."},
  {id:43, Q:"Szervezetten élek."},
  {id:44, Q:"Sok dolog irritál."},
  {id:45, Q:"Gyakran reflektálok helyzetekre."},
  {id:46, Q:"Idegenek között visszahúzódó vagyok."},
  {id:47, Q:"Az emberek komfortosan érzik magukat a környezetemben."},
  {id:48, Q:"Pontos vagyok a munkámban."},
  {id:49, Q:"Gyakran érzem magam melankolikusan."},
  {id:50, Q:"Tele vagyok ötletekkel."}
]

mainMatrix = new Map();
tempout;
ready: boolean = false;
O: Number;
C: Number;
E: Number;
A: Number;
N: Number;

intoMatrix(tempin: Array<2>){
  let id = tempin[0]
  let answ = tempin[1]

  this.mainMatrix.set(id, answ)
 
  if (this.mainMatrix.size == 50){

    this.ready = true
    this.addUpResults()

  console.log(this.mainMatrix)
  console.log(this.ready)

  }

  
  
}

receiveAnswerWithQID($event: Array<2>){
  this.tempout = $event
  //console.log(this.tempout)
  this.intoMatrix(this.tempout)
  
  }

addUpResults(){
  
  
  this.O = 8 + this.mainMatrix.get(10)+
               this.mainMatrix.get(15)-
               this.mainMatrix.get(20)+
               this.mainMatrix.get(25)-
               this.mainMatrix.get(30)+
               this.mainMatrix.get(35)+
               this.mainMatrix.get(40)+
               this.mainMatrix.get(45)+
               this.mainMatrix.get(50)

  this.C = 14 + this.mainMatrix.get(3)-
                this.mainMatrix.get(8)+
                this.mainMatrix.get(13)-
                this.mainMatrix.get(18)+
                this.mainMatrix.get(23)-
                this.mainMatrix.get(28)+
                this.mainMatrix.get(33)-
                this.mainMatrix.get(38)+
                this.mainMatrix.get(43)+
                this.mainMatrix.get(48)

  this.E = 20 + this.mainMatrix.get(1) - 
                this.mainMatrix.get(6) +
                this.mainMatrix.get(11)  - 
                this.mainMatrix.get(16)  + 
                this.mainMatrix.get(21)  - 
                this.mainMatrix.get(26)  + 
                this.mainMatrix.get(31)  - 
                this.mainMatrix.get(36)  + 
                this.mainMatrix.get(41)  - 
                this.mainMatrix.get(46) 


  this.A = 14 - this.mainMatrix.get(2)  + 
                this.mainMatrix.get(7)  -
                this.mainMatrix.get(12) + 
                this.mainMatrix.get(17) - 
                this.mainMatrix.get(22) + 
                this.mainMatrix.get(27) - 
                this.mainMatrix.get(32) + 
                this.mainMatrix.get(37) + 
                this.mainMatrix.get(42) + 
                this.mainMatrix.get(47) 
                
                
  this.N = 38 -  this.mainMatrix.get(4)  + 
                 this.mainMatrix.get(9)  - 
                 this.mainMatrix.get(14)  + 
                 this.mainMatrix.get(19)  - 
                 this.mainMatrix.get(24)  - 
                 this.mainMatrix.get(29)  - 
                 this.mainMatrix.get(34)  - 
                 this.mainMatrix.get(39)  - 
                 this.mainMatrix.get(44)  -
                 this.mainMatrix.get(49)               
                
                
                console.log(this.O, this.C, this.E, this.A, this.N)
}








}

