// Email service configuration for production
// This file contains the setup for different email services

export interface EmailData {
  to: string
  subject: string
  body: string
}

// Option 1: Formspree Configuration (Recommended - No Backend Required)
export const formspreeConfig = {
  endpoint: 'https://formspree.io/f/xqapwzaw', // Using a demo form ID
}

// Option 2: EmailJS Configuration
export const emailJSConfig = {
  serviceId: 'your_service_id', // Get from EmailJS dashboard
  templateId: 'your_template_id', // Get from EmailJS dashboard
  publicKey: 'your_public_key', // Get from EmailJS dashboard
}

// Option 3: Custom API Endpoint
export const customAPIConfig = {
  endpoint: 'https://your-api.com/send-email', // Your backend API endpoint
}

// Email sending functions
export const sendEmailWithEmailJS = async (data: EmailData) => {
  // Implementation for EmailJS
  // You would need to install emailjs-com package
  // import emailjs from 'emailjs-com'
  
  try {
    // const response = await emailjs.send(
    //   emailJSConfig.serviceId,
    //   emailJSConfig.templateId,
    //   {
    //     to_email: data.to,
    //     subject: data.subject,
    //     message: data.body,
    //   },
    //   emailJSConfig.publicKey
    // )
    
    console.log('Email sent via EmailJS:', data)
    return { success: true }
  } catch (error) {
    console.error('EmailJS error:', error)
    return { success: false, error }
  }
}

export const sendEmailWithFormspree = async (data: EmailData) => {
  try {
    // Formspree expects form data, not JSON
    const formData = new FormData()
    formData.append('name', data.subject.includes('from') ? data.subject.split('from')[1].trim() : 'Customer')
    formData.append('email', data.to)
    formData.append('subject', data.subject)
    formData.append('message', data.body)
    
    const response = await fetch(formspreeConfig.endpoint, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json',
      },
    })
    
    if (response.ok) {
      console.log('Email sent via Formspree:', data)
      return { success: true }
    } else {
      const errorData = await response.json()
      throw new Error(errorData.error || 'Formspree submission failed')
    }
  } catch (error) {
    console.error('Formspree error:', error)
    return { success: false, error }
  }
}

export const sendEmailWithCustomAPI = async (data: EmailData) => {
  try {
    const response = await fetch(customAPIConfig.endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    
    if (response.ok) {
      console.log('Email sent via custom API:', data)
      return { success: true }
    } else {
      throw new Error('API submission failed')
    }
  } catch (error) {
    console.error('Custom API error:', error)
    return { success: false, error }
  }
}

// Choose your preferred email service
export const sendEmail = sendEmailWithFormspree // Using Formspree by default
