import "./index.css";

export default function App() {
	return (
		<div className="card">
			<Avatar photoSource="avatar.jpg" name="Jun Xiong (Bear)" />
			<div className="data">
				<Intro
					name="Jun Xiong (Bear)"
					bio="Full Stack Developer wannabe, desire to create something on my own, that is the reason I start learning programming. I wish to create value for others and fulfilled my desires!"
				/>
				<SkillList
					skillOne="HTML+CSS 💪"
					skillTwo="JavaScript 💪"
					skillThree="React 💪"
					skillFour="Git and Github 👀"
				/>
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

function SkillList(props) {
	return (
		<div className="skill-list">
			<Skill name={props.skillOne} />
			<Skill name={props.skillTwo} />
			<Skill name={props.skillThree} />
			<Skill name={props.skillFour} />
		</div>
	);
}

function Skill(props) {
	const style = {
		backgroundColor:
			props.name === "HTML+CSS 💪"
				? "orange"
				: props.name === "JavaScript 💪"
				? "lightgreen"
				: props.name === "React 💪"
				? "lightblue"
				: props.name === "Git and Github 👀"
				? "red"
				: null,
	};

	return (
		<div className="skill" style={style}>
			<span>{props.name}</span>
		</div>
	);
}
