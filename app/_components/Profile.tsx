"use client";
import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { User } from "lucide-react";

const Profile = () => {


  return (
    <div>
      <Dropdown>
        <DropdownTrigger className="cursor-pointer p-1 w-8 h-8 rounded-full border-2">
          <User className="h-8 w-8 text-gray-600"/>
        </DropdownTrigger>
        <DropdownMenu aria-label="Static Actions">
          <DropdownItem key="new">New file</DropdownItem>
          <DropdownItem key="copy">Copy link</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default Profile;
