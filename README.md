# Fetch icons from Figma

### What does this function do?

1. Fetch a list of icons from Figma
2. Create `svg` file for each icon in directory specified in `path` property

### Before you start

This script requires:
-  `token` - Figma access token to be able to fetch data
-  `fileId` - id of a file where icons are located
-  `nodeId` - id of a frame that includes all icons that you need to load

#### To acquire Figma access token follow these steps:

1. Login to Figma
3. Go to https://www.figma.com/files
4. Click on your profile icon in the top right corner
5. Select "Settings" from the dropdown menu
6. Scroll to "Personal access tokens" section
7. Add name to "Create a new personal access token" input and press `Enter`

#### `fileId` and `nodeId` can be taken from the Figma URL:
Format: `figma.com/file/{:fileId}/Test?node-id={:nodeId}`
