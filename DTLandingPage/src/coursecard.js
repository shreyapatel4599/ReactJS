import React from 'react';

const CourseCard = () => {
    return(
        <div className="course-card">
        <div className="course-box">
            <img src="images/section_pic.png" />
        </div>
        <div className="course-box">
            <h3>Socratic Dialogues</h3>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Top 5 Learnings</p>                
                <ol>
                    <li>Ut Anim Ad Minim Veniam, Quis Nerio Exercitation Ulamcoo Labrco Nisi</li>
                    <li>Ut Anim Ad Minim Veniam, Quis Nerio Exercitation Ulamcoo Labrco Nisi</li>
                    <li>Ut Anim Ad Minim Veniam, Quis Nerio Exercitation Ulamcoo Labrco Nisi</li>
                    <li>Ut Anim Ad Minim Veniam, Quis Nerio Exercitation Ulamcoo Labrco Nisi</li>
                    <li>Ut Anim Ad Minim Veniam, Quis Nerio Exercitation Ulamcoo Labrco Nisi</li>
                </ol>
            <button className="btn-learn-more">Learn More</button>
        </div>
    </div>
    )
}
export default CourseCard;