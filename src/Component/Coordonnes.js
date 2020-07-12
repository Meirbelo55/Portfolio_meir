import React, {Component} from "react";
import Cv from "./CV-Meir_belaich/CV_Belaich_meir.pdf";
class Coordonnes extends  Component {
    render() {
        return(
            <div>
                mes coordonnes
                <div className='about-profile-cv'>
                    <a
                        className='waves-effect waves-light btn-large pulse purple'
                        href={Cv}
                        target='__blank'
                        rel='noopener noreferrer'
                        download>
                        Télecharger mon CV
                    </a>
                </div>
            </div>
        )
    }
}
export default Coordonnes;