import About from "../components/About";
import ContactUs from "../components/ContactUs";
import Home from "../components/Home";
import TextConverter from "../components/TextConverter";
import Todo from "../components/Todo";
import { UseEffects } from "../components/UseEffects";
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
  {
    path: "/todo",
    element: <Todo />,
  },
  {
    path: "/useeffects",
    element: <UseEffects/>,
  },
];

export default Router;
