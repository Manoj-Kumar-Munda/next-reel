import { getUploadAuthParams } from "@imagekit/next/server";

export async function GET() {
  try {
    const authParams = getUploadAuthParams({
      privateKey: process.env.IMAGEKIT_PRIVATE_KEY as string,
      publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY as string,
    });

    return Response.json({
      authParams,
      publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY,
    });
  } catch (error) {
    return Response.json(
      {
        error: "Authentication for ImageKit failed",
      },
      { status: 500 }
    );
  }
}
