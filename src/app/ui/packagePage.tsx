"use client";
import { packages } from "@/app/lib/placeholder-data";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Dropdown } from "./Dropdown/dropdown";

export default function PackagePage() {
  const [value, setValue] = useState(packages);
  const [filter, setFilter] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [parameter, setParameter] = useState("All");

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  function closeDropdown() {
    setIsOpen(false);
  }

  /*Sets the filter when the input value changes*/
  const valueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  };

  /*Changes the parameter value based on the selected button*/
  const parameterChange = (event: React.MouseEvent<HTMLButtonElement>) => {
    setParameter(event.currentTarget.value);
    /*Closes the filter dropdown after selection*/
    closeDropdown();
  };

  /*Filters packages based on filter input, and selected parameter
    Triggers whenever filter or parameter change*/
  useEffect(() => {
    if (filter == "") {
      setValue(packages);
      return;
    }

    let filtered = packages;

    if (parameter == "All") {
      filtered = packages.filter(
        (item) =>
          item.name.toLowerCase().includes(filter.toLowerCase()) ||
          item.description.toLowerCase().includes(filter.toLowerCase())
      );
    } else if (parameter == "Name") {
      filtered = packages.filter((item) =>
        item.name.toLowerCase().includes(filter.toLowerCase())
      );
    } else if (parameter == "Description") {
      filtered = packages.filter((item) =>
        item.description.toLowerCase().includes(filter.toLowerCase())
      );
    }
    setValue(filtered);
  }, [filter, parameter]);

  return (
    <div className="lg:w-3/4 lg:grid lg:grid-cols-3 gap-10 justify-items-center">
      <input
        type="text"
        value={filter}
        onChange={valueChange}
        placeholder="Search..."
        className="col-span-2 w-full px-4 py-2 border border-black rounded-lg hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <div className="relative">
        <button
          onClick={toggleDropdown}
          className="flex items-center text-white dropdown-toggle dark:text-gray-400"
        >
          <svg
            className={`stroke-gray-500 dark:stroke-gray-400 transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
            width="30"
            height="30"
            viewBox="0 0 40 40"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 10 L35 30 L5 30 Z"
              stroke="black"
              strokeWidth="1"
              fill="white"
            />
          </svg>
        </button>
        <Dropdown
          isOpen={isOpen}
          onClose={closeDropdown}
          className="absolute left-1/2 -translate-x-1/2 mt-[17px] flex w-[260px] flex-col rounded-2xl border border-gray-200 bg-white p-3"
        >
          <ul className="flex flex-col gap-1 pt-4 pb-3">
            <li>
              <button
                className="w-full rounded-md hover:bg-gray-100 hover:text-gray-900"
                value="All"
                onClick={parameterChange}
              >
                All
              </button>
            </li>
            <li>
              <button
                className="w-full rounded-md hover:bg-gray-100 hover:text-gray-900"
                value="Name"
                onClick={parameterChange}
              >
                Name
              </button>
            </li>
            <li>
              <button
                className="w-full rounded-md hover:bg-gray-100 hover:text-gray-900"
                value="Description"
                onClick={parameterChange}
              >
                Description
              </button>
            </li>
          </ul>
        </Dropdown>
      </div>
      {value.map((item) => (
        <Link
          href={`/pages/packages/${item.packageId}`}
          key={item.packageId}
          className="max-lg:mb-8 w-fit p-2 flex bg-neutral-500 rounded-lg justify-center box-border"
        >
          <div>
            <div className="w-full h-24 mb-3 bg-orange-300"></div>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
