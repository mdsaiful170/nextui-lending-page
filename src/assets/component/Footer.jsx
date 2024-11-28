import { ArrowRight } from "lucide-react";
import React from "react";

const footerData = [
  {
    img: "./logo-footer.svg",
    title: "Discover the power of our secure and rewarding credit cards",
  },
  {
    name: "About us",
    links: ["Investors", "Features", "Book a demo", "Security "],
  },
  {
    name: "Products",
    links: ["Credits Cards", "Gift Cards", "Savings accounts", "NFT "],
  },
  {
    name: " Useful Links",
    links: ["Free rewards", "Documentation", "Affiliate program"],
  },
  {
    name: "About us",
    links: ["Changelog", "License", "Site Maps", "News "],
  },
];

class Footer extends React.PureComponent {
  render() {
    return (
      <>
        <section className="bg-[#2928343D]/10  mt-28 pt-14  lg:pt-16 pb-20 lg:pb-32 px-10">
          <div className="grid grid-cols-2  md:grid-cols-3  lg:grid-cols-4 xl:grid-cols-6 gap-x-8 gap-y-10">
            {footerData?.length &&
              footerData.map(({ img, title, name, links }, i) => {
                return (
                  <div
                    className={` ${img ? "col-span-2" : "col-span-1"}`}
                    key={i}
                  >
                    {img && title && (
                      <>
                        <img
                          src={img}
                          className="max-w-full object-cover"
                          alt=""
                        />
                        <p className=" pt-4 max-w-xs text-base font-poppins text-[#ADB2B1]">
                          {title}
                        </p>
                      </>
                    )}
                    {name && links?.length && (
                      <>
                        <h3 className="text-lg font-bold text-white pb-4">
                          {name}
                        </h3>
                        <ul className="space-y-2">
                          {links?.map((link, i) => {
                            return (
                              <li
                                className=" group/box  text-base cursor-pointer flex  items-center gap-x-1 *:hover:text-purple-500 font-normal text-[#ADB2B1]"
                                key={i}
                              >
                                <ArrowRight
                                  size={16}
                                  className="text-[#ADB2B1]  "
                                />
                                <p className="group-hover/box:ps-2 duration-250 transition-all ease-linear">
                                  {link}
                                </p>
                              </li>
                            );
                          })}
                        </ul>
                      </>
                    )}
                  </div>
                );
              })}
          </div>
        </section>
      </>
    );
  }
}

export default Footer;
