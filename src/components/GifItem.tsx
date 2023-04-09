import React from "react";

interface Prop {
  id: string;
  title: string;
  url: string;
}
export const GifItem = ({ title, url }: Prop) => {
  return (
    <div className="card">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
};
