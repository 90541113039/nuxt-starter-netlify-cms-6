'use client';  // Ensure this is a client component

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <div className="container py-5">
      {/* Hero Section */}
      <div className="text-center mb-5">
        <img src="/image2.jpg" alt="Logo" width={200} className="img-fluid" />
      </div>

      <h1 className="text-primary text-center mb-4">Welcome to My Portfolio</h1>
      <p className="lead text-center mb-5">
        Hi there! I'm an enthusiastic developer with a passion for creating dynamic and user-friendly applications. Explore my projects and learn more about my work.
      </p>

      {/* Portfolio Section */}
      <section className="portfolio">
        <h2 className="text-center mb-4">My Projects</h2>
        <p className="text-center mb-4">Check out some of my recent work below:</p>

        <div className="row g-4">
          {/* Project Card 1 */}
          <div className="col-lg-4 col-md-6">
            <div className="card h-100">
              <img src="https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg" className="card-img-top" alt="Project 1" />
              <div className="card-body">
                <h5 className="card-title">Interactive Web App</h5>
                <p className="card-text">A web application focused on user engagement, built using React and JavaScript to create dynamic content and interactive features.</p>
                <a href="/portfolio/project1" className="btn btn-primary">View Details</a>
              </div>
            </div>
          </div>

          {/* Project Card 2 */}
          <div className="col-lg-4 col-md-6">
            <div className="card h-100">
              <img src="https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455_1280.jpg" className="card-img-top" alt="Project 2" />
              <div className="card-body">
                <h5 className="card-title">E-commerce Platform</h5>
                <p className="card-text">A feature-rich e-commerce platform developed with React, integrated with payment gateways and responsive design for seamless shopping.</p>
                <a href="/portfolio/project2" className="btn btn-primary">View Details</a>
              </div>
            </div>
          </div>

          {/* Project Card 3 */}
          <div className="col-lg-4 col-md-6">
            <div className="card h-100">
              <img src="https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg" className="card-img-top" alt="Project 3" />
              <div className="card-body">
                <h5 className="card-title">Portfolio & Memory App</h5>
                <p className="card-text">A user-friendly application for creating, storing, and sharing memories, complete with customizable themes and an intuitive interface.</p>
                <a href="/portfolio/project3" className="btn btn-primary">View Details</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
