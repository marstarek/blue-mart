import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm ,Controller} from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ErrorMessage } from "@hookform/error-message";
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import Navbar from "../navbar/Navbar";
import { emptyCart ,removeItem} from "../../store/productSlice";
const OrderForm = () => {
  const dispatch = useDispatch();
  let { isLoading, cart } = useSelector((state) => state.products);
  const [phoneval, setPhoneval] = useState()

console.log(cart);
  const {
    register,
    formState: { errors },
    handleSubmit,control,
    watch,
    getValues,
  } = useForm();

  const navigate = useNavigate();
  const nav = () => { 
    navigate("/")
   }
  const onSubmit = (data, e) => {
    e.preventDefault();
    document.getElementById('my_modal_1').showModal()
    dispatch( emptyCart());

    cart=[]

  };
  return (
    <div className="flex flex-col h-full">
     
      <Navbar />
<dialog id="my_modal_1" className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg text-center">Hi!</h3>
    <p className="py-4 text-center text-xl">Your Order Submitted Successfully</p>
    <div className="modal-action text-center">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn " onClick={nav}>Close</button>
      </form>
    </div>
  </div>
</dialog>
      <div className="flex w-full flex-grow h-full items-center justify-center">
        <div className="modal-box relative">
          <div className="p-2">
            <h3 className="text-xl text-blue-400 font-bold pb-3 text-center">
              Order Now
            </h3>
            <form onSubmit={handleSubmit(onSubmit)} className="">
            <div className="phoneNum mb-3">
                <Controller
                                 className="input-bordered input w-full border-gray-200 "

               name="phoneNum"
               control={control}
               rules={{ required: true }}
              render={({ field }) => <PhoneInput 
                 
               defaultCountry="eg"
               type="phoneNum"
               {...register("phoneNum", {
                 required: true,
                 minLength: 11,
                 maxLength: 20,
                 
               })}
   />}
      />
              
                {/* <input
                  type="phoneNum"
                  placeholder="Phone Number"
                  className="input-bordered input w-full border-gray-200 "
                  {...register("phoneNum", {
                    required: true,
                    minLength: 11,
                    maxLength: 20,
                    pattern:
                      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
                  })}
                /> */}
              </div>
              {errors.phoneNum?.type === "required" && (
                <span className="text-rose-600 pb-2">
                  {" "}
                  Phone Number field is required
                </span>
              )}
              {errors.phoneNum?.type === "pattern" && (
                <p className="text-rose-600 pb-2" role="alert">
                  Enter valid phone Number
                </p>
              )}
              {errors.phoneNum?.type === "minLength" && (
                <p className="text-rose-600 pb-2" role="alert">
                  Phone Number must be at least 11 Numbers
                </p>
              )}
              <div className=" Address mb-3">
                <input
                  type="text"
                  placeholder="Address"
                  className="input-bordered input w-full border-gray-200 "
                  {...register("Address", {
                    required: "Address is required.",
                    minLength: 10,
                  })}
                />{" "}
              </div>

              {errors.Address?.type === "required" && (
                <p className="text-rose-600 pb-2" role="alert">
                  Address is required
                </p>
              )}
              {errors.Address?.type === "minLength" && (
                <p className="text-rose-600 pb-2" role="alert">
                  Address must be more than 10 char
                </p>
              )}

              <div className=" Email mb-3">
                <input
                  type="email"
                  placeholder="Email"
                  className="input-bordered input w-full border-gray-200 "
                  {...register("Email", {
                    required: true,
                    pattern: /^\S+@\S+\.\S+$/,
                  })}
                />
              </div>
              {errors.Email?.type === "required" && (
                <span className="text-rose-600 pb-2"> Email field is required</span>
              )}
              {errors.Email?.type === "pattern" && (
                <p className="text-rose-600 pb-2" role="alert">
                  enter valid email
                </p>
              )}


          

              <button className="btn w-full text-white border-0 bg-gradient-to-r from-blue-600 to-blue-400">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderForm;
