"use client";
import axios from "axios";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  email: string;
  username: string;
  affiliation: string;
  title: string;
  abstract: string;
  password: string;
  phone: string;
};

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log("Register data: ", data);
    fetch("http://localhost:8000/add/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    });
    // axios.post("http://localhost:8000/add/user", data).then(
    //   (response) => console.log(response.data),
    //   (error) => console.log(error)
    // );
  };

  // console.log(watch("email")); // watch input value by passing the name of it

  return (
    // <!-- url('/img/hero-pattern.svg') -->
    <div className="flex min-h-screen bg-white">
      <div className="w-1/2 bg-cover md:block hidden bg-[url(https://plus.unsplash.com/premium_photo-1664474557910-8e3a0210f48d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]"></div>
      {/* <!-- <div className="bg-no-repeat bg-right bg-cover max-w-max max-h-8 h-12 overflow-hidden">
				<img src="log_in.webp" alt="hey">
			</div> --> */}

      <div className="md:w-1/2 max-w-lg mx-auto my-24 px-4 py-5 shadow-none">
        <div className="text-left p-0 font-sans">
          <h1 className=" text-gray-800 text-3xl font-medium">
            Register for conf
          </h1>
          <h3 className="p-1 text-gray-700">No payment needed.</h3>
        </div>
        <form className="p-0" onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-5">
            {/* <!-- <label for="email" className="sc-bqyKva ePvcBv">Email</label> --> */}
            <input
              type="text"
              className="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent "
              placeholder="Email"
              {...register("email", { required: true, pattern: /^\S+@\S+$/ })}
            />
            {errors.email && <span>This field is required</span>}
          </div>
          <div className="mt-5">
            <input
              type="text"
              className="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent "
              placeholder="Username"
              {...register("username", { required: true })}
            />
            {errors.username && <span>This field is required</span>}
          </div>
          <div className="mt-5">
            <input
              type="text"
              className="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent  "
              placeholder="Affiliation"
              {...register("affiliation")}
            />
          </div>
          <div className="mt-5">
            <input
              type="text"
              className="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent  "
              placeholder="Title"
              {...register("title")}
            />
          </div>
          <div className="mt-5">
            <textarea
              className="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent  "
              placeholder="Abstract"
              {...register("abstract", { required: true, maxLength: 200 })}
            />
            {errors.abstract && <span>This field is required</span>}
          </div>
          <div className="mt-5">
            <input
              type="phone"
              className="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent  "
              placeholder="Phone no"
              {...register("phone", { required: true })}
            />
            {errors.phone && <span>This field is required</span>}
          </div>
          <div className="mt-5">
            <input
              type="password"
              className="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent  "
              placeholder="Password"
              {...register("password")}
            />
          </div>

          {/* <div className="mt-6 block p-5 text-sm md:font-sans text-xs text-gray-800">
						<input type="checkbox" className="inline-block border-0  "/>
						<span className="inline">By creating an account you are agreeing to our 
							<a className="" href="#" target="_blank" data-test="Link">
							<span className="underline ">Terms and Conditions</span> </a> and
						<a className="" href="#" target="_blank" data-test="Link">
							<span className="underline">Privacy Policy</span> </a>
						</span>
					</div> */}

          <div className="mt-10">
            <input
              type="submit"
              value="Sign up with email"
              className="py-3 bg-green-500 text-white w-full rounded hover:bg-green-600"
            />
          </div>
        </form>
        {/* <a className="" href="#" data-test="Link"><span className="block  p-5 text-center text-gray-800  text-xs ">Already have an account?</span></a> */}
      </div>
    </div>
  );
};

export default RegisterForm;
