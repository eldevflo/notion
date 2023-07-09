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
              <li key={i}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="5"
                  height="5"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="inline mr-3"
                >
                  <circle cx="8" cy="8" r="8" fill="#111111" />
                </svg>
                {item}
              </li>
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
