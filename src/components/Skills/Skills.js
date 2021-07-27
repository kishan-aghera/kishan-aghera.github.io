import React from 'react';

import './Skills.css';
import skillsVector from '../../assets/skills_vector.png';

import { skillsData } from '../../assets/skillsData';

import Header from '../Header/Header';
import FooterLink from '../FooterLink/FooterLink';
import SkillCard from './SkillCard';

const Skills = () => {
	return (
		<div className="section-container">
			<Header
				heading="My Skills"
				details="React + Rails Engineer."
			/>

			<div className="skill-card-container">
				{skillsData.map(({ name, logo }) => (
					<SkillCard
						name={name}
						logo={logo}
					/>
				))}
			</div>

			<FooterLink
				phrase="Get in "
				link="touch."
				toAddress="/contact"
			/>

			<div className="skills-vector-frame">
				<img src={skillsVector} alt="skills" className="skills-vector" />
			</div>
		</div>
	)
}

export default Skills;
