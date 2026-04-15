import satori from "satori";
import fs from "node:fs";
import path from "node:path";
// import { html } from "satori-html";
import loadGoogleFonts from "../loadGoogleFont";

const avatarBuffer = fs.readFileSync(
  path.resolve("public/images/hero-avatar.png")
);
const avatarDataUri = `data:image/png;base64,${avatarBuffer.toString("base64")}`;

// const markup = html`<div
//       style={{
//         background: "#fefbfb",
//         width: "100%",
//         height: "100%",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//       }}
//     >
//       <div
//         style={{
//           position: "absolute",
//           top: "-1px",
//           right: "-1px",
//           border: "4px solid #000",
//           background: "#ecebeb",
//           opacity: "0.9",
//           borderRadius: "4px",
//           display: "flex",
//           justifyContent: "center",
//           margin: "2.5rem",
//           width: "88%",
//           height: "80%",
//         }}
//       />

//       <div
//         style={{
//           border: "4px solid #000",
//           background: "#fefbfb",
//           borderRadius: "4px",
//           display: "flex",
//           justifyContent: "center",
//           margin: "2rem",
//           width: "88%",
//           height: "80%",
//         }}
//       >
//         <div
//           style={{
//             display: "flex",
//             flexDirection: "column",
//             justifyContent: "space-between",
//             margin: "20px",
//             width: "90%",
//             height: "90%",
//           }}
//         >
//           <p
//             style={{
//               fontSize: 72,
//               fontWeight: "bold",
//               maxHeight: "84%",
//               overflow: "hidden",
//             }}
//           >
//             {post.data.title}
//           </p>
//           <div
//             style={{
//               display: "flex",
//               justifyContent: "space-between",
//               width: "100%",
//               marginBottom: "8px",
//               fontSize: 28,
//             }}
//           >
//             <span>
//               by{" "}
//               <span
//                 style={{
//                   color: "transparent",
//                 }}
//               >
//                 "
//               </span>
//               <span style={{ overflow: "hidden", fontWeight: "bold" }}>
//                 {post.data.author}
//               </span>
//             </span>

//             <span style={{ overflow: "hidden", fontWeight: "bold" }}>
//               {SITE.title}
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>`;

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "short",
  day: "numeric",
});

export default async (post, readingTime = 1) => {
  const formattedDate = dateFormatter.format(new Date(post.data.pubDatetime));
  const description = post.data.description;
  return satori(
    {
      type: "div",
      props: {
        style: {
          background: "#212737",
          color: "#eaedf3",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
        children: [
          {
            type: "div",
            props: {
              style: {
                position: "absolute",
                top: "-1px",
                right: "-1px",
                border: "4px solid #eaedf3",
                background: "#343f60",
                opacity: "0.9",
                borderRadius: "4px",
                display: "flex",
                justifyContent: "center",
                margin: "2.5rem",
                width: "88%",
                height: "80%",
              },
            },
          },
          {
            type: "div",
            props: {
              style: {
                border: "4px solid #eaedf3",
                background: "#212737",
                borderRadius: "4px",
                display: "flex",
                justifyContent: "center",
                margin: "2rem",
                width: "88%",
                height: "80%",
              },
              children: {
                type: "div",
                props: {
                  style: {
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    margin: "20px",
                    width: "90%",
                    height: "90%",
                  },
                  children: [
                    {
                      type: "div",
                      props: {
                        style: {
                          display: "flex",
                          flexDirection: "column",
                          overflow: "hidden",
                        },
                        children: [
                          {
                            type: "p",
                            props: {
                              style: {
                                fontSize: 72,
                                fontWeight: "bold",
                                margin: 0,
                                overflow: "hidden",
                              },
                              children: post.data.title,
                            },
                          },
                          ...(description
                            ? [
                                {
                                  type: "p",
                                  props: {
                                    style: {
                                      fontSize: 32,
                                      color: "#9aa1b5",
                                      marginTop: 16,
                                      marginBottom: 0,
                                      lineHeight: 1.3,
                                      maxHeight: 84,
                                      overflow: "hidden",
                                    },
                                    children: description,
                                  },
                                },
                              ]
                            : []),
                        ],
                      },
                    },
                    {
                      type: "div",
                      props: {
                        style: {
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          width: "100%",
                          marginBottom: "8px",
                          fontSize: 28,
                        },
                        children: [
                          {
                            type: "div",
                            props: {
                              style: {
                                display: "flex",
                                alignItems: "center",
                              },
                              children: [
                                {
                                  type: "img",
                                  props: {
                                    src: avatarDataUri,
                                    width: 96,
                                    height: 96,
                                    style: {
                                      width: 96,
                                      height: 96,
                                      borderRadius: "50%",
                                      border: "3px solid #eaedf3",
                                      marginRight: 16,
                                      objectFit: "cover",
                                    },
                                  },
                                },
                                {
                                  type: "span",
                                  props: {
                                    style: { display: "flex" },
                                    children: [
                                      "by ",
                                      {
                                        type: "span",
                                        props: {
                                          style: { color: "transparent" },
                                          children: '"',
                                        },
                                      },
                                      {
                                        type: "span",
                                        props: {
                                          style: {
                                            overflow: "hidden",
                                            fontWeight: "bold",
                                          },
                                          children: "@itsmehatef",
                                        },
                                      },
                                      {
                                        type: "span",
                                        props: {
                                          style: { margin: "0 0.4em" },
                                          children: "·",
                                        },
                                      },
                                      {
                                        type: "span",
                                        props: {
                                          children: formattedDate,
                                        },
                                      },
                                      {
                                        type: "span",
                                        props: {
                                          style: { margin: "0 0.4em" },
                                          children: "·",
                                        },
                                      },
                                      {
                                        type: "span",
                                        props: {
                                          children: `${readingTime} min read`,
                                        },
                                      },
                                    ],
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            },
          },
        ],
      },
    },
    {
      width: 1200,
      height: 630,
      embedFont: true,
      fonts: await loadGoogleFonts(
        post.data.title +
          post.data.author +
          (description || "") +
          "by @itsmehatef · min read 0123456789, " +
          "JanFebMarAprMayJunJulAugSepOctNovDec"
      ),
    }
  );
};
