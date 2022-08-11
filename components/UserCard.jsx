import React from "react";
import {
  IconChevronDown,
  IconChevronUp,
  IconMailForward,
  IconMapPins,
} from "@tabler/icons";
import UserCardDetail from "../components/UserCardDetail";
import { useState } from "react";

export default function Usercard(props) {
  const [open, setOpen] = useState("false");

  return (
    <div className="border-bottom" onClick={() => setOpen(!open)}>
      {/* main section */}
      <div className="d-flex align-items-center p-3">
        <img src={props.imgUrl} width="90px" class="rounded-circle me-4" />
        <span className="text-center display-6 me-auto">{props.name}</span>
        {open ? <IconChevronDown /> : <IconChevronUp />}
      </div>
      {open && <UserCardDetail email={props.email} address={props.address} />}
    </div>
  );
}
