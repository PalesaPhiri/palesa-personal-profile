import "./about.css";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className=""></div>
        { <div className="a-card">
          <img
             src="https://thumbs.dreamstime.com/b/female-programmer-standing-holding-laptop-computer-freelancer-work-woman-front-big-question-mark-isolated-flat-vector-127605507.jpg"

            alt=""
            className="a-img"
          />
        </div> }
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
        I am a Software developing Second year student at WeThinkCode_.
        </p>
        <p className="a-desc">
        I am goal-orientated and i can easily adapt and grow in any work environment.
        I am a problem solver at heart and I am opened minded to learning new skills and 
        ways of working, I enjoy working in a team and manage well when working alone
        on projects, my current interest is to learn and work on projects that interact with
        the user and have an impact to their interest.
        Outside of programming i enjoy bringing up the heat in the kitchen with baking sweet treats
        and trying new adventurous activities.
        </p>
          </div>
        </div>
  );
};

export default About;