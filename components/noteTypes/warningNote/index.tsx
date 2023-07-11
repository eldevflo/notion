import React from "react";

function WarningNote({ note }: { note: any }) {
  console.log(note);

  return (
    <>
    <div className="text-black p-3 border rounded m-2 flex items-center border-l-4 border-orange-500">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        className="mr-1"
      >
        <path
          d="M19.9912 2.00201C19.8599 2.00194 19.7298 2.02775 19.6084 2.07798C19.4871 2.12821 19.3768 2.20187 19.2839 2.29474C19.1911 2.38761 19.1174 2.49788 19.0672 2.61924C19.017 2.7406 18.9911 2.87067 18.9912 3.00201V3.63873C18.1478 4.68444 17.0819 5.52893 15.871 6.11073C14.66 6.69254 13.3346 6.99702 11.9912 7.00201H5.99121C5.19583 7.00288 4.43327 7.31923 3.87085 7.88165C3.30843 8.44407 2.99208 9.20663 2.99121 10.002V12.002C2.99208 12.7974 3.30843 13.56 3.87085 14.1224C4.43327 14.6848 5.19583 15.0011 5.99121 15.002H6.475L4.07227 20.6084C4.00698 20.7605 3.98047 20.9264 3.99512 21.0912C4.00978 21.256 4.06514 21.4147 4.15624 21.5528C4.24734 21.691 4.37133 21.8043 4.51706 21.8827C4.6628 21.9611 4.82572 22.0021 4.99121 22.002H8.99121C9.18696 22.0021 9.37843 21.9447 9.54182 21.8369C9.7052 21.7291 9.83329 21.5756 9.91016 21.3956L12.6339 15.04C13.8646 15.1304 15.0636 15.472 16.157 16.0439C17.2505 16.6158 18.215 17.4058 18.9912 18.3651V19.002C18.9912 19.2672 19.0966 19.5216 19.2841 19.7091C19.4716 19.8967 19.726 20.002 19.9912 20.002C20.2564 20.002 20.5108 19.8967 20.6983 19.7091C20.8859 19.5216 20.9912 19.2672 20.9912 19.002V3.00201C20.9913 2.87067 20.9655 2.7406 20.9152 2.61924C20.865 2.49788 20.7914 2.38761 20.6985 2.29474C20.6056 2.20186 20.4953 2.12821 20.374 2.07798C20.2526 2.02775 20.1226 2.00194 19.9912 2.00201ZM5.99121 13.002C5.72605 13.0018 5.4718 12.8964 5.2843 12.7089C5.0968 12.5214 4.99139 12.2672 4.99121 12.002V10.002C4.99139 9.73685 5.09681 9.4826 5.2843 9.29511C5.4718 9.10761 5.72605 9.00219 5.99121 9.00201H6.99121V13.002H5.99121ZM8.33203 20.002H6.50781L8.65039 15.002H10.4746L8.33203 20.002ZM18.9912 15.5238C17.0195 13.8994 14.5459 13.0083 11.9912 13.002H8.99121V9.00196H11.9912C14.5459 8.99543 17.0195 8.10412 18.9912 6.47962V15.5238Z"
          fill="#37352F"
        />
      </svg>
      {note.title}
    </div>
    <div className="text-black p-3  rounded m-2 flex items-center bg-orange-100  text-orange-700">
      {note.message}
    </div>
    
    
    </>
  );
}

export default WarningNote;
