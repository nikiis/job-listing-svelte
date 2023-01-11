// interface Level {
// 	Senior: 'Senior';
// 	Midweight: 'Midweight';
// 	Junior: 'Junior';
// }

// interface ContractType {
// 	FullTime: 'Full Time';
// 	PartTime: 'Part Time';
// }

// interface Role {
// 	Frontend: 'Frontend';
// 	Backend: 'Backend';
// 	Fullstack: 'Fullstack';
// }

// interface Languages {
// 	Python: 'Python';
// 	Ruby: 'Ruby';
// 	JavaScript: 'JavaScript';
// 	Html: 'HTML';
// 	Css: 'CSS';
// }

// interface Tools {
// 	React: 'React';
// 	Sass: 'Sass';
// 	Vue: 'Vue';
// 	Django: 'Django';
// 	Ror: 'RoR (Ruby on Rails)';
// }

interface JobPost {
	id: number;
	company: string;
	logo: string;
	new: boolean;
	featured: boolean;
	position: string;
	role: string;
	level: string;
	postedAt: string;
	contract: string;
	location: string;
	languages: Array<string>;
	tools: Array<string>;
}

export type { JobPost };
