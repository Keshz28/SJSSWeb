import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class ProjectsComponent {

  // UPDATED DATA STRUCTURE
  projectList = [
    {
      id: 1,
      title: 'Sari Alamanda, Sungai Choh, Housing Project',
      thumb: '/assets/project1-thumb.jpg',
      description: 'A complete renovation of the housing area including new amenities.',
      // "gallery" is now a list of multiple items
      gallery: [
        { type: 'image', url: '/assets/project1-1.jpg' }, // Image 1
        { type: 'image', url: '/assets/project1-2.jpg' }, // Image 2
        { type: 'video', url: '/assets/Videos/Alamanda1.mp4' },
        { type: 'video', url: '/assets/Videos/Alamanda2.mp4' },
        { type: 'video', url: '/assets/Videos/Alamanda3.mp4' } // Video
      ]
    },
    {
      id: 2,
      title: 'Temple',
      thumb: '/assets/project2-thumb.jpg',
      description: 'A complete renovation of the temple.',
      gallery: [
        { type: 'video', url: '/assets/Videos/Temple1.mp4' },
        { type: 'video', url: '/assets/Videos/Temple2.mp4' },
        { type: 'video', url: '/assets/Videos/Temple3.mp4' },
        { type: 'video', url: '/assets/Videos/Temple4.mp4' },
        { type: 'image', url: '/assets/project2-plan.jpg' }
      ]
    },
    {
      id: 3,
      title: 'LSH33, Sentul',
      thumb: '/assets/project3-thumb.jpg',
      description: 'A modern residential project in Sentul.',
      gallery: [
        { type: 'image', url: '/assets/project3-1.jpg' },
        { type: 'video', url: '/assets/Videos/LSH33-1.mp4' },
      ]
    }
    // Add more projects following this pattern...
  ];

  selectedProject: any = null;
  currentSlideIndex: number = 0; // Tracks which picture we are looking at

  // Open the Modal and start at the first picture (0)
  openModal(project: any) {
    this.selectedProject = project;
    this.currentSlideIndex = 0;
  }

  closeModal() {
    this.selectedProject = null;
  }

  // Go to Next Slide
  nextSlide() {
    if (this.currentSlideIndex < this.selectedProject.gallery.length - 1) {
      this.currentSlideIndex++;
    } else {
      this.currentSlideIndex = 0; // Loop back to start
    }
  }

  // Go to Previous Slide
  prevSlide() {
    if (this.currentSlideIndex > 0) {
      this.currentSlideIndex--;
    } else {
      // Loop to the last item
      this.currentSlideIndex = this.selectedProject.gallery.length - 1;
    }
  }
}
