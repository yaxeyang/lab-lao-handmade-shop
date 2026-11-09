import { useState } from "react";
import { categories } from "../data.js";

// ຮັບ prop onChange ເພື່ອສົ່ງຄ່າທີ່ເລືອກກັບໄປໃຫ້ Component ແມ່
function FilterBar({ onChange }) {
  const [value, setValue] = useState("all");
  const options = ["all", ...categories];

  const handleSelect = (c) => {
    setValue(c);
    // ກວດສອບວ່າຖ້າມີການສົ່ງ function onChange ມາ ໃຫ້ເອີ້ນໃຊ້ງານ
    if (onChange) {
      onChange(c);
    }
  };

  return (
    <div className="filter-row">
      {options.map((c) => (
        <button
          key={c}
          className={"filter-btn" + (value === c ? " active" : "")}
          onClick={() => handleSelect(c)}
        >
          {c === "all" ? "ທັງໝົດ" : c}
        </button>
      ))}
    </div>
  );
}

export default FilterBar;