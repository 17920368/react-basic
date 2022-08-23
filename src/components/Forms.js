import { useState } from "react";


export function Form() {
  const [form, setForm] = useState({});
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.valie,
    });
  };
}
