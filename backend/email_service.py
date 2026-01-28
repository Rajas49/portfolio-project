from typing import Dict
import aiosmtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

# Email configuration (we'll use a simple approach for now)
# Later you can use Gmail, SendGrid, etc.

async def send_contact_email(form_data: Dict[str, str]) -> bool:
    """
    Send contact form email
    For now, this just validates and logs the data
    You'll configure real email sending later
    """
    
    # Validate required fields
    required_fields = ['name', 'email', 'message']
    for field in required_fields:
        if not form_data.get(field):
            return False
    
    # For now, just print to console (we'll add real email later)
    print("\n" + "="*50)
    print("📧 NEW CONTACT FORM SUBMISSION")
    print("="*50)
    print(f"Name: {form_data['name']}")
    print(f"Email: {form_data['email']}")
    print(f"Subject: {form_data.get('subject', 'No subject')}")
    print(f"Message: {form_data['message']}")
    print("="*50 + "\n")
    
    return True