import { existsSync, mkdirSync, writeFileSync } from "fs";
import { resolve } from "path";

export const makeSvgFile = (path, name, content) => {
  if (!existsSync(path)) {
    mkdirSync(path);
  }

  writeFileSync(resolve(path, `${name}.svg`), content, {
    encoding: "utf8",
  });
};
