import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Function that displays a success toast on bottom right of the page when form submission is successful
  const toastifySuccess = () => {
    toast("Form sent, thank you!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: "submit-feedback success red-background",
      toastId: "notifyToast",
    });
  };

  // Function called on submit that uses emailjs to send email of valid contact form
  const onSubmit = async (data) => {
    // Destrcture data object
    const { name, email, subject, message } = data;
    try {
      const templateParams = {
        name,
        email,
        subject,
        message,
      };

      await emailjs.send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_USER_ID
      );

      reset();
      toastifySuccess();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="mb-5 col">
      <div className="contact d-flex justify-content-center">
        <h1 className="m-5 font-weight-light text-center">CONTACT SHELBY</h1>
      </div>

      <div className="mx-5">
        <p>
          What design needs do you have for your business or organization?
          Whether it's a new logo or rebranding an existing one, building a new
          website or updating what you have now—whatever it is you're looking
          for—reach out to Shelby to get the conversation started. Just use the
          contact form below.
        </p>
      </div>
      <div>
        <div className="d-flex justify-content-center">
          <div className="col-12">
            <div className="contactForm mx-3">
              <form
                id="contact-form"
                onSubmit={handleSubmit(onSubmit)}
                noValidate
              >
                {/* Row 1 and 2 of form */}
                <div>
                  <div className="col my-4">
                    <input
                      type="text"
                      name="name"
                      {...register("name", {
                        required: {
                          value: true,
                          message: "Please enter your name",
                        },
                        maxLength: {
                          value: 30,
                          message: "Please use 30 characters or less",
                        },
                      })}
                      className="form-control formInput"
                      placeholder="Name"
                    ></input>
                    {errors.name && (
                      <span className="errorMessage pl-2 pl-2">
                        {errors.name.message}
                      </span>
                    )}
                  </div>
                  <div className="col mb-4">
                    <input
                      type="email"
                      name="email"
                      {...register("email", {
                        required: true,
                        pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                      })}
                      className="form-control formInput"
                      placeholder="Email address"
                    ></input>
                    {errors.email && (
                      <span className="errorMessage pl-2">
                        Please enter a valid email address
                      </span>
                    )}
                  </div>
                </div>
                {/* Row 3 of form */}
                <div>
                  <div className="col mb-4">
                    <input
                      type="text"
                      name="subject"
                      {...register("subject", {
                        required: {
                          value: true,
                          message: "Please enter a subject",
                        },
                        maxLength: {
                          value: 75,
                          message: "Subject cannot exceed 75 characters",
                        },
                      })}
                      className="form-control formInput"
                      placeholder="Subject"
                    ></input>
                    {errors.subject && (
                      <span className="errorMessage pl-2">
                        {errors.subject.message}
                      </span>
                    )}
                  </div>
                </div>
                {/* Row 4 of form */}
                <div>
                  <div className="col mb-4">
                    <textarea
                      rows={7}
                      name="message"
                      {...register("message", {
                        required: true,
                      })}
                      className="form-control formInput"
                      placeholder="Message"
                    ></textarea>
                    {errors.message && (
                      <span className="errorMessage pl-2">
                        Please enter a message
                      </span>
                    )}
                  </div>
                </div>
                <button
                  className="contact-button btn btn-block btn-secondary mt-4 ml-3 text-white"
                  type="submit"
                >
                  Submit
                </button>
              </form>
            </div>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
