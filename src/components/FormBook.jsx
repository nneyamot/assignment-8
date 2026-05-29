
'use client'

import { toast } from "react-toastify";

const handleToast = () => {
    toast.success('Booking Confirmed',{ position: 'top-center',autoClose: 5000, } )
}

const FormBook = () => {
    return (
        <div className="space-y-5 shadow-[0_-4px_10px_rgba(0,0,0,0.1)] p-5 text-center">
            <h1 className="text-2xl font-bold ">Book This Animal</h1>

            <form onSubmit={(e) => e.preventDefault} className="space-y-3">
                <input type="text" placeholder="Name" className="input input-success" />
                <input type="email" placeholder="Email" className="input input-success" />
                <input type="number" placeholder="Phone" className="input input-success" />
                <input type="text" placeholder="Address" className="input input-success" />
                <button className="btn text-white bg-green-800 w-1/2" onClick={handleToast}>Book Now</button>
            </form>

        </div>
    );
};

export default FormBook;