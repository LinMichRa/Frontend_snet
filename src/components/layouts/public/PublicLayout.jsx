import { Navigate, Outlet } from "react-router-dom";
import useAuth from '../../../hooks/useAuth';
import { HeaderPub } from "./HeaderPub";

export const PublicLayout = () => {

  const { auth } = useAuth();

  return (
    <>
      {/* Cabecera y Navegación Pública*/}
      <HeaderPub />

      {/* Contenido Principal */}
      <section className='layout__content'>
        {!auth._id ?
            <Outlet />
          :
            <Navigate to="/rsocial" />
        }
      </section>
    </>
  )
}