import Router from "../router";
import Header from "../components/header";
import BreadCrumbs from "../components/breadcrumbs";
import BurgerButton from "../components/burgerbutton";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="bg-primary-gray-50 pt-8">
        <div className="sm:flex sm:justify-between sm:items-center sm:flex-nowrap max-w-container-width m-auto w-11/12 ">
          <BreadCrumbs />
          <BurgerButton />
        </div>
        <Router />
      </main>
    </>
  )
}

export default Layout;