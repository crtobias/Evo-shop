"use client";

import { useState } from "react";
import Link from "next/link";

export default function LoginRegisterForm() {
  const [isRegistering, setIsRegistering] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!form.email) newErrors.email = "El email es obligatorio";
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Email inválido";

    if (!form.password) newErrors.password = "La contraseña es obligatoria";
    else if (form.password.length < 6)
      newErrors.password = "Debe tener al menos 6 caracteres";

    if (isRegistering && !form.name) newErrors.name = "El nombre es obligatorio";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const foundErrors = validate();
    if (Object.keys(foundErrors).length > 0) {
      setErrors(foundErrors);
    } else {
      setErrors({});
      if (isRegistering) {
        console.log("Registrando:", form);
      } else {
        console.log("Iniciando sesión:", {
          email: form.email,
          password: form.password,
        });
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 pt-24">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">
          {isRegistering ? "Registrarse" : "Iniciar sesión"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {isRegistering && (
            <div>
              <label className="block font-medium">Nombre</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}
            </div>
          )}

          <div>
            <label className="block font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>

          <div>
            <label className="block font-medium">Contraseña</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            {isRegistering ? "Registrarme" : "Ingresar"}
          </button>
        </form>

        <p className="mt-4 text-center text-sm">
          {isRegistering ? "¿Ya tenés cuenta?" : "¿No tenés cuenta?"}{" "}
          <button
            type="button"
            className="text-blue-600 hover:underline font-medium"
            onClick={() => setIsRegistering((prev) => !prev)}
          >
            {isRegistering ? "Iniciar sesión" : "Registrarse"}
          </button>
        </p>
        <Link href="/main">
        <button className="p-1 border rounded-lg pr-4 pl-4 hover:bg-gray-200">entrar Dev</button>
      </Link>
      </div>
      
    </div>
  );
}
