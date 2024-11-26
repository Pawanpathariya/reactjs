import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import UserCom from './UserCom.jsx'

createRoot(document.getElementById('root')).render(
<UserCom>
<App />
</UserCom>
)
