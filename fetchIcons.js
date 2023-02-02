export const fetchIcons = async ({ token, fileId, nodeId } = {}) => {
  const iconsNodeUrl = `https://api.figma.com/v1/files/${fileId}/nodes?ids=${encodeURIComponent(
    nodeId
  )}`;

  const reqConfig = {
    method: "GET",
    headers: { "X-Figma-Token": token },
  };

  const components = await fetch(iconsNodeUrl, reqConfig)
    .then((res) => res.json())
    .then((res) => {
      if (res.err) {
        throw new Error(JSON.stringify(res));
      }
      return res.nodes[nodeId].components;
    });

  const iconIds = encodeURIComponent(Object.keys(components).toString());
  const imagesUrl = `https://api.figma.com/v1/images/${fileId}/?ids=${iconIds}&format=svg`;

  const iconsLoadUrls = await fetch(imagesUrl, reqConfig)
    .then((res) => res.json())
    .then((res) => res.images);

  const icons = await Promise.all(
    Object.keys(iconsLoadUrls).map((id) =>
      fetch(iconsLoadUrls[id], reqConfig)
        .then((res) => res.text())
        .then((svg) => ({
          name: components[id].name,
          svg,
        }))
    )
  );

  return icons;
};
