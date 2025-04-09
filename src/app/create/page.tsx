"use client";

import { useState } from "react";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { Textarea } from "@/components/Textarea";

export default function CreateVenue() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement venue creation logic
    console.log(formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <main className="min-h-screen text-white px-6 py-12 max-w-3xl mx-auto font-sans text-sm leading-tight">
      <header className="mb-14">
        <h1 className="text-3xl font-bold text-green-400 tracking-tight">
          Create Game session
        </h1>
        <p className="text-neutral-400 mt-2 text-md">
          Details of your game session for others to find and join
        </p>
      </header>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Input
            id="name"
            name="name"
            label="Venue Name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter venue name"
            className="bg-stone-800 border-stone-700 text-stone-200"
          />
        </div>

        <div className="space-y-2">
          <Textarea
            id="description"
            name="description"
            label="Description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Describe your venue"
            className="bg-stone-800 border-stone-700 text-stone-200 min-h-[100px]"
          />
        </div>

        <div className="space-y-2">
          <Input
            id="address"
            name="address"
            label="Address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Street address"
            className="bg-stone-800 border-stone-700 text-stone-200"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Input
              id="city"
              name="city"
              label="City"
              value={formData.city}
              onChange={handleChange}
              placeholder="City"
              className="bg-stone-800 border-stone-700 text-stone-200"
            />
          </div>
          <div className="space-y-2">
            <Input
              id="state"
              name="state"
              label="State"
              value={formData.state}
              onChange={handleChange}
              placeholder="State"
              className="bg-stone-800 border-stone-700 text-stone-200"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Input
            id="zipCode"
            name="zipCode"
            label="ZIP Code"
            value={formData.zipCode}
            onChange={handleChange}
            placeholder="ZIP code"
            className="bg-stone-800 border-stone-700 text-stone-200"
          />
        </div>

        <Button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white"
        >
          Create Venue
        </Button>
      </form>
    </main>
  );
}
