import { Head } from '@inertiajs/react'
import { useState } from 'react';

interface WelcomeProps {
  message: string;
  name: string;
}

const InputExample = () => {
  const [text, setText] = useState('');

  const handleChange = event => {
    setText(event.target.value);
  };

  return (
    <>
      <p>{text}</p>
      <input type='text' value={text} onChange={handleChange} />
    </>
  )
}
export default function WelcomePage({ message, name }: WelcomeProps) {
  return (
    <>
      <Head title="Welcome" />
      <h1 className="text-2xl font-bold underline">{message}</h1>
      <p className="pt-4">Hello <span className="text-green-600 font-semibold">{name}</span>, welcome to the Inertia.js demo app!</p>
      <InputExample />
      <p className="pt-4">
        The code for this project can be found <a
          className="underline"
          href="https://github.com/skyturtleio/exinertia_demo"
        >
          here</a>.
      </p>
    </>
  )
}

