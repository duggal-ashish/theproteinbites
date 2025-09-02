import React from "react";

const categories = [
  { id: 1, name: "Boiled Chicken", img: "https://littlesunnykitchen.com/wp-content/uploads/2021/10/How-to-Boil-Chicken-Breast-1.jpg" },
  { id: 2, name: "Eggs", img: "https://www.tasteofhome.com/wp-content/uploads/2025/01/Pressure-Cooker-Hard-Boiled-Eggs_EXPS_TOHD24_258639_ChristineMa_3.jpg" },
  { id: 3, name: "Shakes", img: "https://static.toiimg.com/thumb/msid-113025116,width-1280,height-720,resizemode-4/113025116.jpg" },
  { id: 4, name: "Protein Shakes", img: "https://fitfoodiefinds.com/wp-content/uploads/2020/01/sq.jpg" },
  { id: 5, name: "Smoodies", img: "https://www.wearesovegan.com/wp-content/uploads/2019/06/veganpeaproteinsmoothies.jpg" },
  { id: 6, name: "Protein Salads", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzPJAj7ECJMY7tOdlHuODWSMYwNfTodW3xhw&s" },
  { id: 7, name: "Chicken Toast", img: "https://www.eatingwell.com/thmb/lWAiwknQ9yapq6UuXAYrUdrcKbk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Rotisserie-Chicken-Sandwich-202-2000-485b673fe411460e95b512fbf805a5d9.jpg" },
  { id: 8, name: "Fresh Jucies", img: "https://live.staticflickr.com/8179/29256887321_51b21baab4_b.jpg" },
];

const Categories = () => {
  return (
    <div className="bg-gradient-to-br from-[#fffbe6] via-[#eafff1] to-[#7FB45A]/20">
    <div className="container mx-auto px-4 py-10 ">
      <h2 className="text-2xl font-bold text-center mb-8">Our Special Categories</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="flex flex-col items-center text-center cursor-pointer hover:scale-105 transition-transform duration-200"
          >
            <img
              src={cat.img}
              alt={cat.name}
              className="w-28 h-28 object-cover rounded-xl shadow-md"
            />
            <p className="mt-2 font-medium">{cat.name}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Categories;
