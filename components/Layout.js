import React from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

const Layout = (props) => {
  const router = useRouter();

  return (
    <>
      <div>
        <Head>
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
          />
        </Head>
        <div className="container">
          <header className="d-flex justify-content-center py-3">
            <ul className="nav nav-pills">
              <li className="nav-item">
                <Link href="/frontend" legacyBehavior>
                  <a
                    className={
                      router.pathname === "/frontend"
                        ? "nav-link active"
                        : "nav-link"
                    }
                  >
                    Frontend
                  </a>
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link href="/backend" legacyBehavior>
                  <a
                    className={
                      router.pathname === "/backend"
                        ? "nav-link active"
                        : "nav-link"
                    }
                  >
                    Backend
                  </a>
                </Link>
              </li> */}
            </ul>
          </header>
        </div>

        <div className="album py-5 bg-light">
          <div className="container">{props.children}</div>
        </div>
      </div>
    </>
  );
};

export default Layout;
