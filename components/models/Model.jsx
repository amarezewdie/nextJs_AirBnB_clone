"use client";
import { XIcon } from "lucide-react";
import React, { useCallback, useEffect, useState } from "react";
import Button from "../Button";

const Model = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  footer,
  actionLabel,
  disabled,
  secondaryAction,
  secondaryActionLabel,
}) => {
  const [showModel, setShowModel] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShowModel(true);
    } else {
      setTimeout(() => setShowModel(false), 300); // Delay for exit animation
    }
  }, [isOpen]);

  // Handle close
  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }
    onClose();
  }, [disabled, onClose]);

  // On submit
  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }
    onSubmit();
  }, [disabled, onSubmit]);

  // Secondary action
  const handleSecondaryAction = useCallback(() => {
    if (disabled || !secondaryAction) {
      return;
    }
    secondaryAction();
  }, [disabled, secondaryAction]);

  // Don't render modal if it's not open
  if (!isOpen && !showModel) {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 z-50 flex justify-center items-center bg-neutral-800/70 transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className={`bg-white w-[90vw] sm:w-[50vw] md:w-[30vw] rounded-lg shadow-lg p-5 transform transition-transform duration-300 ${
          isOpen ? "translate-y-0 scale-100" : "translate-y-full scale-95"
        }`}
      >
        {/* Header */}
        <div className="relative flex justify-center  mx-auto  w-full">
          <button
            onClick={handleClose}
            className="absolute right-0 text-gray-500 hover:text-gray-700 transition"
          >
            <XIcon className="w-7 h-7 text-rose-500" />
          </button>
          {/* Body */}
          <div className="p-2 w-full">{body}</div>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-4">
          {secondaryActionLabel && (
            <Button
              outLine
              disabled={disabled}
              label={secondaryActionLabel}
              onClick={handleSecondaryAction}
            />
          )}
          <Button
            disabled={disabled}
            label={actionLabel}
            onClick={handleSubmit}
          />
        </div>
        <div className="mt-2">{footer}</div>
      </div>
    </div>
  );
};

export default Model;
