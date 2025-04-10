"use client";

import { useState } from "react";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { Textarea } from "@/components/Textarea";
import { Select } from "@/components/Select";
import { sports } from "@/types";

export default function CreateVenue() {
  const [formData, setFormData] = useState({
    sport: "",
    name: "",
    address: "",
    cost: "",
    currency: "",
    description: "",
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
        <Select
          id="sport"
          name="sport"
          label="Sport"
          options={[
            { value: "", label: "Select" },
            ...sports.map((sport) => ({
              value: sport.sportId,
              label: sport.sportName,
            })),
          ]}
          value={formData.sport}
          onChange={(e) => setFormData({ ...formData, sport: e.target.value })}
        />

        <Input
          id="name"
          name="name"
          label="Where is the game happening?"
          value={formData.address}
          onChange={handleChange}
          placeholder="Venue address"
          className="bg-stone-800 border-stone-700 text-stone-200"
        />

        <div className="grid grid-cols-2 gap-4">
          <Input
            id="cost"
            name="cost"
            label="Cost to join"
            value={formData.cost}
            onChange={handleChange}
            placeholder="30"
            className="bg-stone-800 border-stone-700 text-stone-200"
          />

          <Input
            id="currency"
            name="currency"
            label="Currency"
            value={formData.currency}
            onChange={handleChange}
            placeholder="SEK"
            className="bg-stone-800 border-stone-700 text-stone-200"
          />
        </div>

        <Textarea
          id="description"
          name="description"
          label="More information about the game - (Optional)"
          value={formData.description}
          onChange={handleChange}
          placeholder="Describe your venue"
          className="bg-stone-800 border-stone-700 text-stone-200 min-h-[100px]"
        />

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
