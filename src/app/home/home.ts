import { Component } from '@angular/core';
import { RouterLink } from '@angular/router'; // <--- IMPORT THIS

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink], // <--- ADD THIS HERE
  templateUrl: './home.html', // Make sure this matches your actual file name!
  styleUrl: './home.css'
})
export class HomeComponent {
  // ...
}
