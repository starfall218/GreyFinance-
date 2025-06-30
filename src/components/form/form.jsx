import './form.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Home_Dashboard from '../dashboard/Home_dashboard';

function SignUp() {
  const [userData, setuserData] = useState({
    country: '',
    firstname: '',
    middlename: '',
    surname: '',
    gender: '',
    phoneNumber: '',
    referralCode: '',
    password: '',
    confirmPassword: '',
  });

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const sliderAttrivutes = [
    {
      src: 'https://app.grey.co/assets/globe-V2wlvKo-.svg',
      h3: 'Receive your payments faster ',
      p: 'Open a global bank account to send and receive payments in minutes',
    },
    {
      src: 'https://app.grey.co/assets/card-Deb73-6a.svg',
      h3: 'Spend globally with your Dollar card',
      p: 'Spend freely with a debit card that makes your international payments easier',
    },
    {
      src: 'https://app.grey.co/assets/convert-BugNh3r7.svg',
      h3: 'Instantly convert between currencies',
      p: 'Swap currencies with no hidden fees at the best market rates.',
    },
  ];

  const [box, setBox] = useState({
    descPTag: sliderAttrivutes[0].src,
    h3TagDesc: sliderAttrivutes[0].h3,
    imgLinkDesc: sliderAttrivutes[0].p,
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  const updateBox = () => {
    setCurrentIndex((prev) => (prev + 1) % sliderAttrivutes.length);
  };

  useEffect(() => {
    const interval = setInterval(updateBox, 9000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const current = sliderAttrivutes[currentIndex];
    setBox({
      h3TagDesc: current.h3,
      descPTag: current.p,
      imgLinkDesc: current.src,
    });
  }, [currentIndex]);

  const [stepOne, setStepOne] = useState(true);
  const [stepTwo, setStepTwo] = useState(false);
  const [stepThree, setStepThree] = useState(false);

  // Separate states for button disability for each step
  const [isStepOneButtonDisabled, setIsStepOneButtonDisabled] = useState(true);
  const [isStepTwoButtonDisabled, setIsStepTwoButtonDisabled] = useState(true);
  const [isStepThreeButtonDisabled, setIsStepThreeButtonDisabled] = useState(true);


  const goToNextStep = () => {
    if (stepOne) {
      if (!isStepOneButtonDisabled) { // Only proceed if step 1 is valid
        setStepOne(false);
        setStepTwo(true);
      }
    } else if (stepTwo) {
      if (!isStepTwoButtonDisabled) { // Only proceed if step 2 is valid
        setStepTwo(false);
        setStepThree(true);
      }
    }
  };

  const goToPreviousStep = () => {
    if (stepThree) {
      setStepThree(false);
      setStepTwo(true);
    } else if (stepTwo) {
      setStepTwo(false);
      setStepOne(true);
    }
  };

  // Validation for Step 1 (Country Selection)
  const validateStepOne = (value) => {
    setIsStepOneButtonDisabled(!value);
  };

  // Validation for Step 2 (Basic Information)
  const validateStepTwo = () => {
    const { firstname, surname, gender, phoneNumber } = userData;
    // Ensure all required fields for step 2 are not empty
    setIsStepTwoButtonDisabled(!(firstname && surname && gender && phoneNumber));
  };

  // Validation for Step 3 (Password Creation)
  const validateStepThree = () => {
    const { password, confirmPassword } = userData;
    // Check password conditions and if passwords match
    const isPasswordValid = passwordConditions.every(condition => condition.isValid);
    const passwordsMatch = password === confirmPassword && password !== ''; // Ensure password isn't empty

    setIsStepThreeButtonDisabled(!(isPasswordValid && passwordsMatch));
  };


  const myStyle = (isDisabled) => ({
    backgroundColor: isDisabled ? '#ccc' : '#2467E3',
    color: isDisabled ? 'rgb(133, 146, 173)' : '#fff',
    cursor: isDisabled ? 'not-allowed' : 'pointer',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordError, setPasswordError] = useState('');
  const [matchWarning, setMatchWarning] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const whenPasswordChanges = (e) => {
    const value = e.target.value;
    setPassword(value);
    setuserData((prev) => ({ ...prev, password: value }));
    if (value.length < 8) {
      setPasswordError('Password must be at least 8 characters');
    } else if (!/[A-Z]/.test(value) || !/[a-z]/.test(value) || !/[0-9]/.test(value)) {
      setPasswordError('Use uppercase, lowercase, and a number');
    } else {
      setPasswordError('');
    }
  };

  const toConfirmPasswordChange = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);
    setuserData((prev) => ({ ...prev, confirmPassword: value }));
  };

  const showPasswordToggle = () => setShowPassword(!showPassword);
  const toggleConfirmShowPass = () => setShowConfirmPassword(!showConfirmPassword);

  const handleSubmit = () => {
    if (passwordError || userData.password !== userData.confirmPassword) {
      setMatchWarning(true);
      return;
    }

    if (!acceptedTerms) {
      return;
    }

    setMatchWarning(false);
    localStorage.setItem('signupData', JSON.stringify(userData));
  };

  const passwordConditions = [
    {
      id: 'length',
      text: 'At least 8 characters',
      isValid: password.length >= 8,
    },
    {
      id: 'uppercase',
      text: 'One uppercase letter',
      isValid: /[A-Z]/.test(password),
    },
    {
      id: 'lowercase',
      text: 'One lowercase letter',
      isValid: /[a-z]/.test(password),
    },
    {
      id: 'number',
      text: 'One number',
      isValid: /[0-9]/.test(password),
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setuserData((prev) => {
      const updated = {
        ...prev,
        [name]: value,
      };
      localStorage.setItem('signupData', JSON.stringify(updated));
      return updated;
    });
  };

  // Use useEffect to run validation when userData changes for each step
  useEffect(() => {
    if (stepOne) {
      validateStepOne(userData.country);
    }
  }, [userData.country, stepOne]);

  useEffect(() => {
    if (stepTwo) {
      validateStepTwo();
    }
  }, [userData.firstname, userData.surname, userData.gender, userData.phoneNumber, stepTwo]);

  useEffect(() => {
    if (stepThree) {
      validateStepThree();
    }
  }, [userData.password, userData.confirmPassword, passwordConditions, stepThree]);

  return (
    <div className="formBox">
      <div className="image-slider flex-col relative">
        <div className="invr1 absolute top-0 left-0 bg-amber-300"></div>
        <div className="inner-img-slider flex flex-col">
          <div className="slide-form-Image-box flex flex-col items-center absolute z-1">
            <svg
              width="75"
              height="22"
              viewBox="0 0 75 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="logo"
            >
              {/* SVG content */}
            </svg>
            <img
              className="inverted-radius"
              src={box.imgLinkDesc}
              alt="Slider image description"
            />
          </div>
        </div>
        <div className="slider-desc flex flex-col items-center z-3 gap-3.5">
          <h2 className="slide-title">{box.h3TagDesc}</h2>
          <p className="slide-para">{box.descPTag}</p>
        </div>
        <div className="invr3 absolute top-6/12"></div>
        <div className="invr2 absolute bottom-0 right-0"></div>
      </div>
      {stepOne && (
        <div className="sign-UpForm">
          <div className="language-box">
            <div className="steps">
              <div className="round-circle">
                <div className="inner-circle"></div>
              </div>
              <div className="right-steps">
                <span className="sign-up-steps">STEP 1</span>
                <p>Country of residence</p>
              </div>
              <div className="processes">
                <div className="process-box">
                  <div className="step-line"></div>
                  <div className="inner-circle"></div>
                </div>
                <div className="process-box">
                  <div className="step-line"></div>
                  <div className="inner-circle"></div>
                </div>
                <div className="process-box">
                  <div className="step-line"></div>
                  <div className="inner-circle"></div>
                </div>
              </div>
            </div>
            <div className="form-box">
              <h1>What country do you live in?</h1>
              <div className="country-selector">
                <label htmlFor="country">Country</label>
                <select name="country" id="country" onChange={(e) => {
                  handleInputChange(e);
                  validateStepOne(e.target.value); // Pass the value to validate function
                }}>
                  <option value="">Select a country</option>
                  <option value="Algeria">Algeria</option>
                  <option value="Angola">Angola</option>
                </select>
              </div>
              <div className="kindly-note flex align-middle gap-5">
                <div className="warning-icon">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* SVG content */}
                  </svg>
                </div>
                <div className="flex flex-col">
                  <h3 className="kindly-note-text">Kindly note</h3>
                  <p className="warning-text">
                    The documents you can use for verification depend only on
                    your selected country of residence. Please double-check your
                    choice.
                  </p>
                </div>
              </div>
              <div className="continue-btn-box">
                <button
                  disabled={isStepOneButtonDisabled}
                  style={myStyle(isStepOneButtonDisabled)}
                  type="button"
                  className="continue-btn"
                  onClick={goToNextStep}
                >
                  Continue
                </button>
              </div>
            </div>
            <div className="sign-in-link">
              <p>
                Got an account?{' '}
                <Link className="create-account-testid" to="/logIn">
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      )}
      {stepTwo && (
        <div className="sign-UpForm mobile-step-form-box">
          <div className="language-box">
            <div className="steps flex flex-row items-center justify-around gap-2">
              <div className="arrow-back-box" onClick={goToPreviousStep}>
                <svg
                  className="arrow-back"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.38065 3.95337L2.33398 8.00004L6.38065 12.0467"
                    stroke="#2D3443"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M13.6673 8H2.44727"
                    stroke="#2D3443"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <div className="remaining-steps grid">
                <div className="step-one-success flex items-center">
                  <svg width="59" height="2" viewBox="0 0 59 2" fill="none" xmlns="http://www.w3.org/2000/svg" class="line-success"><path d="M1 1H57.3333" stroke="#36B37E" stroke-width="2" stroke-linecap="round"></path></svg>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="9" r="9" fill="#36B37E"></circle><path d="M6.19922 8.74242L7.2296 10.9652C7.25112 11.0116 7.286 11.0116 7.30753 10.9652L12.1992 7" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                </div>
                <div class="steps-2-title">
                  <span>STEP 2</span>
                  <p> Basic information</p>
                </div>

                <div class="process-box"><div class="step-line"></div><div class="inner-circle"></div></div>
                <div class="process-box"><div class="step-line"></div><div class="inner-circle"></div></div>
              </div>
            </div>
            <div className="form-box">
              <h1>Set up your account</h1>
              <form className="inputboxes flex flex-col gap-4">
                <div className="input-box">
                  <label className='flex items-center gap-2' htmlFor="firstname">First name (as it is on your ID)<svg width="15" height="15" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" data-tip="true" data-for="firstname" currentItem="false"><rect width="10" height="10" rx="5" fill="#A6ADB9"></rect><path d="M5.00024 3.75C5.34542 3.75 5.62524 3.47018 5.62524 3.125C5.62524 2.77982 5.34542 2.5 5.00024 2.5C4.65507 2.5 4.37524 2.77982 4.37524 3.125C4.37524 3.47018 4.65507 3.75 5.00024 3.75Z" fill="white"></path><path d="M5.92072 6.33233C5.86643 6.33233 5.81436 6.31091 5.77594 6.27277C5.73753 6.23463 5.7159 6.18289 5.71582 6.12891V4.57842C5.71582 4.52447 5.69426 4.47273 5.65589 4.43458C5.61753 4.39643 5.56549 4.375 5.51123 4.375H4.45459C4.40033 4.375 4.34829 4.39643 4.30992 4.43458C4.27155 4.47273 4.25 4.52447 4.25 4.57842V4.71425C4.25 4.7682 4.27155 4.81994 4.30992 4.85809C4.34829 4.89624 4.40033 4.91767 4.45459 4.91767C4.50885 4.91767 4.56089 4.9391 4.59926 4.97725C4.63763 5.0154 4.65918 5.06714 4.65918 5.12109V6.13046C4.65918 6.18441 4.63763 6.23615 4.59926 6.2743C4.56089 6.31245 4.50885 6.33388 4.45459 6.33388C4.40033 6.33388 4.34829 6.35531 4.30992 6.39346C4.27155 6.43161 4.25 6.48335 4.25 6.5373V6.67313C4.25041 6.72681 4.27215 6.77815 4.31047 6.81597C4.3488 6.85378 4.4006 6.875 4.45459 6.875H5.92041C5.94728 6.875 5.97388 6.86974 5.9987 6.85951C6.02352 6.84929 6.04608 6.83431 6.06508 6.81542C6.08407 6.79653 6.09914 6.7741 6.10943 6.74942C6.11971 6.72474 6.125 6.69829 6.125 6.67158V6.53575C6.125 6.48186 6.10349 6.43016 6.06519 6.39202C6.02689 6.35388 5.97493 6.33241 5.92072 6.33233Z" fill="white"></path></svg></label>
                  <input type="text" name="firstname" id="firstname" placeholder='Enter your legal first name' value={userData.firstname}
                    onChange={handleInputChange}
                    required />
                </div>

                {/* Middle name */}
                <div className="input-box">
                  <label className='flex items-center gap-2' htmlFor="firstname">Middle name (Optional)<svg width="15" height="15" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" data-tip="true" data-for="firstname" currentItem="false"><rect width="10" height="10" rx="5" fill="#A6ADB9"></rect><path d="M5.00024 3.75C5.34542 3.75 5.62524 3.47018 5.62524 3.125C5.62524 2.77982 5.34542 2.5 5.00024 2.5C4.65507 2.5 4.37524 2.77982 4.37524 3.125C4.37524 3.47018 4.65507 3.75 5.00024 3.75Z" fill="white"></path><path d="M5.92072 6.33233C5.86643 6.33233 5.81436 6.31091 5.77594 6.27277C5.73753 6.23463 5.7159 6.18289 5.71582 6.12891V4.57842C5.71582 4.52447 5.69426 4.47273 5.65589 4.43458C5.61753 4.39643 5.56549 4.375 5.51123 4.375H4.45459C4.40033 4.375 4.34829 4.39643 4.30992 4.43458C4.27155 4.47273 4.25 4.52447 4.25 4.57842V4.71425C4.25 4.7682 4.27155 4.81994 4.30992 4.85809C4.34829 4.89624 4.40033 4.91767 4.45459 4.91767C4.50885 4.91767 4.56089 4.9391 4.59926 4.97725C4.63763 5.0154 4.65918 5.06714 4.65918 5.12109V6.13046C4.65918 6.18441 4.63763 6.23615 4.59926 6.2743C4.56089 6.31245 4.50885 6.33388 4.45459 6.33388C4.40033 6.33388 4.34829 6.35531 4.30992 6.39346C4.27155 6.43161 4.25 6.48335 4.25 6.5373V6.67313C4.25041 6.72681 4.27215 6.77815 4.31047 6.81597C4.3488 6.85378 4.4006 6.875 4.45459 6.875H5.92041C5.94728 6.875 5.97388 6.86974 5.9987 6.85951C6.02352 6.84929 6.04608 6.83431 6.06508 6.81542C6.08407 6.79653 6.09914 6.7741 6.10943 6.74942C6.11971 6.72474 6.125 6.69829 6.125 6.67158V6.53575C6.125 6.48186 6.10349 6.43016 6.06519 6.39202C6.02689 6.35388 5.97493 6.33241 5.92072 6.33233Z" fill="white"></path></svg></label>
                  <input type="text" name="middlename" id="middlename" placeholder='Enter your legal middle name' value={userData.middlename}
                    onChange={handleInputChange}
                  />
                </div>

                {/* Last name */}
                <div className="input-box">
                  <label className='flex items-center gap-2' htmlFor="firstname">Surname (as it is on your ID)<svg width="15" height="15" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" data-tip="true" data-for="firstname" currentItem="false"><rect width="10" height="10" rx="5" fill="#A6ADB9"></rect><path d="M5.00024 3.75C5.34542 3.75 5.62524 3.47018 5.62524 3.125C5.62524 2.77982 5.34542 2.5 5.00024 2.5C4.65507 2.5 4.37524 2.77982 4.37524 3.125C4.37524 3.47018 4.65507 3.75 5.00024 3.75Z" fill="white"></path><path d="M5.92072 6.33233C5.86643 6.33233 5.81436 6.31091 5.77594 6.27277C5.73753 6.23463 5.7159 6.18289 5.71582 6.12891V4.57842C5.71582 4.52447 5.69426 4.47273 5.65589 4.43458C5.61753 4.39643 5.56549 4.375 5.51123 4.375H4.45459C4.40033 4.375 4.34829 4.39643 4.30992 4.43458C4.27155 4.47273 4.25 4.52447 4.25 4.57842V4.71425C4.25 4.7682 4.27155 4.81994 4.30992 4.85809C4.34829 4.89624 4.40033 4.91767 4.45459 4.91767C4.50885 4.91767 4.56089 4.9391 4.59926 4.97725C4.63763 5.0154 4.65918 5.06714 4.65918 5.12109V6.13046C4.65918 6.18441 4.63763 6.23615 4.59926 6.2743C4.56089 6.31245 4.50885 6.33388 4.45459 6.33388C4.40033 6.33388 4.34829 6.35531 4.30992 6.39346C4.27155 6.43161 4.25 6.48335 4.25 6.5373V6.67313C4.25041 6.72681 4.27215 6.77815 4.31047 6.81597C4.3488 6.85378 4.4006 6.875 4.45459 6.875H5.92041C5.94728 6.875 5.97388 6.86974 5.9987 6.85951C6.02352 6.84929 6.04608 6.83431 6.06508 6.81542C6.08407 6.79653 6.09914 6.7741 6.10943 6.74942C6.11971 6.72474 6.125 6.69829 6.125 6.67158V6.53575C6.125 6.48186 6.10349 6.43016 6.06519 6.39202C6.02689 6.35388 5.97493 6.33241 5.92072 6.33233Z" fill="white"></path></svg></label>
                  <input type="text" name="surname" id="Surname" placeholder='Enter your legal surname' value={userData.surname}
                    onChange={handleInputChange}
                    required />
                </div>

                {/* Gender */}
                <div className="input-box">
                  <label className='flex items-center gap-2' htmlFor="gender">Gender</label>
                  <select value={userData.gender}
                    onChange={handleInputChange}
                    required name="gender" id="gender">
                    <option value=''>Select Gender</option> {/* Added default option */}
                    <option value='Female'>Female</option>
                    <option value='Male'>Male</option>
                    <option value='none'>Prefer not to say</option>
                  </select>
                </div>

                {/* Phone Number */}
                <div className="input-box">
                  <label className='flex items-center gap-2' htmlFor="phoneNumber">Phone number</label>
                  <input type="tel" name="phoneNumber" id="phoneNumber" value={userData.phoneNumber}
                    onChange={handleInputChange}
                    required />
                </div>

                {/* Referral code*/}
                <div className="input-box">
                  <label className='flex items-center gap-2' htmlFor="referralCode">Referral code (Optional) <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="10" height="10" rx="5" fill="#A6ADB9"></rect><path d="M5.00024 3.75C5.34542 3.75 5.62524 3.47018 5.62524 3.125C5.62524 2.77982 5.34542 2.5 5.00024 2.5C4.65507 2.5 4.37524 2.77982 4.37524 3.125C4.37524 3.47018 4.65507 3.75 5.00024 3.75Z" fill="white"></path><path d="M5.92072 6.33233C5.86643 6.33233 5.81436 6.31091 5.77594 6.27277C5.73753 6.23463 5.7159 6.18289 5.71582 6.12891V4.57842C5.71582 4.52447 5.69426 4.47273 5.65589 4.43458C5.61753 4.39643 5.56549 4.375 5.51123 4.375H4.45459C4.40033 4.375 4.34829 4.39643 4.30992 4.43458C4.27155 4.47273 4.25 4.52447 4.25 4.57842V4.71425C4.25 4.7682 4.27155 4.81994 4.30992 4.85809C4.34829 4.89624 4.40033 4.91767 4.45459 4.91767C4.50885 4.91767 4.56089 4.9391 4.59926 4.97725C4.63763 5.0154 4.65918 5.06714 4.65918 5.12109V6.13046C4.65918 6.18441 4.63763 6.23615 4.59926 6.2743C4.56089 6.31245 4.50885 6.33388 4.45459 6.33388C4.40033 6.33388 4.34829 6.35531 4.30992 6.39346C4.27155 6.43161 4.25 6.48335 4.25 6.5373V6.67313C4.25041 6.72681 4.27215 6.77815 4.31047 6.81597C4.3488 6.85378 4.4006 6.875 4.45459 6.875H5.92041C5.94728 6.875 5.97388 6.86974 5.9987 6.85951C6.02352 6.84929 6.04608 6.83431 6.06508 6.81542C6.08407 6.79653 6.09914 6.7741 6.10943 6.74942C6.11971 6.72474 6.125 6.69829 6.125 6.67158V6.53575C6.125 6.48186 6.10349 6.43016 6.06519 6.39202C6.02689 6.35388 5.97493 6.33241 5.92072 6.33233Z" fill="white"></path></svg>
                  </label>
                  <input type="text" name="referralCode" id="referralCode" value={userData.referralCode} onChange={handleInputChange} />
                </div>
                <button
                  disabled={isStepTwoButtonDisabled}
                  style={myStyle(isStepTwoButtonDisabled)}
                  type="button"
                  className="continue-btn"
                  onClick={goToNextStep}
                >
                  Continue
                </button>
              </form>

            </div>
          </div>
        </div>
      )}
      {stepThree && (
        <div className="sign-UpForm mobile-step-form-box">
          <div className="language-box">
            <div className="steps flex flex-row items-center gap-2">
              <div className="arrow-back-box" onClick={goToPreviousStep}>
                <svg
                  className="arrow-back"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.38065 3.95337L2.33398 8.00004L6.38065 12.0467"
                    stroke="#2D3443"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M13.6673 8H2.44727"
                    stroke="#2D3443"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              {/* Remaining steps */}
              <div className="remaining-steps grid">
                <div className="step-one-success flex items-center">
                  <svg width="59" height="2" viewBox="0 0 59 2" fill="none" xmlns="http://www.w3.org/2000/svg" class="line-success"><path d="M1 1H57.3333" stroke="#36B37E" stroke-width="2" stroke-linecap="round"></path></svg>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="9" r="9" fill="#36B37E"></circle><path d="M6.19922 8.74242L7.2296 10.9652C7.25112 11.0116 7.286 11.0116 7.30753 10.9652L12.1992 7" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                </div>

                <div className="step-one-success flex items-center">
                  <svg width="59" height="2" viewBox="0 0 59 2" fill="none" xmlns="http://www.w3.org/2000/svg" class="line-success"><path d="M1 1H57.3333" stroke="#36B37E" stroke-width="2" stroke-linecap="round"></path></svg>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="9" r="9" fill="#36B37E"></circle><path d="M6.19922 8.74242L7.2296 10.9652C7.25112 11.0116 7.286 11.0116 7.30753 10.9652L12.1992 7" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                </div>
                <div class="steps-2-title">
                  <span>STEP 3</span>
                  <p>Create password</p>
                </div>

                <div class="process-box"><div class="step-line"></div><div class="inner-circle"></div></div>
              </div>
            </div>
            <div className="form-box">
              <h1>Create password</h1>
              {/* Input fields */}
              <div className="password-boxes flex flex-col gap-4">
                <div className="password relative">
                  <label className='block' htmlFor="password">Password</label>
                  <input className='password-input' type={showPassword ? 'text' : 'password'} value={userData.password}
                    onChange={whenPasswordChanges} // Use the specific password change handler
                    name="password" id="password" placeholder="Create a password" required />
                  <div className="password-conditions flex flex-wrap gap-2 mt-2">
                    {passwordConditions.map((condition) => (
                      <div key={condition.id} className={`password-condition flex items-center gap-1 px-3 py-1 rounded-full text-sm transition-all duration-200 ${condition.isValid
                        ? 'bg-green-100 text-green-700 border border-green-400'
                        : 'bg-gray-100 text-gray-600 border border-gray-300'
                        }`}
                      >
                        {condition.isValid && (
                          <svg
                            className="w-4 h-4 text-green-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                        <span>{condition.text}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={showPasswordToggle}
                    className="toggle-visibility absolute right-2 top-8"
                  >
                    {showPassword ? (
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.99995 5.61333C8.27386 5.61333 8.54135 5.65977 8.79276 5.74824C8.54091 5.65941 8.27363 5.61333 7.99995 5.61333ZM7.99995 5.61333C6.68381 5.61333 5.61328 6.68385 5.61328 7.99999M7.99995 5.61333C6.68276 5.61333 5.61328 6.6828 5.61328 7.99999M5.61328 7.99999C5.61328 8.2739 5.65972 8.5414 5.74819 8.7928C5.65936 8.54096 5.61328 8.27368 5.61328 7.99999Z" fill="#2467E3" stroke="#2467E3"></path><path d="M3.73323 12.34C3.6199 12.34 3.4999 12.3 3.40656 12.22C2.69323 11.6133 2.05323 10.8667 1.50656 10C0.799896 8.9 0.799896 7.10666 1.50656 6C3.13323 3.45333 5.4999 1.98666 7.9999 1.98666C9.46656 1.98666 10.9132 2.49333 12.1799 3.44666C12.3999 3.61333 12.4466 3.92666 12.2799 4.14666C12.1132 4.36666 11.7999 4.41333 11.5799 4.24666C10.4866 3.42 9.24656 2.98666 7.9999 2.98666C5.84656 2.98666 3.78656 4.28 2.34656 6.54C1.84656 7.32 1.84656 8.68 2.34656 9.46C2.84656 10.24 3.4199 10.9133 4.05323 11.46C4.2599 11.64 4.28656 11.9533 4.10656 12.1667C4.01323 12.28 3.87323 12.34 3.73323 12.34Z" fill="#2467E3"></path><path d="M7.99972 14.0133C7.11305 14.0133 6.24638 13.8333 5.41305 13.48C5.15972 13.3733 5.03972 13.08 5.14638 12.8267C5.25305 12.5733 5.54638 12.4533 5.79972 12.56C6.50638 12.86 7.24638 13.0133 7.99305 13.0133C10.1464 13.0133 12.2064 11.72 13.6464 9.46C14.1464 8.68 14.1464 7.32 13.6464 6.54C13.4397 6.21334 13.213 5.9 12.973 5.60667C12.7997 5.39334 12.833 5.08 13.0464 4.9C13.2597 4.72667 13.573 4.75334 13.753 4.97334C14.013 5.29334 14.2664 5.64 14.493 6C15.1997 7.1 15.1997 8.89334 14.493 10C12.8664 12.5467 10.4997 14.0133 7.99972 14.0133Z" fill="#2467E3"></path><path d="M8.45973 10.8467C8.22639 10.8467 8.01306 10.68 7.96639 10.44C7.91306 10.1667 8.09306 9.90667 8.36639 9.86C9.09973 9.72667 9.71306 9.11333 9.84639 8.38C9.89973 8.10667 10.1597 7.93333 10.4331 7.98C10.7064 8.03333 10.8864 8.29333 10.8331 8.56667C10.6197 9.72 9.69973 10.6333 8.55306 10.8467C8.51973 10.84 8.49306 10.8467 8.45973 10.8467Z" fill="#2467E3"></path><path d="M1.33427 15.1667C1.2076 15.1667 1.08094 15.12 0.980938 15.02C0.787604 14.8267 0.787604 14.5067 0.980938 14.3133L5.96094 9.33334C6.15427 9.14001 6.47427 9.14001 6.6676 9.33334C6.86094 9.52667 6.86094 9.84667 6.6676 10.04L1.6876 15.02C1.5876 15.12 1.46094 15.1667 1.33427 15.1667Z" fill="#2467E3"></path><path d="M9.68583 6.81334C9.55917 6.81334 9.4325 6.76667 9.3325 6.66667C9.13917 6.47334 9.13917 6.15334 9.3325 5.96001L14.3125 0.980007C14.5058 0.786673 14.8258 0.786673 15.0192 0.980007C15.2125 1.17334 15.2125 1.49334 15.0192 1.68667L10.0392 6.66667C9.93917 6.76667 9.8125 6.81334 9.68583 6.81334Z" fill="#2467E3"></path></svg>
                    ) : (
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.99995 10.3867C6.68276 10.3867 5.61328 9.31718 5.61328 7.99999M7.99995 10.3867C9.31714 10.3867 10.3866 9.31718 10.3866 7.99999M7.99995 10.3867C9.31609 10.3867 10.3866 9.31614 10.3866 7.99999M7.99995 10.3867C6.68381 10.3867 5.61328 9.31614 5.61328 7.99999M5.61328 7.99999C5.61328 6.6828 6.68276 5.61333 7.99995 5.61333M5.61328 7.99999C5.61328 6.68385 6.68381 5.61333 7.99995 5.61333M10.3866 7.99999C10.3866 6.6828 9.31714 5.61333 7.99995 5.61333M10.3866 7.99999C10.3866 6.68385 9.31609 5.61333 7.99995 5.61333" fill="#2467E3" stroke="#2467E3"></path><path d="M8.0007 14.0133C5.49404 14.0133 3.12737 12.5467 1.5007 10C0.794036 8.9 0.794036 7.10666 1.5007 6C3.13404 3.45333 5.5007 1.98666 8.0007 1.98666C10.5007 1.98666 12.8674 3.45333 14.494 6C15.2007 7.1 15.2007 8.89333 14.494 10C12.8674 12.5467 10.5007 14.0133 8.0007 14.0133ZM8.0007 2.98666C5.84737 2.98666 3.78737 4.28 2.34737 6.54C1.84737 7.32 1.84737 8.68 2.34737 9.46C3.78737 11.72 5.84737 13.0133 8.0007 13.0133C10.154 13.0133 12.214 11.72 13.654 9.46C14.154 8.68 14.154 7.32 13.654 6.54C12.214 4.28 10.154 2.98666 8.0007 2.98666Z" fill="#2467E3"></path><path d="M8.45973 10.8467C8.22639 10.8467 8.01306 10.68 7.96639 10.44C7.91306 10.1667 8.09306 9.90667 8.36639 9.86C9.09973 9.72667 9.71306 9.11333 9.84639 8.38C9.89973 8.10667 10.1597 7.93333 10.4331 7.98C10.7064 8.03333 10.8864 8.29333 10.8331 8.56667C10.6197 9.72 9.69973 10.6333 8.55306 10.8467C8.51973 10.84 8.49306 10.8467 8.45973 10.8467Z" fill="#2467E3"></path><path d="M1.33427 15.1667C1.2076 15.1667 1.08094 15.12 0.980938 15.02C0.787604 14.8267 0.787604 14.5067 0.980938 14.3133L5.96094 9.33334C6.15427 9.14001 6.47427 9.14001 6.6676 9.33334C6.86094 9.52667 6.86094 9.84667 6.6676 10.04L1.6876 15.02C1.5876 15.12 1.46094 15.1667 1.33427 15.1667Z" fill="#2467E3"></path><path d="M9.68583 6.81334C9.55917 6.81334 9.4325 6.76667 9.3325 6.66667C9.13917 6.47334 9.13917 6.15334 9.3325 5.96001L14.3125 0.980007C14.5058 0.786673 14.8258 0.786673 15.0192 0.980007C15.2125 1.17334 15.2125 1.49334 15.0192 1.68667L10.0392 6.66667C9.93917 6.76667 9.8125 6.81334 9.68583 6.81334Z" fill="#2467E3"></path></svg>
                    )}
                  </button>
                  {passwordError && (
                    <p className="text-red-600 text-sm mt-1">{passwordError}</p>
                  )}
                </div>

                <div className="confirm-password relative">
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <input className='password-input'
                    type={showConfirmPassword ? 'text' : 'password'}
                    value={userData.confirmPassword} onChange={toConfirmPasswordChange} // Changed to userData.confirmPassword
                    name="confirmPassword"
                    id="confirmPassword"
                    placeholder="Re-enter your password"
                    required
                  />
                  {matchWarning && (
                    <p className="text-red-600 text-sm mt-1">Passwords do not match.</p>
                  )}
                  <button
                    type="button"
                    onClick={toggleConfirmShowPass} // Changed to toggleConfirmShowPass
                    className="toggle-visibility absolute right-2 top-8"
                  >
                    {showConfirmPassword ? (
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.99995 5.61333C8.27386 5.61333 8.54135 5.65977 8.79276 5.74824C8.54091 5.65941 8.27363 5.61333 7.99995 5.61333ZM7.99995 5.61333C6.68381 5.61333 5.61328 6.68385 5.61328 7.99999M7.99995 5.61333C6.68276 5.61333 5.61328 6.6828 5.61328 7.99999M5.61328 7.99999C5.61328 8.2739 5.65972 8.5414 5.74819 8.7928C5.65936 8.54096 5.61328 8.27368 5.61328 7.99999Z" fill="#2467E3" stroke="#2467E3"></path><path d="M3.73323 12.34C3.6199 12.34 3.4999 12.3 3.40656 12.22C2.69323 11.6133 2.05323 10.8667 1.50656 10C0.799896 8.9 0.799896 7.10666 1.50656 6C3.13323 3.45333 5.4999 1.98666 7.9999 1.98666C9.46656 1.98666 10.9132 2.49333 12.1799 3.44666C12.3999 3.61333 12.4466 3.92666 12.2799 4.14666C12.1132 4.36666 11.7999 4.41333 11.5799 4.24666C10.4866 3.42 9.24656 2.98666 7.9999 2.98666C5.84656 2.98666 3.78656 4.28 2.34656 6.54C1.84656 7.32 1.84656 8.68 2.34656 9.46C2.84656 10.24 3.4199 10.9133 4.05323 11.46C4.2599 11.64 4.28656 11.9533 4.10656 12.1667C4.01323 12.28 3.87323 12.34 3.73323 12.34Z" fill="#2467E3"></path><path d="M7.99972 14.0133C7.11305 14.0133 6.24638 13.8333 5.41305 13.48C5.15972 13.3733 5.03972 13.08 5.14638 12.8267C5.25305 12.5733 5.54638 12.4533 5.79972 12.56C6.50638 12.86 7.24638 13.0133 7.99305 13.0133C10.1464 13.0133 12.2064 11.72 13.6464 9.46C14.1464 8.68 14.1464 7.32 13.6464 6.54C13.4397 6.21334 13.213 5.9 12.973 5.60667C12.7997 5.39334 12.833 5.08 13.0464 4.9C13.2597 4.72667 13.573 4.75334 13.753 4.97334C14.013 5.29334 14.2664 5.64 14.493 6C15.1997 7.1 15.1997 8.89334 14.493 10C12.8664 12.5467 10.4997 14.0133 7.99972 14.0133Z" fill="#2467E3"></path><path d="M8.45973 10.8467C8.22639 10.8467 8.01306 10.68 7.96639 10.44C7.91306 10.1667 8.09306 9.90667 8.36639 9.86C9.09973 9.72667 9.71306 9.11333 9.84639 8.38C9.89973 8.10667 10.1597 7.93333 10.4331 7.98C10.7064 8.03333 10.8864 8.29333 10.8331 8.56667C10.6197 9.72 9.69973 10.6333 8.55306 10.8467C8.51973 10.84 8.49306 10.8467 8.45973 10.8467Z" fill="#2467E3"></path><path d="M1.33427 15.1667C1.2076 15.1667 1.08094 15.12 0.980938 15.02C0.787604 14.8267 0.787604 14.5067 0.980938 14.3133L5.96094 9.33334C6.15427 9.14001 6.47427 9.14001 6.6676 9.33334C6.86094 9.52667 6.86094 9.84667 6.6676 10.04L1.6876 15.02C1.5876 15.12 1.46094 15.1667 1.33427 15.1667Z" fill="#2467E3"></path><path d="M9.68583 6.81334C9.55917 6.81334 9.4325 6.76667 9.3325 6.66667C9.13917 6.47334 9.13917 6.15334 9.3325 5.96001L14.3125 0.980007C14.5058 0.786673 14.8258 0.786673 15.0192 0.980007C15.2125 1.17334 15.2125 1.49334 15.0192 1.68667L10.0392 6.66667C9.93917 6.76667 9.8125 6.81334 9.68583 6.81334Z" fill="#2467E3"></path></svg>
                    ) : (
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.99995 10.3867C6.68276 10.3867 5.61328 9.31718 5.61328 7.99999M7.99995 10.3867C9.31714 10.3867 10.3866 9.31718 10.3866 7.99999M7.99995 10.3867C9.31609 10.3867 10.3866 9.31614 10.3866 7.99999M7.99995 10.3867C6.68381 10.3867 5.61328 9.31614 5.61328 7.99999M5.61328 7.99999C5.61328 6.6828 6.68276 5.61333 7.99995 5.61333M5.61328 7.99999C5.61328 6.68385 6.68381 5.61333 7.99995 5.61333M10.3866 7.99999C10.3866 6.6828 9.31714 5.61333 7.99995 5.61333M10.3866 7.99999C10.3866 6.68385 9.31609 5.61333 7.99995 5.61333" fill="#2467E3" stroke="#2467E3"></path><path d="M8.0007 14.0133C5.49404 14.0133 3.12737 12.5467 1.5007 10C0.794036 8.9 0.794036 7.10666 1.5007 6C3.13404 3.45333 5.5007 1.98666 8.0007 1.98666C10.5007 1.98666 12.8674 3.45333 14.494 6C15.2007 7.1 15.2007 8.89333 14.494 10C12.8674 12.5467 10.5007 14.0133 8.0007 14.0133ZM8.0007 2.98666C5.84737 2.98666 3.78737 4.28 2.34737 6.54C1.84737 7.32 1.84737 8.68 2.34737 9.46C3.78737 11.72 5.84737 13.0133 8.0007 13.0133C10.154 13.0133 12.214 11.72 13.654 9.46C14.154 8.68 14.154 7.32 13.654 6.54C12.214 4.28 10.154 2.98666 8.0007 2.98666Z" fill="#2467E3"></path><path d="M8.45973 10.8467C8.22639 10.8467 8.01306 10.68 7.96639 10.44C7.91306 10.1667 8.09306 9.90667 8.36639 9.86C9.09973 9.72667 9.71306 9.11333 9.84639 8.38C9.89973 8.10667 10.1597 7.93333 10.4331 7.98C10.7064 8.03333 10.8864 8.29333 10.8331 8.56667C10.6197 9.72 9.69973 10.6333 8.55306 10.8467C8.51973 10.84 8.49306 10.8467 8.45973 10.8467Z" fill="#2467E3"></path><path d="M1.33427 15.1667C1.2076 15.1667 1.08094 15.12 0.980938 15.02C0.787604 14.8267 0.787604 14.5067 0.980938 14.3133L5.96094 9.33334C6.15427 9.14001 6.47427 9.14001 6.6676 9.33334C6.86094 9.52667 6.86094 9.84667 6.6676 10.04L1.6876 15.02C1.5876 15.12 1.46094 15.1667 1.33427 15.1667Z" fill="#2467E3"></path><path d="M9.68583 6.81334C9.55917 6.81334 9.4325 6.76667 9.3325 6.66667C9.13917 6.47334 9.13917 6.15334 9.3325 5.96001L14.3125 0.980007C14.5058 0.786673 14.8258 0.786673 15.0192 0.980007C15.2125 1.17334 15.2125 1.49334 15.0192 1.68667L10.0392 6.66667C9.93917 6.76667 9.8125 6.81334 9.68583 6.81334Z" fill="#2467E3"></path></svg>
                    )}
                  </button>
                </div>
              </div>
              <div className="terms-condition-box flex items-center justify-center gap-3 mt-8">
                <input
                  type="checkbox"
                  name="terms"
                  id="terms"
                  checked={acceptedTerms}
                  onChange={(e) => setAcceptedTerms(e.target.checked)}
                />
                <p className='text-sm leading-3 terms-and-condition'>
                  By creating an account, you agree to the Grey
                  <Link> Terms of Service </Link> and
                  <Link> Privacy Policy</Link>.
                </p>
              </div>
              <Link 
  to="/main_dashboard" 
  className="continue-btn-link"
  onClick={(e) => {
    if (isStepThreeButtonDisabled || !acceptedTerms) {
      e.preventDefault();
    } else {
      handleSubmit(); 
    }
  }}
>
  <button
    disabled={isStepThreeButtonDisabled || !acceptedTerms}
    style={myStyle(isStepThreeButtonDisabled || !acceptedTerms)}
    type="button"
    className="continue-btn"
  >
    Continue
  </button>
</Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SignUp;