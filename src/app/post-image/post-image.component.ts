import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-image',
  template: `
    <h1>{{test}</h1>s
  `,
  templateUrl: './post-image.component.html',
  styleUrls: ['./post-image.component.scss']
})
export class PostImageComponent implements OnInit {
  public n = new Date()
  url: any

  public truthy: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }


  public reader = new FileReader()
  onChange(event: any): void {
    console.log(event.target.files[0]);

    const j = this.reader.readAsDataURL(event.target.files[0])
    this.reader.onload = () => {
      this.url = this.reader.result
    }
  }

  handleChange(): void {
    if (this.url !== undefined) {
      this.truthy = !this.truthy
    }
    console.log(this.truthy);
  }

}
