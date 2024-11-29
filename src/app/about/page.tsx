'use client';  // Ensure this is a client component

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function About() {
  return (
    <div className="container py-5">
      <h1 className="text-success text-center mt-5">Welcome to My Profile</h1>
      <p className="lead text-center mb-4">
        I am a dedicated software engineer with a strong background in creating scalable web applications. I thrive on turning complex problems into simple solutions and enjoy collaborating with diverse teams to bring innovative projects to life.
      </p>

      <section className="mb-5">
        <h2 className="text-center text-info">Core Competencies</h2>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Full-Stack Development (React, Node.js, Express)</li>
          <li className="list-group-item">Front-End Frameworks (React, Next.js, Angular)</li>
          <li className="list-group-item">Backend Architecture & API Integration</li>
          <li className="list-group-item">Version Control and Collaboration (Git, GitHub)</li>
        </ul>
      </section>

      <div className="text-center mt-4">
        <a href="/contact" className="btn btn-success btn-lg">Connect with Me</a>
      </div>
    </div>
  );
}
