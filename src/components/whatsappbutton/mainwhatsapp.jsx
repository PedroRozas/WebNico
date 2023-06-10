import React from "react";
import { FloatingWhatsApp } from "./FloatingWhatsApp";

/**
 * Repo: https://github.com/awran5/react-floating-whatsapp
 */

export default function Whatsapp() {
  return (
    <div className="Whatsapp">
      <FloatingWhatsApp
        phoneNumber="+56984714006"
        accountName="Aldini"
        allowEsc
        allowClickAway
        notification
        notificationSound
      />
    </div>
  );
}