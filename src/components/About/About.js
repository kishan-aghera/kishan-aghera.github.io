import React from 'react';

import Header from '../Header/Header';

import './About.css';
import aboutVector from '../../assets/about_vector.png';
import aboutMe from '../../assets/about_anime.gif';
import FooterLink from '../FooterLink/FooterLink';

const About = () => {
	return (
		<div className="section-container">
			<Header
				heading="About Me."
				details="Software Engineer | Ruby on Rails | ReactJS"
			/>

			<div className="about-main">
				<div className="about-main-left">
					<h3 className="about-sub-head">Backend Developer</h3>
					<p className="about-details">
						Ruby on Rails Developer at Bacancy Technology
					</p>

					<h3 className="about-sub-head">Frontend Developer</h3>
					<p className="about-details">
						ReactJS Developer at Bacancy Technology
					</p>

					<h3 className="about-sub-head">Blogger</h3>
					<p className="about-details">
						Check out my first blog at
						<a
							target="_blank"
							rel="noreferrer noopener"
							href="https://www.bacancytechnology.com/blog/cocoon-gem-example-in-rails-6"
						> here.
						</a>
					</p>
				</div>
				
				<div className="about-main-right">
					<img src={aboutMe} alt="About anime" className="about-anime" />
				</div>
			</div>

			<FooterLink
				phrase="Check out my "
				link="projects!"
				toAddress="/projects"
			/>

			<div className="vector-frame">
				<img src={aboutVector} alt="About Vector" />
			</div>
		</div>
	)
}

export default About;
