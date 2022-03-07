import type { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

const Nav: NextPage = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // useEffect(() => {
  //   switch (router.pathname) {
  //     case "/":
  //       break;
  //     case "/food":
  //       break;
  //     case "/counter":
  //       break;
  //     case "/netflix":
  //       break;
  //     case "/spotify":
  //       break;

  //     default:
  //       break;
  //   }
  // }, [router.pathname]);

  const navCurrent =
    "inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none";
  const navNotCurrent =
    "font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400";
  const dropdownCurrent =
    "inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none";
  const dropdownNotCurrent =
    "font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400";

  return (
    <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="relative flex items-center justify-between">
        <Link href="/">
          <a
            aria-label="Next.js Practice"
            title="Next.js Practice"
            className="inline-flex items-center"
          >
            <svg
              className="w-8 text-deep-purple-accent-400"
              viewBox="0 0 24 24"
              strokeLinejoin="round"
              strokeWidth="2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              stroke="currentColor"
              fill="none"
            >
              <rect x="3" y="1" width="7" height="12" />
              <rect x="3" y="17" width="7" height="6" />
              <rect x="14" y="1" width="7" height="6" />
              <rect x="14" y="11" width="7" height="12" />
            </svg>
            <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
              Next.js Practice
            </span>
          </a>
        </Link>
        {/* <ul className="flex items-center hidden space-x-8 lg:flex"> */}
        <ul className="items-center hidden space-x-8 lg:flex">
          <li>
            <Link href="/food">
              <a
                aria-label="Food Cards"
                title="Food Cards"
                className={
                  router.pathname === "/food" ? navCurrent : navNotCurrent
                }
              >
                Food Cards
              </a>
            </Link>
          </li>
          <li>
            <Link href="/counter">
              <a
                aria-label="Counter App"
                title="Counter App"
                className={
                  router.pathname === "/counter" ? navCurrent : navNotCurrent
                }
              >
                Counter App
              </a>
            </Link>
          </li>
          <li>
            <Link href="/netflix">
              <a
                aria-label="Netflix Clone"
                title="Netflix Clone"
                className={
                  router.pathname === "/netflix" ? navCurrent : navNotCurrent
                }
              >
                Netflix Clone
              </a>
            </Link>
          </li>
          <li>
            <Link href="/spotify">
              <a
                aria-label="Spotify Clone"
                title="Spotify Clone"
                className={
                  router.pathname === "/spotify" ? navCurrent : navNotCurrent
                }
              >
                Spotify Clone
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a
                className={router.pathname === "/" ? navCurrent : navNotCurrent}
                aria-label="Landing Page"
                title="Landing Page"
              >
                Landing Page
              </a>
            </Link>
          </li>
        </ul>
        <div className="lg:hidden z-50">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full">
              <div className="p-5 bg-white border rounded shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Link href="/">
                      <a
                        aria-label="Next.js Practice"
                        title="Next.js Practice"
                        className="inline-flex items-center"
                      >
                        <svg
                          className="w-8 text-deep-purple-accent-400"
                          viewBox="0 0 24 24"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeMiterlimit="10"
                          stroke="currentColor"
                          fill="none"
                        >
                          <rect x="3" y="1" width="7" height="12" />
                          <rect x="3" y="17" width="7" height="6" />
                          <rect x="14" y="1" width="7" height="6" />
                          <rect x="14" y="11" width="7" height="12" />
                        </svg>
                        <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                          Next.js Practice
                        </span>
                      </a>
                    </Link>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className="space-y-4">
                    <li>
                      <Link href="/food">
                        <a
                          aria-label="Food Cards"
                          title="Food Cards"
                          className={
                            router.pathname === "/food"
                              ? dropdownCurrent
                              : dropdownNotCurrent
                          }
                        >
                          Food Cards
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/counter">
                        <a
                          aria-label="Counter App"
                          title="Counter App"
                          className={
                            router.pathname === "/counter"
                              ? dropdownCurrent
                              : dropdownNotCurrent
                          }
                        >
                          Counter App
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/netflix">
                        <a
                          aria-label="Netflix Clone"
                          title="Netflix Clone"
                          className={
                            router.pathname === "/netflix"
                              ? dropdownCurrent
                              : dropdownNotCurrent
                          }
                        >
                          Netflix Clone
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/spotify">
                        <a
                          aria-label="Spotify Clone"
                          title="Spotify Clone"
                          className={
                            router.pathname === "/spotify"
                              ? dropdownCurrent
                              : dropdownNotCurrent
                          }
                        >
                          Spotify Clone
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a
                          className={
                            router.pathname === "/"
                              ? dropdownCurrent
                              : dropdownNotCurrent
                          }
                          aria-label="Landing Page"
                          title="Landing Page"
                        >
                          Landing Page
                        </a>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
