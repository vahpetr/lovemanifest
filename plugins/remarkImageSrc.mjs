/**
 * @typedef {import('remark-mdx')}
 */

import { visit } from "unist-util-visit";
import sign from "../scripts/sign.js";

export default function remarkImageSrcPlugin() {
  /** @param {import('@types/mdast').Root} tree */
  return (tree) => {
    visit(tree, (node) => {
      if (node.type === "mdxJsxFlowElement") {
        if (node.name === "Image") {
          const map = node.attributes.reduce((map, attribute) => {
            map[attribute.name] = attribute;
            return map;
          }, {});
          // console.log(map);
          if (map.src) {
            map.src.value = createSignedImgUrl(
              map.src.value,
              map.watermark?.value
            );
          }
        }
      }
      //  else if (node.type === "image") {
      //   // console.log(node);
      //   node.url = createSignedImgUrl(node.url);
      // }
    });
  };
}

function createSignedImgUrl(uri, params) {
  const s3Url = process.env.S3_URL;
  const key = process.env.IMGPROXY_KEY;
  const salt = process.env.IMGPROXY_SALT;
  return sign({ uri, params, s3Url, key, salt });
}
