import React, { useEffect, useState } from "react";
import "../../assets/css/section.css";
import Modal from "../../components/Modal"

// reactstrap components
import AOS from "aos";
import "aos/dist/aos.css";

// core components

function SectionNavigation() {

  return (
    <>
      <div
        id="section-service"
        style={{ backgroundColor: "#F0F3FF" }}
        className=""
      >

        {/* samsul modal start */}
        <div className="modal fade" id="staticBackdropSamsul" data-backdrop="static" data-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                {/* <h5 className="modal-title" id="staticBackdropLabel">

                </h5> */}
                <img src={require("../../assets/img/mardianto.png")} style={{ width: "80px" }}></img>
                <br />
                <span className="profile-modal-name">Samsul Hadi & Team</span>
                <br />
                <span className="profile-modal-jabatan">Komisaris Utama</span>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?

                But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?
              </div>
              <div className="modal-footer">
                <div className="socmed-modal">
                  <svg width="28" height="28" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="24" cy="24" r="24" fill="#E0E0E0" />
                    <path d="M35.82 16.08C35.24 16.24 34.78 16.22 34.78 16.22L34.8 16.11C35.34 15.68 36.71 14.35 36.89 13.72C36.97 13.45 36.88 13.36 36.88 13.35L35.14 14.09L33.68 14.75C32.67 13.68 31.15 13 29.44 13C26.41 13 23.95 15.15 23.95 17.8C23.95 18.28 24.02 19.17 24.17 19.61C24.17 19.75 24.18 19.47 24.17 19.61C22.22 19.56 19.71 18.76 17.48 17.63C13.08 15.4 12.81 13.86 12.81 13.86C12.12 14.59 11.76 17.02 12.46 18.93C12.91 20.15 14.45 21.24 14.45 21.24C14.45 21.24 13.76 21.25 13.04 21.01C12.32 20.77 12.05 20.52 12.05 20.52C11.62 21.57 12.48 23.44 13.97 24.78C14.84 25.56 16.42 26.05 16.42 26.05L13.94 26.12C13.8 28.53 18.99 29.96 18.99 29.96C17.47 31.13 15.71 31.84 13.82 31.84C12.84 31.84 11.89 31.69 11 31.43C13.5 33.49 16.71 34.91 20.2 34.72C29.46 34.23 34.68 26.28 34.93 18.46L34.94 18.48C34.94 18.48 35.37 18.26 36.3 17.34C37.23 16.41 37.8 15.33 37.8 15.33C37.8 15.33 36.4 15.92 35.82 16.08Z" fill="#3A2D80" />
                    <path d="M36.87 13.35C36.87 13.36 36.88 13.5 36.87 13.35V13.35Z" fill="#3A2D80" />
                  </svg>
                  <svg width="28" height="28" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="24" cy="24" r="24" fill="#E0E0E0" />
                    <path d="M26.86 40.25V25.54H31.8L32.54 19.81H26.86V16.15C26.86 14.49 27.32 13.36 29.7 13.36H32.74V8.23001C32.21 8.16001 30.41 8 28.32 8C23.94 8 20.95 10.67 20.95 15.58V19.81H16V25.54H20.95V40.25H26.86Z" fill="#3A2D80" />
                  </svg>
                  <svg width="28" height="28" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="24" cy="24" r="24" fill="#E0E0E0" />
                    <path d="M30.02 39.39H17.82C12.4 39.39 8 34.98 8 29.57V18.82C8 13.4 12.41 9 17.82 9H30.02C35.43 9 39.84 13.41 39.84 18.82V29.57C39.84 34.98 35.43 39.39 30.02 39.39ZM17.81 11.17C13.6 11.17 10.17 14.6 10.17 18.81V29.56C10.17 33.77 13.6 37.2 17.81 37.2H30.01C34.22 37.2 37.65 33.77 37.65 29.56V18.81C37.65 14.6 34.22 11.17 30.01 11.17H17.81Z" fill="#3A2D80" />
                    <path d="M23.91 32.9302C19.09 32.9302 15.17 29.0102 15.17 24.1902C15.17 19.3702 19.09 15.4502 23.91 15.4502C28.73 15.4502 32.65 19.3702 32.65 24.1902C32.66 29.0102 28.74 32.9302 23.91 32.9302ZM23.91 17.6302C20.29 17.6302 17.35 20.5702 17.35 24.1902C17.35 27.8102 20.29 30.7502 23.91 30.7502C27.53 30.7502 30.47 27.8102 30.47 24.1902C30.47 20.5702 27.53 17.6302 23.91 17.6302Z" fill="#3A2D80" />
                    <path d="M34.34 15.7198C34.34 16.7198 33.53 17.5298 32.53 17.5298C31.53 17.5298 30.72 16.7198 30.72 15.7198C30.72 14.7198 31.53 13.9098 32.53 13.9098C33.53 13.8998 34.34 14.7098 34.34 15.7198Z" fill="#3A2D80" />
                  </svg>
                </div>




                {/* <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button> */}
                {/* <button type="button" className="btn btn-primary">Understood</button> */}
              </div>
            </div>
          </div>
        </div>
        {/* samsul modal end */}

        {/* mardianto modal start */}
        <div className="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                {/* <h5 className="modal-title" id="staticBackdropLabel">

                </h5> */}
                <img src={require("../../assets/img/mardianto.png")} style={{ width: "80px" }}></img>
                <br />
                <span className="profile-modal-name">Mardianto</span>
                <br />
                <span className="profile-modal-jabatan">Direktur Utama</span>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?

                But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?
              </div>
              <div className="modal-footer">
                <div className="socmed-modal">
                  <svg width="28" height="28" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="24" cy="24" r="24" fill="#E0E0E0" />
                    <path d="M35.82 16.08C35.24 16.24 34.78 16.22 34.78 16.22L34.8 16.11C35.34 15.68 36.71 14.35 36.89 13.72C36.97 13.45 36.88 13.36 36.88 13.35L35.14 14.09L33.68 14.75C32.67 13.68 31.15 13 29.44 13C26.41 13 23.95 15.15 23.95 17.8C23.95 18.28 24.02 19.17 24.17 19.61C24.17 19.75 24.18 19.47 24.17 19.61C22.22 19.56 19.71 18.76 17.48 17.63C13.08 15.4 12.81 13.86 12.81 13.86C12.12 14.59 11.76 17.02 12.46 18.93C12.91 20.15 14.45 21.24 14.45 21.24C14.45 21.24 13.76 21.25 13.04 21.01C12.32 20.77 12.05 20.52 12.05 20.52C11.62 21.57 12.48 23.44 13.97 24.78C14.84 25.56 16.42 26.05 16.42 26.05L13.94 26.12C13.8 28.53 18.99 29.96 18.99 29.96C17.47 31.13 15.71 31.84 13.82 31.84C12.84 31.84 11.89 31.69 11 31.43C13.5 33.49 16.71 34.91 20.2 34.72C29.46 34.23 34.68 26.28 34.93 18.46L34.94 18.48C34.94 18.48 35.37 18.26 36.3 17.34C37.23 16.41 37.8 15.33 37.8 15.33C37.8 15.33 36.4 15.92 35.82 16.08Z" fill="#3A2D80" />
                    <path d="M36.87 13.35C36.87 13.36 36.88 13.5 36.87 13.35V13.35Z" fill="#3A2D80" />
                  </svg>
                  <svg width="28" height="28" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="24" cy="24" r="24" fill="#E0E0E0" />
                    <path d="M26.86 40.25V25.54H31.8L32.54 19.81H26.86V16.15C26.86 14.49 27.32 13.36 29.7 13.36H32.74V8.23001C32.21 8.16001 30.41 8 28.32 8C23.94 8 20.95 10.67 20.95 15.58V19.81H16V25.54H20.95V40.25H26.86Z" fill="#3A2D80" />
                  </svg>
                  <svg width="28" height="28" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="24" cy="24" r="24" fill="#E0E0E0" />
                    <path d="M30.02 39.39H17.82C12.4 39.39 8 34.98 8 29.57V18.82C8 13.4 12.41 9 17.82 9H30.02C35.43 9 39.84 13.41 39.84 18.82V29.57C39.84 34.98 35.43 39.39 30.02 39.39ZM17.81 11.17C13.6 11.17 10.17 14.6 10.17 18.81V29.56C10.17 33.77 13.6 37.2 17.81 37.2H30.01C34.22 37.2 37.65 33.77 37.65 29.56V18.81C37.65 14.6 34.22 11.17 30.01 11.17H17.81Z" fill="#3A2D80" />
                    <path d="M23.91 32.9302C19.09 32.9302 15.17 29.0102 15.17 24.1902C15.17 19.3702 19.09 15.4502 23.91 15.4502C28.73 15.4502 32.65 19.3702 32.65 24.1902C32.66 29.0102 28.74 32.9302 23.91 32.9302ZM23.91 17.6302C20.29 17.6302 17.35 20.5702 17.35 24.1902C17.35 27.8102 20.29 30.7502 23.91 30.7502C27.53 30.7502 30.47 27.8102 30.47 24.1902C30.47 20.5702 27.53 17.6302 23.91 17.6302Z" fill="#3A2D80" />
                    <path d="M34.34 15.7198C34.34 16.7198 33.53 17.5298 32.53 17.5298C31.53 17.5298 30.72 16.7198 30.72 15.7198C30.72 14.7198 31.53 13.9098 32.53 13.9098C33.53 13.8998 34.34 14.7098 34.34 15.7198Z" fill="#3A2D80" />
                  </svg>
                </div>




                {/* <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button> */}
                {/* <button type="button" className="btn btn-primary">Understood</button> */}
              </div>
            </div>
          </div>
        </div>
        {/* mardianto modal end */}

        {/* riza modal start */}
        <div className="modal fade" id="staticBackdropRiza" data-backdrop="static" data-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                {/* <h5 className="modal-title" id="staticBackdropLabel">

                </h5> */}
                <img src={require("../../assets/img/bambang.png")} style={{ width: "80px" }}></img>
                <br />
                <span className="profile-modal-name">M. Riza Patria</span>
                <br />
                <span className="profile-modal-jabatan">Komisaris Independen</span>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?

                But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?
              </div>
              <div className="modal-footer">
                <div className="socmed-modal">
                  <svg width="28" height="28" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="24" cy="24" r="24" fill="#E0E0E0" />
                    <path d="M35.82 16.08C35.24 16.24 34.78 16.22 34.78 16.22L34.8 16.11C35.34 15.68 36.71 14.35 36.89 13.72C36.97 13.45 36.88 13.36 36.88 13.35L35.14 14.09L33.68 14.75C32.67 13.68 31.15 13 29.44 13C26.41 13 23.95 15.15 23.95 17.8C23.95 18.28 24.02 19.17 24.17 19.61C24.17 19.75 24.18 19.47 24.17 19.61C22.22 19.56 19.71 18.76 17.48 17.63C13.08 15.4 12.81 13.86 12.81 13.86C12.12 14.59 11.76 17.02 12.46 18.93C12.91 20.15 14.45 21.24 14.45 21.24C14.45 21.24 13.76 21.25 13.04 21.01C12.32 20.77 12.05 20.52 12.05 20.52C11.62 21.57 12.48 23.44 13.97 24.78C14.84 25.56 16.42 26.05 16.42 26.05L13.94 26.12C13.8 28.53 18.99 29.96 18.99 29.96C17.47 31.13 15.71 31.84 13.82 31.84C12.84 31.84 11.89 31.69 11 31.43C13.5 33.49 16.71 34.91 20.2 34.72C29.46 34.23 34.68 26.28 34.93 18.46L34.94 18.48C34.94 18.48 35.37 18.26 36.3 17.34C37.23 16.41 37.8 15.33 37.8 15.33C37.8 15.33 36.4 15.92 35.82 16.08Z" fill="#3A2D80" />
                    <path d="M36.87 13.35C36.87 13.36 36.88 13.5 36.87 13.35V13.35Z" fill="#3A2D80" />
                  </svg>
                  <svg width="28" height="28" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="24" cy="24" r="24" fill="#E0E0E0" />
                    <path d="M26.86 40.25V25.54H31.8L32.54 19.81H26.86V16.15C26.86 14.49 27.32 13.36 29.7 13.36H32.74V8.23001C32.21 8.16001 30.41 8 28.32 8C23.94 8 20.95 10.67 20.95 15.58V19.81H16V25.54H20.95V40.25H26.86Z" fill="#3A2D80" />
                  </svg>
                  <svg width="28" height="28" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="24" cy="24" r="24" fill="#E0E0E0" />
                    <path d="M30.02 39.39H17.82C12.4 39.39 8 34.98 8 29.57V18.82C8 13.4 12.41 9 17.82 9H30.02C35.43 9 39.84 13.41 39.84 18.82V29.57C39.84 34.98 35.43 39.39 30.02 39.39ZM17.81 11.17C13.6 11.17 10.17 14.6 10.17 18.81V29.56C10.17 33.77 13.6 37.2 17.81 37.2H30.01C34.22 37.2 37.65 33.77 37.65 29.56V18.81C37.65 14.6 34.22 11.17 30.01 11.17H17.81Z" fill="#3A2D80" />
                    <path d="M23.91 32.9302C19.09 32.9302 15.17 29.0102 15.17 24.1902C15.17 19.3702 19.09 15.4502 23.91 15.4502C28.73 15.4502 32.65 19.3702 32.65 24.1902C32.66 29.0102 28.74 32.9302 23.91 32.9302ZM23.91 17.6302C20.29 17.6302 17.35 20.5702 17.35 24.1902C17.35 27.8102 20.29 30.7502 23.91 30.7502C27.53 30.7502 30.47 27.8102 30.47 24.1902C30.47 20.5702 27.53 17.6302 23.91 17.6302Z" fill="#3A2D80" />
                    <path d="M34.34 15.7198C34.34 16.7198 33.53 17.5298 32.53 17.5298C31.53 17.5298 30.72 16.7198 30.72 15.7198C30.72 14.7198 31.53 13.9098 32.53 13.9098C33.53 13.8998 34.34 14.7098 34.34 15.7198Z" fill="#3A2D80" />
                  </svg>
                </div>




                {/* <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button> */}
                {/* <button type="button" className="btn btn-primary">Understood</button> */}
              </div>
            </div>
          </div>
        </div>
        {/* riza modal end */}

        {/* utomo modal start */}
        <div className="modal fade" id="staticBackdropUtomo" data-backdrop="static" data-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <img src={require("../../assets/img/carman.png")} style={{ width: "80px" }}></img>
                <br />
                <span className="profile-modal-name">Utomo</span>
                <br />
                <span className="profile-modal-jabatan">Supply Chain Director</span>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?

                But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?
              </div>
              <div className="modal-footer">
                <div className="socmed-modal">
                  <svg width="28" height="28" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="24" cy="24" r="24" fill="#E0E0E0" />
                    <path d="M35.82 16.08C35.24 16.24 34.78 16.22 34.78 16.22L34.8 16.11C35.34 15.68 36.71 14.35 36.89 13.72C36.97 13.45 36.88 13.36 36.88 13.35L35.14 14.09L33.68 14.75C32.67 13.68 31.15 13 29.44 13C26.41 13 23.95 15.15 23.95 17.8C23.95 18.28 24.02 19.17 24.17 19.61C24.17 19.75 24.18 19.47 24.17 19.61C22.22 19.56 19.71 18.76 17.48 17.63C13.08 15.4 12.81 13.86 12.81 13.86C12.12 14.59 11.76 17.02 12.46 18.93C12.91 20.15 14.45 21.24 14.45 21.24C14.45 21.24 13.76 21.25 13.04 21.01C12.32 20.77 12.05 20.52 12.05 20.52C11.62 21.57 12.48 23.44 13.97 24.78C14.84 25.56 16.42 26.05 16.42 26.05L13.94 26.12C13.8 28.53 18.99 29.96 18.99 29.96C17.47 31.13 15.71 31.84 13.82 31.84C12.84 31.84 11.89 31.69 11 31.43C13.5 33.49 16.71 34.91 20.2 34.72C29.46 34.23 34.68 26.28 34.93 18.46L34.94 18.48C34.94 18.48 35.37 18.26 36.3 17.34C37.23 16.41 37.8 15.33 37.8 15.33C37.8 15.33 36.4 15.92 35.82 16.08Z" fill="#3A2D80" />
                    <path d="M36.87 13.35C36.87 13.36 36.88 13.5 36.87 13.35V13.35Z" fill="#3A2D80" />
                  </svg>
                  <svg width="28" height="28" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="24" cy="24" r="24" fill="#E0E0E0" />
                    <path d="M26.86 40.25V25.54H31.8L32.54 19.81H26.86V16.15C26.86 14.49 27.32 13.36 29.7 13.36H32.74V8.23001C32.21 8.16001 30.41 8 28.32 8C23.94 8 20.95 10.67 20.95 15.58V19.81H16V25.54H20.95V40.25H26.86Z" fill="#3A2D80" />
                  </svg>
                  <svg width="28" height="28" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="24" cy="24" r="24" fill="#E0E0E0" />
                    <path d="M30.02 39.39H17.82C12.4 39.39 8 34.98 8 29.57V18.82C8 13.4 12.41 9 17.82 9H30.02C35.43 9 39.84 13.41 39.84 18.82V29.57C39.84 34.98 35.43 39.39 30.02 39.39ZM17.81 11.17C13.6 11.17 10.17 14.6 10.17 18.81V29.56C10.17 33.77 13.6 37.2 17.81 37.2H30.01C34.22 37.2 37.65 33.77 37.65 29.56V18.81C37.65 14.6 34.22 11.17 30.01 11.17H17.81Z" fill="#3A2D80" />
                    <path d="M23.91 32.9302C19.09 32.9302 15.17 29.0102 15.17 24.1902C15.17 19.3702 19.09 15.4502 23.91 15.4502C28.73 15.4502 32.65 19.3702 32.65 24.1902C32.66 29.0102 28.74 32.9302 23.91 32.9302ZM23.91 17.6302C20.29 17.6302 17.35 20.5702 17.35 24.1902C17.35 27.8102 20.29 30.7502 23.91 30.7502C27.53 30.7502 30.47 27.8102 30.47 24.1902C30.47 20.5702 27.53 17.6302 23.91 17.6302Z" fill="#3A2D80" />
                    <path d="M34.34 15.7198C34.34 16.7198 33.53 17.5298 32.53 17.5298C31.53 17.5298 30.72 16.7198 30.72 15.7198C30.72 14.7198 31.53 13.9098 32.53 13.9098C33.53 13.8998 34.34 14.7098 34.34 15.7198Z" fill="#3A2D80" />
                  </svg>
                </div>

              </div>
            </div>
          </div>
        </div>
        {/* utomo modal end */}

        {/* rusli modal start */}
        <div className="modal fade" id="staticBackdropRusli" data-backdrop="static" data-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <img src={require("../../assets/img/siti.png")} style={{ width: "80px" }}></img>
                <br />
                <span className="profile-modal-name">T. Rusli Ahmat</span>
                <br />
                <span className="profile-modal-jabatan">Komisaris</span>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?

                But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?
              </div>
              <div className="modal-footer">
                <div className="socmed-modal">
                  <svg width="28" height="28" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="24" cy="24" r="24" fill="#E0E0E0" />
                    <path d="M35.82 16.08C35.24 16.24 34.78 16.22 34.78 16.22L34.8 16.11C35.34 15.68 36.71 14.35 36.89 13.72C36.97 13.45 36.88 13.36 36.88 13.35L35.14 14.09L33.68 14.75C32.67 13.68 31.15 13 29.44 13C26.41 13 23.95 15.15 23.95 17.8C23.95 18.28 24.02 19.17 24.17 19.61C24.17 19.75 24.18 19.47 24.17 19.61C22.22 19.56 19.71 18.76 17.48 17.63C13.08 15.4 12.81 13.86 12.81 13.86C12.12 14.59 11.76 17.02 12.46 18.93C12.91 20.15 14.45 21.24 14.45 21.24C14.45 21.24 13.76 21.25 13.04 21.01C12.32 20.77 12.05 20.52 12.05 20.52C11.62 21.57 12.48 23.44 13.97 24.78C14.84 25.56 16.42 26.05 16.42 26.05L13.94 26.12C13.8 28.53 18.99 29.96 18.99 29.96C17.47 31.13 15.71 31.84 13.82 31.84C12.84 31.84 11.89 31.69 11 31.43C13.5 33.49 16.71 34.91 20.2 34.72C29.46 34.23 34.68 26.28 34.93 18.46L34.94 18.48C34.94 18.48 35.37 18.26 36.3 17.34C37.23 16.41 37.8 15.33 37.8 15.33C37.8 15.33 36.4 15.92 35.82 16.08Z" fill="#3A2D80" />
                    <path d="M36.87 13.35C36.87 13.36 36.88 13.5 36.87 13.35V13.35Z" fill="#3A2D80" />
                  </svg>
                  <svg width="28" height="28" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="24" cy="24" r="24" fill="#E0E0E0" />
                    <path d="M26.86 40.25V25.54H31.8L32.54 19.81H26.86V16.15C26.86 14.49 27.32 13.36 29.7 13.36H32.74V8.23001C32.21 8.16001 30.41 8 28.32 8C23.94 8 20.95 10.67 20.95 15.58V19.81H16V25.54H20.95V40.25H26.86Z" fill="#3A2D80" />
                  </svg>
                  <svg width="28" height="28" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="24" cy="24" r="24" fill="#E0E0E0" />
                    <path d="M30.02 39.39H17.82C12.4 39.39 8 34.98 8 29.57V18.82C8 13.4 12.41 9 17.82 9H30.02C35.43 9 39.84 13.41 39.84 18.82V29.57C39.84 34.98 35.43 39.39 30.02 39.39ZM17.81 11.17C13.6 11.17 10.17 14.6 10.17 18.81V29.56C10.17 33.77 13.6 37.2 17.81 37.2H30.01C34.22 37.2 37.65 33.77 37.65 29.56V18.81C37.65 14.6 34.22 11.17 30.01 11.17H17.81Z" fill="#3A2D80" />
                    <path d="M23.91 32.9302C19.09 32.9302 15.17 29.0102 15.17 24.1902C15.17 19.3702 19.09 15.4502 23.91 15.4502C28.73 15.4502 32.65 19.3702 32.65 24.1902C32.66 29.0102 28.74 32.9302 23.91 32.9302ZM23.91 17.6302C20.29 17.6302 17.35 20.5702 17.35 24.1902C17.35 27.8102 20.29 30.7502 23.91 30.7502C27.53 30.7502 30.47 27.8102 30.47 24.1902C30.47 20.5702 27.53 17.6302 23.91 17.6302Z" fill="#3A2D80" />
                    <path d="M34.34 15.7198C34.34 16.7198 33.53 17.5298 32.53 17.5298C31.53 17.5298 30.72 16.7198 30.72 15.7198C30.72 14.7198 31.53 13.9098 32.53 13.9098C33.53 13.8998 34.34 14.7098 34.34 15.7198Z" fill="#3A2D80" />
                  </svg>
                </div>

              </div>
            </div>
          </div>
        </div>
        {/* rusli modal end */}

        {/* syahrul modal start */}
        <div className="modal fade" id="staticBackdropSyahrul" data-backdrop="static" data-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <img src={require("../../assets/img/tubagus.png")} style={{ width: "80px" }}></img>
                <br />
                <span className="profile-modal-name">Syahrul Aryansyah</span>
                <br />
                <span className="profile-modal-jabatan">Businnes Dev & Investment Director</span>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?

                But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?
              </div>
              <div className="modal-footer">
                <div className="socmed-modal">
                  <svg width="28" height="28" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="24" cy="24" r="24" fill="#E0E0E0" />
                    <path d="M35.82 16.08C35.24 16.24 34.78 16.22 34.78 16.22L34.8 16.11C35.34 15.68 36.71 14.35 36.89 13.72C36.97 13.45 36.88 13.36 36.88 13.35L35.14 14.09L33.68 14.75C32.67 13.68 31.15 13 29.44 13C26.41 13 23.95 15.15 23.95 17.8C23.95 18.28 24.02 19.17 24.17 19.61C24.17 19.75 24.18 19.47 24.17 19.61C22.22 19.56 19.71 18.76 17.48 17.63C13.08 15.4 12.81 13.86 12.81 13.86C12.12 14.59 11.76 17.02 12.46 18.93C12.91 20.15 14.45 21.24 14.45 21.24C14.45 21.24 13.76 21.25 13.04 21.01C12.32 20.77 12.05 20.52 12.05 20.52C11.62 21.57 12.48 23.44 13.97 24.78C14.84 25.56 16.42 26.05 16.42 26.05L13.94 26.12C13.8 28.53 18.99 29.96 18.99 29.96C17.47 31.13 15.71 31.84 13.82 31.84C12.84 31.84 11.89 31.69 11 31.43C13.5 33.49 16.71 34.91 20.2 34.72C29.46 34.23 34.68 26.28 34.93 18.46L34.94 18.48C34.94 18.48 35.37 18.26 36.3 17.34C37.23 16.41 37.8 15.33 37.8 15.33C37.8 15.33 36.4 15.92 35.82 16.08Z" fill="#3A2D80" />
                    <path d="M36.87 13.35C36.87 13.36 36.88 13.5 36.87 13.35V13.35Z" fill="#3A2D80" />
                  </svg>
                  <svg width="28" height="28" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="24" cy="24" r="24" fill="#E0E0E0" />
                    <path d="M26.86 40.25V25.54H31.8L32.54 19.81H26.86V16.15C26.86 14.49 27.32 13.36 29.7 13.36H32.74V8.23001C32.21 8.16001 30.41 8 28.32 8C23.94 8 20.95 10.67 20.95 15.58V19.81H16V25.54H20.95V40.25H26.86Z" fill="#3A2D80" />
                  </svg>
                  <svg width="28" height="28" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="24" cy="24" r="24" fill="#E0E0E0" />
                    <path d="M30.02 39.39H17.82C12.4 39.39 8 34.98 8 29.57V18.82C8 13.4 12.41 9 17.82 9H30.02C35.43 9 39.84 13.41 39.84 18.82V29.57C39.84 34.98 35.43 39.39 30.02 39.39ZM17.81 11.17C13.6 11.17 10.17 14.6 10.17 18.81V29.56C10.17 33.77 13.6 37.2 17.81 37.2H30.01C34.22 37.2 37.65 33.77 37.65 29.56V18.81C37.65 14.6 34.22 11.17 30.01 11.17H17.81Z" fill="#3A2D80" />
                    <path d="M23.91 32.9302C19.09 32.9302 15.17 29.0102 15.17 24.1902C15.17 19.3702 19.09 15.4502 23.91 15.4502C28.73 15.4502 32.65 19.3702 32.65 24.1902C32.66 29.0102 28.74 32.9302 23.91 32.9302ZM23.91 17.6302C20.29 17.6302 17.35 20.5702 17.35 24.1902C17.35 27.8102 20.29 30.7502 23.91 30.7502C27.53 30.7502 30.47 27.8102 30.47 24.1902C30.47 20.5702 27.53 17.6302 23.91 17.6302Z" fill="#3A2D80" />
                    <path d="M34.34 15.7198C34.34 16.7198 33.53 17.5298 32.53 17.5298C31.53 17.5298 30.72 16.7198 30.72 15.7198C30.72 14.7198 31.53 13.9098 32.53 13.9098C33.53 13.8998 34.34 14.7098 34.34 15.7198Z" fill="#3A2D80" />
                  </svg>
                </div>

              </div>
            </div>
          </div>
        </div>
        {/* syahrul modal end */}

        {/* asep modal start */}
        <div className="modal fade" id="staticBackdropAsep" data-backdrop="static" data-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <img src={require("../../assets/img/nurseti.png")} style={{ width: "80px" }}></img>
                <br />
                <span className="profile-modal-name">Asep Urbana</span>
                <br />
                <span className="profile-modal-jabatan">Audit Committe</span>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?

                But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?
              </div>
              <div className="modal-footer">
                <div className="socmed-modal">
                  <svg width="28" height="28" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="24" cy="24" r="24" fill="#E0E0E0" />
                    <path d="M35.82 16.08C35.24 16.24 34.78 16.22 34.78 16.22L34.8 16.11C35.34 15.68 36.71 14.35 36.89 13.72C36.97 13.45 36.88 13.36 36.88 13.35L35.14 14.09L33.68 14.75C32.67 13.68 31.15 13 29.44 13C26.41 13 23.95 15.15 23.95 17.8C23.95 18.28 24.02 19.17 24.17 19.61C24.17 19.75 24.18 19.47 24.17 19.61C22.22 19.56 19.71 18.76 17.48 17.63C13.08 15.4 12.81 13.86 12.81 13.86C12.12 14.59 11.76 17.02 12.46 18.93C12.91 20.15 14.45 21.24 14.45 21.24C14.45 21.24 13.76 21.25 13.04 21.01C12.32 20.77 12.05 20.52 12.05 20.52C11.62 21.57 12.48 23.44 13.97 24.78C14.84 25.56 16.42 26.05 16.42 26.05L13.94 26.12C13.8 28.53 18.99 29.96 18.99 29.96C17.47 31.13 15.71 31.84 13.82 31.84C12.84 31.84 11.89 31.69 11 31.43C13.5 33.49 16.71 34.91 20.2 34.72C29.46 34.23 34.68 26.28 34.93 18.46L34.94 18.48C34.94 18.48 35.37 18.26 36.3 17.34C37.23 16.41 37.8 15.33 37.8 15.33C37.8 15.33 36.4 15.92 35.82 16.08Z" fill="#3A2D80" />
                    <path d="M36.87 13.35C36.87 13.36 36.88 13.5 36.87 13.35V13.35Z" fill="#3A2D80" />
                  </svg>
                  <svg width="28" height="28" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="24" cy="24" r="24" fill="#E0E0E0" />
                    <path d="M26.86 40.25V25.54H31.8L32.54 19.81H26.86V16.15C26.86 14.49 27.32 13.36 29.7 13.36H32.74V8.23001C32.21 8.16001 30.41 8 28.32 8C23.94 8 20.95 10.67 20.95 15.58V19.81H16V25.54H20.95V40.25H26.86Z" fill="#3A2D80" />
                  </svg>
                  <svg width="28" height="28" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="24" cy="24" r="24" fill="#E0E0E0" />
                    <path d="M30.02 39.39H17.82C12.4 39.39 8 34.98 8 29.57V18.82C8 13.4 12.41 9 17.82 9H30.02C35.43 9 39.84 13.41 39.84 18.82V29.57C39.84 34.98 35.43 39.39 30.02 39.39ZM17.81 11.17C13.6 11.17 10.17 14.6 10.17 18.81V29.56C10.17 33.77 13.6 37.2 17.81 37.2H30.01C34.22 37.2 37.65 33.77 37.65 29.56V18.81C37.65 14.6 34.22 11.17 30.01 11.17H17.81Z" fill="#3A2D80" />
                    <path d="M23.91 32.9302C19.09 32.9302 15.17 29.0102 15.17 24.1902C15.17 19.3702 19.09 15.4502 23.91 15.4502C28.73 15.4502 32.65 19.3702 32.65 24.1902C32.66 29.0102 28.74 32.9302 23.91 32.9302ZM23.91 17.6302C20.29 17.6302 17.35 20.5702 17.35 24.1902C17.35 27.8102 20.29 30.7502 23.91 30.7502C27.53 30.7502 30.47 27.8102 30.47 24.1902C30.47 20.5702 27.53 17.6302 23.91 17.6302Z" fill="#3A2D80" />
                    <path d="M34.34 15.7198C34.34 16.7198 33.53 17.5298 32.53 17.5298C31.53 17.5298 30.72 16.7198 30.72 15.7198C30.72 14.7198 31.53 13.9098 32.53 13.9098C33.53 13.8998 34.34 14.7098 34.34 15.7198Z" fill="#3A2D80" />
                  </svg>
                </div>

              </div>
            </div>
          </div>
        </div>
        {/* asep modal end */}

        {/* arin modal start */}
        <div className="modal fade" id="staticBackdropArin" data-backdrop="static" data-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <img src={require("../../assets/img/menik.png")} style={{ width: "80px" }}></img>
                <br />
                <span className="profile-modal-name">Arin Nur Diana</span>
                <br />
                <span className="profile-modal-jabatan">Finance Director</span>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?

                But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?
              </div>
              <div className="modal-footer">
                <div className="socmed-modal">
                  <svg width="28" height="28" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="24" cy="24" r="24" fill="#E0E0E0" />
                    <path d="M35.82 16.08C35.24 16.24 34.78 16.22 34.78 16.22L34.8 16.11C35.34 15.68 36.71 14.35 36.89 13.72C36.97 13.45 36.88 13.36 36.88 13.35L35.14 14.09L33.68 14.75C32.67 13.68 31.15 13 29.44 13C26.41 13 23.95 15.15 23.95 17.8C23.95 18.28 24.02 19.17 24.17 19.61C24.17 19.75 24.18 19.47 24.17 19.61C22.22 19.56 19.71 18.76 17.48 17.63C13.08 15.4 12.81 13.86 12.81 13.86C12.12 14.59 11.76 17.02 12.46 18.93C12.91 20.15 14.45 21.24 14.45 21.24C14.45 21.24 13.76 21.25 13.04 21.01C12.32 20.77 12.05 20.52 12.05 20.52C11.62 21.57 12.48 23.44 13.97 24.78C14.84 25.56 16.42 26.05 16.42 26.05L13.94 26.12C13.8 28.53 18.99 29.96 18.99 29.96C17.47 31.13 15.71 31.84 13.82 31.84C12.84 31.84 11.89 31.69 11 31.43C13.5 33.49 16.71 34.91 20.2 34.72C29.46 34.23 34.68 26.28 34.93 18.46L34.94 18.48C34.94 18.48 35.37 18.26 36.3 17.34C37.23 16.41 37.8 15.33 37.8 15.33C37.8 15.33 36.4 15.92 35.82 16.08Z" fill="#3A2D80" />
                    <path d="M36.87 13.35C36.87 13.36 36.88 13.5 36.87 13.35V13.35Z" fill="#3A2D80" />
                  </svg>
                  <svg width="28" height="28" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="24" cy="24" r="24" fill="#E0E0E0" />
                    <path d="M26.86 40.25V25.54H31.8L32.54 19.81H26.86V16.15C26.86 14.49 27.32 13.36 29.7 13.36H32.74V8.23001C32.21 8.16001 30.41 8 28.32 8C23.94 8 20.95 10.67 20.95 15.58V19.81H16V25.54H20.95V40.25H26.86Z" fill="#3A2D80" />
                  </svg>
                  <svg width="28" height="28" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="24" cy="24" r="24" fill="#E0E0E0" />
                    <path d="M30.02 39.39H17.82C12.4 39.39 8 34.98 8 29.57V18.82C8 13.4 12.41 9 17.82 9H30.02C35.43 9 39.84 13.41 39.84 18.82V29.57C39.84 34.98 35.43 39.39 30.02 39.39ZM17.81 11.17C13.6 11.17 10.17 14.6 10.17 18.81V29.56C10.17 33.77 13.6 37.2 17.81 37.2H30.01C34.22 37.2 37.65 33.77 37.65 29.56V18.81C37.65 14.6 34.22 11.17 30.01 11.17H17.81Z" fill="#3A2D80" />
                    <path d="M23.91 32.9302C19.09 32.9302 15.17 29.0102 15.17 24.1902C15.17 19.3702 19.09 15.4502 23.91 15.4502C28.73 15.4502 32.65 19.3702 32.65 24.1902C32.66 29.0102 28.74 32.9302 23.91 32.9302ZM23.91 17.6302C20.29 17.6302 17.35 20.5702 17.35 24.1902C17.35 27.8102 20.29 30.7502 23.91 30.7502C27.53 30.7502 30.47 27.8102 30.47 24.1902C30.47 20.5702 27.53 17.6302 23.91 17.6302Z" fill="#3A2D80" />
                    <path d="M34.34 15.7198C34.34 16.7198 33.53 17.5298 32.53 17.5298C31.53 17.5298 30.72 16.7198 30.72 15.7198C30.72 14.7198 31.53 13.9098 32.53 13.9098C33.53 13.8998 34.34 14.7098 34.34 15.7198Z" fill="#3A2D80" />
                  </svg>
                </div>

              </div>
            </div>
          </div>
        </div>
        {/* arin modal end */}

        {/* erwin modal start */}
        <div className="modal fade" id="staticBackdropErwin" data-backdrop="static" data-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <img src={require("../../assets/img/hamka.png")} style={{ width: "80px" }}></img>
                <br />
                <span className="profile-modal-name">Erwin Yudistira</span>
                <br />
                <span className="profile-modal-jabatan">VP Director</span>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?

                But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?
              </div>
              <div className="modal-footer">
                <div className="socmed-modal">
                  <svg width="28" height="28" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="24" cy="24" r="24" fill="#E0E0E0" />
                    <path d="M35.82 16.08C35.24 16.24 34.78 16.22 34.78 16.22L34.8 16.11C35.34 15.68 36.71 14.35 36.89 13.72C36.97 13.45 36.88 13.36 36.88 13.35L35.14 14.09L33.68 14.75C32.67 13.68 31.15 13 29.44 13C26.41 13 23.95 15.15 23.95 17.8C23.95 18.28 24.02 19.17 24.17 19.61C24.17 19.75 24.18 19.47 24.17 19.61C22.22 19.56 19.71 18.76 17.48 17.63C13.08 15.4 12.81 13.86 12.81 13.86C12.12 14.59 11.76 17.02 12.46 18.93C12.91 20.15 14.45 21.24 14.45 21.24C14.45 21.24 13.76 21.25 13.04 21.01C12.32 20.77 12.05 20.52 12.05 20.52C11.62 21.57 12.48 23.44 13.97 24.78C14.84 25.56 16.42 26.05 16.42 26.05L13.94 26.12C13.8 28.53 18.99 29.96 18.99 29.96C17.47 31.13 15.71 31.84 13.82 31.84C12.84 31.84 11.89 31.69 11 31.43C13.5 33.49 16.71 34.91 20.2 34.72C29.46 34.23 34.68 26.28 34.93 18.46L34.94 18.48C34.94 18.48 35.37 18.26 36.3 17.34C37.23 16.41 37.8 15.33 37.8 15.33C37.8 15.33 36.4 15.92 35.82 16.08Z" fill="#3A2D80" />
                    <path d="M36.87 13.35C36.87 13.36 36.88 13.5 36.87 13.35V13.35Z" fill="#3A2D80" />
                  </svg>
                  <svg width="28" height="28" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="24" cy="24" r="24" fill="#E0E0E0" />
                    <path d="M26.86 40.25V25.54H31.8L32.54 19.81H26.86V16.15C26.86 14.49 27.32 13.36 29.7 13.36H32.74V8.23001C32.21 8.16001 30.41 8 28.32 8C23.94 8 20.95 10.67 20.95 15.58V19.81H16V25.54H20.95V40.25H26.86Z" fill="#3A2D80" />
                  </svg>
                  <svg width="28" height="28" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="24" cy="24" r="24" fill="#E0E0E0" />
                    <path d="M30.02 39.39H17.82C12.4 39.39 8 34.98 8 29.57V18.82C8 13.4 12.41 9 17.82 9H30.02C35.43 9 39.84 13.41 39.84 18.82V29.57C39.84 34.98 35.43 39.39 30.02 39.39ZM17.81 11.17C13.6 11.17 10.17 14.6 10.17 18.81V29.56C10.17 33.77 13.6 37.2 17.81 37.2H30.01C34.22 37.2 37.65 33.77 37.65 29.56V18.81C37.65 14.6 34.22 11.17 30.01 11.17H17.81Z" fill="#3A2D80" />
                    <path d="M23.91 32.9302C19.09 32.9302 15.17 29.0102 15.17 24.1902C15.17 19.3702 19.09 15.4502 23.91 15.4502C28.73 15.4502 32.65 19.3702 32.65 24.1902C32.66 29.0102 28.74 32.9302 23.91 32.9302ZM23.91 17.6302C20.29 17.6302 17.35 20.5702 17.35 24.1902C17.35 27.8102 20.29 30.7502 23.91 30.7502C27.53 30.7502 30.47 27.8102 30.47 24.1902C30.47 20.5702 27.53 17.6302 23.91 17.6302Z" fill="#3A2D80" />
                    <path d="M34.34 15.7198C34.34 16.7198 33.53 17.5298 32.53 17.5298C31.53 17.5298 30.72 16.7198 30.72 15.7198C30.72 14.7198 31.53 13.9098 32.53 13.9098C33.53 13.8998 34.34 14.7098 34.34 15.7198Z" fill="#3A2D80" />
                  </svg>
                </div>

              </div>
            </div>
          </div>
        </div>
        {/* erwin modal end */}

        {/* suteja modal start */}
        <div className="modal fade" id="staticBackdropSuteja" data-backdrop="static" data-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <img src={require("../../assets/img/nunung.png")} style={{ width: "80px" }}></img>
                <br />
                <span className="profile-modal-name">Suteja Febby D</span>
                <br />
                <span className="profile-modal-jabatan">Human Capital Director</span>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?

                But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?
              </div>
              <div className="modal-footer">
                <div className="socmed-modal">
                  <svg width="28" height="28" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="24" cy="24" r="24" fill="#E0E0E0" />
                    <path d="M35.82 16.08C35.24 16.24 34.78 16.22 34.78 16.22L34.8 16.11C35.34 15.68 36.71 14.35 36.89 13.72C36.97 13.45 36.88 13.36 36.88 13.35L35.14 14.09L33.68 14.75C32.67 13.68 31.15 13 29.44 13C26.41 13 23.95 15.15 23.95 17.8C23.95 18.28 24.02 19.17 24.17 19.61C24.17 19.75 24.18 19.47 24.17 19.61C22.22 19.56 19.71 18.76 17.48 17.63C13.08 15.4 12.81 13.86 12.81 13.86C12.12 14.59 11.76 17.02 12.46 18.93C12.91 20.15 14.45 21.24 14.45 21.24C14.45 21.24 13.76 21.25 13.04 21.01C12.32 20.77 12.05 20.52 12.05 20.52C11.62 21.57 12.48 23.44 13.97 24.78C14.84 25.56 16.42 26.05 16.42 26.05L13.94 26.12C13.8 28.53 18.99 29.96 18.99 29.96C17.47 31.13 15.71 31.84 13.82 31.84C12.84 31.84 11.89 31.69 11 31.43C13.5 33.49 16.71 34.91 20.2 34.72C29.46 34.23 34.68 26.28 34.93 18.46L34.94 18.48C34.94 18.48 35.37 18.26 36.3 17.34C37.23 16.41 37.8 15.33 37.8 15.33C37.8 15.33 36.4 15.92 35.82 16.08Z" fill="#3A2D80" />
                    <path d="M36.87 13.35C36.87 13.36 36.88 13.5 36.87 13.35V13.35Z" fill="#3A2D80" />
                  </svg>
                  <svg width="28" height="28" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="24" cy="24" r="24" fill="#E0E0E0" />
                    <path d="M26.86 40.25V25.54H31.8L32.54 19.81H26.86V16.15C26.86 14.49 27.32 13.36 29.7 13.36H32.74V8.23001C32.21 8.16001 30.41 8 28.32 8C23.94 8 20.95 10.67 20.95 15.58V19.81H16V25.54H20.95V40.25H26.86Z" fill="#3A2D80" />
                  </svg>
                  <svg width="28" height="28" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="24" cy="24" r="24" fill="#E0E0E0" />
                    <path d="M30.02 39.39H17.82C12.4 39.39 8 34.98 8 29.57V18.82C8 13.4 12.41 9 17.82 9H30.02C35.43 9 39.84 13.41 39.84 18.82V29.57C39.84 34.98 35.43 39.39 30.02 39.39ZM17.81 11.17C13.6 11.17 10.17 14.6 10.17 18.81V29.56C10.17 33.77 13.6 37.2 17.81 37.2H30.01C34.22 37.2 37.65 33.77 37.65 29.56V18.81C37.65 14.6 34.22 11.17 30.01 11.17H17.81Z" fill="#3A2D80" />
                    <path d="M23.91 32.9302C19.09 32.9302 15.17 29.0102 15.17 24.1902C15.17 19.3702 19.09 15.4502 23.91 15.4502C28.73 15.4502 32.65 19.3702 32.65 24.1902C32.66 29.0102 28.74 32.9302 23.91 32.9302ZM23.91 17.6302C20.29 17.6302 17.35 20.5702 17.35 24.1902C17.35 27.8102 20.29 30.7502 23.91 30.7502C27.53 30.7502 30.47 27.8102 30.47 24.1902C30.47 20.5702 27.53 17.6302 23.91 17.6302Z" fill="#3A2D80" />
                    <path d="M34.34 15.7198C34.34 16.7198 33.53 17.5298 32.53 17.5298C31.53 17.5298 30.72 16.7198 30.72 15.7198C30.72 14.7198 31.53 13.9098 32.53 13.9098C33.53 13.8998 34.34 14.7098 34.34 15.7198Z" fill="#3A2D80" />
                  </svg>
                </div>

              </div>
            </div>
          </div>
        </div>
        {/* suteja modal end */}

        {/* saharuddin modal start */}
        <div className="modal fade" id="staticBackdropSaharuddin" data-backdrop="static" data-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <img src={require("../../assets/img/nunung.png")} style={{ width: "80px" }}></img>
                <br />
                <span className="profile-modal-name">Saharuddin</span>
                <br />
                <span className="profile-modal-jabatan">Operation Director</span>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?

                But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?
              </div>
              <div className="modal-footer">
                <div className="socmed-modal">
                  <svg width="28" height="28" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="24" cy="24" r="24" fill="#E0E0E0" />
                    <path d="M35.82 16.08C35.24 16.24 34.78 16.22 34.78 16.22L34.8 16.11C35.34 15.68 36.71 14.35 36.89 13.72C36.97 13.45 36.88 13.36 36.88 13.35L35.14 14.09L33.68 14.75C32.67 13.68 31.15 13 29.44 13C26.41 13 23.95 15.15 23.95 17.8C23.95 18.28 24.02 19.17 24.17 19.61C24.17 19.75 24.18 19.47 24.17 19.61C22.22 19.56 19.71 18.76 17.48 17.63C13.08 15.4 12.81 13.86 12.81 13.86C12.12 14.59 11.76 17.02 12.46 18.93C12.91 20.15 14.45 21.24 14.45 21.24C14.45 21.24 13.76 21.25 13.04 21.01C12.32 20.77 12.05 20.52 12.05 20.52C11.62 21.57 12.48 23.44 13.97 24.78C14.84 25.56 16.42 26.05 16.42 26.05L13.94 26.12C13.8 28.53 18.99 29.96 18.99 29.96C17.47 31.13 15.71 31.84 13.82 31.84C12.84 31.84 11.89 31.69 11 31.43C13.5 33.49 16.71 34.91 20.2 34.72C29.46 34.23 34.68 26.28 34.93 18.46L34.94 18.48C34.94 18.48 35.37 18.26 36.3 17.34C37.23 16.41 37.8 15.33 37.8 15.33C37.8 15.33 36.4 15.92 35.82 16.08Z" fill="#3A2D80" />
                    <path d="M36.87 13.35C36.87 13.36 36.88 13.5 36.87 13.35V13.35Z" fill="#3A2D80" />
                  </svg>
                  <svg width="28" height="28" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="24" cy="24" r="24" fill="#E0E0E0" />
                    <path d="M26.86 40.25V25.54H31.8L32.54 19.81H26.86V16.15C26.86 14.49 27.32 13.36 29.7 13.36H32.74V8.23001C32.21 8.16001 30.41 8 28.32 8C23.94 8 20.95 10.67 20.95 15.58V19.81H16V25.54H20.95V40.25H26.86Z" fill="#3A2D80" />
                  </svg>
                  <svg width="28" height="28" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="24" cy="24" r="24" fill="#E0E0E0" />
                    <path d="M30.02 39.39H17.82C12.4 39.39 8 34.98 8 29.57V18.82C8 13.4 12.41 9 17.82 9H30.02C35.43 9 39.84 13.41 39.84 18.82V29.57C39.84 34.98 35.43 39.39 30.02 39.39ZM17.81 11.17C13.6 11.17 10.17 14.6 10.17 18.81V29.56C10.17 33.77 13.6 37.2 17.81 37.2H30.01C34.22 37.2 37.65 33.77 37.65 29.56V18.81C37.65 14.6 34.22 11.17 30.01 11.17H17.81Z" fill="#3A2D80" />
                    <path d="M23.91 32.9302C19.09 32.9302 15.17 29.0102 15.17 24.1902C15.17 19.3702 19.09 15.4502 23.91 15.4502C28.73 15.4502 32.65 19.3702 32.65 24.1902C32.66 29.0102 28.74 32.9302 23.91 32.9302ZM23.91 17.6302C20.29 17.6302 17.35 20.5702 17.35 24.1902C17.35 27.8102 20.29 30.7502 23.91 30.7502C27.53 30.7502 30.47 27.8102 30.47 24.1902C30.47 20.5702 27.53 17.6302 23.91 17.6302Z" fill="#3A2D80" />
                    <path d="M34.34 15.7198C34.34 16.7198 33.53 17.5298 32.53 17.5298C31.53 17.5298 30.72 16.7198 30.72 15.7198C30.72 14.7198 31.53 13.9098 32.53 13.9098C33.53 13.8998 34.34 14.7098 34.34 15.7198Z" fill="#3A2D80" />
                  </svg>
                </div>

              </div>
            </div>
          </div>
        </div>
        {/* saharuddin modal end */}

         {/* zaky modal start */}
         <div className="modal fade" id="staticBackdropZaky" data-backdrop="static" data-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <img src={require("../../assets/img/nunung.png")} style={{ width: "80px" }}></img>
                <br />
                <span className="profile-modal-name">Ahmad Zaky AB</span>
                <br />
                <span className="profile-modal-jabatan">Comm & Gov Affair Director</span>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?

                But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?
              </div>
              <div className="modal-footer">
                <div className="socmed-modal">
                  <svg width="28" height="28" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="24" cy="24" r="24" fill="#E0E0E0" />
                    <path d="M35.82 16.08C35.24 16.24 34.78 16.22 34.78 16.22L34.8 16.11C35.34 15.68 36.71 14.35 36.89 13.72C36.97 13.45 36.88 13.36 36.88 13.35L35.14 14.09L33.68 14.75C32.67 13.68 31.15 13 29.44 13C26.41 13 23.95 15.15 23.95 17.8C23.95 18.28 24.02 19.17 24.17 19.61C24.17 19.75 24.18 19.47 24.17 19.61C22.22 19.56 19.71 18.76 17.48 17.63C13.08 15.4 12.81 13.86 12.81 13.86C12.12 14.59 11.76 17.02 12.46 18.93C12.91 20.15 14.45 21.24 14.45 21.24C14.45 21.24 13.76 21.25 13.04 21.01C12.32 20.77 12.05 20.52 12.05 20.52C11.62 21.57 12.48 23.44 13.97 24.78C14.84 25.56 16.42 26.05 16.42 26.05L13.94 26.12C13.8 28.53 18.99 29.96 18.99 29.96C17.47 31.13 15.71 31.84 13.82 31.84C12.84 31.84 11.89 31.69 11 31.43C13.5 33.49 16.71 34.91 20.2 34.72C29.46 34.23 34.68 26.28 34.93 18.46L34.94 18.48C34.94 18.48 35.37 18.26 36.3 17.34C37.23 16.41 37.8 15.33 37.8 15.33C37.8 15.33 36.4 15.92 35.82 16.08Z" fill="#3A2D80" />
                    <path d="M36.87 13.35C36.87 13.36 36.88 13.5 36.87 13.35V13.35Z" fill="#3A2D80" />
                  </svg>
                  <svg width="28" height="28" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="24" cy="24" r="24" fill="#E0E0E0" />
                    <path d="M26.86 40.25V25.54H31.8L32.54 19.81H26.86V16.15C26.86 14.49 27.32 13.36 29.7 13.36H32.74V8.23001C32.21 8.16001 30.41 8 28.32 8C23.94 8 20.95 10.67 20.95 15.58V19.81H16V25.54H20.95V40.25H26.86Z" fill="#3A2D80" />
                  </svg>
                  <svg width="28" height="28" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="24" cy="24" r="24" fill="#E0E0E0" />
                    <path d="M30.02 39.39H17.82C12.4 39.39 8 34.98 8 29.57V18.82C8 13.4 12.41 9 17.82 9H30.02C35.43 9 39.84 13.41 39.84 18.82V29.57C39.84 34.98 35.43 39.39 30.02 39.39ZM17.81 11.17C13.6 11.17 10.17 14.6 10.17 18.81V29.56C10.17 33.77 13.6 37.2 17.81 37.2H30.01C34.22 37.2 37.65 33.77 37.65 29.56V18.81C37.65 14.6 34.22 11.17 30.01 11.17H17.81Z" fill="#3A2D80" />
                    <path d="M23.91 32.9302C19.09 32.9302 15.17 29.0102 15.17 24.1902C15.17 19.3702 19.09 15.4502 23.91 15.4502C28.73 15.4502 32.65 19.3702 32.65 24.1902C32.66 29.0102 28.74 32.9302 23.91 32.9302ZM23.91 17.6302C20.29 17.6302 17.35 20.5702 17.35 24.1902C17.35 27.8102 20.29 30.7502 23.91 30.7502C27.53 30.7502 30.47 27.8102 30.47 24.1902C30.47 20.5702 27.53 17.6302 23.91 17.6302Z" fill="#3A2D80" />
                    <path d="M34.34 15.7198C34.34 16.7198 33.53 17.5298 32.53 17.5298C31.53 17.5298 30.72 16.7198 30.72 15.7198C30.72 14.7198 31.53 13.9098 32.53 13.9098C33.53 13.8998 34.34 14.7098 34.34 15.7198Z" fill="#3A2D80" />
                  </svg>
                </div>

              </div>
            </div>
          </div>
        </div>
        {/* zaky modal end */}

        <div className="container py-5">


          <div className="ceo-title">
            <h1>
              SUMBER <span>DAYA MANUSIA</span>
            </h1>
            <h4>PT Palma Pertiwi Makmur</h4>
            <img src={require("../../assets/img/ceo-div.png")}></img>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <div className="card service-item">
                <div className="card-body card-service">
                  <img

                    src={require("../../assets/img/circle-photo.png")}
                  />
                  <div>
                    <h1 className="card-text">Samsul Hadi & Team</h1>
                    <h1 className="card-jabatan">Komisaris Utama</h1>
                    <svg
                      className="card-garis"
                      viewBox="0 0 540 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="540" height="6" fill="#E0E0E0" />
                    </svg>
                    <svg
                      className="card-socmed1"
                      width="35"
                      height="35"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="24" cy="24" r="24" fill="#E0E0E0" />
                      <path
                        d="M35.82 16.08C35.24 16.24 34.78 16.22 34.78 16.22L34.8 16.11C35.34 15.68 36.71 14.35 36.89 13.72C36.97 13.45 36.88 13.36 36.88 13.35L35.14 14.09L33.68 14.75C32.67 13.68 31.15 13 29.44 13C26.41 13 23.95 15.15 23.95 17.8C23.95 18.28 24.02 19.17 24.17 19.61C24.17 19.75 24.18 19.47 24.17 19.61C22.22 19.56 19.71 18.76 17.48 17.63C13.08 15.4 12.81 13.86 12.81 13.86C12.12 14.59 11.76 17.02 12.46 18.93C12.91 20.15 14.45 21.24 14.45 21.24C14.45 21.24 13.76 21.25 13.04 21.01C12.32 20.77 12.05 20.52 12.05 20.52C11.62 21.57 12.48 23.44 13.97 24.78C14.84 25.56 16.42 26.05 16.42 26.05L13.94 26.12C13.8 28.53 18.99 29.96 18.99 29.96C17.47 31.13 15.71 31.84 13.82 31.84C12.84 31.84 11.89 31.69 11 31.43C13.5 33.49 16.71 34.91 20.2 34.72C29.46 34.23 34.68 26.28 34.93 18.46L34.94 18.48C34.94 18.48 35.37 18.26 36.3 17.34C37.23 16.41 37.8 15.33 37.8 15.33C37.8 15.33 36.4 15.92 35.82 16.08Z"
                        fill="#3A2D80"
                      />
                      <path
                        d="M36.8701 13.3501C36.8701 13.3601 36.8801 13.5001 36.8701 13.3501V13.3501Z"
                        fill="#3A2D80"
                      />
                    </svg>
                    <svg
                      className="card-socmed"
                      width="35"
                      height="35"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="24" cy="24" r="24" fill="#E0E0E0" />
                      <path
                        d="M26.86 40.25V25.54H31.8L32.54 19.81H26.86V16.15C26.86 14.49 27.32 13.36 29.7 13.36H32.74V8.23001C32.21 8.16001 30.41 8 28.32 8C23.94 8 20.95 10.67 20.95 15.58V19.81H16V25.54H20.95V40.25H26.86Z"
                        fill="#3A2D80"
                      />
                    </svg>
                    <svg
                      className="card-socmed"
                      width="35"
                      height="35"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="24" cy="24" r="24" fill="#E0E0E0" />
                      <path
                        d="M30.02 39.39H17.82C12.4 39.39 8 34.98 8 29.57V18.82C8 13.4 12.41 9 17.82 9H30.02C35.43 9 39.84 13.41 39.84 18.82V29.57C39.84 34.98 35.43 39.39 30.02 39.39ZM17.81 11.17C13.6 11.17 10.17 14.6 10.17 18.81V29.56C10.17 33.77 13.6 37.2 17.81 37.2H30.01C34.22 37.2 37.65 33.77 37.65 29.56V18.81C37.65 14.6 34.22 11.17 30.01 11.17H17.81Z"
                        fill="#3A2D80"
                      />
                      <path
                        d="M23.9099 32.9302C19.0899 32.9302 15.1699 29.0102 15.1699 24.1902C15.1699 19.3702 19.0899 15.4502 23.9099 15.4502C28.7299 15.4502 32.6499 19.3702 32.6499 24.1902C32.6599 29.0102 28.7399 32.9302 23.9099 32.9302ZM23.9099 17.6302C20.2899 17.6302 17.3499 20.5702 17.3499 24.1902C17.3499 27.8102 20.2899 30.7502 23.9099 30.7502C27.5299 30.7502 30.4699 27.8102 30.4699 24.1902C30.4699 20.5702 27.5299 17.6302 23.9099 17.6302Z"
                        fill="#3A2D80"
                      />
                      <path
                        d="M34.34 15.7198C34.34 16.7198 33.53 17.5298 32.53 17.5298C31.53 17.5298 30.72 16.7198 30.72 15.7198C30.72 14.7198 31.53 13.9098 32.53 13.9098C33.53 13.8998 34.34 14.7098 34.34 15.7198Z"
                        fill="#3A2D80"
                      />
                    </svg>

                    <div>
                      <button
                        className="btn card-button-detail"
                        type="button"
                        data-toggle="modal" data-target="#staticBackdropSamsul">
                        Detail
                      </button>
                    </div>

                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="card service-item">
                <div className="card-body card-service">
                  <img

                    src={require("../../assets/img/circle-photo.png")}
                  />
                  <div>
                    <h1 className="card-text">Mardianto</h1>
                    <h1 className="card-jabatan">Direktur Utama</h1>
                    <svg
                      className="card-garis"
                      viewBox="0 0 540 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="540" height="6" fill="#E0E0E0" />
                    </svg>
                    <svg
                      className="card-socmed1"
                      width="35"
                      height="35"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="24" cy="24" r="24" fill="#E0E0E0" />
                      <path
                        d="M35.82 16.08C35.24 16.24 34.78 16.22 34.78 16.22L34.8 16.11C35.34 15.68 36.71 14.35 36.89 13.72C36.97 13.45 36.88 13.36 36.88 13.35L35.14 14.09L33.68 14.75C32.67 13.68 31.15 13 29.44 13C26.41 13 23.95 15.15 23.95 17.8C23.95 18.28 24.02 19.17 24.17 19.61C24.17 19.75 24.18 19.47 24.17 19.61C22.22 19.56 19.71 18.76 17.48 17.63C13.08 15.4 12.81 13.86 12.81 13.86C12.12 14.59 11.76 17.02 12.46 18.93C12.91 20.15 14.45 21.24 14.45 21.24C14.45 21.24 13.76 21.25 13.04 21.01C12.32 20.77 12.05 20.52 12.05 20.52C11.62 21.57 12.48 23.44 13.97 24.78C14.84 25.56 16.42 26.05 16.42 26.05L13.94 26.12C13.8 28.53 18.99 29.96 18.99 29.96C17.47 31.13 15.71 31.84 13.82 31.84C12.84 31.84 11.89 31.69 11 31.43C13.5 33.49 16.71 34.91 20.2 34.72C29.46 34.23 34.68 26.28 34.93 18.46L34.94 18.48C34.94 18.48 35.37 18.26 36.3 17.34C37.23 16.41 37.8 15.33 37.8 15.33C37.8 15.33 36.4 15.92 35.82 16.08Z"
                        fill="#3A2D80"
                      />
                      <path
                        d="M36.8701 13.3501C36.8701 13.3601 36.8801 13.5001 36.8701 13.3501V13.3501Z"
                        fill="#3A2D80"
                      />
                    </svg>
                    <svg
                      className="card-socmed"
                      width="35"
                      height="35"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="24" cy="24" r="24" fill="#E0E0E0" />
                      <path
                        d="M26.86 40.25V25.54H31.8L32.54 19.81H26.86V16.15C26.86 14.49 27.32 13.36 29.7 13.36H32.74V8.23001C32.21 8.16001 30.41 8 28.32 8C23.94 8 20.95 10.67 20.95 15.58V19.81H16V25.54H20.95V40.25H26.86Z"
                        fill="#3A2D80"
                      />
                    </svg>
                    <svg
                      className="card-socmed"
                      width="35"
                      height="35"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="24" cy="24" r="24" fill="#E0E0E0" />
                      <path
                        d="M30.02 39.39H17.82C12.4 39.39 8 34.98 8 29.57V18.82C8 13.4 12.41 9 17.82 9H30.02C35.43 9 39.84 13.41 39.84 18.82V29.57C39.84 34.98 35.43 39.39 30.02 39.39ZM17.81 11.17C13.6 11.17 10.17 14.6 10.17 18.81V29.56C10.17 33.77 13.6 37.2 17.81 37.2H30.01C34.22 37.2 37.65 33.77 37.65 29.56V18.81C37.65 14.6 34.22 11.17 30.01 11.17H17.81Z"
                        fill="#3A2D80"
                      />
                      <path
                        d="M23.9099 32.9302C19.0899 32.9302 15.1699 29.0102 15.1699 24.1902C15.1699 19.3702 19.0899 15.4502 23.9099 15.4502C28.7299 15.4502 32.6499 19.3702 32.6499 24.1902C32.6599 29.0102 28.7399 32.9302 23.9099 32.9302ZM23.9099 17.6302C20.2899 17.6302 17.3499 20.5702 17.3499 24.1902C17.3499 27.8102 20.2899 30.7502 23.9099 30.7502C27.5299 30.7502 30.4699 27.8102 30.4699 24.1902C30.4699 20.5702 27.5299 17.6302 23.9099 17.6302Z"
                        fill="#3A2D80"
                      />
                      <path
                        d="M34.34 15.7198C34.34 16.7198 33.53 17.5298 32.53 17.5298C31.53 17.5298 30.72 16.7198 30.72 15.7198C30.72 14.7198 31.53 13.9098 32.53 13.9098C33.53 13.8998 34.34 14.7098 34.34 15.7198Z"
                        fill="#3A2D80"
                      />
                    </svg>

                    <div>
                      <button
                        className="btn card-button-detail"
                        type="button"
                        data-toggle="modal" data-target="#staticBackdrop">
                        Detail
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="card service-item">
                <div className="card-body card-service">
                  <img

                    src={require("../../assets/img/circle-photo.png")}
                  />
                  <div>
                    <h1 className="card-text">M. Riza Patria</h1>
                    <h1 className="card-jabatan">Komisaris Independen</h1>
                    <svg
                      className="card-garis"
                      viewBox="0 0 540 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="540" height="6" fill="#E0E0E0" />
                    </svg>
                    <svg
                      className="card-socmed1"
                      width="35"
                      height="35"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="24" cy="24" r="24" fill="#E0E0E0" />
                      <path
                        d="M35.82 16.08C35.24 16.24 34.78 16.22 34.78 16.22L34.8 16.11C35.34 15.68 36.71 14.35 36.89 13.72C36.97 13.45 36.88 13.36 36.88 13.35L35.14 14.09L33.68 14.75C32.67 13.68 31.15 13 29.44 13C26.41 13 23.95 15.15 23.95 17.8C23.95 18.28 24.02 19.17 24.17 19.61C24.17 19.75 24.18 19.47 24.17 19.61C22.22 19.56 19.71 18.76 17.48 17.63C13.08 15.4 12.81 13.86 12.81 13.86C12.12 14.59 11.76 17.02 12.46 18.93C12.91 20.15 14.45 21.24 14.45 21.24C14.45 21.24 13.76 21.25 13.04 21.01C12.32 20.77 12.05 20.52 12.05 20.52C11.62 21.57 12.48 23.44 13.97 24.78C14.84 25.56 16.42 26.05 16.42 26.05L13.94 26.12C13.8 28.53 18.99 29.96 18.99 29.96C17.47 31.13 15.71 31.84 13.82 31.84C12.84 31.84 11.89 31.69 11 31.43C13.5 33.49 16.71 34.91 20.2 34.72C29.46 34.23 34.68 26.28 34.93 18.46L34.94 18.48C34.94 18.48 35.37 18.26 36.3 17.34C37.23 16.41 37.8 15.33 37.8 15.33C37.8 15.33 36.4 15.92 35.82 16.08Z"
                        fill="#3A2D80"
                      />
                      <path
                        d="M36.8701 13.3501C36.8701 13.3601 36.8801 13.5001 36.8701 13.3501V13.3501Z"
                        fill="#3A2D80"
                      />
                    </svg>
                    <svg
                      className="card-socmed"
                      width="35"
                      height="35"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="24" cy="24" r="24" fill="#E0E0E0" />
                      <path
                        d="M26.86 40.25V25.54H31.8L32.54 19.81H26.86V16.15C26.86 14.49 27.32 13.36 29.7 13.36H32.74V8.23001C32.21 8.16001 30.41 8 28.32 8C23.94 8 20.95 10.67 20.95 15.58V19.81H16V25.54H20.95V40.25H26.86Z"
                        fill="#3A2D80"
                      />
                    </svg>
                    <svg
                      className="card-socmed"
                      width="35"
                      height="35"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="24" cy="24" r="24" fill="#E0E0E0" />
                      <path
                        d="M30.02 39.39H17.82C12.4 39.39 8 34.98 8 29.57V18.82C8 13.4 12.41 9 17.82 9H30.02C35.43 9 39.84 13.41 39.84 18.82V29.57C39.84 34.98 35.43 39.39 30.02 39.39ZM17.81 11.17C13.6 11.17 10.17 14.6 10.17 18.81V29.56C10.17 33.77 13.6 37.2 17.81 37.2H30.01C34.22 37.2 37.65 33.77 37.65 29.56V18.81C37.65 14.6 34.22 11.17 30.01 11.17H17.81Z"
                        fill="#3A2D80"
                      />
                      <path
                        d="M23.9099 32.9302C19.0899 32.9302 15.1699 29.0102 15.1699 24.1902C15.1699 19.3702 19.0899 15.4502 23.9099 15.4502C28.7299 15.4502 32.6499 19.3702 32.6499 24.1902C32.6599 29.0102 28.7399 32.9302 23.9099 32.9302ZM23.9099 17.6302C20.2899 17.6302 17.3499 20.5702 17.3499 24.1902C17.3499 27.8102 20.2899 30.7502 23.9099 30.7502C27.5299 30.7502 30.4699 27.8102 30.4699 24.1902C30.4699 20.5702 27.5299 17.6302 23.9099 17.6302Z"
                        fill="#3A2D80"
                      />
                      <path
                        d="M34.34 15.7198C34.34 16.7198 33.53 17.5298 32.53 17.5298C31.53 17.5298 30.72 16.7198 30.72 15.7198C30.72 14.7198 31.53 13.9098 32.53 13.9098C33.53 13.8998 34.34 14.7098 34.34 15.7198Z"
                        fill="#3A2D80"
                      />
                    </svg>

                    <div>
                      <button
                        className="btn card-button-detail"
                        type="button"
                        data-toggle="modal" data-target="#staticBackdropRiza">
                        Detail
                      </button>
                    </div>

                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="card service-item">
                <div className="card-body card-service">
                  <img

                    src={require("../../assets/img/circle-photo.png")}
                  />
                  <div>
                    <h1 className="card-text">Utomo</h1>
                    <h1 className="card-jabatan">Supply Chain Director</h1>
                    <svg
                      className="card-garis"
                      viewBox="0 0 540 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="540" height="6" fill="#E0E0E0" />
                    </svg>
                    <svg
                      className="card-socmed1"
                      width="35"
                      height="35"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="24" cy="24" r="24" fill="#E0E0E0" />
                      <path
                        d="M35.82 16.08C35.24 16.24 34.78 16.22 34.78 16.22L34.8 16.11C35.34 15.68 36.71 14.35 36.89 13.72C36.97 13.45 36.88 13.36 36.88 13.35L35.14 14.09L33.68 14.75C32.67 13.68 31.15 13 29.44 13C26.41 13 23.95 15.15 23.95 17.8C23.95 18.28 24.02 19.17 24.17 19.61C24.17 19.75 24.18 19.47 24.17 19.61C22.22 19.56 19.71 18.76 17.48 17.63C13.08 15.4 12.81 13.86 12.81 13.86C12.12 14.59 11.76 17.02 12.46 18.93C12.91 20.15 14.45 21.24 14.45 21.24C14.45 21.24 13.76 21.25 13.04 21.01C12.32 20.77 12.05 20.52 12.05 20.52C11.62 21.57 12.48 23.44 13.97 24.78C14.84 25.56 16.42 26.05 16.42 26.05L13.94 26.12C13.8 28.53 18.99 29.96 18.99 29.96C17.47 31.13 15.71 31.84 13.82 31.84C12.84 31.84 11.89 31.69 11 31.43C13.5 33.49 16.71 34.91 20.2 34.72C29.46 34.23 34.68 26.28 34.93 18.46L34.94 18.48C34.94 18.48 35.37 18.26 36.3 17.34C37.23 16.41 37.8 15.33 37.8 15.33C37.8 15.33 36.4 15.92 35.82 16.08Z"
                        fill="#3A2D80"
                      />
                      <path
                        d="M36.8701 13.3501C36.8701 13.3601 36.8801 13.5001 36.8701 13.3501V13.3501Z"
                        fill="#3A2D80"
                      />
                    </svg>
                    <svg
                      className="card-socmed"
                      width="35"
                      height="35"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="24" cy="24" r="24" fill="#E0E0E0" />
                      <path
                        d="M26.86 40.25V25.54H31.8L32.54 19.81H26.86V16.15C26.86 14.49 27.32 13.36 29.7 13.36H32.74V8.23001C32.21 8.16001 30.41 8 28.32 8C23.94 8 20.95 10.67 20.95 15.58V19.81H16V25.54H20.95V40.25H26.86Z"
                        fill="#3A2D80"
                      />
                    </svg>
                    <svg
                      className="card-socmed"
                      width="35"
                      height="35"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="24" cy="24" r="24" fill="#E0E0E0" />
                      <path
                        d="M30.02 39.39H17.82C12.4 39.39 8 34.98 8 29.57V18.82C8 13.4 12.41 9 17.82 9H30.02C35.43 9 39.84 13.41 39.84 18.82V29.57C39.84 34.98 35.43 39.39 30.02 39.39ZM17.81 11.17C13.6 11.17 10.17 14.6 10.17 18.81V29.56C10.17 33.77 13.6 37.2 17.81 37.2H30.01C34.22 37.2 37.65 33.77 37.65 29.56V18.81C37.65 14.6 34.22 11.17 30.01 11.17H17.81Z"
                        fill="#3A2D80"
                      />
                      <path
                        d="M23.9099 32.9302C19.0899 32.9302 15.1699 29.0102 15.1699 24.1902C15.1699 19.3702 19.0899 15.4502 23.9099 15.4502C28.7299 15.4502 32.6499 19.3702 32.6499 24.1902C32.6599 29.0102 28.7399 32.9302 23.9099 32.9302ZM23.9099 17.6302C20.2899 17.6302 17.3499 20.5702 17.3499 24.1902C17.3499 27.8102 20.2899 30.7502 23.9099 30.7502C27.5299 30.7502 30.4699 27.8102 30.4699 24.1902C30.4699 20.5702 27.5299 17.6302 23.9099 17.6302Z"
                        fill="#3A2D80"
                      />
                      <path
                        d="M34.34 15.7198C34.34 16.7198 33.53 17.5298 32.53 17.5298C31.53 17.5298 30.72 16.7198 30.72 15.7198C30.72 14.7198 31.53 13.9098 32.53 13.9098C33.53 13.8998 34.34 14.7098 34.34 15.7198Z"
                        fill="#3A2D80"
                      />
                    </svg>

                    <div>
                      <button
                        className="btn card-button-detail"
                        type="button"
                        data-toggle="modal" data-target="#staticBackdropUtomo">
                        Detail
                      </button>
                    </div>

                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="card service-item">
                <div className="card-body card-service">
                  <img

                    src={require("../../assets/img/circle-photo.png")}
                  />
                  <div>
                    <h1 className="card-text">T. Rusli Ahmat</h1>
                    <h1 className="card-jabatan">
                      Komisaris
                    </h1>
                    <svg
                      className="card-garis"
                      viewBox="0 0 540 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="540" height="6" fill="#E0E0E0" />
                    </svg>
                    <svg
                      className="card-socmed1"
                      width="35"
                      height="35"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="24" cy="24" r="24" fill="#E0E0E0" />
                      <path
                        d="M35.82 16.08C35.24 16.24 34.78 16.22 34.78 16.22L34.8 16.11C35.34 15.68 36.71 14.35 36.89 13.72C36.97 13.45 36.88 13.36 36.88 13.35L35.14 14.09L33.68 14.75C32.67 13.68 31.15 13 29.44 13C26.41 13 23.95 15.15 23.95 17.8C23.95 18.28 24.02 19.17 24.17 19.61C24.17 19.75 24.18 19.47 24.17 19.61C22.22 19.56 19.71 18.76 17.48 17.63C13.08 15.4 12.81 13.86 12.81 13.86C12.12 14.59 11.76 17.02 12.46 18.93C12.91 20.15 14.45 21.24 14.45 21.24C14.45 21.24 13.76 21.25 13.04 21.01C12.32 20.77 12.05 20.52 12.05 20.52C11.62 21.57 12.48 23.44 13.97 24.78C14.84 25.56 16.42 26.05 16.42 26.05L13.94 26.12C13.8 28.53 18.99 29.96 18.99 29.96C17.47 31.13 15.71 31.84 13.82 31.84C12.84 31.84 11.89 31.69 11 31.43C13.5 33.49 16.71 34.91 20.2 34.72C29.46 34.23 34.68 26.28 34.93 18.46L34.94 18.48C34.94 18.48 35.37 18.26 36.3 17.34C37.23 16.41 37.8 15.33 37.8 15.33C37.8 15.33 36.4 15.92 35.82 16.08Z"
                        fill="#3A2D80"
                      />
                      <path
                        d="M36.8701 13.3501C36.8701 13.3601 36.8801 13.5001 36.8701 13.3501V13.3501Z"
                        fill="#3A2D80"
                      />
                    </svg>
                    <svg
                      className="card-socmed"
                      width="35"
                      height="35"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="24" cy="24" r="24" fill="#E0E0E0" />
                      <path
                        d="M26.86 40.25V25.54H31.8L32.54 19.81H26.86V16.15C26.86 14.49 27.32 13.36 29.7 13.36H32.74V8.23001C32.21 8.16001 30.41 8 28.32 8C23.94 8 20.95 10.67 20.95 15.58V19.81H16V25.54H20.95V40.25H26.86Z"
                        fill="#3A2D80"
                      />
                    </svg>
                    <svg
                      className="card-socmed"
                      width="35"
                      height="35"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="24" cy="24" r="24" fill="#E0E0E0" />
                      <path
                        d="M30.02 39.39H17.82C12.4 39.39 8 34.98 8 29.57V18.82C8 13.4 12.41 9 17.82 9H30.02C35.43 9 39.84 13.41 39.84 18.82V29.57C39.84 34.98 35.43 39.39 30.02 39.39ZM17.81 11.17C13.6 11.17 10.17 14.6 10.17 18.81V29.56C10.17 33.77 13.6 37.2 17.81 37.2H30.01C34.22 37.2 37.65 33.77 37.65 29.56V18.81C37.65 14.6 34.22 11.17 30.01 11.17H17.81Z"
                        fill="#3A2D80"
                      />
                      <path
                        d="M23.9099 32.9302C19.0899 32.9302 15.1699 29.0102 15.1699 24.1902C15.1699 19.3702 19.0899 15.4502 23.9099 15.4502C28.7299 15.4502 32.6499 19.3702 32.6499 24.1902C32.6599 29.0102 28.7399 32.9302 23.9099 32.9302ZM23.9099 17.6302C20.2899 17.6302 17.3499 20.5702 17.3499 24.1902C17.3499 27.8102 20.2899 30.7502 23.9099 30.7502C27.5299 30.7502 30.4699 27.8102 30.4699 24.1902C30.4699 20.5702 27.5299 17.6302 23.9099 17.6302Z"
                        fill="#3A2D80"
                      />
                      <path
                        d="M34.34 15.7198C34.34 16.7198 33.53 17.5298 32.53 17.5298C31.53 17.5298 30.72 16.7198 30.72 15.7198C30.72 14.7198 31.53 13.9098 32.53 13.9098C33.53 13.8998 34.34 14.7098 34.34 15.7198Z"
                        fill="#3A2D80"
                      />
                    </svg>

                    <div>
                      <button
                        className="btn card-button-detail"
                        type="button"
                        data-toggle="modal" data-target="#staticBackdropRusli">
                        Detail
                      </button>
                    </div>

                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="card service-item">
                <div className="card-body card-service">
                  <img

                    src={require("../../assets/img/circle-photo.png")}
                  />
                  <div>
                    <h1 className="card-text">Syahrul Aryansyah</h1>
                    <h1 className="card-jabatan">Businnes Dev & Investment Director</h1>
                    <svg
                      className="card-garis"
                      viewBox="0 0 540 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="540" height="6" fill="#E0E0E0" />
                    </svg>
                    <svg
                      className="card-socmed1"
                      width="35"
                      height="35"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="24" cy="24" r="24" fill="#E0E0E0" />
                      <path
                        d="M35.82 16.08C35.24 16.24 34.78 16.22 34.78 16.22L34.8 16.11C35.34 15.68 36.71 14.35 36.89 13.72C36.97 13.45 36.88 13.36 36.88 13.35L35.14 14.09L33.68 14.75C32.67 13.68 31.15 13 29.44 13C26.41 13 23.95 15.15 23.95 17.8C23.95 18.28 24.02 19.17 24.17 19.61C24.17 19.75 24.18 19.47 24.17 19.61C22.22 19.56 19.71 18.76 17.48 17.63C13.08 15.4 12.81 13.86 12.81 13.86C12.12 14.59 11.76 17.02 12.46 18.93C12.91 20.15 14.45 21.24 14.45 21.24C14.45 21.24 13.76 21.25 13.04 21.01C12.32 20.77 12.05 20.52 12.05 20.52C11.62 21.57 12.48 23.44 13.97 24.78C14.84 25.56 16.42 26.05 16.42 26.05L13.94 26.12C13.8 28.53 18.99 29.96 18.99 29.96C17.47 31.13 15.71 31.84 13.82 31.84C12.84 31.84 11.89 31.69 11 31.43C13.5 33.49 16.71 34.91 20.2 34.72C29.46 34.23 34.68 26.28 34.93 18.46L34.94 18.48C34.94 18.48 35.37 18.26 36.3 17.34C37.23 16.41 37.8 15.33 37.8 15.33C37.8 15.33 36.4 15.92 35.82 16.08Z"
                        fill="#3A2D80"
                      />
                      <path
                        d="M36.8701 13.3501C36.8701 13.3601 36.8801 13.5001 36.8701 13.3501V13.3501Z"
                        fill="#3A2D80"
                      />
                    </svg>
                    <svg
                      className="card-socmed"
                      width="35"
                      height="35"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="24" cy="24" r="24" fill="#E0E0E0" />
                      <path
                        d="M26.86 40.25V25.54H31.8L32.54 19.81H26.86V16.15C26.86 14.49 27.32 13.36 29.7 13.36H32.74V8.23001C32.21 8.16001 30.41 8 28.32 8C23.94 8 20.95 10.67 20.95 15.58V19.81H16V25.54H20.95V40.25H26.86Z"
                        fill="#3A2D80"
                      />
                    </svg>
                    <svg
                      className="card-socmed"
                      width="35"
                      height="35"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="24" cy="24" r="24" fill="#E0E0E0" />
                      <path
                        d="M30.02 39.39H17.82C12.4 39.39 8 34.98 8 29.57V18.82C8 13.4 12.41 9 17.82 9H30.02C35.43 9 39.84 13.41 39.84 18.82V29.57C39.84 34.98 35.43 39.39 30.02 39.39ZM17.81 11.17C13.6 11.17 10.17 14.6 10.17 18.81V29.56C10.17 33.77 13.6 37.2 17.81 37.2H30.01C34.22 37.2 37.65 33.77 37.65 29.56V18.81C37.65 14.6 34.22 11.17 30.01 11.17H17.81Z"
                        fill="#3A2D80"
                      />
                      <path
                        d="M23.9099 32.9302C19.0899 32.9302 15.1699 29.0102 15.1699 24.1902C15.1699 19.3702 19.0899 15.4502 23.9099 15.4502C28.7299 15.4502 32.6499 19.3702 32.6499 24.1902C32.6599 29.0102 28.7399 32.9302 23.9099 32.9302ZM23.9099 17.6302C20.2899 17.6302 17.3499 20.5702 17.3499 24.1902C17.3499 27.8102 20.2899 30.7502 23.9099 30.7502C27.5299 30.7502 30.4699 27.8102 30.4699 24.1902C30.4699 20.5702 27.5299 17.6302 23.9099 17.6302Z"
                        fill="#3A2D80"
                      />
                      <path
                        d="M34.34 15.7198C34.34 16.7198 33.53 17.5298 32.53 17.5298C31.53 17.5298 30.72 16.7198 30.72 15.7198C30.72 14.7198 31.53 13.9098 32.53 13.9098C33.53 13.8998 34.34 14.7098 34.34 15.7198Z"
                        fill="#3A2D80"
                      />
                    </svg>

                    <div>
                      <button
                        className="btn card-button-detail"
                        type="button"
                        data-toggle="modal" data-target="#staticBackdropSyahrul">
                        Detail
                      </button>
                    </div>

                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="card service-item">
                <div className="card-body card-service">
                  <img

                    src={require("../../assets/img/circle-photo.png")}
                  />
                  <div>
                    <h1 className="card-text">Asep Urbana</h1>
                    <h1 className="card-jabatan">Audit Committe</h1>
                    <svg
                      className="card-garis"
                      viewBox="0 0 540 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="540" height="6" fill="#E0E0E0" />
                    </svg>
                    <svg
                      className="card-socmed1"
                      width="35"
                      height="35"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="24" cy="24" r="24" fill="#E0E0E0" />
                      <path
                        d="M35.82 16.08C35.24 16.24 34.78 16.22 34.78 16.22L34.8 16.11C35.34 15.68 36.71 14.35 36.89 13.72C36.97 13.45 36.88 13.36 36.88 13.35L35.14 14.09L33.68 14.75C32.67 13.68 31.15 13 29.44 13C26.41 13 23.95 15.15 23.95 17.8C23.95 18.28 24.02 19.17 24.17 19.61C24.17 19.75 24.18 19.47 24.17 19.61C22.22 19.56 19.71 18.76 17.48 17.63C13.08 15.4 12.81 13.86 12.81 13.86C12.12 14.59 11.76 17.02 12.46 18.93C12.91 20.15 14.45 21.24 14.45 21.24C14.45 21.24 13.76 21.25 13.04 21.01C12.32 20.77 12.05 20.52 12.05 20.52C11.62 21.57 12.48 23.44 13.97 24.78C14.84 25.56 16.42 26.05 16.42 26.05L13.94 26.12C13.8 28.53 18.99 29.96 18.99 29.96C17.47 31.13 15.71 31.84 13.82 31.84C12.84 31.84 11.89 31.69 11 31.43C13.5 33.49 16.71 34.91 20.2 34.72C29.46 34.23 34.68 26.28 34.93 18.46L34.94 18.48C34.94 18.48 35.37 18.26 36.3 17.34C37.23 16.41 37.8 15.33 37.8 15.33C37.8 15.33 36.4 15.92 35.82 16.08Z"
                        fill="#3A2D80"
                      />
                      <path
                        d="M36.8701 13.3501C36.8701 13.3601 36.8801 13.5001 36.8701 13.3501V13.3501Z"
                        fill="#3A2D80"
                      />
                    </svg>
                    <svg
                      className="card-socmed"
                      width="35"
                      height="35"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="24" cy="24" r="24" fill="#E0E0E0" />
                      <path
                        d="M26.86 40.25V25.54H31.8L32.54 19.81H26.86V16.15C26.86 14.49 27.32 13.36 29.7 13.36H32.74V8.23001C32.21 8.16001 30.41 8 28.32 8C23.94 8 20.95 10.67 20.95 15.58V19.81H16V25.54H20.95V40.25H26.86Z"
                        fill="#3A2D80"
                      />
                    </svg>
                    <svg
                      className="card-socmed"
                      width="35"
                      height="35"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="24" cy="24" r="24" fill="#E0E0E0" />
                      <path
                        d="M30.02 39.39H17.82C12.4 39.39 8 34.98 8 29.57V18.82C8 13.4 12.41 9 17.82 9H30.02C35.43 9 39.84 13.41 39.84 18.82V29.57C39.84 34.98 35.43 39.39 30.02 39.39ZM17.81 11.17C13.6 11.17 10.17 14.6 10.17 18.81V29.56C10.17 33.77 13.6 37.2 17.81 37.2H30.01C34.22 37.2 37.65 33.77 37.65 29.56V18.81C37.65 14.6 34.22 11.17 30.01 11.17H17.81Z"
                        fill="#3A2D80"
                      />
                      <path
                        d="M23.9099 32.9302C19.0899 32.9302 15.1699 29.0102 15.1699 24.1902C15.1699 19.3702 19.0899 15.4502 23.9099 15.4502C28.7299 15.4502 32.6499 19.3702 32.6499 24.1902C32.6599 29.0102 28.7399 32.9302 23.9099 32.9302ZM23.9099 17.6302C20.2899 17.6302 17.3499 20.5702 17.3499 24.1902C17.3499 27.8102 20.2899 30.7502 23.9099 30.7502C27.5299 30.7502 30.4699 27.8102 30.4699 24.1902C30.4699 20.5702 27.5299 17.6302 23.9099 17.6302Z"
                        fill="#3A2D80"
                      />
                      <path
                        d="M34.34 15.7198C34.34 16.7198 33.53 17.5298 32.53 17.5298C31.53 17.5298 30.72 16.7198 30.72 15.7198C30.72 14.7198 31.53 13.9098 32.53 13.9098C33.53 13.8998 34.34 14.7098 34.34 15.7198Z"
                        fill="#3A2D80"
                      />
                    </svg>

                    <div>
                      <button
                        className="btn card-button-detail"
                        type="button"
                        data-toggle="modal" data-target="#staticBackdropAsep">
                        Detail
                      </button>
                    </div>

                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="card service-item">
                <div className="card-body card-service">
                  <img

                    src={require("../../assets/img/circle-photo.png")}
                  />
                  <div>
                    <h1 className="card-text">Arin Nur Diana</h1>
                    <h1 className="card-jabatan">Finance Director</h1>
                    <svg
                      className="card-garis"
                      viewBox="0 0 540 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="540" height="6" fill="#E0E0E0" />
                    </svg>
                    <svg
                      className="card-socmed1"
                      width="35"
                      height="35"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="24" cy="24" r="24" fill="#E0E0E0" />
                      <path
                        d="M35.82 16.08C35.24 16.24 34.78 16.22 34.78 16.22L34.8 16.11C35.34 15.68 36.71 14.35 36.89 13.72C36.97 13.45 36.88 13.36 36.88 13.35L35.14 14.09L33.68 14.75C32.67 13.68 31.15 13 29.44 13C26.41 13 23.95 15.15 23.95 17.8C23.95 18.28 24.02 19.17 24.17 19.61C24.17 19.75 24.18 19.47 24.17 19.61C22.22 19.56 19.71 18.76 17.48 17.63C13.08 15.4 12.81 13.86 12.81 13.86C12.12 14.59 11.76 17.02 12.46 18.93C12.91 20.15 14.45 21.24 14.45 21.24C14.45 21.24 13.76 21.25 13.04 21.01C12.32 20.77 12.05 20.52 12.05 20.52C11.62 21.57 12.48 23.44 13.97 24.78C14.84 25.56 16.42 26.05 16.42 26.05L13.94 26.12C13.8 28.53 18.99 29.96 18.99 29.96C17.47 31.13 15.71 31.84 13.82 31.84C12.84 31.84 11.89 31.69 11 31.43C13.5 33.49 16.71 34.91 20.2 34.72C29.46 34.23 34.68 26.28 34.93 18.46L34.94 18.48C34.94 18.48 35.37 18.26 36.3 17.34C37.23 16.41 37.8 15.33 37.8 15.33C37.8 15.33 36.4 15.92 35.82 16.08Z"
                        fill="#3A2D80"
                      />
                      <path
                        d="M36.8701 13.3501C36.8701 13.3601 36.8801 13.5001 36.8701 13.3501V13.3501Z"
                        fill="#3A2D80"
                      />
                    </svg>
                    <svg
                      className="card-socmed"
                      width="35"
                      height="35"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="24" cy="24" r="24" fill="#E0E0E0" />
                      <path
                        d="M26.86 40.25V25.54H31.8L32.54 19.81H26.86V16.15C26.86 14.49 27.32 13.36 29.7 13.36H32.74V8.23001C32.21 8.16001 30.41 8 28.32 8C23.94 8 20.95 10.67 20.95 15.58V19.81H16V25.54H20.95V40.25H26.86Z"
                        fill="#3A2D80"
                      />
                    </svg>
                    <svg
                      className="card-socmed"
                      width="35"
                      height="35"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="24" cy="24" r="24" fill="#E0E0E0" />
                      <path
                        d="M30.02 39.39H17.82C12.4 39.39 8 34.98 8 29.57V18.82C8 13.4 12.41 9 17.82 9H30.02C35.43 9 39.84 13.41 39.84 18.82V29.57C39.84 34.98 35.43 39.39 30.02 39.39ZM17.81 11.17C13.6 11.17 10.17 14.6 10.17 18.81V29.56C10.17 33.77 13.6 37.2 17.81 37.2H30.01C34.22 37.2 37.65 33.77 37.65 29.56V18.81C37.65 14.6 34.22 11.17 30.01 11.17H17.81Z"
                        fill="#3A2D80"
                      />
                      <path
                        d="M23.9099 32.9302C19.0899 32.9302 15.1699 29.0102 15.1699 24.1902C15.1699 19.3702 19.0899 15.4502 23.9099 15.4502C28.7299 15.4502 32.6499 19.3702 32.6499 24.1902C32.6599 29.0102 28.7399 32.9302 23.9099 32.9302ZM23.9099 17.6302C20.2899 17.6302 17.3499 20.5702 17.3499 24.1902C17.3499 27.8102 20.2899 30.7502 23.9099 30.7502C27.5299 30.7502 30.4699 27.8102 30.4699 24.1902C30.4699 20.5702 27.5299 17.6302 23.9099 17.6302Z"
                        fill="#3A2D80"
                      />
                      <path
                        d="M34.34 15.7198C34.34 16.7198 33.53 17.5298 32.53 17.5298C31.53 17.5298 30.72 16.7198 30.72 15.7198C30.72 14.7198 31.53 13.9098 32.53 13.9098C33.53 13.8998 34.34 14.7098 34.34 15.7198Z"
                        fill="#3A2D80"
                      />
                    </svg>

                    <div>
                      <button
                        className="btn card-button-detail"
                        type="button"
                        data-toggle="modal" data-target="#staticBackdropArin">
                        Detail
                      </button>
                    </div>


                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="card service-item">
                <div className="card-body card-service">
                  <img

                    src={require("../../assets/img/circle-photo.png")}
                  />
                  <div>
                    <h1 className="card-text">
                      Erwin Yudistira
                    </h1>
                    <h1 className="card-jabatan">VP Director</h1>
                    <svg
                      className="card-garis"
                      viewBox="0 0 540 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="540" height="6" fill="#E0E0E0" />
                    </svg>
                    <svg
                      className="card-socmed1"
                      width="35"
                      height="35"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="24" cy="24" r="24" fill="#E0E0E0" />
                      <path
                        d="M35.82 16.08C35.24 16.24 34.78 16.22 34.78 16.22L34.8 16.11C35.34 15.68 36.71 14.35 36.89 13.72C36.97 13.45 36.88 13.36 36.88 13.35L35.14 14.09L33.68 14.75C32.67 13.68 31.15 13 29.44 13C26.41 13 23.95 15.15 23.95 17.8C23.95 18.28 24.02 19.17 24.17 19.61C24.17 19.75 24.18 19.47 24.17 19.61C22.22 19.56 19.71 18.76 17.48 17.63C13.08 15.4 12.81 13.86 12.81 13.86C12.12 14.59 11.76 17.02 12.46 18.93C12.91 20.15 14.45 21.24 14.45 21.24C14.45 21.24 13.76 21.25 13.04 21.01C12.32 20.77 12.05 20.52 12.05 20.52C11.62 21.57 12.48 23.44 13.97 24.78C14.84 25.56 16.42 26.05 16.42 26.05L13.94 26.12C13.8 28.53 18.99 29.96 18.99 29.96C17.47 31.13 15.71 31.84 13.82 31.84C12.84 31.84 11.89 31.69 11 31.43C13.5 33.49 16.71 34.91 20.2 34.72C29.46 34.23 34.68 26.28 34.93 18.46L34.94 18.48C34.94 18.48 35.37 18.26 36.3 17.34C37.23 16.41 37.8 15.33 37.8 15.33C37.8 15.33 36.4 15.92 35.82 16.08Z"
                        fill="#3A2D80"
                      />
                      <path
                        d="M36.8701 13.3501C36.8701 13.3601 36.8801 13.5001 36.8701 13.3501V13.3501Z"
                        fill="#3A2D80"
                      />
                    </svg>
                    <svg
                      className="card-socmed"
                      width="35"
                      height="35"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="24" cy="24" r="24" fill="#E0E0E0" />
                      <path
                        d="M26.86 40.25V25.54H31.8L32.54 19.81H26.86V16.15C26.86 14.49 27.32 13.36 29.7 13.36H32.74V8.23001C32.21 8.16001 30.41 8 28.32 8C23.94 8 20.95 10.67 20.95 15.58V19.81H16V25.54H20.95V40.25H26.86Z"
                        fill="#3A2D80"
                      />
                    </svg>
                    <svg
                      className="card-socmed"
                      width="35"
                      height="35"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="24" cy="24" r="24" fill="#E0E0E0" />
                      <path
                        d="M30.02 39.39H17.82C12.4 39.39 8 34.98 8 29.57V18.82C8 13.4 12.41 9 17.82 9H30.02C35.43 9 39.84 13.41 39.84 18.82V29.57C39.84 34.98 35.43 39.39 30.02 39.39ZM17.81 11.17C13.6 11.17 10.17 14.6 10.17 18.81V29.56C10.17 33.77 13.6 37.2 17.81 37.2H30.01C34.22 37.2 37.65 33.77 37.65 29.56V18.81C37.65 14.6 34.22 11.17 30.01 11.17H17.81Z"
                        fill="#3A2D80"
                      />
                      <path
                        d="M23.9099 32.9302C19.0899 32.9302 15.1699 29.0102 15.1699 24.1902C15.1699 19.3702 19.0899 15.4502 23.9099 15.4502C28.7299 15.4502 32.6499 19.3702 32.6499 24.1902C32.6599 29.0102 28.7399 32.9302 23.9099 32.9302ZM23.9099 17.6302C20.2899 17.6302 17.3499 20.5702 17.3499 24.1902C17.3499 27.8102 20.2899 30.7502 23.9099 30.7502C27.5299 30.7502 30.4699 27.8102 30.4699 24.1902C30.4699 20.5702 27.5299 17.6302 23.9099 17.6302Z"
                        fill="#3A2D80"
                      />
                      <path
                        d="M34.34 15.7198C34.34 16.7198 33.53 17.5298 32.53 17.5298C31.53 17.5298 30.72 16.7198 30.72 15.7198C30.72 14.7198 31.53 13.9098 32.53 13.9098C33.53 13.8998 34.34 14.7098 34.34 15.7198Z"
                        fill="#3A2D80"
                      />
                    </svg>

                    <div>
                      <button
                        className="btn card-button-detail"
                        type="button"
                        data-toggle="modal" data-target="#staticBackdropErwin">
                        Detail
                      </button>
                    </div>


                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6">
              <div className="card service-item">
                <div className="card-body card-service">
                  <img

                    src={require("../../assets/img/circle-photo.png")}
                  />
                  <div>
                    <h1 className="card-text">
                      Suteja Febby D
                    </h1>
                    <h1 className="card-jabatan">Human Capital Director</h1>
                    <svg
                      className="card-garis"
                      viewBox="0 0 540 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="540" height="6" fill="#E0E0E0" />
                    </svg>
                    <svg
                      className="card-socmed1"
                      width="35"
                      height="35"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="24" cy="24" r="24" fill="#E0E0E0" />
                      <path
                        d="M35.82 16.08C35.24 16.24 34.78 16.22 34.78 16.22L34.8 16.11C35.34 15.68 36.71 14.35 36.89 13.72C36.97 13.45 36.88 13.36 36.88 13.35L35.14 14.09L33.68 14.75C32.67 13.68 31.15 13 29.44 13C26.41 13 23.95 15.15 23.95 17.8C23.95 18.28 24.02 19.17 24.17 19.61C24.17 19.75 24.18 19.47 24.17 19.61C22.22 19.56 19.71 18.76 17.48 17.63C13.08 15.4 12.81 13.86 12.81 13.86C12.12 14.59 11.76 17.02 12.46 18.93C12.91 20.15 14.45 21.24 14.45 21.24C14.45 21.24 13.76 21.25 13.04 21.01C12.32 20.77 12.05 20.52 12.05 20.52C11.62 21.57 12.48 23.44 13.97 24.78C14.84 25.56 16.42 26.05 16.42 26.05L13.94 26.12C13.8 28.53 18.99 29.96 18.99 29.96C17.47 31.13 15.71 31.84 13.82 31.84C12.84 31.84 11.89 31.69 11 31.43C13.5 33.49 16.71 34.91 20.2 34.72C29.46 34.23 34.68 26.28 34.93 18.46L34.94 18.48C34.94 18.48 35.37 18.26 36.3 17.34C37.23 16.41 37.8 15.33 37.8 15.33C37.8 15.33 36.4 15.92 35.82 16.08Z"
                        fill="#3A2D80"
                      />
                      <path
                        d="M36.8701 13.3501C36.8701 13.3601 36.8801 13.5001 36.8701 13.3501V13.3501Z"
                        fill="#3A2D80"
                      />
                    </svg>
                    <svg
                      className="card-socmed"
                      width="35"
                      height="35"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="24" cy="24" r="24" fill="#E0E0E0" />
                      <path
                        d="M26.86 40.25V25.54H31.8L32.54 19.81H26.86V16.15C26.86 14.49 27.32 13.36 29.7 13.36H32.74V8.23001C32.21 8.16001 30.41 8 28.32 8C23.94 8 20.95 10.67 20.95 15.58V19.81H16V25.54H20.95V40.25H26.86Z"
                        fill="#3A2D80"
                      />
                    </svg>
                    <svg
                      className="card-socmed"
                      width="35"
                      height="35"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="24" cy="24" r="24" fill="#E0E0E0" />
                      <path
                        d="M30.02 39.39H17.82C12.4 39.39 8 34.98 8 29.57V18.82C8 13.4 12.41 9 17.82 9H30.02C35.43 9 39.84 13.41 39.84 18.82V29.57C39.84 34.98 35.43 39.39 30.02 39.39ZM17.81 11.17C13.6 11.17 10.17 14.6 10.17 18.81V29.56C10.17 33.77 13.6 37.2 17.81 37.2H30.01C34.22 37.2 37.65 33.77 37.65 29.56V18.81C37.65 14.6 34.22 11.17 30.01 11.17H17.81Z"
                        fill="#3A2D80"
                      />
                      <path
                        d="M23.9099 32.9302C19.0899 32.9302 15.1699 29.0102 15.1699 24.1902C15.1699 19.3702 19.0899 15.4502 23.9099 15.4502C28.7299 15.4502 32.6499 19.3702 32.6499 24.1902C32.6599 29.0102 28.7399 32.9302 23.9099 32.9302ZM23.9099 17.6302C20.2899 17.6302 17.3499 20.5702 17.3499 24.1902C17.3499 27.8102 20.2899 30.7502 23.9099 30.7502C27.5299 30.7502 30.4699 27.8102 30.4699 24.1902C30.4699 20.5702 27.5299 17.6302 23.9099 17.6302Z"
                        fill="#3A2D80"
                      />
                      <path
                        d="M34.34 15.7198C34.34 16.7198 33.53 17.5298 32.53 17.5298C31.53 17.5298 30.72 16.7198 30.72 15.7198C30.72 14.7198 31.53 13.9098 32.53 13.9098C33.53 13.8998 34.34 14.7098 34.34 15.7198Z"
                        fill="#3A2D80"
                      />
                    </svg>

                    <div>
                      <button
                        className="btn card-button-detail"
                        type="button"
                        data-toggle="modal" data-target="#staticBackdropSuteja">
                        Detail
                      </button>
                    </div>


                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6">
              <div className="card service-item">
                <div className="card-body card-service">
                  <img

                    src={require("../../assets/img/circle-photo.png")}
                  />
                  <div>
                    <h1 className="card-text">
                      Saharuddin
                    </h1>
                    <h1 className="card-jabatan">Operation Director</h1>
                    <svg
                      className="card-garis"
                      viewBox="0 0 540 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="540" height="6" fill="#E0E0E0" />
                    </svg>
                    <svg
                      className="card-socmed1"
                      width="35"
                      height="35"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="24" cy="24" r="24" fill="#E0E0E0" />
                      <path
                        d="M35.82 16.08C35.24 16.24 34.78 16.22 34.78 16.22L34.8 16.11C35.34 15.68 36.71 14.35 36.89 13.72C36.97 13.45 36.88 13.36 36.88 13.35L35.14 14.09L33.68 14.75C32.67 13.68 31.15 13 29.44 13C26.41 13 23.95 15.15 23.95 17.8C23.95 18.28 24.02 19.17 24.17 19.61C24.17 19.75 24.18 19.47 24.17 19.61C22.22 19.56 19.71 18.76 17.48 17.63C13.08 15.4 12.81 13.86 12.81 13.86C12.12 14.59 11.76 17.02 12.46 18.93C12.91 20.15 14.45 21.24 14.45 21.24C14.45 21.24 13.76 21.25 13.04 21.01C12.32 20.77 12.05 20.52 12.05 20.52C11.62 21.57 12.48 23.44 13.97 24.78C14.84 25.56 16.42 26.05 16.42 26.05L13.94 26.12C13.8 28.53 18.99 29.96 18.99 29.96C17.47 31.13 15.71 31.84 13.82 31.84C12.84 31.84 11.89 31.69 11 31.43C13.5 33.49 16.71 34.91 20.2 34.72C29.46 34.23 34.68 26.28 34.93 18.46L34.94 18.48C34.94 18.48 35.37 18.26 36.3 17.34C37.23 16.41 37.8 15.33 37.8 15.33C37.8 15.33 36.4 15.92 35.82 16.08Z"
                        fill="#3A2D80"
                      />
                      <path
                        d="M36.8701 13.3501C36.8701 13.3601 36.8801 13.5001 36.8701 13.3501V13.3501Z"
                        fill="#3A2D80"
                      />
                    </svg>
                    <svg
                      className="card-socmed"
                      width="35"
                      height="35"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="24" cy="24" r="24" fill="#E0E0E0" />
                      <path
                        d="M26.86 40.25V25.54H31.8L32.54 19.81H26.86V16.15C26.86 14.49 27.32 13.36 29.7 13.36H32.74V8.23001C32.21 8.16001 30.41 8 28.32 8C23.94 8 20.95 10.67 20.95 15.58V19.81H16V25.54H20.95V40.25H26.86Z"
                        fill="#3A2D80"
                      />
                    </svg>
                    <svg
                      className="card-socmed"
                      width="35"
                      height="35"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="24" cy="24" r="24" fill="#E0E0E0" />
                      <path
                        d="M30.02 39.39H17.82C12.4 39.39 8 34.98 8 29.57V18.82C8 13.4 12.41 9 17.82 9H30.02C35.43 9 39.84 13.41 39.84 18.82V29.57C39.84 34.98 35.43 39.39 30.02 39.39ZM17.81 11.17C13.6 11.17 10.17 14.6 10.17 18.81V29.56C10.17 33.77 13.6 37.2 17.81 37.2H30.01C34.22 37.2 37.65 33.77 37.65 29.56V18.81C37.65 14.6 34.22 11.17 30.01 11.17H17.81Z"
                        fill="#3A2D80"
                      />
                      <path
                        d="M23.9099 32.9302C19.0899 32.9302 15.1699 29.0102 15.1699 24.1902C15.1699 19.3702 19.0899 15.4502 23.9099 15.4502C28.7299 15.4502 32.6499 19.3702 32.6499 24.1902C32.6599 29.0102 28.7399 32.9302 23.9099 32.9302ZM23.9099 17.6302C20.2899 17.6302 17.3499 20.5702 17.3499 24.1902C17.3499 27.8102 20.2899 30.7502 23.9099 30.7502C27.5299 30.7502 30.4699 27.8102 30.4699 24.1902C30.4699 20.5702 27.5299 17.6302 23.9099 17.6302Z"
                        fill="#3A2D80"
                      />
                      <path
                        d="M34.34 15.7198C34.34 16.7198 33.53 17.5298 32.53 17.5298C31.53 17.5298 30.72 16.7198 30.72 15.7198C30.72 14.7198 31.53 13.9098 32.53 13.9098C33.53 13.8998 34.34 14.7098 34.34 15.7198Z"
                        fill="#3A2D80"
                      />
                    </svg>

                    <div>
                      <button
                        className="btn card-button-detail"
                        type="button"
                        data-toggle="modal" data-target="#staticBackdropSaharuddin">
                        Detail
                      </button>
                    </div>


                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6">
              <div className="card service-item">
                <div className="card-body card-service">
                  <img

                    src={require("../../assets/img/circle-photo.png")}
                  />
                  <div>
                    <h1 className="card-text">
                      Ahmad Zaky AB
                    </h1>
                    <h1 className="card-jabatan">Comm & Gov Affair Director</h1>
                    <svg
                      className="card-garis"
                      viewBox="0 0 540 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="540" height="6" fill="#E0E0E0" />
                    </svg>
                    <svg
                      className="card-socmed1"
                      width="35"
                      height="35"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="24" cy="24" r="24" fill="#E0E0E0" />
                      <path
                        d="M35.82 16.08C35.24 16.24 34.78 16.22 34.78 16.22L34.8 16.11C35.34 15.68 36.71 14.35 36.89 13.72C36.97 13.45 36.88 13.36 36.88 13.35L35.14 14.09L33.68 14.75C32.67 13.68 31.15 13 29.44 13C26.41 13 23.95 15.15 23.95 17.8C23.95 18.28 24.02 19.17 24.17 19.61C24.17 19.75 24.18 19.47 24.17 19.61C22.22 19.56 19.71 18.76 17.48 17.63C13.08 15.4 12.81 13.86 12.81 13.86C12.12 14.59 11.76 17.02 12.46 18.93C12.91 20.15 14.45 21.24 14.45 21.24C14.45 21.24 13.76 21.25 13.04 21.01C12.32 20.77 12.05 20.52 12.05 20.52C11.62 21.57 12.48 23.44 13.97 24.78C14.84 25.56 16.42 26.05 16.42 26.05L13.94 26.12C13.8 28.53 18.99 29.96 18.99 29.96C17.47 31.13 15.71 31.84 13.82 31.84C12.84 31.84 11.89 31.69 11 31.43C13.5 33.49 16.71 34.91 20.2 34.72C29.46 34.23 34.68 26.28 34.93 18.46L34.94 18.48C34.94 18.48 35.37 18.26 36.3 17.34C37.23 16.41 37.8 15.33 37.8 15.33C37.8 15.33 36.4 15.92 35.82 16.08Z"
                        fill="#3A2D80"
                      />
                      <path
                        d="M36.8701 13.3501C36.8701 13.3601 36.8801 13.5001 36.8701 13.3501V13.3501Z"
                        fill="#3A2D80"
                      />
                    </svg>
                    <svg
                      className="card-socmed"
                      width="35"
                      height="35"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="24" cy="24" r="24" fill="#E0E0E0" />
                      <path
                        d="M26.86 40.25V25.54H31.8L32.54 19.81H26.86V16.15C26.86 14.49 27.32 13.36 29.7 13.36H32.74V8.23001C32.21 8.16001 30.41 8 28.32 8C23.94 8 20.95 10.67 20.95 15.58V19.81H16V25.54H20.95V40.25H26.86Z"
                        fill="#3A2D80"
                      />
                    </svg>
                    <svg
                      className="card-socmed"
                      width="35"
                      height="35"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="24" cy="24" r="24" fill="#E0E0E0" />
                      <path
                        d="M30.02 39.39H17.82C12.4 39.39 8 34.98 8 29.57V18.82C8 13.4 12.41 9 17.82 9H30.02C35.43 9 39.84 13.41 39.84 18.82V29.57C39.84 34.98 35.43 39.39 30.02 39.39ZM17.81 11.17C13.6 11.17 10.17 14.6 10.17 18.81V29.56C10.17 33.77 13.6 37.2 17.81 37.2H30.01C34.22 37.2 37.65 33.77 37.65 29.56V18.81C37.65 14.6 34.22 11.17 30.01 11.17H17.81Z"
                        fill="#3A2D80"
                      />
                      <path
                        d="M23.9099 32.9302C19.0899 32.9302 15.1699 29.0102 15.1699 24.1902C15.1699 19.3702 19.0899 15.4502 23.9099 15.4502C28.7299 15.4502 32.6499 19.3702 32.6499 24.1902C32.6599 29.0102 28.7399 32.9302 23.9099 32.9302ZM23.9099 17.6302C20.2899 17.6302 17.3499 20.5702 17.3499 24.1902C17.3499 27.8102 20.2899 30.7502 23.9099 30.7502C27.5299 30.7502 30.4699 27.8102 30.4699 24.1902C30.4699 20.5702 27.5299 17.6302 23.9099 17.6302Z"
                        fill="#3A2D80"
                      />
                      <path
                        d="M34.34 15.7198C34.34 16.7198 33.53 17.5298 32.53 17.5298C31.53 17.5298 30.72 16.7198 30.72 15.7198C30.72 14.7198 31.53 13.9098 32.53 13.9098C33.53 13.8998 34.34 14.7098 34.34 15.7198Z"
                        fill="#3A2D80"
                      />
                    </svg>

                    <div>
                      <button
                        className="btn card-button-detail"
                        type="button"
                        data-toggle="modal" data-target="#staticBackdropZaky">
                        Detail
                      </button>
                    </div>


                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default SectionNavigation;
