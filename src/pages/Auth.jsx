import { Apple, Facebook, Mail } from "lucide-react";
import React from "react";

const Auth = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4">
      <div className="conatiner md:max-w-4x mx-auto text-center z-10">
        <div className="rounded-2xl shadow-md md:w-md bg-gradient-to-br from-primary/40 to-primary-30 border-1 border-primary/80 py-6 md:py-12 px-6 space-y-2">
          <h3 className="text-2xl md:text-3xl font-semibold text-foreground/90 capitalize">
            User Login
          </h3>
          <p className="text-md font-semibold text-foreground/60 capitalize">
            Enter your details to get sign in to your account
          </p>
          <form className="text-start w-full p-4" action="">
            <div className="my-4">
              <input
                className="input-field"
                type="email"
                name="email"
                id="email"
                placeholder="Enter Email"
              />
            </div>
            <div className="my-4">
              <input
                className="input-field"
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />
            </div>
            <p className="text-sm font-semibold text-foreground/80 capitalize my-4">
              Having trouble in{" "}
              <a className="text-blue-600 hover:text-blue-800" href="">
                {" "}
                Sign-in
              </a>
            </p>
            <button className="solid-button my-4 w-full">Sign In</button>
          </form>

          <p className="text-md font-semibold text-foreground/60 capitalize">
            -- or Sign In with --
          </p>
          <div className="flex justify-center items-center gap-3">
            <button className="outlined-button text-sm flex items-center justify-center gap-2">
              <Mail size={20}></Mail> Google
            </button>
            <button className="outlined-button text-sm flex items-center justify-center gap-2">
              <Facebook size={20}></Facebook> Facebook
            </button>
          </div>

          <p className="text-sm font-semibold text-foreground/80 capitalize my-4">
            Don't have an account ?
            <a className="text-blue-600 hover:text-blue-800" href="">
              Register Now
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Auth;
