import "./index.css";

const skillsData = [
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
					bio="Full Stack Developer wannabe, desire to create something on my own, that is the reason I start learning programming. I wish to create value for others and fulfilled my desires!"
				/>
				<SkillList />
			</div>
		</div>
	);
}

function Avatar(props) {
	return <img className="avatar" src={props.photoSource} alt={props.name} />;
}

function Intro(props) {
	return (
		<div>
			<h1>{props.name}</h1>
			<p>{props.bio}</p>
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
	const emoji =
		eachSkill.level === "beginner"
			? "👶"
			: eachSkill.level === "intermediate"
			? "👍"
			: "💪";

	return (
		<div className="skill" style={{ backgroundColor: eachSkill.color }}>
			<span>{eachSkill.skill + " " + emoji}</span>
		</div>
	);
}
