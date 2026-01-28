# Portfolio Website

A modern, professional portfolio website built with FastAPI backend and vanilla JavaScript frontend.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-brightgreen)
![Python](https://img.shields.io/badge/Python-3.8+-blue)
![FastAPI](https://img.shields.io/badge/FastAPI-Latest-009688)

## 🚀 Features

- **FastAPI Backend**: RESTful API with automatic documentation
- **Dynamic Content**: Projects, skills, and about info served via APIs
- **Contact Form**: Functional contact form with email integration
- **Responsive Design**: Mobile-friendly, professional UI
- **Modern Styling**: Beautiful gradient design with smooth animations
- **Easy Deployment**: Ready to deploy on Render, Railway, or Fly.io

## 📋 Table of Contents

- [Installation](#installation)
- [Running Locally](#running-locally)
- [Project Structure](#project-structure)
- [Customization](#customization)
- [API Endpoints](#api-endpoints)
- [Deployment](#deployment)
- [Technologies Used](#technologies-used)

## 🛠️ Installation

### Prerequisites

- Python 3.8 or higher
- pip (Python package manager)

### Setup Steps

1. **Clone the repository**
```bash
git clone https://github.com/Rajas49/portfolio-project.git
cd portfolio-project
```

2. **Create virtual environment**
```bash
# Windows
python -m venv venv
venv\Scripts\activate

# Mac/Linux
python3 -m venv venv
source venv/bin/activate
```

3. **Install dependencies**
```bash
pip install -r backend/requirements.txt
```

## 🏃 Running Locally

1. **Activate virtual environment** (if not already activated)
```bash
# Windows
venv\Scripts\activate

# Mac/Linux
source venv/bin/activate
```

2. **Start the server**
```bash
uvicorn backend.main:app --reload --host 0.0.0.0 --port 8000
```

3. **Open your browser**
```
http://localhost:8000
```

4. **View API Documentation**
```
http://localhost:8000/docs
```

## 📁 Project Structure
```
portfolio-project/
├── backend/
│   ├── __init__.py
│   ├── main.py              # FastAPI app and routes
│   ├── data.py              # Portfolio data (projects, skills, about)
│   ├── email_service.py     # Email handling logic
│   └── requirements.txt     # Python dependencies
├── frontend/
│   ├── index.html           # Main HTML file
│   └── static/
│       ├── style.css        # Styling
│       └── script.js        # JavaScript for API calls
├── venv/                    # Virtual environment (not in git)
└── README.md
```

## 🎨 Customization

### Update Your Information

Edit `backend/data.py` to customize:

1. **Personal Info** (`ABOUT` section)
```python
ABOUT = {
    "name": "Your Name",
    "title": "Your Title",
    "bio": "Your bio...",
    "email": "your.email@example.com",
    "github": "https://github.com/yourusername",
    "linkedin": "https://linkedin.com/in/yourusername",
    "location": "Your City, Country"
}
```

2. **Projects** (`PROJECTS` list)
```python
PROJECTS = [
    {
        "id": 1,
        "title": "Project Name",
        "description": "Project description",
        "technologies": ["Python", "FastAPI"],
        "github_url": "https://github.com/...",
        "demo_url": "https://...",  # or None
        "image_url": "/static/images/project.jpg"
    }
]
```

3. **Skills** (`SKILLS` dictionary)
```python
SKILLS = {
    "languages": ["Python", "JavaScript"],
    "frameworks": ["FastAPI", "React"],
    "ai_ml": ["TensorFlow", "PyTorch"],
    "tools": ["Git", "Docker"],
    "cloud": ["AWS", "Render"]
}
```

### Change Colors

Edit `frontend/static/style.css`:
- Background gradient: Line 8-9
- Header gradient: Line 19-20
- Accent colors: Search for `#667eea` and `#764ba2`

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Serve frontend HTML |
| GET | `/api/health` | Health check |
| GET | `/api/about` | Get personal info |
| GET | `/api/projects` | Get all projects |
| GET | `/api/projects/{id}` | Get specific project |
| GET | `/api/skills` | Get all skills |
| POST | `/api/contact` | Submit contact form |

### Example API Call
```bash
curl http://localhost:8000/api/projects
```

Response:
```json
{
  "projects": [
    {
      "id": 1,
      "title": "Project Name",
      "description": "...",
      "technologies": ["Python", "FastAPI"]
    }
  ]
}
```

## 🌐 Deployment

### Deploy to Render

1. **Create `render.yaml`** (in root folder)
```yaml
services:
  - type: web
    name: portfolio
    env: python
    buildCommand: pip install -r backend/requirements.txt
    startCommand: uvicorn backend.main:app --host 0.0.0.0 --port $PORT
```

2. **Push to GitHub**
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

3. **Deploy on Render**
   - Go to [render.com](https://render.com)
   - Connect your GitHub repo
   - Create new Web Service
   - Deploy!

### Deploy to Railway

1. **Install Railway CLI**
```bash
npm i -g @railway/cli
```

2. **Login and deploy**
```bash
railway login
railway init
railway up
```

### Deploy to Fly.io

1. **Install flyctl**
```bash
# Mac
brew install flyctl

# Windows
powershell -Command "iwr https://fly.io/install.ps1 -useb | iex"
```

2. **Deploy**
```bash
fly launch
fly deploy
```

## 🛠️ Technologies Used

### Backend
- **FastAPI** - Modern Python web framework
- **Python 3.8+** - Programming language
- **Uvicorn** - ASGI server
- **python-multipart** - Form handling
- **aiosmtplib** - Async email sending

### Frontend
- **HTML5** - Structure
- **CSS3** - Styling with gradients
- **Vanilla JavaScript** - Dynamic content loading
- **Fetch API** - REST API calls

## 📧 Email Configuration

To enable real email sending:

1. **Update `backend/email_service.py`** with your SMTP settings
2. **Use Gmail, SendGrid, or Mailgun**
3. **Add environment variables for credentials**

Example Gmail setup:
```python
SMTP_SERVER = "smtp.gmail.com"
SMTP_PORT = 587
EMAIL = os.getenv("SENDER_EMAIL")
PASSWORD = os.getenv("EMAIL_PASSWORD")
```

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest features
- Submit pull requests

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Rajas Parab**
- GitHub: [@Rajas49](https://github.com/Rajas49)
- LinkedIn: [Rajas Parab](https://www.linkedin.com/in/rajas-parab-b32a17201/)
- Email: rajasparab49@gmail.com

## 🙏 Acknowledgments

- Built with [FastAPI](https://fastapi.tiangolo.com/)
- Inspired by modern portfolio designs
- Gradient colors from [UI Gradients](https://uigradients.com/)

---

⭐ **Star this repo if you found it helpful!**