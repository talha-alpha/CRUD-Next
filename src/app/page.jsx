"use client";
import Image from "next/image";
import sideNav from "./components/sideNav";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
    }
  }, [router]);
  return (
    // SideBar
    <div className="flex w-full">
      {/* <div className="flex flex-col h-full min-h-[100vh] w-full max-w-[270px] bg-amber-50 justify-between">
        <div className="flex flex-col">
          <div className="flex items-center gap-3 px-6 py-4">
            <div className="flex h-[23px] w-[3px] bg-amber-400"></div>
            <p className="flex font-bold text-xl text-black leading-[100%] items-center">
              CRUD OPERATIONS
            </p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="flex flex-col justify-center items-center gap-4 py-5">
              <Image
                src="/images/pexels-photo.png"
                alt="Logo"
                width={400}
                height={400}
                className="flex justify-center w-full max-w-[80px] h-full max-h-[80px] rounded-full"
                priority
              />
              <p className="flex font-bold text-lg text-black leading-[100%] items-center">
                Karthi Madesh
              </p>
              <p className="flex font-normal text-sm text-amber-400 leading-[100%] items-center cursor-pointer">
                Admin
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between w-full">
            <div className="flex flex-col gap-3 justify-center items-center p-5">
              <div className="flex w-full justify-center items-center py-2.5 gap-3 bg-amber-400 cursor-pointer hover:bg-amber-400 rounded-lg">
                <svg
                  width="19"
                  height="17"
                  viewBox="0 0 19 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_17_24)">
                    <path
                      d="M18.9171 7.30102L10.2457 0.264952C10.035 0.0927557 9.77185 -0.00123024 9.50042 -0.00123024C9.229 -0.00123024 8.96583 0.0927557 8.7551 0.264952L0.0837115 7.30102C0.060804 7.31944 0.0417585 7.34225 0.0276807 7.36813C0.0136029 7.39401 0.00477327 7.42245 0.00170444 7.4518C-0.00136439 7.48114 0.00138873 7.51081 0.00980395 7.53908C0.0182192 7.56734 0.0321288 7.59364 0.0507254 7.61645L0.519128 8.19751C0.537742 8.22064 0.560703 8.23984 0.586698 8.25403C0.612693 8.26822 0.641212 8.27711 0.670623 8.28019C0.700034 8.28328 0.729761 8.28049 0.758103 8.272C0.786444 8.26351 0.812845 8.24948 0.835795 8.23071L2.11137 7.19511V16.4681C2.11137 16.609 2.16697 16.7441 2.26595 16.8437C2.36493 16.9434 2.49917 16.9993 2.63915 16.9993H16.3614C16.5013 16.9993 16.6356 16.9434 16.7346 16.8437C16.8335 16.7441 16.8891 16.609 16.8891 16.4681V7.19843L18.169 8.23735C18.2154 8.27518 18.2748 8.29292 18.3342 8.2867C18.3935 8.28047 18.448 8.25078 18.4857 8.20415L18.9538 7.6231C18.9894 7.57477 19.0055 7.51459 18.9987 7.45478C18.9919 7.39496 18.9627 7.33999 18.9171 7.30102ZM7.91692 15.9368V10.6243H11.0836V15.9368H7.91692ZM15.8336 15.9368H12.1391V10.0931C12.1391 9.95218 12.0835 9.81705 11.9846 9.71743C11.8856 9.6178 11.7513 9.56183 11.6114 9.56183H7.38915C7.24917 9.56183 7.11493 9.6178 7.01595 9.71743C6.91697 9.81705 6.86137 9.95218 6.86137 10.0931V15.9368H3.16692V6.33847L9.35875 1.31151C9.39783 1.27931 9.44678 1.26171 9.49729 1.26171C9.5478 1.26171 9.59675 1.27931 9.63583 1.31151L15.8336 6.34112V15.9368Z"
                      fill="black"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_17_24">
                      <rect width="19" height="17" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <p className="flex font-normal text-sm text-black leading-[100%] items-start">
                  Home
                </p>
              </div>
              <div className="flex w-full justify-center items-center py-2.5 gap-3 cursor-pointer hover:bg-amber-400 rounded-lg">
                <svg
                  width="12"
                  height="15"
                  viewBox="0 0 12 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_17_26)">
                    <path
                      d="M1.5 0H10.5C11.3284 0 12 0.62959 12 1.40625V15L6 11.7188L0 15V1.40625C0 0.62959 0.671562 0 1.5 0ZM1 13.3678L6 10.6334L11 13.3678V1.40625C11 1.14779 10.7757 0.9375 10.5 0.9375H1.5C1.22431 0.9375 1 1.14779 1 1.40625V13.3678Z"
                      fill="black"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_17_26">
                      <rect
                        width="12"
                        height="15"
                        fill="white"
                        transform="matrix(-1 0 0 1 12 0)"
                      />
                    </clipPath>
                  </defs>
                </svg>

                <p className="flex font-normal text-sm text-black leading-[100%] items-start">
                  Course
                </p>
              </div>

              <div className="flex w-full justify-center items-center py-2.5 gap-3 cursor-pointer hover:bg-amber-400 rounded-lg">
                <svg
                  width="20"
                  height="16"
                  viewBox="0 0 20 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.13 4.81219L10.8488 2.13469C10.2922 1.955 9.70813 1.955 9.15156 2.13469L0.870313 4.81219C0.341875 4.98313 0 5.44938 0 6C0 6.55063 0.341875 7.01688 0.87 7.18781L1.79844 7.48781C1.69531 7.68094 1.61906 7.88875 1.56938 8.10656C1.23531 8.26844 1 8.60375 1 9C1 9.39781 1.23656 9.735 1.57281 9.89594L1.00875 13.3916C0.958437 13.7038 1.13094 14 1.36312 14H2.63656C2.86875 14 3.04156 13.7038 2.99094 13.3916L2.42719 9.89594C2.76344 9.735 3 9.39781 3 9C3 8.66875 2.82844 8.38938 2.58031 8.20719C2.62687 8.06156 2.69906 7.93031 2.78562 7.80688L4.45656 8.34719L4 12C4 13.1047 6.68625 14 10 14C13.3138 14 16 13.1047 16 12L15.5434 8.34719L19.13 7.1875C19.6581 7.01688 20 6.55063 20 6C20 5.44938 19.6581 4.98313 19.13 4.81219ZM14.9838 11.9331C14.6475 12.2872 12.9388 13 10 13C7.06125 13 5.3525 12.2872 5.01625 11.9331L5.42531 8.66031L9.15156 9.865C9.23281 9.89125 9.95531 10.1534 10.8488 9.865L14.575 8.66031L14.9838 11.9331ZM18.8213 6.23688L10.54 8.91438C10.1866 9.02875 9.81344 9.02875 9.46 8.91438L3.97031 7.13938L10.0919 5.99125C10.3634 5.94063 10.5422 5.67938 10.4913 5.40781C10.4406 5.13594 10.1737 4.95813 9.90812 5.00875L3.54 6.2025C3.1525 6.275 2.80531 6.44156 2.50625 6.66594L1.17844 6.23656C0.933125 6.15688 0.945312 5.83844 1.17844 5.76313L9.45969 3.08563C9.93156 2.93313 10.3297 3.01781 10.5397 3.08563L18.8209 5.76313C19.0519 5.83781 19.0681 6.15688 18.8213 6.23688Z"
                    fill="black"
                  />
                </svg>

                <p className="flex font-normal text-sm text-black leading-[100%] items-start">
                  Students
                </p>
              </div>
              <div className="flex w-full justify-center items-center py-2.5 gap-3 cursor-pointer hover:bg-amber-400 rounded-lg">
                <svg
                  width="15"
                  height="17"
                  viewBox="0 0 15 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.84933 8.32402L6.43862 7.65332C6.03348 7.54043 5.74888 7.1752 5.74888 6.7668C5.74888 6.25879 6.17745 5.84375 6.70312 5.84375H8.20982C8.58482 5.84375 8.94308 5.96328 9.23437 6.1791C9.34152 6.25879 9.48884 6.24551 9.58259 6.15254L9.96094 5.7707C10.0748 5.65781 10.0614 5.47188 9.93415 5.37227C9.44531 4.98711 8.84263 4.77793 8.20647 4.77793H8.03571V3.4498C8.03571 3.30371 7.91518 3.18418 7.76786 3.18418H7.23214C7.08482 3.18418 6.96429 3.30371 6.96429 3.4498V4.77793H6.70312C5.58817 4.77793 4.67745 5.66777 4.67745 6.76348C4.67745 7.64668 5.28348 8.43027 6.14732 8.67266L8.55804 9.34336C8.96317 9.45625 9.24777 9.82148 9.24777 10.2299C9.24777 10.7379 8.8192 11.1529 8.29353 11.1529H6.78683C6.41183 11.1529 6.05357 11.0334 5.76228 10.8176C5.65513 10.7379 5.50781 10.7512 5.41406 10.8441L5.03571 11.226C4.92187 11.3389 4.93527 11.5248 5.0625 11.6244C5.55134 12.0096 6.15402 12.2188 6.79018 12.2188H6.96429V13.5469C6.96429 13.693 7.08482 13.8125 7.23214 13.8125H7.76786C7.91518 13.8125 8.03571 13.693 8.03571 13.5469V12.2188H8.29688C9.41183 12.2188 10.3225 11.3289 10.3225 10.2332C10.3192 9.35 9.71652 8.56641 8.84933 8.32402ZM13.3929 1.0625H1.60714C0.719866 1.0625 0 1.77637 0 2.65625V14.3438C0 15.2236 0.719866 15.9375 1.60714 15.9375H13.3929C14.2801 15.9375 15 15.2236 15 14.3438V2.65625C15 1.77637 14.2801 1.0625 13.3929 1.0625ZM13.9286 14.3438C13.9286 14.6359 13.6875 14.875 13.3929 14.875H1.60714C1.3125 14.875 1.07143 14.6359 1.07143 14.3438V2.65625C1.07143 2.36406 1.3125 2.125 1.60714 2.125H13.3929C13.6875 2.125 13.9286 2.36406 13.9286 2.65625V14.3438Z"
                    fill="black"
                  />
                </svg>

                <p className="flex font-normal text-sm text-black leading-[100%] items-start">
                  Payment
                </p>
              </div>
              <div className="flex w-full justify-center items-center py-2.5 gap-3 cursor-pointer hover:bg-amber-400 rounded-lg">
                <svg
                  width="13"
                  height="17"
                  viewBox="0 0 13 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_17_18)">
                    <path
                      d="M4.60417 10.625H4.0625C3.91354 10.625 3.79167 10.7445 3.79167 10.8906V14.0781C3.79167 14.2242 3.91354 14.3438 4.0625 14.3438H4.60417C4.75313 14.3438 4.875 14.2242 4.875 14.0781V10.8906C4.875 10.7445 4.75313 10.625 4.60417 10.625ZM6.77083 7.4375H6.22917C6.08021 7.4375 5.95833 7.55703 5.95833 7.70312V14.0781C5.95833 14.2242 6.08021 14.3438 6.22917 14.3438H6.77083C6.91979 14.3438 7.04167 14.2242 7.04167 14.0781V7.70312C7.04167 7.55703 6.91979 7.4375 6.77083 7.4375ZM8.125 9.82812V14.0781C8.125 14.2242 8.24688 14.3438 8.39583 14.3438H8.9375C9.08646 14.3438 9.20833 14.2242 9.20833 14.0781V9.82812C9.20833 9.68203 9.08646 9.5625 8.9375 9.5625H8.39583C8.24688 9.5625 8.125 9.68203 8.125 9.82812ZM12.5227 3.25324L9.68297 0.468164C9.37828 0.169336 8.96526 0 8.53565 0H1.62466C0.727865 0.00332031 0 0.717188 0 1.59674V15.4066C0 16.2861 0.727865 17 1.62466 17H11.3753C12.2721 17 13 16.2861 13 15.4066V4.38182C13 3.96047 12.8273 3.55207 12.5227 3.25324ZM8.66768 1.08209C8.76247 1.10533 8.84711 1.15182 8.9182 1.22154L11.7579 4.00662C11.829 4.07635 11.8764 4.15936 11.9001 4.25232H8.66768V1.08209ZM11.917 15.4066C11.917 15.6988 11.6733 15.9378 11.3753 15.9378H1.62466C1.32674 15.9378 1.08299 15.6988 1.08299 15.4066V1.59674C1.08299 1.30455 1.32674 1.0625 1.62466 1.0625H7.58435V4.51795C7.58435 4.95955 7.94659 5.3125 8.39685 5.3125H11.917V15.4066Z"
                      fill="black"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_17_18">
                      <rect width="13" height="17" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                <p className="flex font-normal text-sm text-black leading-[100%] items-start">
                  Report
                </p>
              </div>
              <div className="flex w-full justify-center items-center py-2.5 gap-3 cursor-pointer hover:bg-amber-400 rounded-lg">
                <svg
                  width="15"
                  height="17"
                  viewBox="0 0 15 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.3929 1.0625H1.60714C0.719866 1.0625 0 1.77637 0 2.65625V14.3438C0 15.2236 0.719866 15.9375 1.60714 15.9375H13.3929C14.2801 15.9375 15 15.2236 15 14.3438V2.65625C15 1.77637 14.2801 1.0625 13.3929 1.0625ZM13.9286 14.3438C13.9286 14.6359 13.6875 14.875 13.3929 14.875H1.60714C1.3125 14.875 1.07143 14.6359 1.07143 14.3438V2.65625C1.07143 2.36406 1.3125 2.125 1.60714 2.125H13.3929C13.6875 2.125 13.9286 2.36406 13.9286 2.65625V14.3438ZM6.69643 5.3125H5.35714V4.25C5.35714 4.03086 5.17634 3.85156 4.95536 3.85156H4.6875C4.46652 3.85156 4.28571 4.03086 4.28571 4.25V5.3125H2.94643C2.50446 5.3125 2.14286 5.67109 2.14286 6.10938V7.70312C2.14286 8.14141 2.50446 8.5 2.94643 8.5H4.28571V12.3516C4.28571 12.5707 4.46652 12.75 4.6875 12.75H4.95536C5.17634 12.75 5.35714 12.5707 5.35714 12.3516V8.5H6.69643C7.13839 8.5 7.5 8.14141 7.5 7.70312V6.10938C7.5 5.67109 7.13839 5.3125 6.69643 5.3125ZM6.42857 7.4375H3.21429V6.375H6.42857V7.4375ZM12.0536 8.5H10.7143V4.25C10.7143 4.03086 10.5335 3.85156 10.3125 3.85156H10.0446C9.82366 3.85156 9.64286 4.03086 9.64286 4.25V8.5H8.30357C7.86161 8.5 7.5 8.85859 7.5 9.29688V10.8906C7.5 11.3289 7.86161 11.6875 8.30357 11.6875H9.64286V12.3516C9.64286 12.5707 9.82366 12.75 10.0446 12.75H10.3125C10.5335 12.75 10.7143 12.5707 10.7143 12.3516V11.6875H12.0536C12.4955 11.6875 12.8571 11.3289 12.8571 10.8906V9.29688C12.8571 8.85859 12.4955 8.5 12.0536 8.5ZM11.7857 10.625H8.57143V9.5625H11.7857V10.625Z"
                    fill="black"
                  />
                </svg>

                <p className="flex font-normal text-sm text-black leading-[100%] items-start">
                  Settings
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-3 mt-20 mx-5 py-3 cursor-pointer hover:bg-amber-400 rounded-lg">
            <div className="flex justify-center gap-3">
              <p className="flex font-normal text-sm text-black leading-[100%] items-center">
                Logout
              </p>
              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.3125 7.2084C5.3125 6.91621 5.55156 6.67715 5.84375 6.67715H10.625V3.55937C10.625 3.32363 10.9105 3.2041 11.0766 3.37012L15.7781 8.12148C15.9873 8.33066 15.9873 8.66602 15.7781 8.8752L11.0766 13.6266C10.9105 13.7926 10.625 13.6764 10.625 13.4373V10.3195H5.84375C5.55156 10.3195 5.3125 10.0805 5.3125 9.78828V7.2084ZM4.25 7.2084V9.78828C4.25 10.6682 4.96387 11.382 5.84375 11.382H9.5625V13.4373C9.5625 14.616 10.9902 15.2137 11.827 14.377L16.5318 9.62891C17.1561 9.00469 17.1561 7.99531 16.5318 7.37109L11.827 2.61973C10.9936 1.78633 9.5625 2.37734 9.5625 3.55937V5.61465H5.84375C4.96387 5.61465 4.25 6.33184 4.25 7.2084ZM0 3.71875V13.2812C0 14.1611 0.713867 14.875 1.59375 14.875H5.97656C6.1957 14.875 6.375 14.6957 6.375 14.4766V14.2109C6.375 13.9918 6.1957 13.8125 5.97656 13.8125H1.59375C1.30156 13.8125 1.0625 13.5734 1.0625 13.2812V3.71875C1.0625 3.42656 1.30156 3.1875 1.59375 3.1875H5.97656C6.1957 3.1875 6.375 3.0082 6.375 2.78906V2.52344C6.375 2.3043 6.1957 2.125 5.97656 2.125H1.59375C0.713867 2.125 0 2.83887 0 3.71875Z"
                  fill="black"
                />
              </svg>
            </div>
          </div>
        </div>
      </div> */}
      <sideNav />
      {/* MainBody */}
      <div className="flex flex-col w-full">
        {/* TopNav */}
        {/* <div className="flex justify-between w-full px-6 py-3 h-fit items-center">
          <div className="flex items-start">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_17_38)">
                <path
                  d="M17.7188 9C17.7188 4.18359 13.8164 0.28125 9 0.28125C4.18359 0.28125 0.28125 4.18359 0.28125 9C0.28125 13.8164 4.18359 17.7187 9 17.7188C13.8164 17.7188 17.7187 13.8164 17.7188 9ZM9 16.5938C4.82695 16.5938 1.40625 13.2152 1.40625 9C1.40625 4.82695 4.78477 1.40625 9 1.40625C13.173 1.40625 16.5938 4.78477 16.5938 9C16.5938 13.173 13.2152 16.5938 9 16.5938ZM10.125 12.375L6.75 9L10.125 5.625L10.125 12.375ZM11.25 5.625C11.25 4.62656 10.0371 4.12031 9.33047 4.83047L5.95547 8.20547C5.51602 8.64492 5.51602 9.35859 5.95547 9.79805L9.33047 13.173C10.0371 13.8797 11.25 13.3805 11.25 12.3785L11.25 5.625Z"
                  fill="#C4C4C4"
                />
              </g>
              <defs>
                <clipPath id="clip0_17_38">
                  <rect
                    width="18"
                    height="18"
                    fill="white"
                    transform="matrix(0 1 -1 0 18 0)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="flex justify-end gap-6 items-center">
            <div className="relative w-50">
              <input
                type="text"
                className="w-full text-sm text-neutral-400 border border-gray-300 rounded-md resize-none px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Search..."
              />
              <div className="absolute top-2 right-3 pointer-events-none">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_17_45)">
                    <path
                      d="M13.9043 13.1687L10.377 9.64141C10.3141 9.57852 10.232 9.5457 10.1445 9.5457H9.86289C10.8008 8.53125 11.375 7.17773 11.375 5.6875C11.375 2.5457 8.8293 0 5.6875 0C2.5457 0 0 2.5457 0 5.6875C0 8.8293 2.5457 11.375 5.6875 11.375C7.17773 11.375 8.53125 10.8008 9.5457 9.86562V10.1445C9.5457 10.232 9.58125 10.3141 9.64141 10.377L13.1687 13.9043C13.2973 14.0328 13.5051 14.0328 13.6336 13.9043L13.9043 13.6336C14.0328 13.5051 14.0328 13.2973 13.9043 13.1687ZM5.6875 10.5C3.02695 10.5 0.875 8.34805 0.875 5.6875C0.875 3.02695 3.02695 0.875 5.6875 0.875C8.34805 0.875 10.5 3.02695 10.5 5.6875C10.5 8.34805 8.34805 10.5 5.6875 10.5Z"
                      fill="#C4C4C4"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_17_45">
                      <rect width="14" height="14" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
            <div className="flex justify-center">
              <svg
                width="17"
                height="17"
                viewBox="0 0 17 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_17_40)">
                  <path
                    d="M8.5003 18.75C9.17044 18.75 9.71459 18.1883 9.71459 17.4988H10.9289C10.9289 18.8781 9.83905 20 8.5003 20C7.16155 20 6.07173 18.8781 6.07173 17.4988H7.28602C7.28602 18.1883 7.83017 18.75 8.5003 18.75ZM0.555079 13.0785C1.61606 12.0387 2.42735 10.9504 2.42735 7.26172C2.42735 4.15273 4.83278 1.61719 7.89316 1.31055V0.625C7.89316 0.279687 8.16486 0 8.5003 0C8.83575 0 9.10745 0.279687 9.10745 0.625V1.31094C12.1678 1.61758 14.5733 4.15273 14.5733 7.26172C14.5733 10.95 15.3849 12.0387 16.4459 13.0785C16.976 13.598 17.1434 14.3836 16.8728 15.0797C16.5966 15.7906 15.9317 16.25 15.1789 16.25H1.82173C1.06887 16.25 0.404051 15.7902 0.1278 15.0793C-0.142757 14.3832 0.0249653 13.598 0.555079 13.0785ZM1.82173 15H15.1789C15.7189 15 15.9887 14.3566 15.6084 13.984C14.2856 12.6875 13.359 11.2363 13.359 7.26211C13.359 4.63008 11.1858 2.5 8.5003 2.5C5.81521 2.5 3.64164 4.62969 3.64164 7.26172C3.64164 11.2207 2.72296 12.6797 1.39218 13.9836C1.01044 14.3582 1.28403 15 1.82173 15Z"
                    fill="#C4C4C4"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_17_40">
                    <rect
                      width="17"
                      height="20"
                      fill="white"
                      transform="matrix(-1 0 0 1 17 0)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div> */}
        {/* Body Section */}

        {/* Page1 */}
        {/* <div className="flex justify-between p-5">
          <div className="flex justify-between bg-blue-100 w-full max-w-[255px] h-full min-h-[157px] max-h-[157px] rounded-lg">
            <div className="flex flex-col p-5 gap-2">
              <div>
                <svg
                  width="48"
                  height="38"
                  viewBox="0 0 48 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M45.912 11.4289L26.037 5.06989C24.7013 4.64313 23.2995 4.64313 21.9638 5.06989L2.08875 11.4289C0.8205 11.8349 0 12.9423 0 14.25C0 15.5577 0.8205 16.6651 2.088 17.0711L4.31625 17.7836C4.06875 18.2422 3.88575 18.7358 3.7665 19.2531C2.96475 19.6375 2.4 20.4339 2.4 21.375C2.4 22.3198 2.96775 23.1206 3.77475 23.5029L2.421 31.805C2.30025 32.5464 2.71425 33.25 3.2715 33.25H6.32775C6.885 33.25 7.29975 32.5464 7.17825 31.805L5.82525 23.5029C6.63225 23.1206 7.2 22.3198 7.2 21.375C7.2 20.5883 6.78825 19.9248 6.19275 19.4921C6.3045 19.1462 6.47775 18.8345 6.6855 18.5413L10.6958 19.8246L9.6 28.5C9.6 31.1236 16.047 33.25 24 33.25C31.953 33.25 38.4 31.1236 38.4 28.5L37.3043 19.8246L45.912 17.0703C47.1795 16.6651 48 15.5577 48 14.25C48 12.9423 47.1795 11.8349 45.912 11.4289ZM35.961 28.3412C35.154 29.1821 31.053 30.875 24 30.875C16.947 30.875 12.846 29.1821 12.039 28.3412L13.0208 20.5682L21.9638 23.4294C22.1588 23.4917 23.8928 24.1144 26.037 23.4294L34.98 20.5682L35.961 28.3412ZM45.171 14.8126L25.296 21.1716C24.4478 21.4433 23.5523 21.4433 22.704 21.1716L9.52875 16.956L24.2205 14.2292C24.8723 14.109 25.3013 13.4885 25.179 12.8436C25.0575 12.1979 24.417 11.7755 23.7795 11.8958L8.496 14.7309C7.566 14.9031 6.73275 15.2987 6.015 15.8316L2.82825 14.8118C2.2395 14.6226 2.26875 13.8663 2.82825 13.6874L22.7033 7.32836C23.8358 6.96617 24.7913 7.16731 25.2952 7.32836L45.1703 13.6874C45.7245 13.8648 45.7635 14.6226 45.171 14.8126Z"
                    fill="#74C1ED"
                  />
                </svg>
              </div>
              <p className="flex text-neutral-400 font-medium text-sm">
                Students
              </p>
            </div>
            <div className="flex justify-end items-end p-5 font-bold text-black text-3xl">
              243
            </div>
          </div>
          <div className="flex justify-between bg-pink-100 w-full max-w-[255px] h-full min-h-[157px] max-h-[157px] rounded-lg">
            <div className="flex flex-col p-5 gap-2">
              <div>
                <svg
                  width="28"
                  height="35"
                  viewBox="0 0 28 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_17_55)">
                    <path
                      d="M3.5 0H24.5C26.433 0 28 1.46904 28 3.28125V35L14 27.3438L0 35V3.28125C0 1.46904 1.56698 0 3.5 0ZM2.33333 31.1915L14 24.8113L25.6667 31.1915V3.28125C25.6667 2.67818 25.1433 2.1875 24.5 2.1875H3.5C2.85673 2.1875 2.33333 2.67818 2.33333 3.28125V31.1915Z"
                      fill="#EE95C5"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_17_55">
                      <rect
                        width="28"
                        height="35"
                        fill="white"
                        transform="matrix(-1 0 0 1 28 0)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <p className="flex text-neutral-400 font-medium text-sm">
                Course
              </p>
            </div>
            <div className="flex justify-end items-end p-5 font-bold text-black text-3xl">
              13
            </div>
          </div>
          <div className="flex justify-between bg-amber-100 w-full max-w-[255px] h-full min-h-[157px] max-h-[157px] rounded-lg">
            <div className="flex flex-col p-5 gap-2">
              <div>
                <svg
                  width="35"
                  height="40"
                  viewBox="0 0 35 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.6484 19.5859L15.0234 18.0078C14.0781 17.7422 13.4141 16.8828 13.4141 15.9219C13.4141 14.7266 14.4141 13.75 15.6406 13.75H19.1562C20.0312 13.75 20.8672 14.0312 21.5469 14.5391C21.7969 14.7266 22.1406 14.6953 22.3594 14.4766L23.2422 13.5781C23.5078 13.3125 23.4766 12.875 23.1797 12.6406C22.0391 11.7344 20.6328 11.2422 19.1484 11.2422H18.75V8.11719C18.75 7.77344 18.4688 7.49219 18.125 7.49219H16.875C16.5312 7.49219 16.25 7.77344 16.25 8.11719V11.2422H15.6406C13.0391 11.2422 10.9141 13.3359 10.9141 15.9141C10.9141 17.9922 12.3281 19.8359 14.3438 20.4062L19.9688 21.9844C20.9141 22.25 21.5781 23.1094 21.5781 24.0703C21.5781 25.2656 20.5781 26.2422 19.3516 26.2422H15.8359C14.9609 26.2422 14.125 25.9609 13.4453 25.4531C13.1953 25.2656 12.8516 25.2969 12.6328 25.5156L11.75 26.4141C11.4844 26.6797 11.5156 27.1172 11.8125 27.3516C12.9531 28.2578 14.3594 28.75 15.8438 28.75H16.25V31.875C16.25 32.2188 16.5312 32.5 16.875 32.5H18.125C18.4688 32.5 18.75 32.2188 18.75 31.875V28.75H19.3594C21.9609 28.75 24.0859 26.6562 24.0859 24.0781C24.0781 22 22.6719 20.1562 20.6484 19.5859ZM31.25 2.5H3.75C1.67969 2.5 0 4.17969 0 6.25V33.75C0 35.8203 1.67969 37.5 3.75 37.5H31.25C33.3203 37.5 35 35.8203 35 33.75V6.25C35 4.17969 33.3203 2.5 31.25 2.5ZM32.5 33.75C32.5 34.4375 31.9375 35 31.25 35H3.75C3.0625 35 2.5 34.4375 2.5 33.75V6.25C2.5 5.5625 3.0625 5 3.75 5H31.25C31.9375 5 32.5 5.5625 32.5 6.25V33.75Z"
                    fill="#F6C762"
                  />
                </svg>
              </div>
              <p className="flex text-neutral-400 font-medium text-sm">
                Payments
              </p>
            </div>
            <div className="flex justify-end items-end pr-5 py-5 font-bold text-black text-lg gap-1">
              INR <span className="flex text-3xl">556,000</span>
            </div>
          </div>
          <div className="flex justify-between bg-radial-[at_25%_25%] from-[#FEAF00] to-[#F8D442] to-75% w-full max-w-[255px] h-full min-h-[157px] max-h-[157px] rounded-lg">
            <div className="flex flex-col p-5 gap-2">
              <div>
                <svg
                  width="34"
                  height="34"
                  viewBox="0 0 34 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 2.125C21.1039 2.125 24.4375 5.45859 24.4375 9.5625C24.4375 13.6664 21.1039 17 17 17C12.8961 17 9.5625 13.6664 9.5625 9.5625C9.5625 5.45859 12.8961 2.125 17 2.125ZM25.5 23.375C29.0129 23.375 31.875 26.2371 31.875 29.75V31.875H2.125V29.75C2.125 26.2371 4.98711 23.375 8.5 23.375C14.1445 23.375 12.9691 24.4375 17 24.4375C21.0441 24.4375 19.8488 23.375 25.5 23.375ZM17 0C11.7207 0 7.4375 4.2832 7.4375 9.5625C7.4375 14.8418 11.7207 19.125 17 19.125C22.2793 19.125 26.5625 14.8418 26.5625 9.5625C26.5625 4.2832 22.2793 0 17 0ZM25.5 21.25C19.3641 21.25 20.7852 22.3125 17 22.3125C13.2281 22.3125 14.6293 21.25 8.5 21.25C3.80508 21.25 0 25.0551 0 29.75V31.875C0 33.0504 0.949609 34 2.125 34H31.875C33.0504 34 34 33.0504 34 31.875V29.75C34 25.0551 30.1949 21.25 25.5 21.25Z"
                    fill="white"
                  />
                </svg>
              </div>
              <p className="flex text-neutral-100 font-medium text-sm">Users</p>
            </div>
            <div className="flex justify-end items-end pr-5 py-5 font-bold text-black text-lg gap-1">
              3
            </div>
          </div>
        </div> */}

        {/* Page2 */}
        {/* <div className="flex flex-col w-full h-full bg-neutral-100 px-8">
          <div className="flex justify-between w-full py-4">
            <div className="flex justify-start items-center">
              <p className="flex text-black text-2xl font-bold">
                Students List
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
              <div className="flex justify-center items-center bg-amber-400 rounded-lg px-5 py-3 cursor-pointer">
                <p className="text-white font-normal text-sm">
                  ADD NEW STUDENT
                </p>
              </div>
            </div>
          </div>
          <table className="flex flex-col w-full justify-center mx-auto">
            <tr className="flex justify-between items-center p-5 border-t-[1px] border-neutral-200">
              <th></th>
              <th className="flex text-xs text-neutral-400 font-semibold">
                Name
              </th>
              <th className="flex text-xs text-neutral-400 font-semibold">
                Email
              </th>
              <th className="flex text-xs text-neutral-400 font-semibold">
                Phone
              </th>
              <th className="flex text-xs text-neutral-400 font-semibold">
                Enroll Number
              </th>
              <th className="flex text-xs text-neutral-400 font-semibold">
                Date of admission
              </th>
              <th></th>
            </tr>
            <tr className="flex justify-between items-center w-full bg-white rounded-lg p-3">
              <td><Image
                src="/images/pexels-photo.png"
                alt="Logo"
                width={400}
                height={400}
                className="flex justify-center w-full max-w-[65px] h-full max-h-[65px] rounded-lg"
                priority
              />
              </td>
              <td className="flex text-black font-normal text-sm">Karthi</td>
              <td className="flex text-black font-normal text-sm">
                karthi@gmail.com
              </td>
              <td className="flex text-black font-normal text-sm">7305477760</td>
              <td className="flex text-black font-normal text-sm">
                1234567305477760
              </td>
              <td className="flex text-black font-normal text-sm">
                08-Dec, 2021
              </td>
              <td className="flex justify-between gap-9 p-5">
                <div>
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_21_225)">
                      <path
                        d="M18.3033 2.08777L16.9113 0.695801C16.4478 0.231934 15.8399 0 15.2321 0C14.6242 0 14.0164 0.231934 13.5525 0.69543L0.475916 13.772L0.00462689 18.0107C-0.0547481 18.5443 0.365701 19 0.88783 19C0.920858 19 0.953885 18.9981 0.987654 18.9944L5.22332 18.5265L18.3036 5.44617C19.231 4.51881 19.231 3.01514 18.3033 2.08777ZM4.67818 17.3924L1.2259 17.775L1.61035 14.3175L11.4031 4.52475L14.4747 7.59629L4.67818 17.3924ZM17.4639 4.60676L15.3141 6.7565L12.2426 3.68496L14.3923 1.53521C14.6164 1.31107 14.9148 1.1875 15.2321 1.1875C15.5494 1.1875 15.8474 1.31107 16.0719 1.53521L17.4639 2.92719C17.9266 3.39031 17.9266 4.14363 17.4639 4.60676Z"
                        fill="#FEAF00"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_21_225">
                        <rect width="19" height="19" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div>
                  <svg
                    width="16"
                    height="18"
                    viewBox="0 0 16 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_21_223)">
                      <path
                        d="M0.285713 2.25H4L5.2 0.675C5.35968 0.465419 5.56674 0.295313 5.80478 0.178154C6.04281 0.0609948 6.30529 0 6.57143 0L9.42857 0C9.69471 0 9.95718 0.0609948 10.1952 0.178154C10.4333 0.295313 10.6403 0.465419 10.8 0.675L12 2.25H15.7143C15.7901 2.25 15.8627 2.27963 15.9163 2.33238C15.9699 2.38512 16 2.45666 16 2.53125V3.09375C16 3.16834 15.9699 3.23988 15.9163 3.29262C15.8627 3.34537 15.7901 3.375 15.7143 3.375H15.0393L13.8536 16.4637C13.8152 16.8833 13.6188 17.2737 13.3029 17.558C12.987 17.8423 12.5745 17.9999 12.1464 18H3.85357C3.42554 17.9999 3.01302 17.8423 2.69711 17.558C2.38121 17.2737 2.18477 16.8833 2.14643 16.4637L0.960713 3.375H0.285713C0.209937 3.375 0.137264 3.34537 0.083683 3.29262C0.0301008 3.23988 0 3.16834 0 3.09375V2.53125C0 2.45666 0.0301008 2.38512 0.083683 2.33238C0.137264 2.27963 0.209937 2.25 0.285713 2.25ZM9.88571 1.35C9.8323 1.28034 9.76324 1.22379 9.68393 1.18475C9.60463 1.14572 9.51723 1.12527 9.42857 1.125H6.57143C6.48277 1.12527 6.39537 1.14572 6.31606 1.18475C6.23676 1.22379 6.1677 1.28034 6.11429 1.35L5.42857 2.25H10.5714L9.88571 1.35ZM3.28571 16.3617C3.29748 16.5019 3.36245 16.6325 3.46768 16.7277C3.57292 16.8228 3.7107 16.8754 3.85357 16.875H12.1464C12.2893 16.8754 12.4271 16.8228 12.5323 16.7277C12.6376 16.6325 12.7025 16.5019 12.7143 16.3617L13.8929 3.375H2.10714L3.28571 16.3617Z"
                        fill="#FEAF00"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_21_223">
                        <rect
                          width="16"
                          height="18"
                          fill="white"
                          transform="matrix(-1 0 0 1 16 0)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </td>
            </tr>
          </table>
        </div> */}

        {/* Page3 */}
        {/* <div className="flex flex-col w-full h-full bg-neutral-100 px-8">
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
            <tr className="flex justify-between items-center p-5 border-t-[1px] border-neutral-200">
              <th className="flex text-xs text-neutral-400 font-semibold">
                Name
              </th>
              <th className="flex text-xs text-neutral-400 font-semibold">
                Payment Schedule
              </th>
              <th className="flex text-xs text-neutral-400 font-semibold">
                Bill Number
              </th>
              <th className="flex text-xs text-neutral-400 font-semibold">
                Amount Paid
              </th>
              <th className="flex text-xs text-neutral-400 font-semibold">
                Balance amount
              </th>
              <th className="flex text-xs text-neutral-400 font-semibold">
                Date
              </th>
              <th></th>
            </tr>
            <tr className="flex justify-between items-center w-full bg-white rounded-lg p-3">
              <td className="flex text-black font-normal text-sm">Karthi</td>
              <td className="flex text-black font-normal text-sm">First</td>
              <td className="flex text-black font-normal text-sm">00012223</td>
              <td className="flex text-black font-normal text-sm">
                INR 35,000
              </td>
              <td className="flex text-black font-normal text-sm">
                INR 55,000
              </td>
              <td className="flex text-black font-normal text-sm">
                08-Dec, 2021
              </td>
              <td className="flex p-5">
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
          </table>
        </div> */}
      </div>
    </div>

    // Login page
    // <div className="flex w-full h-full min-h-[100vh] bg-radial-[at_25%_25%] from-[#FEAF00] to-[#F8D442] to-75%">
    //   <div className="flex flex-col m-auto w-full max-w-[475px] h-full max-h-[550px] bg-white p-5 gap-10 rounded-xl">
    //     <div className="flex flex-col gap-3">
    //     <div className="flex justify-center items-center gap-3 px-6 py-4">
    //          <div className="flex items-center h-[25px] w-[5px] bg-amber-400"></div>
    //          <p className="flex font-bold text-3xl text-black leading-[100%] items-center">
    //            CRUD OPERATIONS
    //          </p>
    //       </div>
    //       <div className="flex flex-col items-center justify-center gap-3">
    //         <p className="flex text-center text-black text-2xl font-semibold">SIGN IN</p>
    //         <p className="flex text-center text-neutral-400 text-sm">Enter your credentials to access your account</p>
    //       </div>
    //       </div>
    //       <div className="flex flex-col gap-8 p-2">
    //         <div className="flex flex-col gap-3">
    //         <div className="flex flex-col gap-2">
    //         <p className="flex text-sm text-neutral-500">Email</p>
    //         <input type="text" placeholder="Enter your email" className="flex w-full px-3 py-2.5 text-xs text-neutral-400 border-1 border-neutral-200 rounded-md cursor-pointer focus-visible:ring-0 focus-visible:outline-none"/>
    //       </div>
    //       <div className="flex flex-col gap-2">
    //         <p className="flex text-sm text-neutral-500">Password</p>
    //         <input type="text" placeholder="Enter your password" className="flex w-full px-3 py-2.5 text-xs text-neutral-400 border-1 border-neutral-200 rounded-md cursor-pointer focus-visible:ring-0 focus-visible:outline-none"/>
    //       </div>
    //       </div>
    //       <div className="flex justify-center w-full bg-amber-400 rounded-lg cursor-pointer">
    //         <p className="flex justify-center text-sm text-white px-3 py-2.5 ">SIGN IN</p>
    //       </div>
    //       <div className="flex justify-center items-center text-sm font-semibold text-neutral-400 gap-1">
    //         Forgot your password? <span className="flex text-amber-400 underline cursor-pointer">Reset Password</span>
    //       </div>
    //       </div>
    //   </div>
    // </div>
  );
}
