import Footer from "@/components/Footer";
import { FacebookSelect } from "@/components/facebook-select";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";
import { FaExclamationCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Register() {
  const [showBirthdayTooltip, setShowBirthdayTooltip] = useState(false);
  const [showGenderTooltip, setShowGenderTooltip] = useState(false);
  const [selectedDay, setSelectedDay] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const tooltipRef = useRef<HTMLDivElement>(null);
  const genderTooltipRef = useRef<HTMLDivElement>(null);

  // Form values and warnings
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  // removed unused warnings state

  const [warned, setWarned] = useState({
    firstName: false,
    lastName: false,
    email: false,
    password: false,
  });

  const handleInputChange =
    (field: keyof typeof formValues) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormValues((prev) => ({
        ...prev,
        [field]: e.target.value,
      }));
      // Clear warning if user types anything
      if (warned[field] && e.target.value.trim()) {
        setWarned((prev) => ({ ...prev, [field]: false }));
      }
    };

  const handleInputBlur = (field: keyof typeof formValues) => () => {
    if (!formValues[field].trim() && !warned[field]) {
      setWarned((prev) => ({ ...prev, [field]: true }));
    }
  };

  const toggleBirthdayTooltip = () => {
    setShowBirthdayTooltip(!showBirthdayTooltip);
  };

  const toggleGenderTooltip = () => {
    setShowGenderTooltip(!showGenderTooltip);
  };

  // Handle click outside to close tooltips
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        tooltipRef.current &&
        !tooltipRef.current.contains(event.target as Node)
      ) {
        setShowBirthdayTooltip(false);
      }
      if (
        genderTooltipRef.current &&
        !genderTooltipRef.current.contains(event.target as Node)
      ) {
        setShowGenderTooltip(false);
      }
    };

    if (showBirthdayTooltip || showGenderTooltip) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showBirthdayTooltip, showGenderTooltip]);

  // Day options (1-31)
  const dayOptions = Array.from({ length: 31 }, (_, i) => ({
    value: String(i + 1),
    label: String(i + 1),
  }));

  // Month options
  const monthOptions = [
    { value: "1", label: "Jan" },
    { value: "2", label: "Feb" },
    { value: "3", label: "Mar" },
    { value: "4", label: "Apr" },
    { value: "5", label: "May" },
    { value: "6", label: "Jun" },
    { value: "7", label: "Jul" },
    { value: "8", label: "Aug" },
    { value: "9", label: "Sep" },
    { value: "10", label: "Oct" },
    { value: "11", label: "Nov" },
    { value: "12", label: "Dec" },
  ];

  // Year options (current year back 100 years)
  const yearOptions = Array.from({ length: 100 }, (_, i) => {
    const year = new Date().getFullYear() - i;
    return {
      value: String(year),
      label: String(year),
    };
  });
  return (
    <>
      <div className="m-0 p-0 outline-none box-border w-full flex justify-center items-center">
        <img
          src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg"
          alt="Facebook logo"
          className="h-[100px]"
        />
      </div>
      <div className="w-full ">
        <div className="ml-auto mr-auto  pb-5 w-[980px] h-[622.33px] ">
          <div className="m-0 p-0 outline-none w-full flex justify-center items-center ">
            <div className=" rounded-lg w-[432px] box-border relative shadow-2xl z-[1] pt-2.5 pb-2.5 pr-4 pl-4 bg-white">
              <div className="text-center">
                <h2 className="text-2xl font-bold">Create a new account</h2>
                <p className="text-[15px] text-gray-600 pb-2.5">
                  It's quick and easy.
                </p>
              </div>

              <div className="w-[400px] rounded-b-lg pt-4 pb-4 border-t-1 border-t-[#DADDE1]">
                <form className="space-y-3">
                  {/* Name Fields */}
                  <div className="flex gap-2">
                    <div className="flex-1">
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="First name"
                          value={formValues.firstName}
                          onChange={handleInputChange("firstName")}
                          onBlur={handleInputBlur("firstName")}
                          className={`w-full rounded-md border px-3 py-2 pr-10 text-sm placeholder-gray-500 transition-colors duration-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none ${
                            warned.firstName
                              ? "border-red-500"
                              : "border-gray-300"
                          }`}
                        />
                        {warned.firstName && (
                          <FaExclamationCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 text-red-500 text-base" />
                        )}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="Surname"
                          value={formValues.lastName}
                          onChange={handleInputChange("lastName")}
                          onBlur={handleInputBlur("lastName")}
                          className={`w-full rounded-md border px-3 py-2 pr-10 text-sm placeholder-gray-500 transition-colors duration-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none ${
                            warned.lastName
                              ? "border-red-500"
                              : "border-gray-300"
                          }`}
                        />
                        {warned.lastName && (
                          <FaExclamationCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 text-red-500 text-base" />
                        )}
                      </div>
                    </div>
                  </div>
                  {/* Birthday Section */}
                  <div className="relative">
                    <div className="flex items-center mb-2 text-[12px] font-normal leading-5 text-[#606770]">
                      Data birth
                      <div className="relative ml-1" ref={tooltipRef}>
                        <button
                          type="button"
                          onClick={toggleBirthdayTooltip}
                          className="inline-flex w-3 h-3 rounded-full bg-[#8a8d91] items-center justify-center hover:bg-[#6a6d70] transition-colors cursor-pointer"
                        >
                          <span className="text-white text-[8px] font-bold">
                            ?
                          </span>
                        </button>

                        {/* Tooltip */}
                        {showBirthdayTooltip && (
                          <div className="absolute left-[-342px] top-0 w-[310px] bg-white text-[#65676b] text-[12px] rounded-sm shadow-lg z-10 border-gray-600">
                            <div className="relative p-3 text-[13px] leading-4">
                              <b>Providing your birthday</b> helps make sure
                              that you get the right Facebook experience for
                              your age. If you want to change who sees this, go
                              to the About section of your profile. For more
                              details, please visit our Privacy Policy.
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Birthday Dropdowns */}
                    <div className="flex gap-2">
                      <FacebookSelect
                        options={dayOptions}
                        placeholder="Day"
                        value={selectedDay}
                        onChange={setSelectedDay}
                        className="flex-1"
                      />

                      <FacebookSelect
                        options={monthOptions}
                        placeholder="Month"
                        value={selectedMonth}
                        onChange={setSelectedMonth}
                        className="flex-1"
                      />

                      <FacebookSelect
                        options={yearOptions}
                        placeholder="Year"
                        value={selectedYear}
                        onChange={setSelectedYear}
                        className="flex-1"
                      />
                    </div>
                    {/* Gender Section */}
                    <div className="relative">
                      <div className="flex items-center mt-2 mb-2 text-[12px] font-normal leading-5 text-[#606770]">
                        Gender
                        <div className="relative ml-1" ref={genderTooltipRef}>
                          <button
                            type="button"
                            onClick={toggleGenderTooltip}
                            className="inline-flex w-3 h-3 rounded-full bg-[#8a8d91] items-center justify-center hover:bg-[#6a6d70] transition-colors cursor-pointer"
                          >
                            <span className="text-white text-[8px] font-bold">
                              ?
                            </span>
                          </button>

                          {/* Tooltip */}
                          {showGenderTooltip && (
                            <div className="absolute left-[-342px] top-0 w-[310px] bg-white text-[#65676b] text-[12px] rounded-sm shadow-lg z-10 border-gray-600">
                              <div className="relative p-3 text-[13px] leading-4">
                                You can change who sees your gender on your
                                profile later. Select Custom to choose another
                                gender, or if you'd rather not say.
                              </div>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Gender Options */}
                      <div className="flex gap-2">
                        <div className="bg-white border rounded-sm border-[#CCD0D5] box-border inline-block flex-auto font-normal h-9 p-0 relative">
                          <label className="box-border text-[#1c1e21] inline-block font-sans font-medium text-[15px] leading-9 pl-2.5 pr-7 w-full cursor-pointer relative">
                            Male
                            <input
                              type="radio"
                              name="gender"
                              id="male"
                              className="absolute top-1/2 right-2.5 -translate-y-1/2 accent-[#1877f2] h-4 w-4"
                            />
                          </label>
                        </div>
                        <div className="bg-white border rounded-sm border-[#CCD0D5] box-border inline-block flex-auto font-normal h-9 p-0 relative">
                          <label className="box-border text-[#1c1e21] inline-block font-sans font-medium text-[15px] leading-9 pl-2.5 pr-7 w-full cursor-pointer relative">
                            Female
                            <input
                              type="radio"
                              name="gender"
                              id="female"
                              className="absolute top-1/2 right-2.5 -translate-y-1/2 accent-[#1877f2] h-4 w-4"
                            />
                          </label>
                        </div>
                      </div>
                    </div>
                    {/*Email section*/}
                    <div className="flex gap-2 mt-3">
                      <div className="flex-1">
                        <div className="relative">
                          <input
                            type="text"
                            placeholder="Mobile number or email address"
                            value={formValues.email}
                            onChange={handleInputChange("email")}
                            onBlur={handleInputBlur("email")}
                            className={`w-full rounded-md border px-3 py-2 pr-10 text-sm placeholder-gray-500 transition-colors duration-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none ${
                              warned.email
                                ? "border-red-500"
                                : "border-gray-300"
                            }`}
                          />
                          {warned.email && (
                            <FaExclamationCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 text-red-500 text-base" />
                          )}
                        </div>
                      </div>
                    </div>
                    {/* Password section */}
                    <div className="flex gap-2 mt-3 pb-2">
                      <div className="flex-1">
                        <div className="relative">
                          <input
                            type="password"
                            placeholder="New password"
                            value={formValues.password}
                            onChange={handleInputChange("password")}
                            onBlur={handleInputBlur("password")}
                            className={`w-full rounded-md border px-3 py-2 pr-10 text-sm placeholder-gray-500 transition-colors duration-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none ${
                              warned.password
                                ? "border-red-500"
                                : "border-gray-300"
                            }`}
                          />
                          {warned.password && (
                            <FaExclamationCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 text-red-500 text-base" />
                          )}
                        </div>
                      </div>
                    </div>
                    {/* Terms */}
                    <div className="flex mt-2.5 mb-2.5 ">
                      <p className="w-auto text-[#777] text-[11px]">
                        People who use our service may have uploaded your
                        contact information to Facebook.
                        <a
                          href="#"
                          className="text-[#385898] cursor-pointer hover:underline transition-colors "
                        >
                          Learn more
                        </a>
                      </p>
                    </div>
                    <div className="flex mt-2.5 mb-2.5 ">
                      <p className="w-auto text-[#777] text-[11px]">
                        By clicking Sign Up, you agree to our{" "}
                        <a
                          href="#"
                          className="text-[#385898] cursor-pointer hover:underline transition-colors "
                        >
                          Terms
                        </a>
                        ,{" "}
                        <a
                          href="#"
                          className="text-[#385898] cursor-pointer hover:underline transition-colors "
                        >
                          Data Policy
                        </a>{" "}
                        and{" "}
                        <a
                          href="#"
                          className="text-[#385898] cursor-pointer hover:underline transition-colors "
                        >
                          Privacy Policy{" "}
                        </a>
                        and{" "}
                        <a
                          href="#"
                          className="text-[#385898] cursor-pointer hover:underline transition-colors "
                        >
                          Cookies Policy
                        </a>
                        . You may receive SMS notifications from us and can opt
                        out at any time.
                      </p>
                    </div>

                    {/* Sign Up Button */}
                    <div className="flex justify-center mt-6 mb-4">
                      <Button
                        variant="facebook-register"
                        type="submit"
                        className="text-[18px]  cursor-pointer w-1/2 disabled:opacity-50 bg-[#00a400] border-0 rounded-md shadow-none text-white text-lg font-semibold h-9 overflow-hidden px-8"
                      >
                        Sign Up
                      </Button>
                    </div>
                    <div className=" mt-2 pt-2.5 relative text-center">
                      <p className="text-sm cursor-pointer text-[#1877f2] font-sans font-semibold text-[17px] leading-5">
                        <Link to="/">Already have an account</Link>
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer between form and footer */}
      <div className="mb-15"></div>

      <Footer />
    </>
  );
}
