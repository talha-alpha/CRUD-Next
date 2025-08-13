"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import SideNav from "../components/sideNav";
import TopNav from "../components/topNav";
import withAuth from "../components/withAuth";


function PaymentsPage() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) router.push("/login");
  }, [router]);
  return (
  <div className="flex w-full">
      <SideNav />
      <div className="flex flex-col w-full">
        <TopNav />
    <div className="flex flex-col w-full h-full bg-neutral-100 px-8">
          <div className="flex justify-between w-full py-4">
            <div className="flex justify-start items-center">
              <p className="flex text-black text-2xl font-bold">
                Payment Details
              </p>
            </div>
            <div className="flex justify-end gap-7.5">
              <div className="flex justify-center items-center cursor-pointer">
                <svg
                  width="14"
                  height="22"
                  viewBox="0 0 14 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_21_315)">
                    <path
                      d="M12.6 12.375H1.39998C0.157481 12.375 -0.472519 13.8574 0.411231 14.7211L6.01123 20.2211C6.55811 20.7582 7.44623 20.7582 7.99311 20.2211L13.5931 14.7211C14.4681 13.8574 13.8425 12.375 12.6 12.375ZM6.99998 19.25L1.39998 13.75H12.6L6.99998 19.25ZM1.39998 9.625H12.6C13.8425 9.625 14.4725 8.14257 13.5887 7.2789L7.98873 1.7789C7.44186 1.24179 6.55373 1.24179 6.00686 1.7789L0.406856 7.2789C-0.468144 8.14257 0.157481 9.625 1.39998 9.625ZM6.99998 2.74999L12.6 8.24999H1.39998L6.99998 2.74999Z"
                      fill="#FEAF00"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_21_315">
                      <rect width="14" height="22" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
          <table className="flex flex-col w-full justify-center mx-auto">
            <thead>
            <tr className="flex justify-between items-center p-5 border-t-[1px] border-neutral-200">
              <th className="flex text-xs text-neutral-400 font-semibold w-full max-w-[150px] min-w-[100px]">
                Name
              </th>
              <th className="flex text-xs text-neutral-400 font-semibold w-full max-w-[150px] min-w-[100px]">
                Payment Schedule
              </th>
              <th className="flex text-xs text-neutral-400 font-semibold w-full max-w-[150px] min-w-[100px]">
                Bill Number
              </th>
              <th className="flex text-xs text-neutral-400 font-semibold w-full max-w-[150px] min-w-[100px]">
                Amount Paid
              </th>
              <th className="flex text-xs text-neutral-400 font-semibold w-full max-w-[150px] min-w-[100px]">
                Balance amount
              </th>
              <th className="flex text-xs text-neutral-400 font-semibold w-full max-w-[150px] min-w-[100px]">
                Date
              </th>
              <th className="flex text-xs text-neutral-400 font-semibold w-full max-w-[30px] min-w-[20px]"></th>
              
            </tr>
            </thead>
            <tbody className="flex flex-col">
            <tr className="flex justify-between items-center w-full bg-white rounded-lg p-3">
              <td className="flex text-black font-normal text-sm w-full max-w-[150px] min-w-[100px]">Karthi</td>
              <td className="flex justify-center text-black font-normal text-sm w-full max-w-[150px] min-w-[100px]">First</td>
              <td className="flex justify-center text-black font-normal text-sm w-full max-w-[150px] min-w-[100px]">00012223</td>
              <td className="flex justify-center text-black font-normal text-sm w-full max-w-[150px] min-w-[100px]">
                INR 35,000
              </td>
              <td className="flex justify-center text-black font-normal text-sm w-full max-w-[150px] min-w-[100px]">
                INR 55,000
              </td>
              <td className="flex justify-center text-black font-normal text-sm w-full max-w-[150px] min-w-[100px]">
                08-Dec, 2021
              </td>
              <td className="flex justify-center py-5 w-full max-w-[100px] min-w-[100px]">
                <svg
                  width="15"
                  height="12"
                  viewBox="0 0 15 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.49999 6.875C7.94201 6.875 8.36594 6.69063 8.6785 6.36244C8.99106 6.03425 9.16665 5.58913 9.16665 5.125C9.16665 4.66087 8.99106 4.21575 8.6785 3.88756C8.36594 3.55937 7.94201 3.375 7.49999 3.375C7.47394 3.375 7.45103 3.38156 7.42577 3.38293C7.50608 3.61516 7.52164 3.86664 7.47063 4.10783C7.41961 4.34903 7.30413 4.56994 7.13774 4.74465C6.97136 4.91935 6.76096 5.04061 6.53125 5.09417C6.30154 5.14774 6.06205 5.1314 5.84087 5.04707C5.84087 5.07441 5.83332 5.09848 5.83332 5.125C5.83332 5.35481 5.87643 5.58238 5.96019 5.7947C6.04394 6.00702 6.16671 6.19993 6.32147 6.36244C6.63403 6.69063 7.05796 6.875 7.49999 6.875ZM14.9094 5.60078C13.4971 2.70754 10.7013 0.75 7.49999 0.75C4.29868 0.75 1.50207 2.70891 0.0906108 5.60105C0.0310383 5.72479 0 5.86149 0 6.00014C0 6.13878 0.0310383 6.27549 0.0906108 6.39922C1.50285 9.29246 4.29868 11.25 7.49999 11.25C10.7013 11.25 13.4979 9.29109 14.9094 6.39895C14.9689 6.27521 15 6.13851 15 5.99986C15 5.86122 14.9689 5.72451 14.9094 5.60078ZM7.49999 1.625C8.15926 1.625 8.80372 1.83027 9.35188 2.21486C9.90005 2.59944 10.3273 3.14607 10.5796 3.78561C10.8319 4.42515 10.8979 5.12888 10.7693 5.80782C10.6407 6.48675 10.3232 7.11039 9.85701 7.59987C9.39083 8.08936 8.79689 8.4227 8.15029 8.55775C7.50368 8.6928 6.83346 8.62349 6.22437 8.35858C5.61529 8.09367 5.09469 7.64507 4.72842 7.0695C4.36215 6.49392 4.16665 5.81723 4.16665 5.125C4.16762 4.19705 4.51912 3.3074 5.14403 2.65125C5.76894 1.99509 6.61623 1.62601 7.49999 1.625ZM7.49999 10.375C4.70415 10.375 2.14946 8.69855 0.833319 6C1.57354 4.47419 2.7573 3.23556 4.21301 2.46363C3.66952 3.20246 3.33332 4.11793 3.33332 5.125C3.33332 6.28532 3.77231 7.39812 4.55371 8.21859C5.33511 9.03906 6.39492 9.5 7.49999 9.5C8.60505 9.5 9.66486 9.03906 10.4463 8.21859C11.2277 7.39812 11.6667 6.28532 11.6667 5.125C11.6667 4.11793 11.3305 3.20246 10.787 2.46363C12.2427 3.23556 13.4264 4.47419 14.1667 6C12.8508 8.69855 10.2958 10.375 7.49999 10.375Z"
                    fill="#FEAF00"
                  />
                </svg>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
        </div>
        </div>
  )
}

export default withAuth(PaymentsPage);
