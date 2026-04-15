import satori from "satori";
import fs from "node:fs";
import path from "node:path";
import { SITE } from "@/config";
import loadGoogleFonts from "../loadGoogleFont";

const avatarBuffer = fs.readFileSync(
  path.resolve("public/images/hero-avatar.png")
);
const avatarDataUri = `data:image/png;base64,${avatarBuffer.toString("base64")}`;

export default async () => {
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
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "20px",
                    width: "90%",
                    height: "90%",
                    overflow: "hidden",
                    textAlign: "center",
                  },
                  children: [
                    {
                      type: "img",
                      props: {
                        src: avatarDataUri,
                        width: 180,
                        height: 180,
                        style: {
                          width: 180,
                          height: 180,
                          borderRadius: "50%",
                          border: "4px solid #eaedf3",
                          marginBottom: 24,
                          objectFit: "cover",
                        },
                      },
                    },
                    {
                      type: "p",
                      props: {
                        style: {
                          fontSize: 72,
                          fontWeight: "bold",
                          margin: 0,
                        },
                        children: "@itsmehatef",
                      },
                    },
                    {
                      type: "p",
                      props: {
                        style: { fontSize: 28, marginTop: 12, marginBottom: 0 },
                        children: SITE.desc,
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
      fonts: await loadGoogleFonts(SITE.desc + "@itsmehatef"),
    }
  );
};
