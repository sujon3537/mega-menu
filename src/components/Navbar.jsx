import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { FaAngleDown, FaAngleRight, FaAngleUp } from "react-icons/fa";
import { RiMenu2Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  let [showMenu, setShowMenu] = useState(false);
  let [showCategory, setShowCategory] = useState(false);

  let handleMenu = () => {
    setShowMenu(!showMenu);
  };

  let handleShowCategory = () => {
    setShowCategory(!showCategory);
  };

  let menuItem = [
    {
      id: 1,
      name: "Electrical Items",
      submenu: [
        {
          id: 1,
          name: "one",
          submenu: [
            {
              id: 1,
              name: "Fan",
            },
            {
              id: 2,
              name: "Light",
            },
            {
              id: 3,
              name: "Bulb",
            },
            {
              id: 4,
              name: "Blade",
            },
          ],
        },
        {
          id: 2,
          name: "two",
        },
        {
          id: 3,
          name: "three",
        },
        {
          id: 4,
          name: "four",
          submenu: [
            {
              id: 1,
              name: "Fridge",
            },
            {
              id: 2,
              name: "Oven",
            },
            {
              id: 3,
              name: "Induction",
            },
          ],
        },
        {
          id: 5,
          name: "five",
        },
      ],
    },
    {
      id: 2,
      name: "Agricultural Product",
      submenu: [
        {
          id: 6,
          name: "six",
        },
        {
          id: 7,
          name: "seven",
          submenu: [
            {
              id: 1,
              name: "Seed",
            },
            {
              id: 2,
              name: "Machine",
            },
            {
              id: 3,
              name: "Tree",
            },
            {
              id: 4,
              name: "Medicine",
            },
          ],
        },
        {
          id: 8,
          name: "eight",
        },
        {
          id: 9,
          name: "nine",
        },
        {
          id: 10,
          name: "ten",
          submenu: [
            {
              id: 1,
              name: "Cravi",
            },
            {
              id: 2,
              name: "Levi",
            },
            {
              id: 3,
              name: "Xevil",
            },
            {
              id: 4,
              name: "Deviler",
            },
          ],
        },
      ],
    },
    {
      id: 3,
      name: "Leather Products",
      submenu: [
        {
          id: 11,
          name: "eleven",
          submenu: [
            {
              id: 1,
              name: "Shoe",
            },
            {
              id: 2,
              name: "Bag",
            },
            {
              id: 3,
              name: "Parse",
            },
          ],
        },
        {
          id: 12,
          name: "twelve",
        },
        {
          id: 13,
          name: "thirteen",
        },
        {
          id: 14,
          name: "fourteen",
        },
        {
          id: 15,
          name: "fifteen",
        },
      ],
    },
    {
      id: 4,
      name: "Gadget Item",
    },
    {
      id: 5,
      name: "Wear and Dresses",
    },
    {
      id: 6,
      name: "Cake and Pastry",
    },
    {
      id: 7,
      name: "Electronics Products",
      submenu: [
        {
          id: 1,
          name: "son electronics",
          submenu: [
            {
              id: 1,
              name: "grand electronics",
            },
          ],
        },
      ],
    },
  ];
  return (
    <div className="bg-blue-500 h-12 flex items-center">
      <div className="container mx-auto flex justify-between md:justify-normal items-center md:gap-x-6 relative">
        <div className="bg-blue-950 min-w-64 px-3 py-2 flex gap-x-2 justify-between items-center relative">
          <h2 className="font-medium text-2xl text-white">
            <IoMenu className="text-white text-2xl inline-block mr-2" />
            Categories
          </h2>
          {showCategory ? (
            <FaAngleUp
              className="text-white text-2xl md:hidden"
              onClick={handleShowCategory}
            />
          ) : (
            <FaAngleDown
              className="text-white text-2xl md"
              onClick={handleShowCategory}
            />
          )}
          <ul
            className={`${
              !showCategory && "hidden"
            } md:block absolute top-full left-0 bg-blue-100 w-64 divide-y divide-blue-200`}
          >
            {menuItem.map((item) => (
              <li
                key={item.id}
                className="text-semibold capitalize px-3 py-1 my-2 group/item"
              >
                <a href="#" className="flex justify-between items-center">
                  {item.name}
                  {item.submenu && <FaAngleRight className="text-xl" />}
                </a>
                <ul
                  className={`md:absolute md:top-0 md:left-full bg-blue-100 ${
                    item.submenu ? "w-64" : "w-0"
                  } md:min-h-80 divide-y divide-blue-200 drop-shadow hidden group-hover/item:block`}
                >
                  {item.submenu &&
                    item.submenu.map((subItem) => (
                      <li
                        key={subItem.id}
                        className="text-semibold capitalize px-3 py-1 my-2 group/subItem"
                      >
                        <a
                          href="#"
                          className="flex justify-between items-center"
                        >
                          {subItem.name}
                          {subItem.submenu && (
                            <FaAngleRight className="text-xl" />
                          )}
                        </a>
                        <ul
                          className={`md:absolute md:top-0 md:left-full bg-blue-100 ${
                            subItem.submenu ? "w-80" : "w-0"
                          } md:min-h-80 divide-y divide-blue-200 drop-shadow hidden group-hover/subItem:block`}
                        >
                          {subItem.submenu &&
                            subItem.submenu.map((grandSubItem) => (
                              <li
                                key={grandSubItem.id}
                                className="text-semibold capitalize px-3 py-1 my-2"
                              >
                                <a href="#">{grandSubItem.name}</a>
                              </li>
                            ))}
                        </ul>
                      </li>
                    ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
        {showMenu ? (
          <RxCross2
            onClick={handleMenu}
            className="md:hidden text-white text-2xl"
          />
        ) : (
          <RiMenu2Fill
            onClick={handleMenu}
            className="md:hidden text-white text-2xl"
          />
        )}
        <ul
          className={`absolute md:static top-full left-1/3 ${
            !showMenu && "hidden"
          } md:flex md:gap-x-4 font-medium text-2xl text-black md:text-white capitalize bg-blue-100 md:bg-transparent w-full divide-y md:divide-none divide-blue-200`}
        >
          <li className="px-3 py-1 md:p-0">
            <a href="#" className="block">
              home
            </a>
          </li>
          <li className="px-3 py-1 md:p-0">
            <a href="#" className="block">
              about us
            </a>
          </li>
          <li className="px-3 py-1 md:p-0">
            <a href="#" className="block">
              contact
            </a>
          </li>
          <li className="px-3 py-1 md:p-0">
            <a href="#" className="block">
              blog
            </a>
          </li>
          <li className="px-3 py-1 md:p-0">
            <a href="#" className="block">
              collection
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
