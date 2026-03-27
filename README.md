# My portfolio

www.motoladev.com

## Programming languages & technologies

- React.js
- CSS3
- Bootstrap
- Reveal animations
- tsparticles
- react-lazy-load

## Features

- Animation
- Styled with React-Bootstrap and CSS
- Fully responsive
- Modern design with reveal animations

## Contact form configuration

The contact form lives in `src/components/Contacts.js` and uses Create React App environment variables, so every client-side variable must start with `REACT_APP_`.

Required EmailJS values:

- `REACT_APP_EMAILJS_SERVICE_ID`
- `REACT_APP_EMAILJS_TEMPLATE_ID`
- `REACT_APP_EMAILJS_PUBLIC_KEY`

The component also accepts the legacy `REACT_APP_EMAIL_KEY` name as a fallback so older local `.env` files keep working.

The form submits the fields `name`, `email`, and `message`, so the EmailJS template needs matching variables.

If EmailJS responds with `Account not found`, the public key in `.env` no longer matches an active EmailJS account. Generate or copy the current public key from the EmailJS dashboard and confirm the service ID and template ID belong to that same account.
