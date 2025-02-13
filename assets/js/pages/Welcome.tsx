import { Head } from "@inertiajs/react";
import { useState } from "react";

interface WelcomeProps {
  message: string;
  name: string;
}

export default function WelcomePage({ message, name }: WelcomeProps) {
  const [visitor, setVisitor] = useState(name);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setVisitor(event.target.value);
  }

  return (
    <>
      <Head title="Welcome" />
      <h1 className="text-2xl font-bold underline">{message}</h1>
      <p className="pt-4">
        Hello <span className="text-green-600 font-semibold">{visitor}</span>,
        welcome to the Inertia.js demo app!
      </p>
      <div className="my-2">
        <input
          type="text"
          value={visitor}
          onChange={handleChange}
          placeholder={`Type your name here!`}
          className="rounded-md"
        />
      </div>
      <p className="pt-12">
        The code for this project can be found{" "}
        <a
          className="underline"
          href="https://github.com/skyturtleio/exinertia_demo"
        >
          here
        </a>
        .
      </p>
    </>
  );
}
