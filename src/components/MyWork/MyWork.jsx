import React, { useState } from "react";
import './MyWork.css'
const MyWork = () => {
    const[popUpContent, setPopUpContent] = useState(null);
    const showPopUpContent = (content) =>{
        setPopUpContent(content);
    }
    const closePopUp = () =>{
        setPopUpContent(null);
    }
    return(
        <section id = 'mywork'>
                <h4>Welcome, you can explore my work, demonstrating my skills and expertise in full-stack development.</h4>
                <br></br>

            <h3>TuneHub - a music streaming plaform</h3>
            <br></br>

            <button className="button" onClick={() => showPopUpContent('overview')}>Project Overview</button>
            <button className="button" onClick={() => showPopUpContent('feaures')}>Key Features</button>
            <button className="button" onClick={() => showPopUpContent('technoligies')}>Technologies Used</button>
            <button className="button" onClick={() => showPopUpContent('role')}>My Role and Contributions</button>
            <button className="button" onClick={() => showPopUpContent('learning')}>Learning Outcomes</button>
            <button className="button" onClick={() => showPopUpContent('output')}>Output</button>
            <a href="https://github.com/SudarsanChakri/Tune-HUb.git" target="_blank" rel="noopener noreferrer"><button className="button">Reference Code</button></a>
            <br></br>
            <h3>MyPortfolio - created using React JS</h3>
            <a href="https://github.com/SudarsanChakri/myportfolio" target="_blank" rel="noopener noreferrer"><button className="button">Reference Code</button></a>



            {popUpContent && (
                <div className="popup">
                    <div className="popup-content">
                        {popUpContent ===  'overview' && <div>
                            <p>Tune Hub is an innovative music streaming platform designed to provide a seamless and enjoyable listening experience for users. Developed as part of my internship at KodNest, this project allowed me to apply and enhance my full-stack development skills. The platform combines a sleek, user-friendly interface with powerful backend functionality, ensuring both users and administrators have a smooth and efficient experience.</p>
                        </div>
                        }
                        {popUpContent ===  'feaures' && <div>
                            <p>User Authentication: Secure customer and admin sign-in functionality to ensure personalized experiences and administrative control.</p>
                            <p>Premium Subscription: Integration with Razorpay for premium subscription payments.
                            </p>
                            <p>Music Streaming: Users can stream and listen to a vast collection of songs.
                            </p>
                            <p>Playlist Creation: Users can create, manage, and enjoy their playlists, enhancing their listening experience.
                            </p>
                            <p>Song Management: Efficient song management system for admins to upload, update, and organize music content.
                            </p>

                        </div>
                        }
                        {popUpContent ===  'technoligies' && <div>
                            <p>Frontend: HTML, CSS and JavaScript
                            </p>
                            <p>Backend: Java, Spring Boot and Spring MVC
                            </p>
                            <p>Database: MySQL
                            </p>
                            <p>Payment Gateway: Razorpay
                            </p>
                            <p>Tools & Platforms: STS (Spring Tool Suite)
                            </p>

                        </div>
                        }
                        {popUpContent ===  'role' && <div>
                            <p>Developed the frontend using HTML, CSS, and JavaScript, ensuring a responsive and intuitive user interface.
                            </p>
                            <p>Implemented the backend using Java and Spring Boot, focusing on building robust RESTFUL APIs and integrating with the MySQL database.
                            </p>
                            <p>Designed and integrated the payment gateway using Razorpay to facilitate smooth premium subscription transactions.
                            </p>
                            <p>Worked on user authentication and authorization mechanisms to secure the platform.
                            </p>
                            <p>Managed and maintained the song database, enabling efficient song retrieval and management by admins.
                            </p>

                        </div>
                        }
                        {popUpContent ===  'learning' && <div>
                            <p>Gained hands-on experience in full-stack development with a focus on Java and Spring Boot.
                            </p>
                            <p>Enhanced my skills in frontend development using modern technologies like React.js.
                            </p>
                            <p>Developed a strong understanding of payment gateway integration and secure transaction handling.
                            </p>
                            <p>Improved my problem-solving abilities and learned to work effectively.
                            </p>

                        </div>
                        }
                        {popUpContent ===  'output' && <div>
                            <video width="560" height="315" controls src={`${process.env.PUBLIC_URL}/TuneHub.mp4`} type="video/mp4"></video>

                        </div>
                        }

                        {popUpContent ===  'reference' && <div>
                            
                        </div>
                        }
                       <button className="close-btn" onClick={closePopUp}>Close</button>

                    </div>

                </div>
            )}
        </section>
    );
};


export default MyWork;