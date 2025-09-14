import "../../styles/facebook-ui.css";
import { LoginForm } from "@/components/login-form";
import Footer from "@/components/Footer";
export default function Login() {
  return (
    <>
      <div className="bg-[#f2f4f7] min-h-screen flex flex-col justify-center">
        <div className="max-w-5xl w-full mx-auto flex flex-col lg:flex-row items-center lg:items-start lg:justify-between px-4">
          {/* Left side: Logo + tagline */}
          <div className="text-center lg:text-left lg:pr-8 mb-8 lg:mb-0 flex-1">
            <img
              className="w-60 lg:w-80 mx-auto lg:mx-0"
              src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg"
              alt="Facebook logo"
            />
            <h2 className="text-xl lg:text-[28px] font-normal leading-7 lg:leading-8 mt-4 max-w-[500px] mx-auto lg:mx-0">
              Facebook helps you connect and share with the people in your life.
            </h2>
          </div>

          {/* Right side: Login card */}
          <div className="w-full max-w-sm lg:w-96 flex-1">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <LoginForm />
            </div>

            {/* Create Page link OUTSIDE the card */}
            <div className="text-center mt-4">
              <p className="text-[13px] text-[#1c1e21]">
                <button
                  type="button"
                  className="font-semibold cursor-pointer hover:underline"
                >
                  Create a Page
                </button>{" "}
                for a celebrity, brand or business.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
