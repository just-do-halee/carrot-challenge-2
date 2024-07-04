import { Input, type InputProps } from "./ui/input";
import { Label } from "./ui/label";

export interface FormInputProps extends InputProps {
  id: string;
  icon?: React.ReactNode;
  messages?: string[];
}

export default function FormInput({
  id,
  icon,
  messages,
  ...props
}: FormInputProps) {
  return (
    <>
      <Input id={id} name={id} icon={icon} {...props} />
      {messages && (
        <Label
          htmlFor={id}
          className="flex flex-col text-red-500 font-medium mb-2 gap-4"
        >
          {messages?.map((message, index) => (
            <span key={index}>{message}</span>
          ))}
        </Label>
      )}
    </>
  );
}
