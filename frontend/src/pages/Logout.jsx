import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useUser } from '../Components/user'

const Logout = () => {

    const navigate = useNavigate();

    const {setUser} = useUser();

    useEffect(() => {
        setUser(null);

        navigate("/Home");
    }, [])


  return (
    <div>Logout</div>
  )
}

export default Logout