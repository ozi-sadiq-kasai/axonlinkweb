import { Routes, Route} from 'react-router-dom'
import LandingPage from './pages/LandingPage/LandingPage'


const AppRoutes = () => {
  return (
    <Routes>
      {/* Routes with Layout wrapper */}
      <Route path="/" element={<Layout />}>
        <Route index element={<LandingPage />} />
        {/* <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="profile/:userId" element={<UserProfile />} /> */}
      </Route>
 
      {/* Catch-all route for 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AppRoutes