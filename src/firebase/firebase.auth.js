import { getAuth } from "firebase/auth";
import app from "./firebas.config";
const auth = getAuth (app);
export default auth;