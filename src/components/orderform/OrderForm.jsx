import {useEffect,useState} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ErrorMessage } from "@hookform/error-message";

const OrderForm = () => {
  const dispatch = useDispatch();


  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    getValues,
  } = useForm();

  const navigate = useNavigate();
  const onSubmit = (data, e) => {
    e.preventDefault();
    dispatch(
      insertHotel({
        id: hotelId,
        name: hotelname,
        hotelImg: hotelImg,
        email: data.Email,
        phoneNum: data.phoneNum,
        username:data.Username
      }),
    )


  };
  return (
    <>
      <input type="checkbox" id={hotel.id} className=" closeBtn  modal-toggle" />
    <div className={" modal " + (isActive ? 'close' : '')} >
      <div className="modal-box relative">
          <label htmlFor={hotel.id} className=" bg-rose-500 border-0 btn btn-sm btn-circle absolute right-2 top-2">✕</label>


          <div className='p-2'>
          <h3 className="text-lg font-bold pb-3 text-center">{hotel.name}</h3>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className=""
          >
            <div className=" Username mb-3">
              <input
                type="text"
                placeholder="Username"
                className="input-bordered input w-full border-gray-200 "
                {...register("Username", {
                  required: "This is required.",
                  maxLength: 15,
                  minLength: 5,
                  pattern: /^[A-Za-z][A-Za-z0-9_]{7,29}$/,
                })}
              />{" "}
            </div>

            {errors.Username?.type === "required" && (
              <p className="text-rose-600" role="alert">
                User name is required
              </p>
            )}
            {errors.Username?.type === "minLength" && (
              <p className="text-rose-600" role="alert">
                User name min Length is 5
              </p>
            )}
            {errors.Username?.type === "maxLength" && (
              <p className="text-rose-600" role="alert">
                User name max Length is 15
              </p>
            )}
            {errors.Username?.type === "pattern" && (
              <p className="text-rose-600" role="alert">
                only letters and numbers are allowed
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
              <span className="text-rose-600"> Email field is required</span>
            )}
            {errors.Email?.type === "pattern" && (
              <p className="text-rose-600" role="alert">
                enter valid email
              </p>
            )}

            <div className="phoneNum mb-3">
              <input
                type="phoneNum"
                placeholder="Phone Number"
                className="input-bordered input w-full border-gray-200 "
                {...register("phoneNum", {
                  required: true,
                  minLength: 11,
                  maxLength:20,
                  pattern:
                    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
                })}
              />
            </div>
            {errors.phoneNum?.type === "required" && (
              <span className="text-rose-600"> Phone Number field is required</span>
            )}
            {errors.phoneNum?.type === "pattern" && (
              <p className="text-rose-600" role="alert">
                Enter valid phone Number
              </p>
            )}
            {errors.phoneNum?.type === "minLength" && (
              <p className="text-rose-600" role="alert">
                Phone Number must be at least 11 Numbers
              </p>
            )}

           
            <button htmlFor={hotel.id} className="btn w-full border-0 bg-gradient-to-r from-emerald-700 to-emerald-500">
            Submit 
            </button>
          </form>

</div>









      </div>
    </div></>
  )
}

export default OrderForm