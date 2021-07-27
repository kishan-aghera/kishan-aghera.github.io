import React from 'react';

import './Contact.css';

import Header from '../Header/Header';
import FooterLink from '../FooterLink/FooterLink';

import contactVector from '../../assets/contact_anime.png';
import github from '../../assets/gh.png';
import linkedin from '../../assets/li.png';

const Contact = () => {
	return (
		<div className="section-container">
			<Header
				heading="Get in touch."
				details="Want to Hire me?"
			/>

			<div className="contact-form-container">
				<form
					action="https://formspree.io/f/mayadprl"
					method="POST"
					className="contact-form"
				>
					<input
						type="email"
						placeholder="Email"
						name="_replyto"
						className="input-box email-input"
					/>

					<textarea
						type="text"
						placeholder="Your Message"
						name="message"
						className="input-box body-input"
					/>

					<button type="submit" className="contact-btn">
						Send Email
					</button>
				</form>
			</div>

			<div className="social-icons-container">
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://github.com/kishan-aghera"
					className="social-icon"
				>
					<img
						src={github}
						alt="Github logo"
					/>
				</a>

				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://linkedin.com/in/kishan-aghera"
					className="social-icon"
				>
					<img
						src={linkedin}
						alt="Linkedin logo"
					/>
				</a>
			</div>

			<FooterLink
				phrase="Read more "
				link="about me!"
				toAddress="/about"
			/>

			<div className="vector-frame">
				<img
					src={contactVector}
					alt="Contact Vector"
				/>
			</div>
		</div>
	)
}

export default Contact;
