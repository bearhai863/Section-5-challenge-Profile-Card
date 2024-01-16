import "./index.css";

const skillsData = [
	{
        skill: "Svelte",
		level: "beginner",
		color: "pink",
    },
	{
		skill: "HTML+CSS",
		level: "advanced",
		color: "orange",
	},
	{
		skill: "React",
		level: "advanced",
		color: "lightblue",
	},
	{
		skill: "JavaScript",
		level: "advanced",
		color: "Yellow",
	},
	{
		skill: "Git and Github",
		level: "intermediate",
		color: "orangered",
	},
	{
		skill: "NPM",
		level: "beginner",
		color: "lightgreen",
	},
];

export default function App() {
	return (
		<div className="card">
			<Avatar photoSource="avatar.jpg" name="Jun Xiong (Bear)" />
			<div className="data">
				<Intro
					name="Jun Xiong (Bear)"
					bio="Software Developer wannabe, desire to create something on my own, that's the reason I started to learn programming. I wish to create value for others and fulfilled my desires!"
				/>
				<SkillList />
			</div>
		</div>
	);
}

function Avatar({photoSource, name}) {
	return <img className="avatar" src={photoSource} alt={name} />;
}

function Intro({name, bio}) {
	return (
		<div>
			<h1>{name}</h1>
			<p>{bio}</p>
		</div>
	);
}

function SkillList() {
	return (
		<div className="skill-list">
			{skillsData.map((skillObj) => (
				<Skill eachSkill={skillObj} key={skillObj.skill} />
			))}
		</div>
	);
}

function Skill({ eachSkill }) {
	const style = {
		backgroundColor: eachSkill.color,
	};

	const emoji =
		eachSkill.level === "beginner"
			? "👶"
			: eachSkill.level === "intermediate"
			? "👍"
			: "💪"; //advanced

	return (
		<div className="skill" style={style}>
			<span>{eachSkill.skill + " " + emoji}</span>
		</div>
	);
}
