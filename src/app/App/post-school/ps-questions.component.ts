import { Component } from "@angular/core";

@Component({
    selector: "ps-questions",
    templateUrl: "/app/post-school/ps-questions.component.html",
    styleUrls: ["app/Post-School/ps-questions.component.css"]
})

export class PSQuestionsComponent{
    title: string = "Post-School Survey Questions";

    print() {
        window.print();
    }

    close() {
        window.close();
    }
}