import {
    IonBackButton,
    IonButtons,
    IonButton,
    IonImg,
    IonHeader,
    IonContent,
    IonToolbar,
    IonTitle, IonCard, IonCardContent, CreateAnimation,
} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './ButtonClicked.css';
import React from "react";
import {IonReactRouter} from "@ionic/react-router";
import {Redirect, Route} from "react-router-dom";

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
