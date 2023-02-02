import { exec } from "child_process";

import { fetchIcons } from "./fetchIcons";
import { makeSvgFile } from "./makeSvgFile";

export const loadFigmaIcons = async ({ path, token, fileId, nodeId } = {}) => {
  exec(`rm -rf ${path} -v`);

  const iconList = await fetchIcons({ token, fileId, nodeId });

  iconList.forEach((item) => makeSvgFile(path, item.name, item.svg));
  console.log(`Added ${iconList.length} icons!`);
};
