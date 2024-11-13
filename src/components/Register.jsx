import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContex } from "../providers/AuthProviders";


function Register() {

    const {createUser} = useContext(AuthContex);



    const handleRegister = (e)=>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        // const name = form.get("name");
        const email = form.get("email");
        const password = form.get("password");
        createUser(email,password)
        
        
    }
  return (
    <div>
        <h1 className="text-4xl text-center ">This is Register</h1>
        <div>
        <form className="card-body" onSubmit={handleRegister}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">name</span>
                  </label>
                  <input
                    type="name"
                    placeholder="name"
                    name='name'
                    className="input input-bordered"
                  />
                </div>
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
                  
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
              </form>
              <div>
                <h1>Already have an account <Link className="text-blue-400" to="/login" >Please Login</Link></h1>
              </div>
        </div>
    </div>
  )
}

export default Register