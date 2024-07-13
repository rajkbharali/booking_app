import React, { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { DatePicker } from "./DatePicker";
import { weekDays, weekEnd } from "../data/timeRange";
import { toast } from "react-toastify";
import { imageList } from "../data/dropdownList";
import "./BookingForm.css";
import ConfirmationModal from "./ConfirmationModal";
import { motion } from "framer-motion";

let easeing = [0.6, -0.05, 0.01, 0.99];

const fadeInUp = {
  initial: {
    y: -60,
    opacity: 0,
    transition: {
      duration: 0.6,
      ease: easeing,
    },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.9,
      delay: 0.5,
      ease: easeing,
    },
  },
};

const BookingForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState(null);
  const [timeRange, setTimeRange] = useState([]);
  const [timeSlot, setTimeSlot] = useState("");
  const [modal, setModal] = useState(false);

  useEffect(() => {
    if (date !== null) {
      if (new Date(date).getDay() == 0) {
        setTimeRange([]);
        setDate(null);
        toast.error("We remain closed on Sunday");
      } else if (new Date(date).getDay() == 6) {
        setTimeRange(weekEnd);
      } else {
        setTimeRange(weekDays);
      }
    } else {
      setTimeRange([]);
    }
  }, [date]);

  const onSave = (e) => {
    e.preventDefault();
    setModal(true);
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <motion.h1
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: easeing }}
          className="text-3xl md:text-5xl m-5 text-emerald-400 font-bold"
        >
          Ready to take a ride?
        </motion.h1>
        <motion.p
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="text-sm md:text-lg text-gray-400"
        >
          Enter the details & we will fix a ride for you !
        </motion.p>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: easeing }}
        className="flex justify-center items-center"
      >
        <form
          onSubmit={onSave}
          className="w-[600px] m-5 grid grid-cols-2 gap-2 border p-5 rounded-lg shadow-lg"
        >
          <div>
            <Label>First Name</Label>
            <Input
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="my-1"
            />
          </div>
          <div>
            <Label>Last Name</Label>
            <Input
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="my-1"
            />
          </div>
          <div>
            <Label>Phone</Label>
            <Input
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="my-1"
            />
          </div>
          <div>
            <Label>Email</Label>
            <Input
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="my-1"
            />
          </div>
          <div className="col-span-2">
            <Label className="">Select a ride</Label>
            <Select
              className="SelectWidth"
              required
              onValueChange={(e) => setName(e)}
            >
              <SelectTrigger className="">
                <SelectValue placeholder="" />
              </SelectTrigger>
              <SelectContent>
                {imageList.map((x, index) => (
                  <SelectItem key={index} value={x.name}>
                    <div className="flex gap-5 items-center font-semibold text-lg">
                      <img className="w-32 rounded-lg" src={x.image} />
                      <p>{x.name}</p>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="">
            <Label className="">Date</Label>
            <DatePicker required className="" date={date} setDate={setDate} />
          </div>
          <div className="ml-2">
            <Label>Time</Label>
            <Select
              required
              disabled={timeRange.length === 0}
              onValueChange={(e) => setTimeSlot(e)}
            >
              <SelectTrigger className="">
                <SelectValue placeholder="" />
              </SelectTrigger>
              <SelectContent>
                {timeRange.map((x, index) => (
                  <SelectItem key={index} value={x}>
                    {x}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <button
              className="bg-emerald-400 text-white px-3 py-2 my-5 rounded-lg"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </motion.div>
      {modal ? (
        <ConfirmationModal
          fname={firstName}
          lname={lastName}
          date={new Date(date).toLocaleDateString()}
          time={timeSlot}
          setModal={setModal}
          setFirstName={setFirstName}
          setLastName={setLastName}
          setPhone={setPhone}
          setEmail={setEmail}
          setName={setName}
          setDate={setDate}
          setTimeSlot={setTimeSlot}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default BookingForm;
