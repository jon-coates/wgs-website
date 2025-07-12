import React, { useState } from 'react';
import { Send, AlertCircle } from 'lucide-react';
import Button from '../ui/button';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    enquiryType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const enquiryTypes = [
    { value: '', label: 'Please select...' },
    { value: 'digitisation', label: 'Digitisation & Rehousing' },
    { value: 'conservation', label: 'Conservation Services' },
    { value: 'consultation', label: 'Consultation' },
    { value: 'assessment', label: 'Collection Assessment' },
    { value: 'other', label: 'Other Enquiry' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Check if we're in development mode
    const isDevelopment = import.meta.env.DEV;
    
    if (isDevelopment) {
      // In development, just show success and reset form
      console.log('Development mode: simulating form submission');
      setTimeout(() => {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          enquiryType: '',
          message: ''
        });
        setIsSubmitting(false);
      }, 1000);
      return;
    }

    try {
      // Create FormData object for proper encoding
      const formDataToSubmit = new FormData(e.target);
      
      console.log('Submitting form data:', Object.fromEntries(formDataToSubmit));
      
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formDataToSubmit).toString()
      });

      console.log('Response status:', response.status);
      console.log('Response ok:', response.ok);

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          enquiryType: '',
          message: ''
        });
      } else {
        const responseText = await response.text();
        console.error('Form submission failed:', response.status, responseText);
        throw new Error(`Form submission failed: ${response.status}`);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      
      // Fallback: try regular form submission
      console.log('Attempting fallback form submission...');
      const form = e.target;
      form.removeEventListener('submit', handleSubmit);
      form.submit();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-left md:text-center md:mb-16 mb-8">
            <h2 className="text-4xl font-display text-gray-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready to discuss your conservation or digitisation project? 
              We'd love to hear from you and provide a tailored solution for your needs.
            </p>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-zinc-50 rounded-lg p-6 md:p-8">
              <h3 className="text-2xl mb-2 font-display text-gray-900">
                Send Us a Message
              </h3>
              <p className="text-base text-gray-600 mx-auto  mb-6">
              We'll be in touch to answer any questions or to discuss your next steps.
            </p>

              {/* Hidden HTML form for Netlify detection */}
              <form name="contact" method="POST" action="/" data-netlify="true" data-netlify-honeypot="bot-field" hidden>
                <input type="text" name="name" />
                <input type="email" name="email" />
                <input type="tel" name="phone" />
                <select name="enquiryType">
                  <option value="digitisation">Digitisation & Rehousing</option>
                  <option value="conservation">Conservation Services</option>
                  <option value="consultation">Consultation</option>
                  <option value="assessment">Collection Assessment</option>
                  <option value="other">Other Enquiry</option>
                </select>
                <textarea name="message"></textarea>
              </form>

              {/* Actual React form */}
              <form 
                name="contact" 
                method="POST" 
                data-netlify="true" 
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit} 
                className="space-y-6"
              >
                {/* Hidden fields required by Netlify */}
                <input type="hidden" name="form-name" value="contact" />
                
                {/* Honeypot field for spam protection */}
                <div hidden>
                  <label>
                    Don't fill this out if you're human: <input name="bot-field" />
                  </label>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors bg-white"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors bg-white"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors bg-white"
                      placeholder="Your phone number"
                    />
                  </div>

                  <div>
                    <label htmlFor="enquiryType" className="block text-sm font-medium text-gray-700 mb-2">
                      Type of Enquiry *
                    </label>
                    <select
                      id="enquiryType"
                      name="enquiryType"
                      value={formData.enquiryType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors bg-white"
                    >
                      {enquiryTypes.map(type => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors resize-none bg-white"
                    placeholder="Please tell us about your project, timeline, and any specific requirements..."
                  />
                </div>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center space-x-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    </div>
                    <p className="text-green-800">
                      Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.
                    </p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center space-x-3">
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                    <div className="text-red-800">
                      <p className="font-medium">Sorry, there was an error sending your message.</p>
                      <p className="text-sm mt-1">
                        Please try again or contact us directly. If the problem persists, 
                        the form will automatically fall back to a standard submission.
                      </p>
                    </div>
                  </div>
                )}

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>

                <p className="text-sm text-gray-500 text-center">
                  * Required fields. We respect your privacy and will never share your information.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;