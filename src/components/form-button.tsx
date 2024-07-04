"use client";

import { cn } from "@/lib/utils";
import { Button, type ButtonProps } from "./ui/button";
import { useFormStatus } from "react-dom";

export interface FormButtonProps extends ButtonProps {
  // loading?: boolean;
  text: string;
}

export default function FormButton({
  text,
  className,
  ...props
}: FormButtonProps) {
  const { pending } = useFormStatus();
  return (
    <Button disabled={pending} className={cn("w-full", className)} {...props}>
      {pending ? "Loading..." : text}
    </Button>
  );
}
