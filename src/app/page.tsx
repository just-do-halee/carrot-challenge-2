"use client";
import FormButton from "@/components/form-button";
import FormInput from "@/components/form-input";
import { useFormState } from "react-dom";
import { FaFire, FaUser } from "react-icons/fa6";
import { MdEmail, MdPassword } from "react-icons/md";
import { handleForm } from "./actions";

export default function Home() {
  const [state, action] = useFormState(handleForm, null);
  return (
    <main className="w-full h-1/2 max-w-xs flex flex-col justify-center items-center gap-8">
      <div className="w-full flex justify-center items-center">
        <FaFire size={42} color="#e21b1be9" />
      </div>
      <form
        action={action}
        className="w-full flex flex-col justify-center items-center gap-4"
      >
        <FormInput
          id="email"
          placeholder="Email"
          type="email"
          icon={<MdEmail />}
          required
        />
        <FormInput
          id="username"
          placeholder="Username"
          type="text"
          icon={<FaUser />}
          required
        />
        <FormInput
          id="password"
          placeholder="Password"
          type="password"
          icon={<MdPassword />}
          messages={state?.messages}
          required
        />
        <FormButton text="Login" />
      </form>
    </main>
  );
}
