import React from "react";

function ListNote({
  items,
  style,
}: {
  items: string[];
  style: "ordered" | "unordered";
}) {
  return (
    <div>
      <div className="text-black p-3">
        {style === "unordered" ? (
          <ul>
            {items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        ) : (
          <ol>
            {items.map((item, i) => (
              <li key={i}>
                {i + 1}- {item}
              </li>
            ))}
          </ol>
        )}
      </div>
    </div>
  );
}

export default ListNote;
