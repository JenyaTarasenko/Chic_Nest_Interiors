// src/components/ProjectForm.jsx
import React, { useState } from "react";
// npm install axios
import axios from "axios"; 

const ProjectForm = () => {
  const [formData, setFormData] = useState({
    space_type: "",
    size: "",
    rooms: [],
    project_type: "",
    project_stage: "",
    preferred_style: "",
    favorite_colors: "",
    disliked_colors: "",
    atmosphere: "",
    budget: "",
    timeline: "",
    involvement: "",
    hear_about: "",
    hear_about_other: "",
    full_name: "",
    contact_method: "",
    phone: "",
    city: "",
    additional_info: "",
  });

  const [file, setFile] = useState(null);

  // Обработка текстовых полей и radio
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      // Для rooms (множественный выбор)
      let newRooms = [...formData.rooms];
      if (checked) {
        newRooms.push(value);
      } else {
        newRooms = newRooms.filter((room) => room !== value);
      }
      setFormData({ ...formData, rooms: newRooms });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      if (key === "rooms") {
        data.append(key, JSON.stringify(formData[key])); // сохраняем как JSON
      } else {
        data.append(key, formData[key]);
      }
    });
    if (file) data.append("inspiration", file);

    try {
      await axios.post("http://localhost:8001/api/project-inquiry/", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Form submitted successfully!");
      setFormData({
        space_type: "",
        size: "",
        rooms: [],
        project_type: "",
        project_stage: "",
        preferred_style: "",
        favorite_colors: "",
        disliked_colors: "",
        atmosphere: "",
        budget: "",
        timeline: "",
        involvement: "",
        hear_about: "",
        hear_about_other: "",
        full_name: "",
        contact_method: "",
        phone: "",
        city: "",
        additional_info: "",
      });
      setFile(null);
    } catch (err) {
      console.error(err);
      alert("Error submitting form");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{display:"flex",flexDirection:"column"}}>
      <h3>About Your Project</h3>

      <label>Type of space:</label>
      {["house", "apartment", "townhome", "office"].map((type) => (
        <label key={type}>
          <input
            type="radio"
            name="space_type"
            value={type}
            checked={formData.space_type === type}
            onChange={handleChange}
            required
          />
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </label>
      ))}

      <label>Approximate size:</label>
      <input
        type="text"
        name="size"
        value={formData.size}
        onChange={handleChange}
        required
      />

      <label>Which rooms:</label>
      {["kitchen", "living_room", "bathroom", "bedroom", "entryway", "other"].map(
        (room) => (
          <label key={room}>
            <input
              type="checkbox"
              name="rooms"
              value={room}
              checked={formData.rooms.includes(room)}
              onChange={handleChange}
            />
            {room.replace("_", " ").charAt(0).toUpperCase() +
              room.replace("_", " ").slice(1)}
          </label>
        )
      )}

      <label>Project type:</label>
      {["new_build", "renovation", "decoration"].map((type) => (
        <label key={type}>
          <input
            type="radio"
            name="project_type"
            value={type}
            checked={formData.project_type === type}
            onChange={handleChange}
            required
          />
          {type.replace("_", " ").charAt(0).toUpperCase() +
            type.replace("_", " ").slice(1)}
        </label>
      ))}

      <label>Project stage:</label>
      {[
        "planning",
        "floor_plan",
        "construction",
        "almost_finished",
      ].map((stage) => (
        <label key={stage}>
          <input
            type="radio"
            name="project_stage"
            value={stage}
            checked={formData.project_stage === stage}
            onChange={handleChange}
            required
          />
          {stage.replace("_", " ").charAt(0).toUpperCase() +
            stage.replace("_", " ").slice(1)}
        </label>
      ))}

      <h3>Your Style & Preferences</h3>

      <label>Preferred style:</label>
      <input
        type="text"
        name="preferred_style"
        value={formData.preferred_style}
        onChange={handleChange}
        required
      />

      <label>Favorite colors/materials:</label>
      <input
        type="text"
        name="favorite_colors"
        value={formData.favorite_colors}
        onChange={handleChange}
      />

      <label>Disliked colors/styles:</label>
      <input
        type="text"
        name="disliked_colors"
        value={formData.disliked_colors}
        onChange={handleChange}
      />

      <label>Atmosphere:</label>
      <input
        type="text"
        name="atmosphere"
        value={formData.atmosphere}
        onChange={handleChange}
      />

      <label>Inspiration file:</label>
      <input type="file" name="inspiration" onChange={handleFileChange} />

      <h3>Budget & Timeline</h3>

      <label>Budget:</label>
      {["under_15k", "15_30k", "30_60k", "60k_plus", "not_sure"].map((b) => (
        <label key={b}>
          <input
            type="radio"
            name="budget"
            value={b}
            checked={formData.budget === b}
            onChange={handleChange}
            required
          />
          {b.replace("_", " ").toUpperCase()}
        </label>
      ))}

      <label>Timeline:</label>
      {["1_2_months", "3_6_months", "flexible"].map((t) => (
        <label key={t}>
          <input
            type="radio"
            name="timeline"
            value={t}
            checked={formData.timeline === t}
            onChange={handleChange}
            required
          />
          {t.replace("_", " ").toUpperCase()}
        </label>
      ))}

      <label>Level of involvement:</label>
      {["full_service", "collaboration", "e_design"].map((i) => (
        <label key={i}>
          <input
            type="radio"
            name="involvement"
            value={i}
            checked={formData.involvement === i}
            onChange={handleChange}
            required
          />
          {i.replace("_", " ").charAt(0).toUpperCase() +
            i.replace("_", " ").slice(1)}
        </label>
      ))}

      <h3>About You</h3>

      <label>How did you hear about us?</label>
      {["instagram", "google", "friend", "other"].map((h) => (
        <label key={h}>
          <input
            type="radio"
            name="hear_about"
            value={h}
            checked={formData.hear_about === h}
            onChange={handleChange}
            required
          />
          {h.charAt(0).toUpperCase() + h.slice(1)}
        </label>
      ))}

      {formData.hear_about === "other" && (
        <input
          type="text"
          name="hear_about_other"
          placeholder="Other source"
          value={formData.hear_about_other}
          onChange={handleChange}
        />
      )}

      <label>Full Name:</label>
      <input
        type="text"
        name="full_name"
        value={formData.full_name}
        onChange={handleChange}
        required
      />

      <label>Preferred Contact Method:</label>
      {["call", "text", "email"].map((m) => (
        <label key={m}>
          <input
            type="radio"
            name="contact_method"
            value={m}
            checked={formData.contact_method === m}
            onChange={handleChange}
            required
          />
          {m.charAt(0).toUpperCase() + m.slice(1)}
        </label>
      ))}

      <label>Phone (optional):</label>
      <input
        type="text"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
      />

      <label>City / Location:</label>
      <input
        type="text"
        name="city"
        value={formData.city}
        onChange={handleChange}
        required
      />

      <label>Anything else:</label>
      <textarea
        name="additional_info"
        value={formData.additional_info}
        onChange={handleChange}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default ProjectForm;
