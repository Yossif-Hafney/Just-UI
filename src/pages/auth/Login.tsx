import "../../styles/facebook-ui.css";
import { LoginForm } from "@/components/login-form";
import Footer from "@/components/Footer";
export default function Login() {
  return (
    <>
      <div className="container mb-28 mt-[72px] h-[536px] ">
        <div className="ml-auto mr-auto pt-5 pb-5  w-[980px]">
          <div className="bg-[#f2f4f7] min-h-[720px] ">
            <div className="relative top-0 left-0 w-full h-full">
              <div className="flex justify-center items-center min-h-screen pr-8">
                <div className="w-lg pr-8 mr-0">
                  <div className="absolute pt-28 pb-4 left-0 top-0">
                    <img
                      className="w-80 h-auto  -ml-6"
                      src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg"
                      alt="Facebook logo"
                    />
                    <div>
                      <h2 className="text-[28px] font-normal leading-8 w-[500px]">
                        Facebook helps you connect and share with the people in
                        your life.
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="w-96 h-[456px] absolute right-0 top-0  ">
                  <div className="w-96 h-[]  bg-white p-6 rounded-lg shadow-md absolute bottom-11 mt-10 pt-2.5 pb-6">
                    {/* Login Form Component */}
                    <LoginForm />
                    {/* Create Page Link */}
                    <div className="absolute -bottom-12 left-14 text-center mt-8">
                      <p className="text-[13px] text-[#1c1e21]">
                        <button
                          type="button"
                          className="font-semibold cursor-pointer hover:underline transition-colors focus:outline-none "
                        >
                          Create a Page
                        </button>{" "}
                        for a celebrity, brand or business.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
