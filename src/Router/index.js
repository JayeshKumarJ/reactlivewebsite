import About from "../components/About";
import ContactUs from "../components/ContactUs";
import Home from "../components/Home";
import TextConverter from "../components/TextConverter";
import UseReducer from "../components/UseReducer";

const Router = [
 
  {
    path:"/home",
    element:<Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contactus",
    element: <ContactUs />,
  },
  {
    path: "/textconverter",
    element: <TextConverter />,
  },
  {
    path: "/usereducer",
    element: <UseReducer />,
  },
];

export default Router;
