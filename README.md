# SUPERNOVA - Consultation Landing Page

A modern, responsive French consultation landing page designed to convert visitors into business consultation leads for SUPERNOVA.

## 🚀 Features

- **Multi-step Form**: Intuitive 3-step consultation request form
- **Modern Design**: Beautiful quartz-inspired background with glass morphism effects
- **Mobile Responsive**: Optimized for all devices and screen sizes
- **WhatsApp Integration**: Dynamic floating button with smart form data integration
- **Real-time Validation**: French phone number validation and instant feedback
- **Accessibility**: Full ARIA support and keyboard navigation
- **Smooth Animations**: Subtle CSS animations with reduced motion support

## 📱 Design Highlights

- **Quartz Background**: Animated gradient overlays with sophisticated dot patterns
- **Holographic Text**: Shimmering title effect with gradient animations
- **Glass Morphism**: Translucent form container with backdrop blur
- **Success States**: Animated toast notifications and completion messages
- **Trust Indicators**: Visual confirmation of free consultation and quick response

## 🛠️ Technical Stack

- **HTML5**: Semantic markup with accessibility attributes
- **CSS3**: Modern styling with custom properties and animations
- **Vanilla JavaScript**: Interactive form functionality without frameworks
- **Google Fonts**: Inter font family for optimal readability
- **SVG Icons**: Scalable WhatsApp and UI icons

## 📝 Form Structure

### Step 1: Personal Information
- First name (required)
- Last name (required)
- Professional email (required)

### Step 2: Business Information
- Phone number (required, French format validation)
- Company name (required)
- Business sector (required, 18 options)
- Annual revenue (optional)

### Step 3: Consultation Details
- Business challenge description (optional)
- Urgency level (optional)

## 🎨 Color Palette

```css
--quartz-primary: #f7f2f0
--quartz-secondary: #f4ede8
--quartz-accent: #ede4df
--quartz-light: #faf7f5
--accent-blue: #007aff
--accent-light-blue: #5ac8fa
--success-green: #30d158
```

## 📱 Mobile Optimizations

- Touch-friendly button sizes (minimum 48px)
- Optimized font sizes to prevent zoom on iOS
- Full-width mobile toast notifications
- Responsive WhatsApp button positioning
- Landscape orientation support

## 🔧 Setup & Development

1. Open `index.html` in a web browser to view the landing page
2. For development with live reload, use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js (if you have live-server installed)
   live-server
   ```

## 📞 WhatsApp Integration

The floating WhatsApp button dynamically updates its message based on form input:
- Default message for new visitors
- Personalized message with name, company, and sector when form is partially filled
- Direct link to WhatsApp with pre-filled consultation request

**Note**: Update the phone number in `script.js` (line 298) to your actual WhatsApp Business number.

## ♿ Accessibility Features

- ARIA labels and roles for screen readers
- Keyboard navigation support
- Focus management between form steps
- High contrast mode support
- Reduced motion preferences
- Semantic HTML structure

## 🎯 Conversion Optimization

- Progressive disclosure with multi-step form
- Trust indicators and social proof
- Clear value proposition
- Urgency and scarcity elements
- Multiple contact options (form + WhatsApp)
- Success state with clear next steps

## 📊 Analytics Ready

The code includes event tracking for:
- Form field focus events
- Step progression
- Form submission
- Lead qualification by revenue
- Lead segmentation by sector

Add your Google Analytics tracking code to enable these features.

## 🔒 Privacy & Security

- No data stored locally (privacy-compliant)
- Form data only collected on submission
- Clear privacy messaging in footer
- GDPR-friendly approach

## 📄 Browser Support

- Chrome 88+
- Firefox 84+
- Safari 14+
- Edge 88+

## 📝 License

This project is proprietary and belongs to SUPERNOVA. All rights reserved.
