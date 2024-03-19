import { Link } from "react-router-dom";

const About = () => {
    return (
        <div>
            <h1>Jugantar Chakraborty</h1>
            <p>Btech in Computer Science Engineering,</p>
            <p>2024 Undergraduate Student,</p>
            <p>RKMGEC, Purulia</p>
            <h4><Link to="https://www.linkedin.com/in/jugantar-chakraborty/">LinkedIn</Link></h4>
            <h4><Link to="https://leetcode.com/Jugantar2020/">Leetcode</Link></h4>
            <h4><Link to="https://auth.geeksforgeeks.org/user/jugantarchakraborty">GeeksForGeeks</Link></h4>
        </div>
    );
};
export default About;