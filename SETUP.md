# Kryvazent Website - Email Setup Guide

## 📧 Enable Contact Form Email Sending (2 minutes)

The contact form is configured to send emails directly to **kryvazent@gmail.com** when users submit quote requests. Follow these steps to activate it:

### Step 1: Get Free Web3Forms Access Key

1. Visit **https://web3forms.com**
2. Click "Get Started" or "Create Access Key"
3. Enter your email: **kryvazent@gmail.com**
4. Verify your email (check inbox)
5. Copy your Access Key (looks like: `a1b2c3d4-1234-5678-90ab-cdef12345678`)

### Step 2: Add Access Key to Code

1. Open file: `src/app/components/Contact.tsx`
2. Find line 4: `const WEB3FORMS_ACCESS_KEY = 'YOUR_ACCESS_KEY_HERE';`
3. Replace `'YOUR_ACCESS_KEY_HERE'` with your actual key:
   ```typescript
   const WEB3FORMS_ACCESS_KEY = 'a1b2c3d4-1234-5678-90ab-cdef12345678';
   ```
4. Save the file

### Step 3: Test It!

1. Fill out the contact form on your website
2. Click "Get quote"
3. Check **kryvazent@gmail.com** inbox
4. You should receive the quote request!

---

## ✅ What You Get

- ✓ Direct email sending (no email client popup)
- ✓ All form data delivered to kryvazent@gmail.com
- ✓ User sees success confirmation
- ✓ Professional email formatting
- ✓ 100% free (Web3Forms free tier: 250 emails/month)

---

## 🔧 Troubleshooting

**Error message shows up?**
- Double-check your access key is correct
- Make sure you verified your email with Web3Forms
- Check browser console for detailed error messages

**Not receiving emails?**
- Check spam/junk folder in kryvazent@gmail.com
- Verify the access key is active in Web3Forms dashboard
- Make sure you saved the Contact.tsx file after editing

---

## 🚀 Alternative Email Services

If you prefer different providers:

- **EmailJS**: https://www.emailjs.com (Free: 200 emails/month)
- **Formspree**: https://formspree.io (Free: 50 emails/month)
- **Resend**: https://resend.com (Free: 100 emails/day)

All work from frontend, no backend needed!
