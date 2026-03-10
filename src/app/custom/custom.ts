import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: "app-custom", //! Here we can also give the normal name like custom without aap, but we write it to maintain the consistancy of the project and understandble, even if we make something like div basically same name as html tags, still this component will be work, it will override the html tags with component names
    templateUrl : "./custom.html",
    imports: [CommonModule],
    styleUrl: "./custom.css",
})
export class Custom{
    @Input()  name: string = "";
    @Input() data : any = "";

    @Output() clickEvent = new EventEmitter()
    // ? This EventEmitter is a tool to send the data to the parent, bcoz it gives us a power to create our own events just like here we createad "clickEvent" it could be anything like "abcdEvent", and event we're writting to just our understanding,
    //? clickEvent is useful in the parent component's html template, bcoz parent component only catch this sended data in parent comp when it has an idea in which event, otherwise it don't know when and from where we can get the data. 

    sendData(){
        this.clickEvent.emit("this data coming from child comp!!")
    }
};