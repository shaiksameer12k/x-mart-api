import { v2 as cloudinary } from "cloudinary";

export async function cloudinary_uploader(file_url, filename) {
  // Configuration
  cloudinary.config({
    cloud_name: "dsuxhbmw3",
    api_key: "753387319262962",
    api_secret: "siRLNLoOZ4VZfr6Aj-Baf-MdVTU",
  });

  // Upload an image
  const uploadResult = await cloudinary.uploader
    .upload(`${file_url}`, {
      public_id: filename,
    })
    .catch((error) => {
      console.log(error);
    });

  // Optimize delivery by resizing and applying auto-format and auto-quality
  const optimizeUrl = cloudinary.url(filename, {
    fetch_format: "auto",
    quality: "auto",
  });

  // Transform the image: auto-crop to square aspect_ratio
  const autoCropUrl = cloudinary.url(filename, {
    crop: "auto",
    gravity: "auto",
    width: 500,
    height: 500,
  });

  return { optimizeUrl, autoCropUrl };
}
