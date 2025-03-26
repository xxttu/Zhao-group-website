document.getElementById('joinForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const interest = document.getElementById('interest').value;
  
    // 1. Send to Google Form
    const googleFormData = new FormData();
    googleFormData.append('entry.825876790', name);
    googleFormData.append('entry.514005231', email);
    googleFormData.append('entry.1252223844', interest);
  
    fetch('https://docs.google.com/forms/d/e/1FAIpQLScMS9OV7cJl8eU_8uIxVnT6p7mgr7wUuY8UehOskiqsUtFcaA/formResponse', {
      method: 'POST',
      mode: 'no-cors',
      body: googleFormData
    });
  
    // 2. Send to FormSubmit (email notification)
    const emailFormData = new FormData();
    emailFormData.append('name', name);
    emailFormData.append('email', email);
    emailFormData.append('interest', interest);
  
    fetch('https://formsubmit.co/19f3a0bd4e58f6b62a31d4b0d7e4cc0f', {
      method: 'POST',
      body: emailFormData
    })
    .then(() => {
      document.getElementById('status').innerText = "Application submitted successfully!";
      document.getElementById('joinForm').reset();
    })
    .catch(() => {
      document.getElementById('status').innerText = "Submission failed. Please try again.";
    });
  });
  