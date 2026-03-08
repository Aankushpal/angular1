import { Component } from "@angular/core";

@Component({
    selector: "app-custom", //! Here we can also give the normal name like custom without aap, but we write it to maintain the consistancy of the project and understandble, even if we make something like div basically same name as html tags, still this component will be work, it will override the html tags with component names
    templateUrl : "./custom.html",
    styleUrl: "./custom.css"
})
export class Custom{};