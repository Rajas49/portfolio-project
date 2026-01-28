// API Base URL
const API_URL = 'http://localhost:8000/api';

// Fetch and display About info
async function loadAbout() {
    try {
        const response = await fetch(`${API_URL}/about`);
        const data = await response.json();
        
        document.getElementById('name').textContent = data.name;
        document.getElementById('bio').textContent = data.bio;
        
        document.getElementById('contact-info').innerHTML = `
            <span>📧 ${data.email}</span>
            <span>📍 ${data.location}</span>
        `;
        
        document.getElementById('social-links').innerHTML = `
            <a href="${data.github}" target="_blank">GitHub</a>
            <a href="${data.linkedin}" target="_blank">LinkedIn</a>
            <a href="mailto:${data.email}">Email Me</a>
        `;
    } catch (error) {
        console.error('Error loading about data:', error);
    }
}

// Fetch and display Projects
async function loadProjects() {
    try {
        const response = await fetch(`${API_URL}/projects`);
        const data = await response.json();
        const projects = data.projects;
        
        const container = document.getElementById('projects-container');
        
        if (projects.length === 0) {
            container.innerHTML = '<p>No projects yet.</p>';
            return;
        }
        
        container.innerHTML = projects.map(project => `
            <div class="project-card">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="tech-tags">
                    ${project.technologies.map(tech => 
                        `<span class="tech-tag">${tech}</span>`
                    ).join('')}
                </div>
                <div class="project-links">
                    ${project.github_url ? 
                        `<a href="${project.github_url}" target="_blank">GitHub →</a>` 
                        : ''}
                    ${project.demo_url ? 
                        `<a href="${project.demo_url}" target="_blank">Live Demo →</a>` 
                        : ''}
                </div>
            </div>
        `).join('');
        
    } catch (error) {
        console.error('Error loading projects:', error);
        document.getElementById('projects-container').innerHTML = 
            '<p>Error loading projects.</p>';
    }
}

// Fetch and display Skills
async function loadSkills() {
    try {
        const response = await fetch(`${API_URL}/skills`);
        const skills = await response.json();
        
        const container = document.getElementById('skills-container');
        
        container.innerHTML = Object.entries(skills).map(([category, skillList]) => `
            <div class="skill-category">
                <h3>${category.replace('_', ' ')}</h3>
                <div class="skill-list">
                    ${skillList.map(skill => 
                        `<span class="skill-item">${skill}</span>`
                    ).join('')}
                </div>
            </div>
        `).join('');
        
    } catch (error) {
        console.error('Error loading skills:', error);
        document.getElementById('skills-container').innerHTML = 
            '<p>Error loading skills.</p>';
    }
}

// Handle contact form submission
async function handleContactForm(event) {
    event.preventDefault();
    
    const form = event.target;
    const submitBtn = form.querySelector('.submit-btn');
    const messageDiv = document.getElementById('form-message');
    
    // Get form data
    const formData = new FormData(form);
    
    // Disable button and show loading state
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';
    messageDiv.style.display = 'none';
    messageDiv.className = 'form-message';
    
    try {
        const response = await fetch(`${API_URL}/contact`, {
            method: 'POST',
            body: formData
        });
        
        const result = await response.json();
        
        if (result.status === 'success') {
            messageDiv.className = 'form-message success';
            messageDiv.textContent = result.message;
            form.reset();
        } else {
            messageDiv.className = 'form-message error';
            messageDiv.textContent = result.message;
        }
        
    } catch (error) {
        console.error('Error submitting form:', error);
        messageDiv.className = 'form-message error';
        messageDiv.textContent = 'Something went wrong. Please try again.';
    } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Send Message';
        messageDiv.style.display = 'block';
    }
}

// Load all data when page loads
document.addEventListener('DOMContentLoaded', () => {
    loadAbout();
    loadProjects();
    loadSkills();
    
    // Add form submit listener
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }
});