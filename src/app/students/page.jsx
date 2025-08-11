"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import SideNav from "../components/sideNav";
import TopNav from "../components/topNav";
import withAuth from "../components/withAuth";

function StudentsPage() {
  const router = useRouter();

  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Karthi",
      email: "karthi@gmail.com",
      phone: "7305477760",
      enroll: "1234567305477760",
      admissionDate: "08-Dec, 2021",
      image: "/images/pexels-photo.png",
    },
  ]);

  const [showPopup, setShowPopup] = useState(false);
  const [editId, setEditId] = useState(null); // Track if editing
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    enroll: "",
    admissionDate: "",
    image: "/images/pexels-photo.png",
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) router.push("/login");
  }, [router]);

  const handleSaveStudent = () => {
    if (
      formData.name &&
      formData.email &&
      formData.phone &&
      formData.enroll &&
      formData.admissionDate
    ) {
      if (editId) {
        // Update existing
        setStudents((prev) =>
          prev.map((s) => (s.id === editId ? { ...formData, id: editId } : s))
        );
        setEditId(null);
      } else {
        // Add new
        setStudents((prev) => [...prev, { ...formData, id: Date.now() }]);
      }

      setFormData({
        name: "",
        email: "",
        phone: "",
        enroll: "",
        admissionDate: "",
        image: "/images/pexels-photo.png",
      });
      setShowPopup(false);
    } else {
      alert("Please fill all fields");
    }
  };

  const handleDeleteStudent = (id) => {
    if (confirm("Are you sure you want to delete this student?")) {
      setStudents((prev) => prev.filter((s) => s.id !== id));
    }
  };

  const handleEditStudent = (student) => {
    setFormData(student);
    setEditId(student.id);
    setShowPopup(true);
  };

  return (
    <div className="flex w-full">
      <SideNav />
      <div className="flex flex-col w-full">
        <TopNav />
        <div className="flex flex-col w-full h-full bg-neutral-100 p-8">
          <div className="flex justify-between w-full py-4">
            <div className="flex justify-start items-center">
              <p className="flex text-black text-2xl font-bold">Students List</p>
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
              <div
                className="flex justify-center items-center bg-amber-400 hover:bg-amber-500 rounded-lg px-5 py-3 cursor-pointer"
                onClick={() => {
                  setEditId(null);
                  setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    enroll: "",
                    admissionDate: "",
                    image: "/images/pexels-photo.png",
                  });
                  setShowPopup(true);
                }}
              >
                <p className="text-white font-normal text-sm">ADD NEW STUDENT</p>
              </div>
            </div>
          </div>

          {/* Table */}
          <table className="flex flex-col w-full justify-center mx-auto">
            <thead>
              <tr className="flex justify-between items-center p-5 border-t-[1px] border-neutral-200">
                <th></th>
                <th className="flex text-xs text-neutral-400 font-semibold">Name</th>
                <th className="flex text-xs text-neutral-400 font-semibold">Email</th>
                <th className="flex text-xs text-neutral-400 font-semibold">Phone</th>
                <th className="flex text-xs text-neutral-400 font-semibold">Enroll Number</th>
                <th className="flex text-xs text-neutral-400 font-semibold">Date of admission</th>
                <th className="flex text-xs text-neutral-400 font-semibold"></th>
              </tr>
            </thead>
            <tbody className="flex flex-col gap-2">
              {students.map((student) => (
                <tr
                  key={student.id}
                  className="flex justify-between items-center w-full bg-white rounded-lg p-3"
                >
                  <td>
                    <Image
                      src={student.image}
                      alt="Student"
                      width={65}
                      height={65}
                      className="rounded-lg"
                      priority
                    />
                  </td>
                  <td className="flex text-black font-normal text-sm">{student.name}</td>
                  <td className="flex text-black font-normal text-sm">{student.email}</td>
                  <td className="flex text-black font-normal text-sm">{student.phone}</td>
                  <td className="flex text-black font-normal text-sm">{student.enroll}</td>
                  <td className="flex text-black font-normal text-sm">{student.admissionDate}</td>
                  <td className="flex gap-4">
                    {/* Edit Icon */}
                    <svg
                      onClick={() => handleEditStudent(student)}
                      className="cursor-pointer text-amber-400 hover:text-amber-500"
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_21_225)">
                        <path
                          d="M18.3033 2.08777L16.9113 0.695801C16.4478 0.231934 15.8399 0 15.2321 0C14.6242 0 14.0164 0.231934 13.5525 0.69543L0.475916 13.772L0.00462689 18.0107C-0.0547481 18.5443 0.365701 19 0.88783 19C0.920858 19 0.953885 18.9981 0.987654 18.9944L5.22332 18.5265L18.3036 5.44617C19.231 4.51881 19.231 3.01514 18.3033 2.08777ZM4.67818 17.3924L1.2259 17.775L1.61035 14.3175L11.4031 4.52475L14.4747 7.59629L4.67818 17.3924ZM17.4639 4.60676L15.3141 6.7565L12.2426 3.68496L14.3923 1.53521C14.6164 1.31107 14.9148 1.1875 15.2321 1.1875C15.5494 1.1875 15.8474 1.31107 16.0719 1.53521L17.4639 2.92719C17.9266 3.39031 17.9266 4.14363 17.4639 4.60676Z"
                          fill="currentColor"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_21_225">
                          <rect width="19" height="19" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>

                    {/* Delete Icon */}
                    <svg
                      onClick={() => handleDeleteStudent(student.id)}
                      className="cursor-pointer text-amber-400 hover:text-amber-500"
                      width="16"
                      height="18"
                      viewBox="0 0 16 18"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_21_223)">
                        <path
                          d="M0.285713 2.25H4L5.2 0.675C5.35968 0.465419 5.56674 0.295313 5.80478 0.178154C6.04281 0.0609948 6.30529 0 6.57143 0L9.42857 0C9.69471 0 9.95718 0.0609948 10.1952 0.178154C10.4333 0.295313 10.6403 0.465419 10.8 0.675L12 2.25H15.7143C15.7901 2.25 15.8627 2.27963 15.9163 2.33238C15.9699 2.38512 16 2.45666 16 2.53125V3.09375C16 3.16834 15.9699 3.23988 15.9163 3.29262C15.8627 3.34537 15.7901 3.375 15.7143 3.375H15.0393L13.8536 16.4637C13.8152 16.8833 13.6188 17.2737 13.3029 17.558C12.987 17.8423 12.5745 17.9999 12.1464 18H3.85357C3.42554 17.9999 3.01302 17.8423 2.69711 17.558C2.38121 17.2737 2.18477 16.8833 2.14643 16.4637L0.960713 3.375H0.285713C0.209937 3.375 0.137264 3.34537 0.083683 3.29262C0.0301008 3.23988 0 3.16834 0 3.09375V2.53125C0 2.45666 0.0301008 2.38512 0.083683 2.33238C0.137264 2.27963 0.209937 2.25 0.285713 2.25ZM9.88571 1.35C9.8323 1.28034 9.76324 1.22379 9.68393 1.18475C9.60463 1.14572 9.51723 1.12527 9.42857 1.125H6.57143C6.48277 1.12527 6.39537 1.14572 6.31606 1.18475C6.23676 1.22379 6.1677 1.28034 6.11429 1.35L5.42857 2.25H10.5714L9.88571 1.35ZM3.28571 16.3617C3.29748 16.5019 3.36245 16.6325 3.46768 16.7277C3.57292 16.8228 3.7107 16.8754 3.85357 16.875H12.1464C12.2893 16.8754 12.4271 16.8228 12.5323 16.7277C12.6376 16.6325 12.7025 16.5019 12.7143 16.3617L13.8929 3.375H2.10714L3.28571 16.3617Z"
                          fill="currentColor"
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
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Popup Form */}
      {showPopup && (
        <div className="fixed inset-0 backdrop-blur-xs bg-opacity-100 flex justify-center items-center">
          <div className="bg-neutral-50 p-6 rounded-lg w-[400px] shadow-lg">
            <h2 className="text-lg font-bold mb-4 text-black">
              {editId ? "Edit Student" : "Add New Student"}
            </h2>
            <input
              type="text"
              placeholder="Name"
              className="border border-neutral-300 w-full p-2 mb-2 rounded text-black text-sm focus:outline-none focus:border-amber-500 focus:ring-0"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <input
              type="email"
              placeholder="Email"
              className="border border-neutral-300 w-full p-2 mb-2 rounded text-black text-sm focus:outline-none focus:border-amber-500 focus:ring-0"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            <input
              type="text"
              placeholder="Phone"
              className="border border-neutral-300 w-full p-2 mb-2 rounded text-black text-sm focus:outline-none focus:border-amber-500 focus:ring-0"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
            <input
              type="text"
              placeholder="Enroll Number"
              className="border border-neutral-300 w-full p-2 mb-2 rounded text-black text-sm focus:outline-none focus:border-amber-500 focus:ring-0"
              value={formData.enroll}
              onChange={(e) => setFormData({ ...formData, enroll: e.target.value })}
            />
            <input
              type="text"
              placeholder="Date of Admission"
              className="border border-neutral-300 w-full p-2 mb-2 rounded text-black text-sm focus:outline-none focus:border-amber-500 focus:ring-0"
              value={formData.admissionDate}
              onChange={(e) =>
                setFormData({ ...formData, admissionDate: e.target.value })
              }
            />
            <div className="flex justify-end gap-2 mt-4">
              <button
                onClick={() => {
                  setShowPopup(false);
                  setEditId(null);
                }}
                className="px-4 py-2 bg-neutral-400 hover:bg-neutral-500 text-white rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveStudent}
                className="px-4 py-2 bg-amber-400 hover:bg-amber-500 text-white rounded"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default withAuth(StudentsPage);
