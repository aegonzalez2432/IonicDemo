import {IonButton, IonContent, IonHeader, IonNavLink, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import './Tab1.css';
import ButtonClicked from "./ButtonClicked";

const Tab1: React.FC = () => {
    return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Ionic Demo</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>

          <IonNavLink routerDirection="forward" component={() => <ButtonClicked/>}>
              <IonButton>Next Page</IonButton>
          </IonNavLink>

      </IonContent>

    </IonPage>
  );
};
export default Tab1;
