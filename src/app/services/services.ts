import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router'; // Important for *ngFor and *ngIf

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterLink], // Add CommonModule here
  templateUrl: './services.html',
  styleUrl: './services.css'
})
export class ServicesComponent {

  // This is your data. You can add as many services as you want here.
  serviceList = [
    {
      id: 1,
      title: 'Engineering Jobs',
      image: '/assets/Images/engineringjobs_img.jpg', // Main card image
      description: 'We provide specialized recruitment and staffing solutions for engineering professionals across construction, civil, mechanical, and electrical projects.',
      galleryImage: 'assets/images/gallery-construction-large.jpg' // Image shown in popup
    },
    {
      id: 2,
      title: 'Building Maintenance',
      image: '/assets/Images/maintanance_img.jpg',
      description: ' We offer comprehensive ongoing care for your property, including routine inspections, preventive repairs, and system upkeep to ensure everything runs smoothly.',
      galleryImage: 'assets/images/gallery-renovation-large.jpg'
    },
    {
      id: 3,
      title: 'Renovation',
      image: '/assets/Images/renovation_img.jpg',
      description: ' Our team handles complete transformation projects, from kitchen and bathroom remodels to office fit-outs and structural refurbishments.',
      galleryImage: 'assets/images/gallery-design-large.jpg'
    },
    {
      id: 4,
      title: 'Plumbing and Electrical',
      image: '/assets/Images/plumbing_img.jpg',
      description: ' We install, repair, and maintain all critical systems—from pipes and fixtures to wiring, panels, and lighting—ensuring safety and functionality.',
      galleryImage: 'assets/images/gallery-temple-large.jpg'
    },
    {
      id: 5,
      title: 'Cleaning Services & Landscaping',
      image: '/assets/Images/cleaning_img.jpg',
      description: ' We provide a full suite of property care, including deep cleaning, regular janitorial services, gardening, lawn maintenance, and hardscaping.',
      galleryImage: 'assets/images/gallery-temple-large.jpg'
    },
    {
      id: 6,
      title: 'Aircond Services',
      image: '/assets/Images/aircond_img.jpg',
      description: 'We specialize in the installation, servicing, repair, and maintenance of all air conditioning and ventilation systems for optimal comfort.',
      galleryImage: 'assets/images/gallery-temple-large.jpg'
    },
    {
      id: 7,
      title: 'Temple Altars',
      image: '/assets/Images/temple_img.jpg',
      description: 'We design, construct, and restore sacred temple altars and ritual spaces with traditional and modern craftsmanship with reverent detail.',
      galleryImage: '/assets/Images/temple_img.jpg'
    }
    // You can copy-paste the block above to add more services
  ];

  // This variable tracks which service is currently clicked.
  // If it is null, the popup is hidden.
  selectedService: any = null;

  // Function to open the popup
  openModal(service: any) {
    this.selectedService = service;
  }

  // Function to close the popup
  closeModal() {
    this.selectedService = null;
  }
}
