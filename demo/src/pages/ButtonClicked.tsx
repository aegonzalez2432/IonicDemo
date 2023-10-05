import {
    IonCard,
    IonCardContent,
} from '@ionic/react';
import './ButtonClicked.css';
import React from "react";

const ButtonClicked: React.FC = () => {
    return (
        <IonCard>

            <IonCardContent>
                <iframe width="100%" height="500" src="https://www.cbsnews.com/chicago/video/shootout-during-armored-truck-robbery-attempt-caught-on-video/" frameBorder="0" allow="autoplay; clipboard-write, encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

            </IonCardContent>
        </IonCard>


    );
};
export default ButtonClicked;
