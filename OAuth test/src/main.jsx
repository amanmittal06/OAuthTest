import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';


createRoot(document.getElementById('root')).render(

    <GoogleOAuthProvider clientId="269312667183-gpijj1vp2m0l7im2ma7o3dp7ok2enhi0.apps.googleusercontent.com">
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          console.log(credentialResponse);
        }}
        onError={() => {
          console.log('Login Failed');
        }}
      />
    </GoogleOAuthProvider>
  
)
