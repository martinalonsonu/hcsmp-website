"use client";

import { useEffect, useRef } from "react";
import { useBodyScrollLock } from "@/hooks/use-body-scroll-lock";

/** Native dialogs provide focus containment, Escape and an inert background. */
export function useModalDialog(isOpen: boolean) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  useBodyScrollLock(isOpen);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (isOpen && !dialog.open) dialog.showModal();
    else if (!isOpen && dialog.open) dialog.close();

    function containKeyboardFocus(event: KeyboardEvent) {
      if (event.key !== "Tab" || !dialog?.open) return;
      const elements = Array.from(
        dialog.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]):not([tabindex="-1"]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex="0"]',
        ),
      ).filter((element) => element.getClientRects().length > 0);
      const first = elements[0];
      const last = elements.at(-1);
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    }
    dialog.addEventListener("keydown", containKeyboardFocus);
    return () => dialog.removeEventListener("keydown", containKeyboardFocus);
  }, [isOpen]);

  return dialogRef;
}
