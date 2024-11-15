import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContex } from "../providers/AuthProviders";


function Login() {
    const {logIn} = useContext(AuthContex);

    const handleSubmit = (e)=>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);
    
        const email = form.get("email");
        const password = form.get("password");
        logIn(email,password)
        
    }
  return (
    <div>
        <h1 className="text-3xl font-bold text-center">This is login</h1>
        <div>
        <form className="card-body" onSubmit={handleSubmit}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    name='email'
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    name='password'
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
              </form>
              <div>
                <h1>Do not have an account <Link className="text-blue-500" to="/register" >Please Register</Link></h1>
              </div>
        </div>
    </div>
  )
}

export default Login