import React from 'react'
import styles from "./nav.module.css"

const Nav = () => {

  
    return (
        <div>
            <nav className={styles.container}>
              <ul>
                <li><a href='#'>About</a></li>
                <li><a href='#'>Members</a></li>
                <li><a href='#'>Sponsers</a></li>
                <li><a href='#'>Contact</a></li>
              </ul>
              <div className={styles.team_name}>
                 Team Revanta
              </div>
              <div className={styles.responsive
              }>
              </div>
              <div className={styles.btn}>
                 <button className={styles.btn1}>Sign In</button>
                 <button className={styles.btn2}>Log In</button>
              </div>

             
          
      

            </nav>
        </div>

    )
}

export default Nav
