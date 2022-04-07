import { app } from './Firebase/Config';

const Apps = () => {
   console.log(app);

   return (
      <div>Appsss {process.env.REACT_APP_FIREBASE_API_KEY}
         <h5>{process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID}</h5>
      </div>
   );
};

export default Apps;