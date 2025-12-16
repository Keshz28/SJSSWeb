import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class AboutComponent {

  // 1. DATA FOR SJ SUNRISE SERVICES (Your existing data)
  sjCertificates = [
    {
      id: 1,
      title: 'Sinar Jasa - SSM',
      thumb: '/assets/Images/ssm_logo.png',
      description: 'Registered with the Companies Commission of Malaysia (Sinar Jasa).',
      gallery: [
        { type: 'image', url: '/assets/Images/ssm1.png' },
        { type: 'image', url: '/assets/Images/ssm2.png' },
        { type: 'image', url: '/assets/Images/ssm3.png' },
        { type: 'image', url: '/assets/Images/form_a1.png' },
        { type: 'image', url: '/assets/Images/form_a2.png' },
        { type: 'image', url: '/assets/Images/form_a3.png' },
        { type: 'image', url: '/assets/Images/form_a4.png' },
        { type: 'image', url: '/assets/Images/form_a5.png' }
      ]
    },
    {
      id: 2,
      title: 'Sinar Jasa - CIDB',
      thumb: '/assets/Images/cidb_logo.png',
      description: 'CIDB License for Sinar Jasa Trading.',
      gallery: [
        // Make sure this file exists, or update the name!
        { type: 'image', url: '/assets/cidb-license.jpg' }
      ]
    }
  ];

  // 2. DATA FOR SINAR JASA TRADING (New Data)
  sinarCertificates = [
    {
      id: 3,
      title: 'SJ Sunrise Services - SSM',
      thumb: '/assets/Images/ssm_logo.png', // Reusing logo, or put a different one
      description: 'Registered with the Companies Commission of Malaysia (SJ Sunrise Services).',
      gallery: [
        // REPLACE THESE with real Sinar Jasa images
        { type: 'image', url: '/assets/Images/sinar-ssm1.jpg' },
        { type: 'image', url: '/assets/Images/sinar-ssm2.jpg' }
      ]
    },
    {
      id: 4,
      title: 'SJ Sunrise Services - CIDB',
      thumb: '/assets/Images/cidb_logo.png',
      description: 'CIDB License for SJ Sunrise Services.',
      gallery: [
        // REPLACE THESE with real Sinar Jasa images
        { type: 'image', url: '/assets/Images/sinar-cidb1.jpg' }
      ]
    }
  ];

  // 3. LOGIC TO HANDLE SWITCHING
  activeTab: string = 'SJ'; // Default to SJ
  currentList = this.sjCertificates; // The list currently shown on screen

  switchTab(company: string) {
    this.activeTab = company;
    if (company === 'SJ') {
      this.currentList = this.sjCertificates;
    } else {
      this.currentList = this.sinarCertificates;
    }
  }

  // --- MODAL LOGIC (Standard) ---
  selectedCert: any = null;
  currentSlideIndex: number = 0;

  openModal(cert: any) {
    this.selectedCert = cert;
    this.currentSlideIndex = 0;
  }

  closeModal() {
    this.selectedCert = null;
  }

  nextSlide() {
    if (this.currentSlideIndex < this.selectedCert.gallery.length - 1) {
      this.currentSlideIndex++;
    } else {
      this.currentSlideIndex = 0; // Loop back to start
    }
  }

  prevSlide() {
    if (this.currentSlideIndex > 0) {
      this.currentSlideIndex--;
    } else {
      this.currentSlideIndex = this.selectedCert.gallery.length - 1; // Loop to end
    }
  }
}
