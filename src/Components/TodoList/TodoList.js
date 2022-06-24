import React from "react";
import "./TodoList.css";
import check from "../../Assests/icons/Mask.png";
import CommonButton from "../CommonButton/CommonButton";

const TodoList = () => {
  return (
    <div className="todoList mt-[37px]">
      <div className="pt-[18px] pl-[19px] pr-[31px]">
        <div>
          <h1 className="text-red">To-Do List</h1>
        </div>
        <div className="flex mt-[50px]">
          <div className="todoListed"></div>
          <div className="add">
            <img className="w-[9px] h-[7px] " src={check} alt="" />
            <button>Add</button>
          </div>
        </div>
        <div className="mt-[25px] flex justify-between">
          <div className="flex">
            <CommonButton></CommonButton>
            <p className="ml-4  font-medium text-[14px] tracking-widest">
              Select All
            </p>
          </div>

          <div className="add">
            <img className="w-[9px] h-[7px] " src={check} alt="" />
            <button>Done</button>
          </div>
        </div>
        <div className="mt-4">
          <div className="flex mb-5">
            <CommonButton></CommonButton>
            <p
              className="ml-4 font-medium text-[14px] tracking-widest"
              style={{ color: "#2E1619", fontFamily: "Poppins" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
            </p>
            <p
              className="ml-4  text-[14px] tracking-widest"
              style={{ color: "#E0E0E0", fontFamily: "Poppins" }}
            >
              Last Added: 10 sep 2022
            </p>
          </div>
          <div className="flex mb-5">
            <CommonButton></CommonButton>
            <p
              className="ml-4 font-medium text-[14px] tracking-widest"
              style={{ color: "#2E1619", fontFamily: "Poppins" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
            </p>
            <p
              className="ml-4  text-[14px] tracking-widest"
              style={{ color: "#E0E0E0", fontFamily: "Poppins" }}
            >
              Last Added: 10 sep 2022
            </p>
          </div>
          <div className="flex mb-5">
            <CommonButton></CommonButton>
            <p
              className="ml-4 font-medium text-[14px] tracking-widest"
              style={{ color: "#2E1619", fontFamily: "Poppins" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
            </p>
            <p
              className="ml-4  text-[14px] tracking-widest"
              style={{ color: "#E0E0E0", fontFamily: "Poppins" }}
            >
              Last Added: 10 sep 2022
            </p>
          </div>
          <div className="flex mb-5">
            <CommonButton></CommonButton>
            <p
              className="ml-4 font-medium text-[14px] tracking-widest"
              style={{ color: "#2E1619", fontFamily: "Poppins" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
            </p>
            <p
              className="ml-4  text-[14px] tracking-widest"
              style={{ color: "#E0E0E0", fontFamily: "Poppins" }}
            >
              Last Added: 10 sep 2022
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
