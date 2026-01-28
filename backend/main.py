from fastapi import FastAPI, Form
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from backend.data import PROJECTS, SKILLS, ABOUT
from backend.email_service import send_contact_email
import os

app = FastAPI(title="Portfolio API")

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Mount static files
app.mount("/static", StaticFiles(directory="frontend/static"), name="static")

# API endpoints
@app.get("/api/health")
def health_check():
    return {"status": "healthy"}

@app.get("/api/projects")
def get_projects():
    return {"projects": PROJECTS}

@app.get("/api/projects/{project_id}")
def get_project(project_id: int):
    project = next((p for p in PROJECTS if p["id"] == project_id), None)
    if project:
        return project
    return {"error": "Project not found"}

@app.get("/api/skills")
def get_skills():
    return SKILLS

@app.get("/api/about")
def get_about():
    return ABOUT

# Contact form endpoint
@app.post("/api/contact")
async def contact_form(
    name: str = Form(...),
    email: str = Form(...),
    subject: str = Form(None),
    message: str = Form(...)
):
    """Handle contact form submission"""
    
    form_data = {
        "name": name,
        "email": email,
        "subject": subject or "Portfolio Contact",
        "message": message
    }
    
    success = await send_contact_email(form_data)
    
    if success:
        return {
            "status": "success",
            "message": "Thank you! Your message has been received."
        }
    else:
        return {
            "status": "error",
            "message": "Please fill in all required fields."
        }

# Serve frontend
@app.get("/")
def serve_frontend():
    return FileResponse("frontend/index.html")