"use client";

export function NotificationBar() {
  return (
    <div
      className="fixed left-0 right-0 z-40 flex items-center justify-center px-5"
      style={{
        top: "44px",
        height: "30px",
        backgroundColor: "#0e4ff6",
      }}
    >
      <p className="text-xs font-medium tracking-wide text-white">
        Open to new opportunities —{" "}
        <a
          href="#contact"
          className="underline underline-offset-2 opacity-90 hover:opacity-100 transition-opacity"
        >
          let&apos;s talk
        </a>
      </p>
    </div>
  );
}
