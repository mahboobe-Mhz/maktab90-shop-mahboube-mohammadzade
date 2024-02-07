import React, { useEffect, useState } from "react";
import { Rating } from "@mui/material";
import { Link, useNavigate, useParams } from "react-router-dom";
import FlashIcon from "../../svg/flashIcon";
function Stores() {
  const navigate = useNavigate();
  const [state, setState] = useState("none");
  return (
    <div>
      <div className="flex flex-col md:flex-row md:px-0 px-5" dir="rtl">
        <div
          className=" md:w-[500px]   rounded-3xl mt-10 p-5 border border-black h-fit"
          dir="rtl"
        >
          <div className=" mb-10"> فیلتـــر هـــــا</div>
          <div className=" border-b flex justify-between border-black cursor-pointer">
            <span onClick={() => setState("city")}> شهر</span>
            {state === "city" ? (
              <span
                onClick={() => setState("none")}
                className=" cursor-pointer "
              >
                ∧
              </span>
            ) : (
              <span
                onClick={() => setState("city")}
                className=" cursor-pointer"
              >
                ∨
              </span>
            )}
          </div>
          <div
            className={` border  border-black rounded-2xl mt-2 pr-3 pt-3 pb-3 pl-1    
           ${
             state === "city"
               ? "flex flex-col "
               : "hidden "
           }`}
          >
            <div className=" overflow-y-auto ">
              <div className="pl-3 max-h-[180px] pb-1">
                <div className="border-b border-black flex pb-1 mb-2">
                  <img width={20} height={20} src="/icons/icon-04.svg"></img>
                  <input
                    type="text"
                    placeholder="جستجو کنید"
                    className="pr-2 text-sm "
                  />
                </div>

                <div>
                  <input type="checkbox" />
                  <label className="px-5">
                    تهران
                    <span className="pr-1"> (20)</span>{" "}
                  </label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label className="px-5">
                    تهران
                    <span className="pr-1"> (20)</span>{" "}
                  </label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label className="px-5">
                    تهران
                    <span className="pr-1"> (20)</span>{" "}
                  </label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label className="px-5">
                    تهران
                    <span className="pr-1"> (20)</span>{" "}
                  </label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label className="px-5">
                    تهران
                    <span className="pr-1"> (20)</span>{" "}
                  </label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label className="px-5">
                    تهران
                    <span className="pr-1"> (20)</span>{" "}
                  </label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label className="px-5">
                    تهران
                    <span className="pr-1"> (20)</span>{" "}
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className=" border-b flex justify-between border-black mt-1 cursor-pointer">
            <span onClick={() => setState("services")}> خدمات پس از فروش</span>
            {state === "services" ? (
              <span
                onClick={() => setState("none")}
                className=" cursor-pointer "
              >
                ∧
              </span>
            ) : (
              <span
                onClick={() => setState("services")}
                className=" cursor-pointer"
              >
                ∨
              </span>
            )}
          </div>
          <div
            className={`border border-black rounded-2xl mt-2 p-3 transition-all duration-500 ${
              state === "services" ? "flex flex-col" : "hidden"
            }`}
          >
            <div className=" overflow-y-auto ">
              <div className="pl-3 max-h-[180px] pb-1 ">
                <div>
                  <input type="checkbox" />
                  <label className="px-5">
                    ۱سال
                    <span className="text-xs pr-1 "> (۵)</span>
                  </label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label className="px-5">
                    ۲سال
                    <span className="text-xs pr-1 "> (۵)</span>
                  </label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label className="px-5">
                    مادام العمر
                    <span className="text-xs pr-1 "> (۵)</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className=" border-b flex justify-between border-black mt-1 cursor-pointer">
            <span onClick={() => setState("senf")}> صنف فعالیت</span>
            {state === "senf" ? (
              <span
                onClick={() => setState("none")}
                className=" cursor-pointer "
              >
                ∧
              </span>
            ) : (
              <span
                onClick={() => setState("senf")}
                className=" cursor-pointer"
              >
                ∨
              </span>
            )}
          </div>
          <div
            className={`border border-black rounded-2xl mt-2 p-3 transition-all duration-500 ${
              state === "senf" ? "flex flex-col" : "hidden"
            }`}
          >
            <div className=" overflow-y-auto ">
              <div className="pl-3 max-h-[180px] pb-1">
                <div>
                  <input type="checkbox" />
                  <label className="px-5">
                    فرش
                    <span className="text-xs pr-1 "> (۵)</span>
                  </label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label className="px-5">
                    مبلمان
                    <span className="text-xs pr-1 "> (۵)</span>
                  </label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label className="px-5">
                    لوازم خانگی
                    <span className="text-xs pr-1 "> (۵)</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className=" border-b flex justify-between border-black mt-1 cursor-pointer">
            <span onClick={() => setState("background")}> تعداد سال سابقه</span>
            {state === "background" ? (
              <span
                onClick={() => setState("none")}
                className=" cursor-pointer "
              >
                ∧
              </span>
            ) : (
              <span
                onClick={() => setState("background")}
                className=" cursor-pointer"
              >
                ∨
              </span>
            )}
          </div>
          <div
            className={`border border-black rounded-2xl mt-2 p-3 transition-all duration-500 ${
              state === "background" ? "flex flex-col" : "hidden"
            }`}
          >
            <div className=" overflow-y-auto ">
              <div className="pl-3 max-h-[180px] pb-1">
                <div>
                  <input type="checkbox" />
                  <label className="px-5">
                    ۱سال
                    <span className="text-xs pr-1 "> (۵)</span>
                  </label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label className="px-5">
                    ۲سال
                    <span className="text-xs pr-1 "> (۵)</span>
                  </label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label className="px-5">
                    ۵سال
                    <span className="text-xs pr-1 "> (۵)</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className=" flex justify-between border-black mt-1 cursor-pointer">
            <span onClick={() => setState("star")}> امتیاز مشتریان</span>
            {state === "star" ? (
              <span
                onClick={() => setState("none")}
                className=" cursor-pointer "
              >
                ∧
              </span>
            ) : (
              <span
                onClick={() => setState("star")}
                className=" cursor-pointer"
              >
                ∨
              </span>
            )}
          </div>
          <div
            className={`border border-black rounded-2xl mt-2 p-3 transition-all duration-500 ${
              state === "star" ? "flex flex-col" : "hidden"
            }`}
          >
            <div className=" overflow-y-auto ">
              <div className="pl-3 max-h-[180px] pb-1">
                <div>
                  <input type="checkbox" />
                  <label className="px-5">
                    <Rating
                      name="read-only"
                      value={1}
                      readOnly
                      sx={{
                        direction: "rtl",
                        marginTop: "5px",
                        color: "secondary.main",
                      }}
                    />
                    <span className="text-xs pr-1 "> (۵)</span>
                  </label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label className="px-5">
                    <Rating
                      name="read-only"
                      value={2}
                      readOnly
                      sx={{
                        direction: "rtl",
                        marginTop: "5px",
                        color: "secondary.main",
                      }}
                    />
                    <span className="text-xs pr-1 "> (۵)</span>
                  </label>
                </div>
                <div>
                  <input id="cb3" type="checkbox" />
                  <label className="px-5">
                    <Rating
                      name="read-only"
                      value={3}
                      readOnly
                      sx={{
                        direction: "rtl",
                        marginTop: "5px",
                        color: "secondary.main",
                      }}
                    />
                    <span className="text-xs pr-1 "> (۵)</span>
                  </label>
                </div>
                <div>
                  <input id="cb3" type="checkbox" />
                  <label className="px-5">
                    <Rating
                      name="read-only"
                      value={4}
                      readOnly
                      sx={{
                        direction: "rtl",
                        marginTop: "5px",
                        color: "secondary.main",
                      }}
                    />
                    <span className="text-xs pr-1 "> (۵)</span>
                  </label>
                </div>
                <div>
                  <input id="cb3" type="checkbox" />
                  <label className="px-5">
                    <Rating
                      name="read-only"
                      value={5}
                      readOnly
                      sx={{
                        direction: "rtl",
                        marginTop: "5px",
                        color: "secondary.main",
                      }}
                    />
                    <span className="text-xs pr-1 "> (۵)</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-10 flex flex-wrap gap-10  justify-center">
          <img
            onClick={() => {
              navigate("/otherBrandPage");
            }}
            src="/public\picture\28993615.png"
            className="w-[230px] border px-3 rounded-3xl shadow-[0_3px_10px_rgb(0,0,0,0.1)] shadow-gray-500 hover:cursor-pointer"
            alt=""
          />
          <img
            onClick={() => {
              navigate("/otherBrandPage");
            }}
            src="/public\picture\28993615.png"
            className="w-[230px] border px-3 rounded-3xl shadow-[0_3px_10px_rgb(0,0,0,0.1)] shadow-gray-500 hover:cursor-pointer"
            alt=""
          />
          <img
            onClick={() => {
              navigate("/otherBrandPage");
            }}
            src="/public\picture\28993615.png"
            className="w-[230px] border px-3 rounded-3xl shadow-[0_3px_10px_rgb(0,0,0,0.1)] shadow-gray-500 hover:cursor-pointer"
            alt=""
          />
          <img
            onClick={() => {
              navigate("/otherBrandPage");
            }}
            src="/public\picture\28993615.png"
            className="w-[230px] border px-3 rounded-3xl shadow-[0_3px_10px_rgb(0,0,0,0.1)] shadow-gray-500 hover:cursor-pointer"
            alt=""
          />
          <img
            onClick={() => {
              navigate("/otherBrandPage");
            }}
            src="/public\picture\28993615.png"
            className="w-[230px] border px-3 rounded-3xl shadow-[0_3px_10px_rgb(0,0,0,0.1)] shadow-gray-500 hover:cursor-pointer"
            alt=""
          />
          <img
            onClick={() => {
              navigate("/otherBrandPage");
            }}
            src="/public\picture\28993615.png"
            className="w-[230px] border px-3 rounded-3xl shadow-[0_3px_10px_rgb(0,0,0,0.1)] shadow-gray-500 hover:cursor-pointer"
            alt=""
          />
        </div>
      </div>
      <div className="flex gap-5 justify-center pb-5 cursor-pointer">
        <span>۱</span>
        <span>۲</span>
        <span>۳</span>
        <span>...</span>
        <span>۴۳</span>
        <span className="flex gap-3">
          {" "}
          صفحه بعد <FlashIcon className=" w-[20px] pt-1" />
        </span>
      </div>
    </div>
  );
}

export default Stores;
