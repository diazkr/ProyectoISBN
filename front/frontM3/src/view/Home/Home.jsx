import styles from "./Home.module.css"
import { FaHandHoldingMedical } from "react-icons/fa6";
import { FaUserDoctor } from "react-icons/fa6";
import { RiMentalHealthFill } from "react-icons/ri";
import { MdBloodtype } from "react-icons/md";

const Home = ()=>{
    return(
        <div>
            <div className={styles.ContainerHero}>
                <img src="src/assets/hero-bg.jpg" alt="" />
                <div className={styles.Content}>

                    <div>Bienvenido a Medilab</div>
                    <button>Registrate!</button>
                    
                </div>
            </div>

            <div className={styles.ContainerCards}>
                <div className={styles.CardMainHero}>
                    <h2>Por qué escoger Medilab?</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. odit, mollitia officiis architecto? Cumque, modi! Perspiciatis?</p>
                    <button> Ver más</button>
                </div>
                <div className={styles.CardHero}>
                    <FaUserDoctor className={styles.cardIcon}/>
                    <h3>Corporis voluptates sit</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                </div>
                <div className={styles.CardHero}>
                    <RiMentalHealthFill className={styles.cardIcon}/>
                    <h3>Corporis voluptates sit</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                </div>
                <div className={styles.CardHero}>
                    <MdBloodtype className={styles.cardIcon}/>
                    <h3>Corporis voluptates sit</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                </div>
            </div>

            <div>
                <div className={styles.itemsMain}>
                    <img src="src/assets/about.jpg" alt="" />
                    <div className={styles.allContainer}>
                        <h1>Enim quis est voluptatibus aliquid consequatur fugiat</h1>
                        <p>Esse voluptas cumque vel exercitationem. Reiciendis est hic accusamus. Non ipsam et sed minima temporibus laudantium. Soluta voluptate sed facere corporis dolores excepturi. Libero laboriosam sint et id nulla tenetur. Suscipit aut voluptate.</p>
                        <div className={styles.itemsContainer}>
                            <div>
                                <FaUserDoctor className={styles.icono}/>
                            </div>

                            <div>
                                <h4>Lore Ipsum</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit eius reprehenderit ipsa magnam eligendi quis suscipit quidem sequi cupiditate est, illo ad? Harum</p>
                                
                            </div>
                        </div>
                        <div className={styles.itemsContainer}>
                            <div>
                                <RiMentalHealthFill className={styles.icono}/>
                            </div>

                            <div>
                                <h4>Lore Ipsum</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit eius reprehenderit ipsa magnam eligendi quis suscipit quidem sequi cupiditate est, illo ad? Harum</p>
                                
                            </div>
                        </div>
                        <div className={styles.itemsContainer}>
                            <div>
                                <MdBloodtype className={styles.icono}/>
                            </div>

                            <div>
                                <h4>Lore Ipsum</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit eius reprehenderit ipsa magnam eligendi quis suscipit quidem sequi cupiditate est, illo ad? Harum</p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;