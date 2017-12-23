import { Component } from "@angular/core";

@Component({
  selector: "nex-app-container",
  styleUrls: ["./app-container.component.scss"],
  templateUrl: "./app-container.component.html"
})
export class AppContainerComponent {
  public title = "app";

  public testClick() {
    alert("this works");
  }
}
