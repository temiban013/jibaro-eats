import cloudinary from "./cloudinary";
import getBase64ImageUrl from "./generateBlurPlaceholder";
import type { ImageProps } from "./types";

export default async function getCloudImages(folder: string) {
  try {
    // Validate folder name
    if (!folder) {
      console.error("Folder name is required");
      return { reducedResults: [] };
    }

    const results = await cloudinary.v2.search
      .expression(`folder:${folder}/*`)
      .with_field("metadata")
      .sort_by("public_id", "desc")
      .max_results(400)
      .execute();

    // Validate that we have results
    if (!results?.resources) {
      console.error("No resources found in Cloudinary response");
      return { reducedResults: [] };
    }

    const reducedResults: ImageProps[] = [];

    let i = 0;
    for (const result of results.resources) {
      // Only add the result if it has the required properties
      if (result?.public_id) {
        reducedResults.push({
          id: i.toString(),
          height: result.height || 0,
          width: result.width || 0,
          public_id: result.public_id,
          format: result.format || "",
          title: result.metadata?.title || "",
          videoId: result.metadata?.videoId || "",
        });
        i++;
      }
    }

    // Only process blur images if we have results
    if (reducedResults.length > 0) {
      const blurImagePromises = reducedResults.map((image: ImageProps) => {
        return getBase64ImageUrl(image);
      });
      const imagesWithBlurDataUrls = await Promise.all(blurImagePromises);

      for (let i = 0; i < reducedResults.length; i++) {
        reducedResults[i].blurDataUrl = imagesWithBlurDataUrls[i];
      }
    }

    return { reducedResults };
  } catch (error) {
    console.error("Error in getCloudImages:", error);
    return { reducedResults: [] };
  }
}
