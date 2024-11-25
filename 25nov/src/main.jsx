import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import UserContext from './UserContext.jsx'
createRoot(document.getElementById('root')).render(

   < UserContext>
     <App />
   </UserContext>
  
)
