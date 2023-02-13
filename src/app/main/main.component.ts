import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
    public products = [
      {
        image: 'https://avatars.githubusercontent.com/u/67523269?v=4',
        name: 'Product 1',
      },
      {
        image: 'https://images.unsplash.com/photo-1611831924389-8b5b0b5b5f1a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        name: 'Product 2',
      },
      {
        image: 'https://images.unsplash.com/photo-1611831924389-8b5b0b5b5f1a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      },
      {
        image: 'https://images.unsplash.com/photo-1611831924389-8b5b0b5b5f1a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      },
      {
        image: 'https://images.unsplash.com/photo-1611831924389-8b5b0b5b5f1a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      }
    ]
}
