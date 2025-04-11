import React from "react";
import Search from "./search";
import NitendoDashboardTable from "./nitendo-dashboard-table";

export default function NitendoDashboard() {

    return (
      <main className="h-full w-full bg-[#F9F9F9] p-8 pb-28 overflow-auto space-y-8">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <h1 className="text-[32px] font-semibold text-black">Nitendo</h1>
            <div className="flex gap-x-2">
              <div className="flex items-center gap-x-1">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.03341 1.66667H4.45008C2.62508 1.66667 1.66675 2.625 1.66675 4.44167V6.025C1.66675 7.84167 2.62508 8.80001 4.44175 8.80001H6.02508C7.84175 8.80001 8.80008 7.84167 8.80008 6.025V4.44167C8.80842 2.625 7.85008 1.66667 6.03341 1.66667Z"
                    fill="#8E8E8E"
                  />
                  <path
                    d="M15.5578 1.66667H13.9745C12.1578 1.66667 11.1995 2.625 11.1995 4.44167V6.025C11.1995 7.84167 12.1578 8.80001 13.9745 8.80001H15.5578C17.3745 8.80001 18.3328 7.84167 18.3328 6.025V4.44167C18.3328 2.625 17.3745 1.66667 15.5578 1.66667Z"
                    fill="#8E8E8E"
                  />
                  <path
                    d="M15.5578 11.1918H13.9745C12.1578 11.1918 11.1995 12.1502 11.1995 13.9668V15.5502C11.1995 17.3668 12.1578 18.3252 13.9745 18.3252H15.5578C17.3745 18.3252 18.3328 17.3668 18.3328 15.5502V13.9668C18.3328 12.1502 17.3745 11.1918 15.5578 11.1918Z"
                    fill="#8E8E8E"
                  />
                  <path
                    d="M6.03341 11.1917H4.45008C2.62508 11.1917 1.66675 12.15 1.66675 13.9667V15.55C1.66675 17.375 2.62508 18.3333 4.44175 18.3333H6.02508C7.84175 18.3333 8.80008 17.375 8.80008 15.5583V13.975C8.80842 12.15 7.85008 11.1917 6.03341 11.1917Z"
                    fill="#8E8E8E"
                  />
                </svg>
                <p className="text-sm text-[#8E8E8E]">Dashboard</p>
              </div>

              <span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.42505 16.6L12.8584 11.1667C13.5 10.525 13.5 9.47499 12.8584 8.83333L7.42505 3.39999"
                    stroke="#8E8E8E"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>

              <div className="flex items-center gap-x-1">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.50008 1.66667C5.31675 1.66667 3.54175 3.44167 3.54175 5.62501C3.54175 7.76667 5.21675 9.50001 7.40008 9.57501C7.46675 9.56667 7.53341 9.56667 7.58341 9.57501C7.60008 9.57501 7.60841 9.57501 7.62508 9.57501C7.63341 9.57501 7.63341 9.57501 7.64175 9.57501C9.77508 9.50001 11.4501 7.76667 11.4584 5.62501C11.4584 3.44167 9.68341 1.66667 7.50008 1.66667Z"
                    fill="#1C1C1C"
                  />
                  <path
                    d="M11.734 11.7916C9.40903 10.2416 5.61737 10.2416 3.2757 11.7916C2.21737 12.4999 1.63403 13.4582 1.63403 14.4832C1.63403 15.5082 2.21737 16.4582 3.26737 17.1582C4.43403 17.9416 5.96737 18.3332 7.5007 18.3332C9.03403 18.3332 10.5674 17.9416 11.734 17.1582C12.784 16.4499 13.3674 15.4999 13.3674 14.4666C13.359 13.4416 12.784 12.4916 11.734 11.7916Z"
                    fill="#1C1C1C"
                  />
                  <path
                    d="M16.6578 6.11675C16.7911 7.73342 15.6411 9.15009 14.0495 9.34175C14.0411 9.34175 14.0411 9.34175 14.0328 9.34175H14.0078C13.9578 9.34175 13.9078 9.34175 13.8661 9.35842C13.0578 9.40009 12.3161 9.14175 11.7578 8.66675C12.6161 7.90009 13.1078 6.75009 13.0078 5.50009C12.9495 4.82509 12.7161 4.20842 12.3661 3.68342C12.6828 3.52509 13.0495 3.42509 13.4245 3.39176C15.0578 3.25009 16.5161 4.46675 16.6578 6.11675Z"
                    fill="#1C1C1C"
                  />
                  <path
                    d="M18.3251 13.825C18.2584 14.6333 17.7418 15.3333 16.8751 15.8083C16.0418 16.2667 14.9918 16.4833 13.9501 16.4583C14.5501 15.9167 14.9001 15.2417 14.9668 14.525C15.0501 13.4917 14.5584 12.5 13.5751 11.7083C13.0168 11.2667 12.3668 10.9167 11.6584 10.6583C13.5001 10.125 15.8168 10.4833 17.2418 11.6333C18.0084 12.25 18.4001 13.025 18.3251 13.825Z"
                    fill="#1C1C1C"
                  />
                </svg>

                <p className="text-sm text-[#000000]">Nitendo</p>
              </div>
            </div>
          </div>

          <button className="w-[191px] h-[48px] bg-[#A93636] rounded-[8px] flex items-center justify-center gap-2">
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.0001 2.16667C5.40841 2.16667 1.66675 5.90834 1.66675 10.5C1.66675 15.0917 5.40841 18.8333 10.0001 18.8333C14.5917 18.8333 18.3334 15.0917 18.3334 10.5C18.3334 5.90834 14.5917 2.16667 10.0001 2.16667ZM13.3334 11.125H10.6251V13.8333C10.6251 14.175 10.3417 14.4583 10.0001 14.4583C9.65842 14.4583 9.37508 14.175 9.37508 13.8333V11.125H6.66675C6.32508 11.125 6.04175 10.8417 6.04175 10.5C6.04175 10.1583 6.32508 9.87501 6.66675 9.87501H9.37508V7.16667C9.37508 6.82501 9.65842 6.54167 10.0001 6.54167C10.3417 6.54167 10.6251 6.82501 10.6251 7.16667V9.87501H13.3334C13.6751 9.87501 13.9584 10.1583 13.9584 10.5C13.9584 10.8417 13.6751 11.125 13.3334 11.125Z"
                fill="white"
              />
            </svg>

            <span className="text-base text-white">New Request</span>
          </button>
        </div>

        <div>
          <div className="flex text-[#8E8E8E] text-sm gap-x-4 pb-2 border-b border-[#E8E8E8]">
            <p>Individual</p>
            <p>Corporate</p>
          </div>

          <div className="">
            <div className="bg-white rounded-tl-[8px] rounded-tr-[8px] p-6 mt-10 flex justify-between items-center border-b border-[#E8E8E8]">
              <div className="flex gap-x-8">
                <div className="h-[47px] bg-[#F6F6F6] flex items-center gap-x-2 w-[190px] rounded-[8px] px-2">
                  <button className="bg-white text-[#A93636] text-sm h-[35px] p-2 rounded-[8px]">
                    All Records
                  </button>
                  <button className="text-sm h-auto p-2 text-[#606060]">
                    Request
                  </button>
                </div>

                <div className="flex ">
                  <div className="flex flex-col items-start px-8 border-l border-[#E8E8E8]">
                    <span className="text-xs font-medium text-black">All</span>
                    <h4 className="text-[28px] font-semibold text-black">
                      100
                    </h4>
                  </div>
                  <div className="flex flex-col items-start px-8 border-l border-[#E8E8E8]">
                    <span className="text-xs font-medium text-[#A93636]">
                      Active
                    </span>
                    <h4 className="text-[28px] font-semibold text-black">
                      100
                    </h4>
                  </div>
                  <div className="flex flex-col items-start px-8 border-l border-[#E8E8E8]">
                    <span className="text-xs font-medium text-black">
                      Liquidated
                    </span>
                    <h4 className="text-[28px] font-semibold text-black">
                      143
                    </h4>
                  </div>
                </div>
              </div>

              <button className="w-[210px] h-[31px] border border-[#A93636] text-[#A93636] flex items-center justify-center gap-x-2 rounded-[8px]">
                <span className="text-sm">Created by System-wide</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.28 5.96667L8.9333 10.3133C8.41997 10.8267 7.57997 10.8267 7.06664 10.3133L2.71997 5.96667"
                    stroke="#A93636"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            <div className="bg-white p-6 pb-12 flex justify-between">
              <div className="flex gap-x-2">
                <button className="w-[210px] h-[40px] border bg-[#d2d2d2] flex items-center justify-center gap-x-2 rounded-[8px]">
                  <span className="text-base text-black">
                    Table Search Query
                  </span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.28 5.96667L8.9333 10.3133C8.41997 10.8267 7.57997 10.8267 7.06664 10.3133L2.71997 5.96667"
                      stroke="#000000"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                <Search placeholder="Search Parameter" />
              </div>

              <div className="flex gap-x-2">
                <button className="h-[31px] w-[139px] bg-[#F9F1F1] flex items-center justify-center gap-x-2 rounded-[8px]">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2.07325 10.96V14.2933V10.96Z" fill="#A93636" />
                    <path
                      d="M14.6666 8.00001C14.6666 11.68 11.6799 14.6667 7.99992 14.6667C4.31992 14.6667 2.07325 10.96 2.07325 10.96M2.07325 10.96H5.08659M2.07325 10.96V14.2933M1.33325 8.00001C1.33325 4.32001 4.29325 1.33334 7.99992 1.33334C12.4466 1.33334 14.6666 5.04001 14.6666 5.04001M14.6666 5.04001V1.70668M14.6666 5.04001H11.7066"
                      stroke="#A93636"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <span className="text-[#A93636] font-medium text-sm">
                    Refresh Table
                  </span>
                </button>
                <button className="h-[31px] w-[139px] bg-[#F9F1F1] flex items-center justify-center gap-x-2 rounded-[8px]">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.6667 6.79334H11.7401C10.1601 6.79334 8.87341 5.50668 8.87341 3.92668V2.00001C8.87341 1.63334 8.57341 1.33334 8.20675 1.33334H5.38008C3.32675 1.33334 1.66675 2.66668 1.66675 5.04668V10.9533C1.66675 13.3333 3.32675 14.6667 5.38008 14.6667H10.6201C12.6734 14.6667 14.3334 13.3333 14.3334 10.9533V7.46001C14.3334 7.09334 14.0334 6.79334 13.6667 6.79334ZM8.18675 10.52L6.85341 11.8533C6.80675 11.9 6.74675 11.94 6.68675 11.96C6.62675 11.9867 6.56675 12 6.50008 12C6.43341 12 6.37341 11.9867 6.31341 11.96C6.26008 11.94 6.20675 11.9 6.16675 11.86C6.16008 11.8533 6.15341 11.8533 6.15341 11.8467L4.82008 10.5133C4.62675 10.32 4.62675 10 4.82008 9.80668C5.01341 9.61334 5.33341 9.61334 5.52675 9.80668L6.00008 10.2933V7.50001C6.00008 7.22668 6.22675 7.00001 6.50008 7.00001C6.77341 7.00001 7.00008 7.22668 7.00008 7.50001V10.2933L7.48008 9.81334C7.67341 9.62001 7.99341 9.62001 8.18675 9.81334C8.38008 10.0067 8.38008 10.3267 8.18675 10.52Z"
                      fill="#A93636"
                    />
                    <path
                      d="M11.6197 5.87332C12.253 5.87999 13.133 5.87998 13.8864 5.87998C14.2664 5.87998 14.4664 5.43332 14.1997 5.16665C13.2397 4.19999 11.5197 2.45999 10.533 1.47332C10.2597 1.19999 9.78638 1.38665 9.78638 1.76665V4.09332C9.78638 5.06665 10.613 5.87332 11.6197 5.87332Z"
                      fill="#A93636"
                    />
                  </svg>

                  <span className="text-[#A93636] font-medium text-sm">
                    Download Table
                  </span>
                </button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <NitendoDashboardTable />
            </div>
          </div>
        </div>
      </main>
    );
}
