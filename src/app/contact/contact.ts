import { Component } from '@angular/core';
import { RouterLink } from '@angular/router'; // Important for Navbar

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class ContactComponent {
  // Logic is simple for this page, so we don't need much code here.
}
