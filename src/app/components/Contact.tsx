import { useState } from 'react';

// Web3Forms access key for kryvazent@gmail.com
const WEB3FORMS_ACCESS_KEY = 'f1575f0d-d098-4564-bcea-124ad02651fe';

export function Contact() {
  const [formData, setFormData] = useState({
    email: '',
    projectType: 'project',
    budget: '',
    description: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Get project type label
    const projectTypeLabel =
      formData.projectType === 'project' ? 'One-time project' :
      formData.projectType === 'subscription' ? 'Ongoing team' :
      formData.projectType === 'custom' ? 'Custom solution' :
      'Not sure yet';

    // Get budget label
    const budgetLabel = formData.budget || 'Not specified';

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New Quote Request - ${projectTypeLabel}`,
          from_name: 'Kryvazent Website',
          reply_to: formData.email,
          message: `
New Quote Request

Client Email: ${formData.email}
Project Type: ${projectTypeLabel}
Budget Range: ${budgetLabel}

Project Description:
${formData.description}
          `.trim()
        })
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setFormData({ email: '', projectType: 'project', budget: '', description: '' });

        // Reset success message after 5 seconds
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        throw new Error(result.message || 'Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');

      // Reset error message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl mb-4" style={{ fontWeight: 600 }}>
            Get a quote in 24 hours
          </h2>
          <p className="text-xl text-muted-foreground" style={{ fontWeight: 400 }}>
            Tell us what you need. We'll send a fixed-price proposal.
          </p>
        </div>

        <div className="bg-card/50 border border-border rounded-2xl p-8 md:p-12 hover:border-primary/30 transition-all duration-500">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block mb-2 text-foreground" style={{ fontWeight: 500 }}>
                Your email
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                placeholder="you@company.com"
                style={{ fontWeight: 400 }}
              />
            </div>

            <div>
              <label htmlFor="projectType" className="block mb-2 text-foreground" style={{ fontWeight: 500 }}>
                What do you need?
              </label>
              <select
                id="projectType"
                value={formData.projectType}
                onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                style={{ fontWeight: 400 }}
              >
                <option value="project">One-time project</option>
                <option value="subscription">Ongoing team</option>
                <option value="custom">Custom solution</option>
                <option value="unsure">Not sure yet</option>
              </select>
            </div>

            <div>
              <label htmlFor="budget" className="block mb-2 text-foreground" style={{ fontWeight: 500 }}>
                Budget range
              </label>
              <select
                id="budget"
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                style={{ fontWeight: 400 }}
              >
                <option value="">Select budget</option>
                <option value="under25k">Under $25k</option>
                <option value="25k-50k">$25k - $50k</option>
                <option value="50k-100k">$50k - $100k</option>
                <option value="100k+">$100k+</option>
              </select>
            </div>

            <div>
              <label htmlFor="description" className="block mb-2 text-foreground" style={{ fontWeight: 500 }}>
                What are you building?
              </label>
              <textarea
                id="description"
                required
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows={5}
                className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                placeholder="Describe your project in a few sentences..."
                style={{ fontWeight: 400 }}
              />
            </div>

            {submitStatus === 'success' && (
              <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg mb-4 animate-fade-in">
                <p className="text-center text-primary" style={{ fontWeight: 500 }}>
                  ✓ Message sent! We'll send you a quote within 24 hours.
                </p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg mb-4 animate-fade-in">
                <p className="text-center text-destructive text-sm" style={{ fontWeight: 500 }}>
                  ⚠️ Setup required: Add your Web3Forms access key to enable email sending.
                  <br />
                  <a
                    href="https://web3forms.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:no-underline"
                  >
                    Get free key here (2 min setup)
                  </a>
                </p>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all shadow-lg shadow-primary/25 disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ fontWeight: 500 }}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </span>
              ) : 'Get quote'}
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-border text-center">
            <p className="text-muted-foreground mb-4" style={{ fontWeight: 400 }}>
              Or email us directly at
            </p>
            <a
              href="mailto:kryvazent@gmail.com"
              className="text-lg text-primary hover:underline"
              style={{ fontWeight: 500 }}
            >
              kryvazent@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
