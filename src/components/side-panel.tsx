import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { cn } from "../utils";

export interface SidePanelProps {
  open: boolean;
  onClose: () => void;
  /** Panel width. Default "560px" */
  width?: string;
  /** Header content (rendered inside the header bar, alongside the close button) */
  header: React.ReactNode;
  /** Main scrollable content */
  children: React.ReactNode;
  /** Optional sticky footer (e.g. a chat input) */
  footer?: React.ReactNode;
  className?: string;
}

export function SidePanel({
  open,
  onClose,
  width = "560px",
  header,
  children,
  footer,
  className,
}: SidePanelProps) {
  const [visible, setVisible] = useState(false);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    if (open) {
      setVisible(true);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setAnimating(true));
      });
    } else {
      setAnimating(false);
      const timer = setTimeout(() => setVisible(false), 300);
      return () => clearTimeout(timer);
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  if (!visible) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-black/50 transition-opacity duration-300",
          animating ? "opacity-100" : "opacity-0"
        )}
        onClick={onClose}
      />

      {/* Panel */}
      <div
        style={{ width }}
        className={cn(
          "fixed right-0 top-0 z-50 flex h-full max-w-[calc(100vw-84px)] flex-col bg-white shadow-xl transition-transform duration-300 ease-out",
          animating ? "translate-x-0" : "translate-x-full",
          className
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-cool-200 px-6 py-5">
          <div className="flex items-center gap-3">{header}</div>
          <button
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-full text-gray-cool-400 hover:bg-gray-cool-100 hover:text-gray-cool-600 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto">{children}</div>

        {/* Optional footer */}
        {footer && (
          <div className="border-t border-gray-cool-200">{footer}</div>
        )}
      </div>
    </>
  );
}
