import { Component, OnInit } from '@angular/core';
import { Tutorial } from 'src/app/models/tutorial.model';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-add-tutorial',
  templateUrl: './add-tutorial.component.html',
  styleUrls: ['./add-tutorial.component.css']
})
export class AddTutorialComponent implements OnInit {
  
  tutorial: Tutorial = new Tutorial();
  submitted = false;

  constructor(
    private tutorialService: TutorialService
    
    ) { }

  ngOnInit(): void {
    this.tutorial.published = false;
  }

  saveTutorial(): void {
    this.tutorialService.create(this.tutorial)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }


}
